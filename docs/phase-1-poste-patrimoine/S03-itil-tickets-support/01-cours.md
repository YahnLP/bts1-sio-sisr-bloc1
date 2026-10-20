# Cours – ITIL, tickets et niveaux de support

*BTS SIO SISR 1re année – Bloc 1 – S03*

> [!NOTE] Ce que tu dois savoir déjà
> - **Prérequis :** S01, S02.
> - **À garder en tête :** lis le cours **avant** le TP ; la section « À retenir » en fin de cours résume l'essentiel.

## À la fin de ce cours, tu sauras

- [ ] **Expliquer** ce qu'est ITIL et la notion de service ;
- [ ] **Distinguer** incident, problème, changement et demande de service ;
- [ ] **Décrire** le cycle de vie d'un ticket, les niveaux de support N1, N2, N3 et les critères d'escalade ;
- [ ] **Rédiger** un ticket complet (titre, description, impact, priorité) ;
- [ ] **Situer** un outil ITSM comme GLPI.

---


## 1. Qu'est-ce qu'ITIL ?

### 1.1 Origine et Définition

**ITIL** (Information Technology Infrastructure Library) est un **référentiel de bonnes pratiques** pour la gestion des services informatiques. Il ne s'agit pas d'une norme imposée (comme ISO 27001) ni d'une technologie — c'est un ensemble de recommandations issues de l'expérience de milliers d'organisations dans le monde.

| **Paramètre** | **Valeur** |
|---|---|
| **Créé par** | Cabinet britannique OGC (Office of Government Commerce) — années 1980 |
| **Version actuelle** | ITIL 4 (2019) |
| **Éditeur** | Axelos (filiale du gouvernement britannique) |
| **Certification** | ITIL Foundation (entrée de gamme, très répandue en entreprise) |
| **Utilisation** | DSI de toutes tailles — de la startup aux multinationales |

> [!TIP]
> **Pourquoi l'apprendre au BTS ?** Parce que le vocabulaire ITIL (incident, demande, changement, niveaux de support) est **largement utilisé** dans les services informatiques et les outils de tickets comme GLPI. Le connaître te permet de comprendre les procédures d'une entreprise et d'en parler avec ton tuteur.

### 1.2 La Notion de Service IT

En ITIL, la notion de **service** est centrale. Un service IT est :

> *"Un moyen de créer de la valeur pour les clients en facilitant les résultats qu'ils souhaitent atteindre, sans qu'ils aient à gérer des coûts et des risques spécifiques."*

En clair : **le service IT porte le résultat métier, pas la technologie**.

<figure class="graphe diagramme"><svg viewBox="0 0 780 290" style="max-width:780px" role="img" aria-label="Ce que voit l&#x27;utilisateur vers ce que la DSI gère : un simple service d&#x27;e-mails repose sur de nombreux éléments cachés" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="60" width="230" height="110" rx="8" class="dg-ok"/>
<text x="115.0" y="111.0" text-anchor="middle" class="dg-t">Ce que voit le client</text>
<text x="115.0" y="129.0" text-anchor="middle" class="dg-s">« Je peux envoyer des e-mails »</text>
<line x1="232" y1="115" x2="287.0" y2="115.0" class="dg-line"/>
<polygon points="296,115 287.0,110.0 287.0,120.0" class="dg-ah"/>
<rect x="300" y="8" width="480" height="238" rx="8" class="dg-soft"/>
<text x="540" y="32" text-anchor="middle" class="dg-t">Ce que la DSI gère</text>
<rect x="318" y="44" width="444" height="23" rx="5" class="dg-box"/>
<text x="334" y="60" text-anchor="start" class="dg-s">Serveur Exchange / Microsoft 365</text>
<rect x="318" y="72" width="444" height="23" rx="5" class="dg-box"/>
<text x="334" y="88" text-anchor="start" class="dg-s">Réseau local et accès Internet</text>
<rect x="318" y="100" width="444" height="23" rx="5" class="dg-box"/>
<text x="334" y="116" text-anchor="start" class="dg-s">Pare-feu et antispam</text>
<rect x="318" y="128" width="444" height="23" rx="5" class="dg-box"/>
<text x="334" y="144" text-anchor="start" class="dg-s">Licences Microsoft</text>
<rect x="318" y="156" width="444" height="23" rx="5" class="dg-box"/>
<text x="334" y="172" text-anchor="start" class="dg-s">Sauvegardes quotidiennes</text>
<rect x="318" y="184" width="444" height="23" rx="5" class="dg-box"/>
<text x="334" y="200" text-anchor="start" class="dg-s">Mises à jour de sécurité</text>
<rect x="318" y="212" width="444" height="23" rx="5" class="dg-box"/>
<text x="334" y="228" text-anchor="start" class="dg-s">Supervision 24 h / 24</text>
<text x="115" y="215" text-anchor="middle" class="dg-i">valeur perçue</text>
<text x="540" y="274" text-anchor="middle" class="dg-i">complexité cachée</text>
</svg>
<figcaption>La valeur perçue par le client repose sur une complexité que la DSI gère</figcaption>
</figure>

*Légende : Le client perçoit uniquement le service rendu ("je peux envoyer des emails"). La DSI gère l'ensemble des composants technologiques qui rendent ce service possible. ITIL appelle cela le "voile du service" — la DSI absorbe la complexité pour que le client n'ait pas à la gérer.*

### 1.3 Les 4 Dimensions d'un Service ITIL 4

ITIL 4 stipule que tout service IT doit être analysé selon 4 dimensions complémentaires. Oublier l'une d'elles conduit à des échecs de projet :

<figure class="graphe diagramme"><svg viewBox="0 0 780 330" style="max-width:780px" role="img" aria-label="Les quatre dimensions de la gestion des services ITIL 4 : organisations et personnes, informations et technologie, partenaires et fournisseurs, flux de valeur et processus" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="8" width="780" height="68" rx="10" class="dg-box"/>
<circle cx="36" cy="42" r="16" class="dg-dark"/>
<text x="36" y="47" text-anchor="middle" class="dg-w">1</text>
<text x="70" y="38" text-anchor="start" class="dg-t">Organisations et personnes</text>
<text x="70" y="60" text-anchor="start" class="dg-s">Qui fait quoi ? Compétences, rôles, culture, structure, formation.</text>
<rect x="0" y="86" width="780" height="68" rx="10" class="dg-ok"/>
<circle cx="36" cy="120" r="16" class="dg-dark"/>
<text x="36" y="125" text-anchor="middle" class="dg-w">2</text>
<text x="70" y="116" text-anchor="start" class="dg-t">Informations et technologie</text>
<text x="70" y="138" text-anchor="start" class="dg-s">Outils, logiciels, matériel, données, bases de données, cloud.</text>
<rect x="0" y="164" width="780" height="68" rx="10" class="dg-warn"/>
<circle cx="36" cy="198" r="16" class="dg-dark"/>
<text x="36" y="203" text-anchor="middle" class="dg-w">3</text>
<text x="70" y="194" text-anchor="start" class="dg-t">Partenaires et fournisseurs</text>
<text x="70" y="216" text-anchor="start" class="dg-s">Prestataires externes, contrats, dépendances (hébergeur, mainteneur).</text>
<rect x="0" y="242" width="780" height="68" rx="10" class="dg-soft"/>
<circle cx="36" cy="276" r="16" class="dg-dark"/>
<text x="36" y="281" text-anchor="middle" class="dg-w">4</text>
<text x="70" y="272" text-anchor="start" class="dg-t">Flux de valeur et processus</text>
<text x="70" y="294" text-anchor="start" class="dg-s">Comment le travail est réalisé : procédures, workflows, amélioration continue.</text>
</svg>
<figcaption>Les quatre dimensions d&#x27;ITIL 4 : elles s&#x27;appliquent à chaque service</figcaption>
</figure>

Ces quatre dimensions s'appliquent à **chaque** service. Exemple : « service messagerie de SimIO SARL ».

1. **Organisations et personnes** : qui gère la messagerie, avec quelles compétences ?
2. **Informations et technologie** : Exchange, Microsoft 365 ou un serveur Postfix ?
3. **Partenaires et fournisseurs** : Microsoft est-il un partenaire ? Y a-t-il un prestataire externe ?
4. **Flux de valeur et processus** : quelle procédure quand un e-mail ne passe pas ?

## 2. Le Vocabulaire Fondamental ITIL

### 2.1 Les 4 Types de Sollicitations

Toute interaction entre un utilisateur et la DSI appartient à l'un de ces 4 types. Les connaître est **indispensable** pour rédiger correctement un ticket :

| Type | Définition | Exemple |
|---|---|---|
| **Incident** | Interruption non planifiée ou dégradation d'un service informatique | « Mon PC ne démarre plus » |
| **Problème** | Cause racine d'un ou de plusieurs incidents récurrents (peut être ouvert avant l'incident suivant) | « Pourquoi 5 PC ont-ils eu le même plantage ce mois-ci ? » |
| **Changement** | Ajout, modification ou retrait d'un composant de l'infrastructure | « Installer une nouvelle application » |
| **Demande de service** | Demande standard d'accès ou d'information, sans panne | « Créer un compte VPN pour un nouvel employé » |

> [!WARNING]
> **Erreur fréquente :** Confondre **incident** et **problème**. Un incident est un **événement** ("Excel plante") — un problème est une **investigation de cause** ("pourquoi Excel plante-t-il sur tous les postes du VLAN 10 ?"). Un incident peut être résolu (contournement) sans que le problème sous-jacent soit traité.

### 2.2 Cycle de vie d'un Ticket

<figure class="graphe diagramme"><svg viewBox="0 0 820 330" style="max-width:820px" role="img" aria-label="Cycle de vie d&#x27;un ticket : ouverture, qualification, traitement, résolution, validation, clôture" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="10" width="220" height="100" rx="8" class="dg-box"/>
<text x="110.0" y="47.0" text-anchor="middle" class="dg-t">1  Ouverture</text>
<text x="110.0" y="65.0" text-anchor="middle" class="dg-s">L&#x27;utilisateur contacte</text>
<text x="110.0" y="83.0" text-anchor="middle" class="dg-s">le centre de services</text>
<line x1="222" y1="60" x2="289.0" y2="60.0" class="dg-line"/>
<polygon points="298,60 289.0,55.0 289.0,65.0" class="dg-ah"/>
<rect x="300" y="10" width="220" height="100" rx="8" class="dg-box"/>
<text x="410.0" y="47.0" text-anchor="middle" class="dg-t">2  Qualification</text>
<text x="410.0" y="65.0" text-anchor="middle" class="dg-s">Catégorie, impact, urgence</text>
<text x="410.0" y="83.0" text-anchor="middle" class="dg-s">Priorité, attribution</text>
<line x1="522" y1="60" x2="589.0" y2="60.0" class="dg-line"/>
<polygon points="598,60 589.0,55.0 589.0,65.0" class="dg-ah"/>
<rect x="600" y="10" width="220" height="100" rx="8" class="dg-box"/>
<text x="710.0" y="47.0" text-anchor="middle" class="dg-t">3  Traitement</text>
<text x="710.0" y="65.0" text-anchor="middle" class="dg-s">Le N1 tente la résolution</text>
<text x="710.0" y="83.0" text-anchor="middle" class="dg-s">Sinon escalade N2 / N3</text>
<rect x="0" y="200" width="220" height="100" rx="8" class="dg-ok"/>
<text x="110.0" y="237.0" text-anchor="middle" class="dg-t">6  Clôture</text>
<text x="110.0" y="255.0" text-anchor="middle" class="dg-s">Ticket fermé</text>
<text x="110.0" y="273.0" text-anchor="middle" class="dg-s">MTTR calculé, satisfaction</text>
<line x1="298" y1="250" x2="231.0" y2="250.0" class="dg-line"/>
<polygon points="222,250 231.0,255.0 231.0,245.0" class="dg-ah"/>
<rect x="300" y="200" width="220" height="100" rx="8" class="dg-box"/>
<text x="410.0" y="237.0" text-anchor="middle" class="dg-t">5  Validation</text>
<text x="410.0" y="255.0" text-anchor="middle" class="dg-s">L&#x27;utilisateur confirme</text>
<text x="410.0" y="273.0" text-anchor="middle" class="dg-s">la résolution</text>
<line x1="598" y1="250" x2="531.0" y2="250.0" class="dg-line"/>
<polygon points="522,250 531.0,255.0 531.0,245.0" class="dg-ah"/>
<rect x="600" y="200" width="220" height="100" rx="8" class="dg-box"/>
<text x="710.0" y="237.0" text-anchor="middle" class="dg-t">4  Résolution</text>
<text x="710.0" y="255.0" text-anchor="middle" class="dg-s">Solution appliquée</text>
<text x="710.0" y="273.0" text-anchor="middle" class="dg-s">et testée</text>
<line x1="710" y1="112" x2="710.0" y2="189.0" class="dg-line"/>
<polygon points="710,198 715.0,189.0 705.0,189.0" class="dg-ah"/>
</svg>
<figcaption>Cycle de vie d&#x27;un ticket, de l&#x27;ouverture à la clôture</figcaption>
</figure>

### 2.3 Les Indicateurs Clés (KPIs)

| **Indicateur** | **Signification** | **Ce qu'il mesure** |
|---|---|---|
| **MTTR** | Mean Time To Repair | Temps moyen de résolution d'un incident |
| **MTBF** | Mean Time Between Failures | Durée moyenne entre deux pannes (fiabilité) |
| **MTTA** | Mean Time To Acknowledge | Temps moyen avant première prise en charge |
| **Taux de résolution N1** | % d'incidents résolus sans escalade | Efficacité du support de premier niveau |
| **SLA %** | % de tickets traités dans les délais contractuels | Respect des engagements de service |
| **FCR** | First Contact Resolution | % de tickets résolus dès le premier appel |
| **Backlog** | File d'attente des tickets ouverts non résolus | Volume de travail en attente |

### 2.4 Le SLA — Service Level Agreement

Un **SLA** est un contrat formel entre un fournisseur de services IT (la DSI) et un client (un département ou une entreprise cliente). Il définit **le niveau de service attendu** et les conséquences si ce niveau n'est pas atteint.

**Composantes d'un SLA :**

| **Élément** | **Exemple concret** |
|---|---|
| **Disponibilité du service** | "Le service messagerie sera disponible 99,5% du temps (hors maintenance planifiée)" |
| **Délai de prise en charge** | "Tout incident Priorité 1 sera pris en charge en moins de 15 minutes" |
| **Délai de résolution** | "Tout incident P1 sera résolu en moins de 4 heures" |
| **Plage horaire** | "Le support est disponible du lundi au vendredi de 8h à 18h" |
| **Exclusions** | "Les incidents dus à une erreur utilisateur ne sont pas couverts par le SLA" |
| **Pénalités** | "En cas de non-respect du SLA P1, une réduction de 10% de la facture est appliquée" |

**Exemple de matrice de priorité** (c'est celle du simulateur InfraLab ; chaque DSI définit la sienne) :

<figure class="graphe diagramme"><svg viewBox="0 0 640 370" style="max-width:640px" role="img" aria-label="Matrice de priorité : impact élevé, moyen ou faible croisé avec urgence élevée, moyenne ou faible, donnant les priorités P1 à P4" xmlns="http://www.w3.org/2000/svg">
<text x="385" y="22" text-anchor="middle" class="dg-t">IMPACT</text>
<text x="215" y="50" text-anchor="middle" class="dg-s">Élevé</text>
<text x="375" y="50" text-anchor="middle" class="dg-s">Moyen</text>
<text x="535" y="50" text-anchor="middle" class="dg-s">Faible</text>
<text x="45" y="215" text-anchor="middle" class="dg-t">URGENCE</text>
<text x="115" y="112" text-anchor="middle" class="dg-s">Élevée</text>
<text x="115" y="207" text-anchor="middle" class="dg-s">Moyenne</text>
<text x="115" y="302" text-anchor="middle" class="dg-s">Faible</text>
<rect x="140" y="62" width="150" height="85" rx="8" class="dg-bad"/>
<text x="215.0" y="100.5" text-anchor="middle" class="dg-t">P1</text>
<text x="215.0" y="118.5" text-anchor="middle" class="dg-s">Critique</text>
<rect x="300" y="62" width="150" height="85" rx="8" class="dg-warn"/>
<text x="375.0" y="100.5" text-anchor="middle" class="dg-t">P2</text>
<text x="375.0" y="118.5" text-anchor="middle" class="dg-s">Haute</text>
<rect x="460" y="62" width="150" height="85" rx="8" class="dg-box"/>
<text x="535.0" y="100.5" text-anchor="middle" class="dg-t">P3</text>
<text x="535.0" y="118.5" text-anchor="middle" class="dg-s">Moyenne</text>
<rect x="140" y="157" width="150" height="85" rx="8" class="dg-warn"/>
<text x="215.0" y="195.5" text-anchor="middle" class="dg-t">P2</text>
<text x="215.0" y="213.5" text-anchor="middle" class="dg-s">Haute</text>
<rect x="300" y="157" width="150" height="85" rx="8" class="dg-box"/>
<text x="375.0" y="195.5" text-anchor="middle" class="dg-t">P3</text>
<text x="375.0" y="213.5" text-anchor="middle" class="dg-s">Moyenne</text>
<rect x="460" y="157" width="150" height="85" rx="8" class="dg-ok"/>
<text x="535.0" y="195.5" text-anchor="middle" class="dg-t">P4</text>
<text x="535.0" y="213.5" text-anchor="middle" class="dg-s">Basse</text>
<rect x="140" y="252" width="150" height="85" rx="8" class="dg-box"/>
<text x="215.0" y="290.5" text-anchor="middle" class="dg-t">P3</text>
<text x="215.0" y="308.5" text-anchor="middle" class="dg-s">Moyenne</text>
<rect x="300" y="252" width="150" height="85" rx="8" class="dg-ok"/>
<text x="375.0" y="290.5" text-anchor="middle" class="dg-t">P4</text>
<text x="375.0" y="308.5" text-anchor="middle" class="dg-s">Basse</text>
<rect x="460" y="252" width="150" height="85" rx="8" class="dg-ok"/>
<text x="535.0" y="290.5" text-anchor="middle" class="dg-t">P4</text>
<text x="535.0" y="308.5" text-anchor="middle" class="dg-s">Basse</text>
</svg>
<figcaption>Matrice impact × urgence (exemple de matrice : chaque organisation définit la sienne)</figcaption>
</figure>

| Priorité | Situation | Exemple | Prise en charge | Résolution |
|---|---|---|---|---|
| **P1** Critique | Service principal en panne, impact total | Serveur AD planté, tous les utilisateurs bloqués | < 15 min | < 4 h |
| **P2** Haute | Service dégradé ou groupe d'utilisateurs touché | Imprimante partagée HS dans un service | < 1 h | < 8 h |
| **P3** Moyenne | Un seul utilisateur touché, contournement possible | Logiciel secondaire qui plante | < 4 h | < 24 h |
| **P4** Basse | Demande ou incident mineur | Changement de fond d'écran | < 1 jour ouvré | < 5 jours |

### 2.5 Les Pratiques ITIL 4 à Connaître

ITIL 4 définit **34 pratiques**. En voici les 10 incontournables pour un technicien SISR junior :

| **Pratique** | **Ce qu'elle couvre** | **Vue dans le cours** |
|---|---|---|
| **Gestion des incidents** | Restaurer le service le plus vite possible | S3, tous les TP |
| **Gestion des problèmes** | Éliminer les causes racines des incidents récurrents | S3 |
| **Gestion des demandes de service** | Traiter les demandes standard (comptes, accès...) | S3 |
| **Gestion des actifs IT** | Inventaire et cycle de vie des équipements | S2 |
| **Gestion des configurations** | CMDB — état de l'infrastructure | S2 |
| **Gestion des changements** | Contrôler les modifications de l'infrastructure | S17-S18 |
| **Gestion des niveaux de service** | SLA et suivi de la qualité | S3 |
| **Centre de services** | Point de contact unique utilisateurs / DSI | S3 |
| **Supervision et gestion des événements** | Détecter proactivement les anomalies | S9 |
| **Amélioration continue** | Mesurer et améliorer les services en permanence | Transversal |

## 3. Le Centre de Services

### 3.1 Définition et Rôle

Le **centre de services** (ou **Service Desk**) est le **point de contact unique** entre les utilisateurs et la DSI. Il reçoit toutes les sollicitations (incidents, demandes, questions), les qualifie et les oriente vers les équipes appropriées.

<figure class="graphe diagramme"><svg viewBox="0 0 840 330" style="max-width:840px" role="img" aria-label="Les utilisateurs contactent le service desk N1 par téléphone, e-mail, chat ou portail, qui escalade vers les équipes N2 système et réseau et N3 éditeur et sécurité" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="10" width="200" height="50" rx="8" class="dg-soft"/>
<text x="100.0" y="31.0" text-anchor="middle" class="dg-t">Marie (Comptabilité)</text>
<text x="100.0" y="49.0" text-anchor="middle" class="dg-s">via téléphone</text>
<line x1="202" y1="35" x2="319.8" y2="158.5" class="dg-line"/>
<polygon points="326,165 323.4,155.0 316.2,161.9" class="dg-ah"/>
<rect x="0" y="72" width="200" height="50" rx="8" class="dg-soft"/>
<text x="100.0" y="93.0" text-anchor="middle" class="dg-t">Pierre (RH)</text>
<text x="100.0" y="111.0" text-anchor="middle" class="dg-s">via e-mail</text>
<line x1="202" y1="97" x2="318.1" y2="160.7" class="dg-line"/>
<polygon points="326,165 320.5,156.3 315.7,165.1" class="dg-ah"/>
<rect x="0" y="134" width="200" height="50" rx="8" class="dg-soft"/>
<text x="100.0" y="155.0" text-anchor="middle" class="dg-t">Paul (Direction)</text>
<text x="100.0" y="173.0" text-anchor="middle" class="dg-s">via chat</text>
<line x1="202" y1="159" x2="317.0" y2="164.6" class="dg-line"/>
<polygon points="326,165 317.3,159.6 316.8,169.6" class="dg-ah"/>
<rect x="0" y="196" width="200" height="50" rx="8" class="dg-soft"/>
<text x="100.0" y="217.0" text-anchor="middle" class="dg-t">Nouveau PC ?</text>
<text x="100.0" y="235.0" text-anchor="middle" class="dg-s">via portail GLPI</text>
<line x1="202" y1="221" x2="317.8" y2="168.7" class="dg-line"/>
<polygon points="326,165 315.7,164.1 319.9,173.3" class="dg-ah"/>
<rect x="0" y="258" width="200" height="50" rx="8" class="dg-soft"/>
<text x="100.0" y="279.0" text-anchor="middle" class="dg-t">VPN KO ?</text>
<text x="100.0" y="297.0" text-anchor="middle" class="dg-s">via téléphone</text>
<line x1="202" y1="283" x2="319.5" y2="171.2" class="dg-line"/>
<polygon points="326,165 316.0,167.6 322.9,174.8" class="dg-ah"/>
<rect x="330" y="95" width="170" height="140" rx="8" class="dg-box"/>
<text x="415.0" y="134.0" text-anchor="middle" class="dg-t">Service desk N1</text>
<text x="415.0" y="152.0" text-anchor="middle" class="dg-s">Triage</text>
<text x="415.0" y="170.0" text-anchor="middle" class="dg-s">Ticket</text>
<text x="415.0" y="188.0" text-anchor="middle" class="dg-s">Résolution simple</text>
<text x="415.0" y="206.0" text-anchor="middle" class="dg-s">Escalade si besoin</text>
<rect x="640" y="20" width="200" height="50" rx="8" class="dg-ok"/>
<text x="740.0" y="50.0" text-anchor="middle" class="dg-s">N2  Système</text>
<line x1="502" y1="165" x2="631.3" y2="51.0" class="dg-line"/>
<polygon points="638,45 627.9,47.2 634.6,54.7" class="dg-ah"/>
<rect x="640" y="95" width="200" height="50" rx="8" class="dg-ok"/>
<text x="740.0" y="125.0" text-anchor="middle" class="dg-s">N2  Réseau</text>
<line x1="502" y1="165" x2="629.5" y2="122.8" class="dg-line"/>
<polygon points="638,120 627.9,118.1 631.0,127.6" class="dg-ah"/>
<rect x="640" y="170" width="200" height="50" rx="8" class="dg-warn"/>
<text x="740.0" y="200.0" text-anchor="middle" class="dg-s">N3  Éditeur</text>
<line x1="502" y1="165" x2="629.2" y2="193.1" class="dg-line"/>
<polygon points="638,195 630.3,188.2 628.1,197.9" class="dg-ah"/>
<rect x="640" y="245" width="200" height="50" rx="8" class="dg-warn"/>
<text x="740.0" y="275.0" text-anchor="middle" class="dg-s">N3  Sécurité</text>
<line x1="502" y1="165" x2="630.9" y2="264.5" class="dg-line"/>
<polygon points="638,270 633.9,260.5 627.8,268.5" class="dg-ah"/>
</svg>
<figcaption>Du contact de l&#x27;utilisateur à l&#x27;équipe technique</figcaption>
</figure>

**Les missions du centre de services :**

1. **Réception** de toutes les sollicitations (téléphone, email, portail self-service, chat)
2. **Qualification** : catégoriser, prioriser, enregistrer dans l'outil ITSM
3. **Résolution N1** : traiter les incidents simples (réinitialisations, accès, configurations basiques)
4. **Escalade** : transmettre aux niveaux supérieurs ce qui dépasse le N1
5. **Suivi** : informer l'utilisateur de l'avancement jusqu'à clôture
6. **Reporting** : produire les tableaux de bord (MTTR, SLA, volume...)

### 3.2 Les Niveaux de Support N1 / N2 / N3

<figure class="graphe diagramme"><svg viewBox="0 0 780 330" style="max-width:780px" role="img" aria-label="Les trois niveaux de support : N1 centre de services, N2 spécialistes, N3 expertise éditeur ou constructeur" xmlns="http://www.w3.org/2000/svg">
<rect x="170.0" y="8" width="440" height="94" rx="8" class="dg-warn"/>
<text x="390.0" y="42.0" text-anchor="middle" class="dg-t">N3  Expertise</text>
<text x="390.0" y="60.0" text-anchor="middle" class="dg-s">Éditeurs, constructeurs, consultants. Escalade extrêmement rare.</text>
<text x="390.0" y="78.0" text-anchor="middle" class="dg-s">Ex. : bug dans le code d&#x27;un éditeur, firmware réseau, faille zero-day</text>
<rect x="90.0" y="112" width="600" height="94" rx="8" class="dg-ok"/>
<text x="390.0" y="146.0" text-anchor="middle" class="dg-t">N2  Spécialistes</text>
<text x="390.0" y="164.0" text-anchor="middle" class="dg-s">Techniciens spécialisés (réseau, système, sécurité, applicatif).</text>
<text x="390.0" y="182.0" text-anchor="middle" class="dg-s">Ex. : panne serveur, règle de pare-feu, Active Directory, base de données</text>
<rect x="0.0" y="216" width="780" height="94" rx="8" class="dg-box"/>
<text x="390.0" y="250.0" text-anchor="middle" class="dg-t">N1  Centre de services</text>
<text x="390.0" y="268.0" text-anchor="middle" class="dg-s">Techniciens polyvalents : c&#x27;est votre futur poste immédiat.</text>
<text x="390.0" y="286.0" text-anchor="middle" class="dg-s">Ex. : mot de passe, réseau simple, logiciel qui ne s&#x27;ouvre pas, imprimante HS</text>
</svg>
<figcaption>Les niveaux de support : le N1 traite le plus grand nombre, le N3 intervient très rarement</figcaption>
</figure>

### 3.3 Comparatif des Niveaux

| **Critère** | **N1** | **N2** | **N3** |
|---|---|---|---|
| **Profil** | Technicien junior / polyvalent | Technicien expérimenté / spécialisé | Expert / Éditeur |
| **Formation typique** | BTS SIO, Licence Pro | BTS SIO + expérience, LP, Bachelor | Ingénieur, CCIE, certif. expert |
| **Incidents traités** | Simples, procédurés | Complexes, sans procédure établie | Inconnus, non reproductibles |
| **Accès systèmes** | Restreint (AD, postes) | Étendu (serveurs, infra) | Total (production, code source) |
| **Délai de réponse** | Immédiat (SLA court) | Quelques heures | Jours, semaines |
| **Volume traité** | La majorité des tickets | Une part limitée, les cas escaladés | Très peu de cas |
| **Outil** | GLPI, ServiceNow, Jira | GLPI, accès serveurs, CLI | Éditeur / lab de test |

### 3.4 Critères d'Escalade N1 → N2

Un technicien N1 doit escalader vers N2 lorsqu'il rencontre l'une des situations suivantes :

| **Situation** | **Exemple** |
|---|---|
| **Hors compétence / accès** | L'incident nécessite des droits d'accès aux serveurs |
| **Dépassement du délai SLA** | Le ticket P2 risque de dépasser les 8h de délai |
| **Incident récurrent** | Le même utilisateur a eu 3 incidents similaires ce mois |
| **Impact élargi** | Le diagnostic révèle que plusieurs utilisateurs sont affectés |
| **Absence de procédure** | Aucune solution connue dans la base de connaissances |
| **Impact critique potentiel** | Le problème pourrait toucher un système de production |

> [!NOTE]
> **Règle professionnelle :** Escalader n'est **pas un aveu d'échec** — c'est une **compétence professionnelle**. Un technicien N1 qui escalade au bon moment protège le SLA et la satisfaction utilisateur. Un N1 qui s'acharne sans escalader fait perdre du temps à tout le monde.

### 3.5 Rédiger un Bon Ticket d'Incident

Un ticket mal rédigé ralentit la résolution et crée de la frustration. Un ticket bien rédigé permet au N2 (ou au N3) de comprendre la situation sans avoir à rappeler l'utilisateur.

**Structure obligatoire d'un ticket :**

| **Champ** | **Contenu attendu** | **Mauvais exemple** | **Bon exemple** |
|---|---|---|---|
| **Titre** | Résumé en 10 mots max | "Problème ordi" | "Excel 365 ne s'ouvre plus — PC-RH-042 — Alice Martin" |
| **Utilisateur** | Nom, service, contact | — | "Alice Martin — RH — ext. 214 — a.martin@siosarl.local" |
| **Description** | Quoi, quand, comment reproduire | "ça marche pas" | "Depuis ce matin 8h, Excel affiche 'Application non disponible' au démarrage. Le problème se reproduit à chaque tentative d'ouverture. Les autres applis Office fonctionnent." |
| **Impact** | Qui est bloqué, quel processus | — | "Bloquée pour le bilan mensuel à remettre à 10h" |
| **Actions déjà tentées** | Ce qui a été fait avant d'appeler | — | "Redémarrage du PC effectué — problème persistant" |
| **Priorité** | P1 à P4 selon la matrice | — | P2 (impact = 1 utilisateur critique, urgence = deadline métier) |
| **Pièces jointes** | Captures d'écran du message d'erreur | — | `capture_erreur_excel_09h15.png` |

## 4. Les Outils ITSM

### 4.1 GLPI — Gestion Libre de Parc Informatique

**GLPI** est l'outil ITSM open source le plus répandu en France. Il gère à la fois les tickets et l'inventaire de parc (lien direct avec S2).

**Fonctions principales de GLPI :**

| **Module** | **Fonction** |
|---|---|
| **Tickets** | Création, suivi, escalade, clôture d'incidents et demandes |
| **Actifs** | Inventaire matériel et logiciel (lié à OCS Inventory) |
| **CMDB** | Relations entre les CIs (un ticket lié à un actif) |
| **Base de connaissances** | Articles de résolution pour les incidents récurrents |
| **Planification** | Calendrier de maintenance, interventions |
| **Rapports** | Tableaux de bord, statistiques SLA, MTTR... |

---

## À retenir

- **Incident, problème, changement, demande de service** : quatre sollicitations à ne pas confondre.
- **Priorité = impact × urgence.**
- Trois niveaux de support : **N1** (accueil, cas courants), **N2** (spécialistes), **N3** (experts, éditeur) ; on **escalade** selon des critères écrits.
- Un bon ticket est **précis, reproductible** et mentionne l'**impact**.

