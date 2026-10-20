# Cours – L'inventaire automatique : principes, simulateur InfraLab, puis OCS Inventory

*BTS SIO SISR 1re année – Bloc 1 – S05*

> [!NOTE] Ce que tu dois savoir déjà
> - **Prérequis :** S02 (fiche technique d'un poste), S04 (méthode de diagnostic).
> - **À garder en tête :** lis le cours **avant** le TP ; la section « À retenir » en fin de cours résume l'essentiel.
> - **Deux outils, un même raisonnement :** les principes (sections 1 et 2) valent pour **tout** outil d'inventaire. Tu les manipules d'abord dans le simulateur [InfraLab](https://yahnlp.github.io/InfraLab/) (section 3), puis tu les retrouves dans un logiciel réel, OCS Inventory (section 4).

## À la fin de ce cours, tu sauras

- [ ] **Expliquer** pourquoi l'inventaire manuel ne tient pas à l'échelle d'un parc ;
- [ ] **Distinguer** ce que voit une découverte réseau et ce qu'apporte un agent ;
- [ ] **Dire** pourquoi certains équipements n'ont pas d'agent et comment on les inventorie ;
- [ ] **Reconnaître** trois pannes d'agent et leur remède ;
- [ ] **Installer** l'agent OCS, forcer un inventaire et **retrouver** le poste dans la console ;
- [ ] **Situer** le lien entre un outil d'inventaire et un outil de tickets (GLPI).

---

## 1. Pourquoi automatiser l'inventaire ?

En S02, tu as rempli à la main la fiche technique d'un seul poste : cela a pris 30 à 45 minutes. Projetons cette expérience à l'échelle d'un parc.

| **Taille du parc** | **Inventaire manuel** | **Inventaire automatisé** |
|---|---|---|
| 1 poste | 45 min | 2 min (installation de l'agent) |
| 50 postes | 37 h 30 (une semaine) | 2 h (déploiement de l'agent en masse) |
| 200 postes | 150 h (un mois) | 4 h (déploiement par GPO ou script) |
| 1 000 postes | irréaliste | une demi-journée |

**Trois problèmes de l'inventaire manuel :**

1. **L'information vieillit dès qu'elle est écrite.** Une mise à jour Windows, une barrette de RAM ajoutée, un disque changé : la fiche est déjà obsolète.
2. **L'inventaire n'est jamais exhaustif.** On oublie des postes, des imprimantes réseau, des équipements dans une armoire.
3. **Aucune alerte sur les changements.** Si quelqu'un installe un logiciel non autorisé ou retire une barrette, personne ne le sait.

L'**inventaire automatique** répond aux trois : un programme interroge les équipements, l'inventaire se met à jour sans intervention humaine et les changements restent traçables.

## 2. Les principes, quel que soit l'outil

### 2.1 Deux niveaux de connaissance

Un outil d'inventaire ne « sait » jamais tout d'un équipement. Ce qu'il sait dépend de **la façon dont il a collecté l'information**.

<figure class="graphe diagramme"><svg viewBox="0 0 840 310" style="max-width:840px" role="img" aria-label="Deux niveaux de connaissance d&#x27;un poste : la découverte réseau donne nom, adresse IP et adresse MAC ; l&#x27;agent apporte système, matériel, logiciels et session" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="60" width="200" height="170" rx="8" class="dg-soft"/>
<text x="100.0" y="105.0" text-anchor="middle" class="dg-t">Le poste réel : PC21</text>
<text x="100.0" y="123.0" text-anchor="middle" class="dg-s">Système et version</text>
<text x="100.0" y="141.0" text-anchor="middle" class="dg-s">Mémoire, disques</text>
<text x="100.0" y="159.0" text-anchor="middle" class="dg-s">Logiciels installés</text>
<text x="100.0" y="177.0" text-anchor="middle" class="dg-s">Utilisateur connecté</text>
<text x="100.0" y="195.0" text-anchor="middle" class="dg-s">Adresse IP, adresse MAC</text>
<line x1="204" y1="110" x2="427.2" y2="61.9" class="dg-line"/>
<polygon points="436,60 426.1,57.0 428.3,66.8" class="dg-ah"/>
<text x="325" y="70" text-anchor="middle" class="dg-i">découverte réseau</text>
<line x1="204" y1="180" x2="427.2" y2="232.9" class="dg-line"/>
<polygon points="436,235 428.4,228.1 426.1,237.8" class="dg-ah"/>
<text x="300" y="252" text-anchor="middle" class="dg-i">agent installé sur le poste</text>
<rect x="440" y="8" width="400" height="100" rx="8" class="dg-warn"/>
<text x="640.0" y="36.0" text-anchor="middle" class="dg-t">Fiche après la découverte</text>
<text x="640.0" y="54.0" text-anchor="middle" class="dg-s">Nom, adresse IP, adresse MAC</text>
<text x="640.0" y="72.0" text-anchor="middle" class="dg-s">Constructeur déduit de la MAC</text>
<text x="640.0" y="90.0" text-anchor="middle" class="dg-s">Le reste est inconnu : fiche partielle</text>
<rect x="440" y="190" width="400" height="110" rx="8" class="dg-ok"/>
<text x="640.0" y="223.0" text-anchor="middle" class="dg-t">Fiche après l&#x27;agent</text>
<text x="640.0" y="241.0" text-anchor="middle" class="dg-s">Système exact, mémoire, disques</text>
<text x="640.0" y="259.0" text-anchor="middle" class="dg-s">Logiciels installés, session ouverte</text>
<text x="640.0" y="277.0" text-anchor="middle" class="dg-s">Chaque donnée porte sa provenance : « agent »</text>
</svg>
<figcaption>Ce que l&#x27;outil sait d&#x27;un poste selon la manière dont il l&#x27;a collecté</figcaption>
</figure>

| | **Découverte réseau** | **Agent** |
|---|---|---|
| **Principe** | L'outil interroge une plage d'adresses (ping, ARP, SNMP) | Un petit programme installé sur le poste lit la configuration réelle |
| **Ce qu'il obtient** | Adresse IP, adresse MAC, nom, constructeur (déduit de la MAC) | Système exact, mémoire, disques, logiciels installés, utilisateur connecté |
| **Ce qu'il exige** | Équipement **allumé**, **relié** au réseau et doté d'une **adresse IP** | Un système capable d'exécuter l'agent, installé sur chaque poste |
| **Niveau de connaissance** | « Cet équipement **existe** » | « Voici **ce qu'il contient** » |

> [!NOTE]
> **Retiens la différence :** *découvrir* un équipement et *l'inventorier* sont deux niveaux de connaissance. Un poste découvert mais sans agent a une fiche **partielle** : elle n'est pas fausse, elle est incomplète. Savoir ce que l'on ne sait pas fait déjà partie de l'inventaire.

### 2.2 La découverte réseau et ses angles morts

La découverte se lance depuis le serveur d'inventaire, sur une plage d'adresses notée en **CIDR** : `192.168.10.0/24` désigne 254 adresses utilisables. Seuls répondent les équipements allumés, câblés **et** dotés d'une adresse IP dans la plage.

Un commutateur (switch) sans adresse IP de gestion ne répond à aucune requête : il est **invisible**, même s'il est allumé et câblé. Une base d'inventaire n'est complète que si l'on **compare** régulièrement ce qu'elle contient avec la réalité (schéma réseau, récolement physique).

### 2.3 L'agent : installation, remontée, provenance des données

L'agent est un programme qui s'exécute sur le poste (service Windows, tâche planifiée sous Linux). Il lit la machine et envoie le résultat au **serveur** à intervalle régulier.

<figure class="graphe diagramme"><svg viewBox="0 0 860 270" style="max-width:860px" role="img" aria-label="Architecture d&#x27;un outil d&#x27;inventaire : des agents sur les postes remontent leurs données à un serveur, consulté par l&#x27;administrateur via une console" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="10" width="170" height="60" rx="8" class="dg-soft"/>
<text x="85.0" y="36.0" text-anchor="middle" class="dg-t">Poste Windows</text>
<text x="85.0" y="54.0" text-anchor="middle" class="dg-s">agent installé</text>
<line x1="172" y1="40" x2="318.3" y2="130.3" class="dg-line"/>
<polygon points="326,135 321.0,126.0 315.7,134.5" class="dg-ah"/>
<rect x="0" y="90" width="170" height="60" rx="8" class="dg-soft"/>
<text x="85.0" y="116.0" text-anchor="middle" class="dg-t">Poste Linux</text>
<text x="85.0" y="134.0" text-anchor="middle" class="dg-s">agent installé</text>
<line x1="172" y1="120" x2="317.0" y2="134.1" class="dg-line"/>
<polygon points="326,135 317.5,129.2 316.6,139.1" class="dg-ah"/>
<rect x="0" y="170" width="170" height="60" rx="8" class="dg-soft"/>
<text x="85.0" y="196.0" text-anchor="middle" class="dg-t">Portable</text>
<text x="85.0" y="214.0" text-anchor="middle" class="dg-s">agent installé</text>
<line x1="172" y1="200" x2="317.7" y2="138.5" class="dg-line"/>
<polygon points="326,135 315.8,133.9 319.7,143.1" class="dg-ah"/>
<text x="250" y="262" text-anchor="middle" class="dg-i">remontée périodique</text>
<rect x="330" y="45" width="230" height="180" rx="8" class="dg-box"/>
<text x="445.0" y="104.0" text-anchor="middle" class="dg-t">Serveur d&#x27;inventaire</text>
<text x="445.0" y="122.0" text-anchor="middle" class="dg-s"> </text>
<text x="445.0" y="140.0" text-anchor="middle" class="dg-s">Reçoit les remontées</text>
<text x="445.0" y="158.0" text-anchor="middle" class="dg-s">Stocke les fiches</text>
<text x="445.0" y="176.0" text-anchor="middle" class="dg-s">Garde l&#x27;historique</text>
<line x1="562" y1="135" x2="657.0" y2="135.0" class="dg-line"/>
<polygon points="666,135 657.0,130.0 657.0,140.0" class="dg-ah"/>
<rect x="670" y="70" width="190" height="130" rx="8" class="dg-ok"/>
<text x="765.0" y="104.0" text-anchor="middle" class="dg-t">Console</text>
<text x="765.0" y="122.0" text-anchor="middle" class="dg-s">de gestion</text>
<text x="765.0" y="140.0" text-anchor="middle" class="dg-s">(navigateur)</text>
<text x="765.0" y="158.0" text-anchor="middle" class="dg-s">consultée par</text>
<text x="765.0" y="176.0" text-anchor="middle" class="dg-s">l&#x27;administrateur</text>
</svg>
<figcaption>Les agents remontent périodiquement leurs données vers le serveur</figcaption>
</figure>

Trois notions à maîtriser :

- **L'adresse du serveur** est configurée dans l'agent. Si elle est fausse, l'agent tourne mais ne remonte rien.
- **L'intervalle de remontée** : la première remontée suit l'installation de peu, les suivantes sont périodiques. On peut aussi **forcer** un inventaire.
- **La provenance** : dans une bonne fiche, chaque donnée dit d'où elle vient (« agent » ou « manuel »). Une donnée remontée par l'agent n'est **jamais saisie à la main** : c'est ce qui la rend fiable, tant que l'agent tourne.

### 2.4 Les équipements sans agent

Un agent est un logiciel : il lui faut un système d'exploitation capable de l'exécuter. Un **commutateur**, une **imprimante**, un **NAS** ou un **téléphone IP** n'en accueillent pas. Pour eux :

| **Moyen** | **Principe** | **Limite** |
|---|---|---|
| Découverte réseau | L'équipement répond au ping, à l'ARP | Seulement l'identité réseau |
| **SNMP** | Les outils réels interrogent l'équipement par ce protocole | Il faut une adresse de gestion et SNMP activé |
| **Saisie manuelle** | Numéro d'inventaire, série, modèle, emplacement renseignés à la main | La donnée **vieillit** : personne ne la met à jour automatiquement |
| **Récolement** | Campagne de vérification physique, fiche en main | Coûteux : à planifier |

### 2.5 La fraîcheur de l'inventaire : quand l'agent tombe en panne

Un agent défaillant laisse l'inventaire se périmer, parfois **sans aucune alerte**. Le symptôme est le même (« la fiche n'est plus à jour »), les causes diffèrent. C'est le journal de l'agent qui permet de choisir le bon remède : réinstaller partout masquerait le problème et ferait perdre l'historique.

<figure class="graphe diagramme"><svg viewBox="0 0 860 330" style="max-width:860px" role="img" aria-label="Trois causes d&#x27;un agent défaillant : mauvaise adresse de serveur, agent arrêté, agent obsolète ; un même symptôme, l&#x27;inventaire n&#x27;est plus à jour" xmlns="http://www.w3.org/2000/svg">
<rect x="250" y="8" width="360" height="50" rx="8" class="dg-bad"/>
<text x="430.0" y="38.0" text-anchor="middle" class="dg-t">Symptôme : l&#x27;inventaire d&#x27;un poste n&#x27;est plus à jour</text>
<line x1="430" y1="60" x2="143.9" y2="98.8" class="dg-line"/>
<polygon points="135,100 144.6,103.7 143.2,93.8" class="dg-ah"/>
<rect x="0" y="102" width="270" height="100" rx="8" class="dg-warn"/>
<text x="135.0" y="121.0" text-anchor="middle" class="dg-t">Mauvaise configuration</text>
<text x="135.0" y="139.0" text-anchor="middle" class="dg-s">L&#x27;agent contacte une</text>
<text x="135.0" y="157.0" text-anchor="middle" class="dg-s">mauvaise adresse</text>
<text x="135.0" y="175.0" text-anchor="middle" class="dg-s">Le journal de l&#x27;agent</text>
<text x="135.0" y="193.0" text-anchor="middle" class="dg-s">signale l&#x27;échec</text>
<rect x="0" y="214" width="270" height="44" rx="8" class="dg-ok"/>
<text x="135.0" y="241.0" text-anchor="middle" class="dg-s">Corriger l&#x27;adresse du serveur</text>
<text x="135" y="282" text-anchor="middle" class="dg-i">PC21 dans InfraLab</text>
<line x1="430" y1="60" x2="426.1" y2="91.1" class="dg-line"/>
<polygon points="425,100 431.1,91.7 421.2,90.4" class="dg-ah"/>
<rect x="290" y="102" width="270" height="100" rx="8" class="dg-warn"/>
<text x="425.0" y="130.0" text-anchor="middle" class="dg-t">Agent arrêté</text>
<text x="425.0" y="148.0" text-anchor="middle" class="dg-s">Le programme ne tourne plus</text>
<text x="425.0" y="166.0" text-anchor="middle" class="dg-s">Aucune tentative,</text>
<text x="425.0" y="184.0" text-anchor="middle" class="dg-s">donc aucune erreur</text>
<rect x="290" y="214" width="270" height="44" rx="8" class="dg-ok"/>
<text x="425.0" y="241.0" text-anchor="middle" class="dg-s">Démarrer l&#x27;agent</text>
<text x="425" y="282" text-anchor="middle" class="dg-i">PC22 dans InfraLab</text>
<line x1="430" y1="60" x2="706.1" y2="98.7" class="dg-line"/>
<polygon points="715,100 706.8,93.8 705.4,103.7" class="dg-ah"/>
<rect x="580" y="102" width="270" height="100" rx="8" class="dg-warn"/>
<text x="715.0" y="121.0" text-anchor="middle" class="dg-t">Agent obsolète</text>
<text x="715.0" y="139.0" text-anchor="middle" class="dg-s">Version plus ancienne</text>
<text x="715.0" y="157.0" text-anchor="middle" class="dg-s">que la version courante</text>
<text x="715.0" y="175.0" text-anchor="middle" class="dg-s">Remontée refusée</text>
<text x="715.0" y="193.0" text-anchor="middle" class="dg-s">ou incomplète</text>
<rect x="580" y="214" width="270" height="44" rx="8" class="dg-ok"/>
<text x="715.0" y="241.0" text-anchor="middle" class="dg-s">Mettre l&#x27;agent à jour</text>
<text x="715" y="282" text-anchor="middle" class="dg-i">PC23 dans InfraLab</text>
</svg>
<figcaption>Un même symptôme, trois causes, trois remèdes</figcaption>
</figure>

Les outils réels proposent des rapports « dernier contact » pour repérer les postes qui n'ont pas remonté depuis plusieurs jours.

### 2.6 Données personnelles et charte informatique

Un inventaire recense du **matériel et des logiciels**, pas l'activité d'une personne. Il collecte pourtant des informations sensibles (configuration réseau, logiciels installés, parfois clés de licence, utilisateur connecté). Il doit donc être **mentionné dans la charte informatique** signée par les utilisateurs, et le serveur doit être protégé (HTTPS, authentification forte, accès restreint).

## 3. Le simulateur InfraLab

[**InfraLab**](https://yahnlp.github.io/InfraLab/) est un laboratoire en ligne qui simule le système d'information d'une PME fictive, **NovaTech** (4 sites, une quarantaine d'équipements, 45 utilisateurs). Il s'ouvre dans le navigateur, sans installation, et **ne dépend d'aucun logiciel du marché** : il met en scène les concepts, pas un produit.

| **Vue** | **Ce que tu y fais** |
|---|---|
| **Infrastructure** | Schéma des sites, équipements, câbles ; inspecteur « Propriétés » d'un équipement (c'est là qu'on installe un agent) |
| **ITSM** | Parc (inventaire), tickets, problèmes, changements, connaissances, licences, CMDB |
| **TP** | Catalogue de travaux pratiques guidés : leçon, objectifs, indices, bilan |

L'idée centrale d'InfraLab est celle de ce cours : **« ce qui existe » n'est pas « ce que l'outil en sait »**. Les deux sont reliés par la collecte (agent ou découverte). La barre du haut contient l'horloge simulée (+1 h, +1 jour) : on peut faire passer le temps pour voir un agent remonter seul, ou un inventaire devenir obsolète.

**Fonctionnement d'un TP :** chaque TP est découpé en étapes ; chaque objectif est vérifié par le simulateur. Les **indices** (trois niveaux) font perdre des points ; une mauvaise réponse à une question aussi. Le score final est sur 100, mais le simulateur le dit lui-même : **il ne valide aucune compétence**. Il t'entraîne ; l'évaluation reste celle de ton compte rendu et de ton bilan. Tu peux exporter un **rapport** (HTML ou JSON, avec empreinte SHA-256) à joindre à ton compte rendu.

**Les activités de cette séance :**

| **Activité** | **Durée** | **Ce que tu y apprends** |
|---|---|---|
| TP 6 « Installer un agent » | 25 min | Découvrir ≠ inventorier ; installer l'agent sur PC21 |
| TP 7 « Première remontée d'inventaire » | 25 min | Forcer la remontée ; lire la provenance des données |
| **Audit d'inventaire de NovaTech** (fichier de la séance) | 55 min | Mesurer la couverture réelle d'un parc, diagnostiquer des agents défaillants, juger la fiabilité des chiffres |
| TP 8, 9, 10 *(pour aller plus loin)* | 25 à 35 min | Découverte réseau, équipements sans agent, agents en erreur |

Le **fichier de la séance** est un projet InfraLab préparé pour ce cours : tu le télécharges sur le site, puis **Ouvrir** (Ctrl+O) dans le simulateur. Il contient un parc déjà en service, avec ses défauts. Pas de score : c'est une mission à rendre.

> [!WARNING]
> **Limite à connaître :** InfraLab simule. Il ne remplace ni un vrai serveur d'inventaire, ni un vrai poste, ni les contraintes d'une entreprise (pare-feu, droits d'installation, versions). C'est pourquoi la seconde moitié de la séance se déroule sur un **logiciel réel**.

## 4. Un outil réel : OCS Inventory NG

### 4.1 Présentation

**OCS Inventory NG** (Open Computer and Software Inventory Next Generation) est un logiciel **open source** d'inventaire de parc, très répandu en France dans les collectivités et les PME.

| **Paramètre** | **Valeur** |
|---|---|
| **Licence** | GPL v2 (gratuit) |
| **Site officiel** | ocsinventory-ng.org |
| **Agents** | Windows, Linux, macOS, Android, AIX, Solaris |
| **Serveur** | Apache + PHP + MySQL / MariaDB |
| **Intégration** | GLPI (plugin d'import) |

### 4.2 Architecture

<figure class="graphe diagramme"><svg viewBox="0 0 860 270" style="max-width:860px" role="img" aria-label="Architecture d&#x27;OCS Inventory : agents sur les postes, serveur Apache, PHP et MariaDB, console web ocsreports" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="10" width="170" height="60" rx="8" class="dg-soft"/>
<text x="85.0" y="36.0" text-anchor="middle" class="dg-t">Poste Windows</text>
<text x="85.0" y="54.0" text-anchor="middle" class="dg-s">agent installé</text>
<line x1="172" y1="40" x2="318.3" y2="130.3" class="dg-line"/>
<polygon points="326,135 321.0,126.0 315.7,134.5" class="dg-ah"/>
<rect x="0" y="90" width="170" height="60" rx="8" class="dg-soft"/>
<text x="85.0" y="116.0" text-anchor="middle" class="dg-t">Poste Linux</text>
<text x="85.0" y="134.0" text-anchor="middle" class="dg-s">agent installé</text>
<line x1="172" y1="120" x2="317.0" y2="134.1" class="dg-line"/>
<polygon points="326,135 317.5,129.2 316.6,139.1" class="dg-ah"/>
<rect x="0" y="170" width="170" height="60" rx="8" class="dg-soft"/>
<text x="85.0" y="196.0" text-anchor="middle" class="dg-t">Portable</text>
<text x="85.0" y="214.0" text-anchor="middle" class="dg-s">agent installé</text>
<line x1="172" y1="200" x2="317.7" y2="138.5" class="dg-line"/>
<polygon points="326,135 315.8,133.9 319.7,143.1" class="dg-ah"/>
<text x="250" y="262" text-anchor="middle" class="dg-i">XML compressé, HTTP(S)</text>
<rect x="330" y="45" width="230" height="180" rx="8" class="dg-box"/>
<text x="445.0" y="104.0" text-anchor="middle" class="dg-t">Serveur OCS Inventory</text>
<text x="445.0" y="122.0" text-anchor="middle" class="dg-s"> </text>
<text x="445.0" y="140.0" text-anchor="middle" class="dg-s">Apache + PHP</text>
<text x="445.0" y="158.0" text-anchor="middle" class="dg-s">MySQL / MariaDB</text>
<text x="445.0" y="176.0" text-anchor="middle" class="dg-s">(communication serveur)</text>
<line x1="562" y1="135" x2="657.0" y2="135.0" class="dg-line"/>
<polygon points="666,135 657.0,130.0 657.0,140.0" class="dg-ah"/>
<rect x="670" y="70" width="190" height="130" rx="8" class="dg-ok"/>
<text x="765.0" y="113.0" text-anchor="middle" class="dg-t">Console web</text>
<text x="765.0" y="131.0" text-anchor="middle" class="dg-s">ocsreports</text>
<text x="765.0" y="149.0" text-anchor="middle" class="dg-s">(navigateur)</text>
<text x="765.0" y="167.0" text-anchor="middle" class="dg-s">Administrateur DSI</text>
</svg>
<figcaption>Les agents OCS envoient leur inventaire au serveur ; l&#x27;administrateur consulte la console web ocsreports</figcaption>
</figure>

C'est exactement le schéma du 2.3 : l'**agent OCS** (le même rôle que l'agent installé sur PC21 dans InfraLab) envoie son inventaire au **serveur**, et l'administrateur consulte la **console web** `ocsreports`. Le protocole HTTPS protège les données de parc en transit.

### 4.3 Fonctionnement de l'agent OCS

<figure class="graphe diagramme"><svg viewBox="0 0 860 215" style="max-width:860px" role="img" aria-label="Fonctionnement de l&#x27;agent OCS : démarrage du service, collecte, envoi au serveur, enregistrement en base, console à jour" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="20" width="160" height="150" rx="8" class="dg-box"/>
<text x="80.0" y="82.0" text-anchor="middle" class="dg-t">1  Démarrage</text>
<text x="80.0" y="100.0" text-anchor="middle" class="dg-s">Service Windows</text>
<text x="80.0" y="118.0" text-anchor="middle" class="dg-s">ou tâche cron Linux</text>
<line x1="161" y1="95" x2="165.0" y2="95.0" class="dg-line"/>
<polygon points="174,95 165.0,90.0 165.0,100.0" class="dg-ah"/>
<rect x="175" y="20" width="160" height="150" rx="8" class="dg-box"/>
<text x="255.0" y="73.0" text-anchor="middle" class="dg-t">2  Collecte</text>
<text x="255.0" y="91.0" text-anchor="middle" class="dg-s">Matériel, système</text>
<text x="255.0" y="109.0" text-anchor="middle" class="dg-s">Logiciels, réseau</text>
<text x="255.0" y="127.0" text-anchor="middle" class="dg-s">Périphériques</text>
<line x1="336" y1="95" x2="340.0" y2="95.0" class="dg-line"/>
<polygon points="349,95 340.0,90.0 340.0,100.0" class="dg-ah"/>
<rect x="350" y="20" width="160" height="150" rx="8" class="dg-box"/>
<text x="430.0" y="73.0" text-anchor="middle" class="dg-t">3  Envoi</text>
<text x="430.0" y="91.0" text-anchor="middle" class="dg-s">Fichier XML compressé</text>
<text x="430.0" y="109.0" text-anchor="middle" class="dg-s">HTTP ou HTTPS</text>
<text x="430.0" y="127.0" text-anchor="middle" class="dg-s">vers le serveur</text>
<line x1="511" y1="95" x2="515.0" y2="95.0" class="dg-line"/>
<polygon points="524,95 515.0,90.0 515.0,100.0" class="dg-ah"/>
<rect x="525" y="20" width="160" height="150" rx="8" class="dg-box"/>
<text x="605.0" y="73.0" text-anchor="middle" class="dg-t">4  Enregistrement</text>
<text x="605.0" y="91.0" text-anchor="middle" class="dg-s">Le serveur stocke</text>
<text x="605.0" y="109.0" text-anchor="middle" class="dg-s">dans la base</text>
<text x="605.0" y="127.0" text-anchor="middle" class="dg-s">de données</text>
<line x1="686" y1="95" x2="690.0" y2="95.0" class="dg-line"/>
<polygon points="699,95 690.0,90.0 690.0,100.0" class="dg-ah"/>
<rect x="700" y="20" width="160" height="150" rx="8" class="dg-ok"/>
<text x="780.0" y="73.0" text-anchor="middle" class="dg-t">5  Console</text>
<text x="780.0" y="91.0" text-anchor="middle" class="dg-s">L&#x27;inventaire est</text>
<text x="780.0" y="109.0" text-anchor="middle" class="dg-s">consultable</text>
<text x="780.0" y="127.0" text-anchor="middle" class="dg-s">par l&#x27;administrateur</text>
<text x="430" y="200" text-anchor="middle" class="dg-i">URL du serveur : http(s)://adresse-du-serveur/ocsinventory</text>
</svg>
<figcaption>Le parcours d&#x27;un inventaire, du poste à la console</figcaption>
</figure>

### 4.4 Ce qu'OCS collecte

| **Catégorie** | **Informations collectées** |
|---|---|
| **Matériel** | Processeur (modèle, fréquence, cœurs), RAM, disques, carte mère, BIOS, cartes réseau |
| **Système** | OS (nom, version, build), clé de licence, domaine ou groupe de travail, nom du poste |
| **Logiciels** | Liste complète : éditeur, version, date d'installation |
| **Réseau** | Toutes les interfaces (IP, masque, MAC) |
| **Périphériques** | Moniteurs, imprimantes, ports |

OCS propose aussi une **découverte du réseau** (IPDiscover) : c'est l'équivalent de la découverte vue dans InfraLab.

### 4.5 Commandes de l'agent Windows

```cmd
:: Forcer un inventaire immédiat (depuis le répertoire d'installation)
"C:\Program Files\OCS Inventory Agent\OCSInventory.exe" /np /server:[IP_SERVEUR]

:: Forcer un inventaire avec journal détaillé
"C:\Program Files\OCS Inventory Agent\OCSInventory.exe" /np /server:[IP_SERVEUR] /debug /logfile:C:\Temp\ocs_debug.log

:: Vérifier le service Windows
sc query OCS_AGENT
Get-Service -Name "OCS_AGENT"
```

### 4.6 Avantages et limites

| **Avantages** | **Limites** |
|---|---|
| Inventaire automatique et périodique | Un agent est nécessaire sur chaque poste |
| Détection des changements | Interface web vieillissante |
| Open source et gratuit | Pas de gestion avancée des licences |
| Multi-OS | Serveur dédié à installer et à maintenir |
| Intégration GLPI | Configuration initiale parfois délicate |
| API disponible | Ne gère pas les tickets |

### 4.7 OCS et GLPI

<figure class="graphe diagramme"><svg viewBox="0 0 860 300" style="max-width:860px" role="img" aria-label="Deux façons d&#x27;alimenter la base de parc de GLPI : importer les données d&#x27;OCS Inventory, ou utiliser l&#x27;agent natif GLPI Agent" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="20" width="200" height="90" rx="8" class="dg-soft"/>
<text x="100.0" y="52.0" text-anchor="middle" class="dg-t">OCS Inventory</text>
<text x="100.0" y="70.0" text-anchor="middle" class="dg-s">Agents + serveur</text>
<text x="100.0" y="88.0" text-anchor="middle" class="dg-s">collecte automatique</text>
<rect x="0" y="170" width="200" height="90" rx="8" class="dg-soft"/>
<text x="100.0" y="202.0" text-anchor="middle" class="dg-t">GLPI Agent</text>
<text x="100.0" y="220.0" text-anchor="middle" class="dg-s">inventaire natif de GLPI</text>
<text x="100.0" y="238.0" text-anchor="middle" class="dg-s">(sans OCS)</text>
<line x1="204" y1="65" x2="317.8" y2="116.3" class="dg-line"/>
<polygon points="326,120 319.9,111.7 315.7,120.9" class="dg-ah"/>
<text x="265" y="50" text-anchor="middle" class="dg-i">import (plugin OCS)</text>
<line x1="204" y1="215" x2="317.6" y2="173.1" class="dg-line"/>
<polygon points="326,170 315.8,168.4 319.3,177.8" class="dg-ah"/>
<text x="265" y="262" text-anchor="middle" class="dg-i">remontée directe</text>
<rect x="330" y="20" width="300" height="240" rx="8" class="dg-box"/>
<text x="480.0" y="109.0" text-anchor="middle" class="dg-t">GLPI</text>
<text x="480.0" y="127.0" text-anchor="middle" class="dg-s">Parc : fiches des équipements</text>
<text x="480.0" y="145.0" text-anchor="middle" class="dg-s">Tickets liés aux équipements</text>
<text x="480.0" y="163.0" text-anchor="middle" class="dg-s">Base de connaissances</text>
<text x="480.0" y="181.0" text-anchor="middle" class="dg-s">Licences, contrats, statistiques</text>
<line x1="634" y1="140" x2="719.0" y2="140.0" class="dg-line"/>
<polygon points="728,140 719.0,135.0 719.0,145.0" class="dg-ah"/>
<rect x="732" y="85" width="128" height="110" rx="8" class="dg-ok"/>
<text x="796.0" y="118.0" text-anchor="middle" class="dg-t">Technicien</text>
<text x="796.0" y="136.0" text-anchor="middle" class="dg-s">traite les tickets</text>
<text x="796.0" y="154.0" text-anchor="middle" class="dg-s">avec l&#x27;historique</text>
<text x="796.0" y="172.0" text-anchor="middle" class="dg-s">du poste</text>
</svg>
<figcaption>OCS et GLPI : l&#x27;un collecte, l&#x27;autre gère</figcaption>
</figure>

En entreprise, on dit souvent « on est sous GLPI + OCS » : **GLPI** gère (tickets, parc, licences, connaissances), **OCS** collecte. GLPI peut aussi inventorier lui-même grâce à son propre agent (**GLPI Agent**) et se passer d'OCS. Tu verras la partie GLPI en S06.

### 4.8 Comparaison des outils de gestion de parc

| **Outil** | **Type** | **Inventaire automatique** | **Tickets** | **Parc (CMDB)** | **Coût** |
|---|---|---|---|---|---|
| **OCS Inventory** | Open source | Oui (agent) | Non | Non | Gratuit |
| **GLPI** | Open source | Oui (GLPI Agent) | Oui | Oui | Gratuit |
| **GLPI + OCS** | Open source | Oui | Oui | Oui | Gratuit |
| **Lansweeper** | Éditeur, version gratuite limitée | Oui (sans agent) | Non | Limité | Gratuit sous un seuil, sinon payant |
| **Microsoft Intune / Configuration Manager** | Éditeur | Oui | Non | Oui | Inclus selon la licence Microsoft |
| **ServiceNow** | SaaS | Oui | Oui | Oui | Élevé |

> [!NOTE]
> **Dans ton entreprise :** les apprentis utilisent déjà divers outils. Quel que soit le produit, tu retrouveras les mêmes notions : **découverte**, **agent**, **adresse du serveur**, **remontée périodique**, **provenance de la donnée**, **équipements sans agent**. Repère-les dans l'outil de ton tuteur.

---

## À retenir

- **Découvrir** un équipement, c'est savoir qu'il existe ; **l'inventorier**, c'est savoir ce qu'il contient. Le second exige un **agent**.
- Une découverte ne voit que les équipements **allumés, reliés et dotés d'une adresse IP** : toujours la comparer avec le schéma.
- Un équipement **sans agent** (imprimante, commutateur, NAS) se complète à la main ou par SNMP : la donnée saisie **vieillit**.
- Un agent **arrêté, mal configuré ou obsolète** laisse l'inventaire se périmer : on lit son journal avant d'agir.
- InfraLab simule les concepts ; **OCS** est un outil réel : même architecture (agents, serveur, console).
- Un outil d'inventaire collecte et un outil de tickets **gère** : OCS (ou GLPI Agent) alimente GLPI.
