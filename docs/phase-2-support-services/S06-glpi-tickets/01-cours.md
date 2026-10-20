# Cours – Gérer les tickets : principes, simulateur InfraLab, puis GLPI

*BTS SIO SISR 1re année – Bloc 1 – S06*

> [!NOTE] Ce que tu dois savoir déjà
> - **Prérequis :** S03 (ITIL, tickets, priorités), S05 (inventaire automatique).
> - **À garder en tête :** lis le cours **avant** le TP ; la section « À retenir » en fin de cours résume l'essentiel.
> - **Deux outils, un même raisonnement :** les sections 1 et 2 valent pour **tout** outil de tickets. Tu les pratiques d'abord dans [InfraLab](https://yahnlp.github.io/InfraLab/) (vue ITSM), puis tu les retrouves dans GLPI (section 3).

## À la fin de ce cours, tu sauras

- [ ] **Décrire** ce qu'un outil de tickets doit garantir : traçabilité, priorité, lien avec le parc, solution écrite ;
- [ ] **Qualifier** un ticket (catégorie, impact, urgence, priorité) et le **lier** à l'équipement en cause ;
- [ ] **Distinguer** « résolu » et « clos » ;
- [ ] **Décrire** l'architecture de GLPI et ses profils d'utilisateurs ;
- [ ] **Créer**, **affecter**, **escalader** et **clôturer** un ticket dans GLPI ;
- [ ] **Lire** un tableau de bord de suivi et **expliquer** le lien entre inventaire et tickets.

---

## 1. Ce qu'un outil de tickets doit faire, quel que soit le produit

En S03, tu as rédigé des tickets sur papier. Un outil ITSM (*IT Service Management*) apporte ce que le papier ne garantit pas :

| **Besoin** | **Ce que fait l'outil** |
|---|---|
| **Traçabilité** | Chaque demande a un numéro, un historique, des dates : on peut prouver ce qui a été fait |
| **Qualification** | Catégorie, impact et urgence sont des champs ; la **priorité est calculée**, pas choisie au feeling |
| **Lien avec le parc** | Le ticket est rattaché à l'équipement en cause : l'historique de chaque équipement se construit tout seul |
| **Cycle de vie** | Des statuts et des transitions contrôlées : on ne clôt pas un ticket sans solution |
| **Délais (SLA)** | L'outil mesure le temps écoulé et alerte avant le dépassement |
| **Mémoire** | La solution écrite alimente la base de connaissances |
| **Pilotage** | Statistiques : volumes, délais, respect des SLA, incidents récurrents |

### 1.1 La priorité se calcule

La priorité résulte de l'**impact** (combien de personnes ou de services sont touchés ?) et de l'**urgence** (quel délai le problème tolère-t-il ?). La matrice du simulateur InfraLab est celle-ci :

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

Chaque organisation définit sa propre matrice : les outils réels la rendent paramétrable. Deux incidents de même nature (une imprimante en panne) n'ont pas la même priorité si l'impact et l'urgence diffèrent.

### 1.2 Lier le ticket à l'équipement **en cause**

On lie l'équipement **concerné par la panne**, pas celui de la personne qui appelle : si Alice ne peut plus imprimer, c'est l'imprimante qui est en cause, pas le PC d'Alice. Lier le mauvais équipement fausse l'historique et envoie le technicien au mauvais endroit. Un ticket sans lien reste acceptable tant que l'équipement n'est pas identifié : on le demande à l'utilisateur.

### 1.3 Résolu, ce n'est pas clos

- **Résolu** : le technicien estime que c'est réglé et **a écrit la solution** (l'outil refuse sinon). Le demandeur peut contester : le ticket repasse en cours.
- **Clos** : plus aucune modification, le ticket est archivé. La clôture suit la confirmation du demandeur, ou survient automatiquement après un délai.

La solution écrite est la **mémoire du service** : c'est elle qui permet de traiter plus vite la prochaine occurrence (voir S04, base de connaissances).

### 1.4 Rôles : qui voit et fait quoi

Un utilisateur crée et suit **ses** tickets ; un technicien traite les tickets, consulte le parc ; un responsable suit les indicateurs ; un administrateur configure. L'outil applique ces **profils** : changer de profil change ce qu'on voit et ce qu'on peut faire.

## 2. Le simulateur InfraLab, côté ITSM

La vue **ITSM** d'[InfraLab](https://yahnlp.github.io/InfraLab/) regroupe : Parc, Tickets, Problèmes, Changements, Connaissances, Licences, Contrats, CMDB, Administration, Journal d'audit. La liste **« Agir en tant que »** de la barre du haut change l'identité active : essaie-la pour voir ce qu'un utilisateur ordinaire ne peut pas faire. L'horloge simulée (+1 h, +1 jour) fait avancer les SLA.

**Le cycle d'un ticket dans InfraLab :** Nouveau → Qualifié → Attribué → En cours → (En attente) → Résolu → Clos. Les catégories du simulateur sont volontairement courtes (Réseau, Matériel, Logiciel, Compte et accès, Demande de service) : un outil réel les rend configurables.

**Correspondance InfraLab ↔ GLPI** (le vocabulaire change, les notions restent) :

| **Notion** | **InfraLab** | **GLPI** |
|---|---|---|
| Créer un ticket | ITSM → Tickets → Nouveau ticket | Assistance → Créer un ticket |
| Catégorie | Catégorie et sous-catégorie | Catégorie |
| Priorité | Calculée : impact × urgence | Calculée : impact × urgence |
| Équipement concerné | « Lier un actif » | Onglet *Éléments* |
| Attribution | Technicien assigné | Onglet *Acteurs* |
| Historique et échanges | Commentaires | Suivis (privés ou publics) |
| Solution | Champ « solution » (obligatoire pour résoudre) | Onglet *Solution* |
| Statuts | Nouveau, Qualifié, Attribué, En cours, En attente, Résolu, Clos | Nouveau, En cours (attribué ou planifié), En attente, Résolu, Clos |
| Parc | ITSM → Parc | Parc → Ordinateurs, Imprimantes... |
| Base de connaissances | ITSM → Connaissances | Outils → Base de connaissances |

**Les activités de cette séance :**

| **Activité** | **Durée** | **Ce que tu y apprends** |
|---|---|---|
| TP 11 « Créer un ticket » | 25 min | Rédiger un ticket exploitable |
| TP 12 « Qualifier un incident » | 25 min | Catégorie, impact, urgence |
| **Une matinée au service desk** (fichier de la séance) | 60 min | Trier sept tickets, traiter dans le bon ordre, résoudre, clore, mesurer |
| TP 13, 14, 15 *(pour aller plus loin)* | 30 min chacun | Associer le bon équipement ; priorité ; résoudre et clore |

> [!WARNING]
> **Limite à connaître :** InfraLab simule. Il n'a ni portail utilisateur, ni messagerie, ni règles d'automatisation, ni SLA contractuels paramétrés comme dans GLPI. Il met en scène le raisonnement ; GLPI, lui, te confronte aux écrans et aux réglages d'un vrai produit.

## 3. Un outil réel : GLPI

### 3.1 Qu'est-ce que GLPI ?

**GLPI** (Gestion Libre de Parc Informatique) est un logiciel **ITSM** open source développé en PHP, très répandu en France. Il réunit dans un seul outil :

- la **gestion des tickets** (incidents, demandes, problèmes, changements) ;
- le **parc** (inventaire des équipements, base de gestion de configuration) ;
- la **base de connaissances** ;
- la **gestion des licences** et des contrats ;
- la **planification** et les **statistiques** (SLA, délais de résolution).

| **Paramètre** | **Valeur** |
|---|---|
| **Éditeur** | Teclib (France) et communauté open source |
| **Licence** | GPL v2 (gratuit) |
| **Technologies** | PHP + MySQL / MariaDB |
| **Interface** | Web (navigateur) |
| **Intégrations** | GLPI Agent (inventaire natif), OCS Inventory (plugin), LDAP / Active Directory, authentification unique |

> [!TIP]
> **Dans le monde professionnel :** GLPI est très répandu dans les collectivités, établissements d'enseignement, administrations et PME françaises. Il apparaît dans beaucoup de fiches de poste de technicien et d'administrateur.

### 3.2 Architecture

<figure class="graphe diagramme"><svg viewBox="0 0 840 430" style="max-width:840px" role="img" aria-label="Architecture de GLPI : utilisateurs, techniciens et administrateurs accèdent par navigateur à un serveur web hébergeant l&#x27;application GLPI, qui s&#x27;appuie sur une base MySQL ou MariaDB ; la base de parc est alimentée par OCS ou GLPI Agent" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="8" width="260" height="70" rx="8" class="dg-soft"/>
<text x="130.0" y="30.0" text-anchor="middle" class="dg-t">Utilisateurs</text>
<text x="130.0" y="48.0" text-anchor="middle" class="dg-s">créent des tickets</text>
<text x="130.0" y="66.0" text-anchor="middle" class="dg-s">(portail, e-mail)</text>
<line x1="130" y1="80" x2="411.1" y2="116.8" class="dg-line"/>
<polygon points="420,118 411.7,111.9 410.4,121.8" class="dg-ah"/>
<rect x="290" y="8" width="260" height="70" rx="8" class="dg-soft"/>
<text x="420.0" y="30.0" text-anchor="middle" class="dg-t">Techniciens</text>
<text x="420.0" y="48.0" text-anchor="middle" class="dg-s">traitent les tickets,</text>
<text x="420.0" y="66.0" text-anchor="middle" class="dg-s">consultent le parc</text>
<line x1="420" y1="80" x2="420.0" y2="109.0" class="dg-line"/>
<polygon points="420,118 425.0,109.0 415.0,109.0" class="dg-ah"/>
<rect x="580" y="8" width="260" height="70" rx="8" class="dg-soft"/>
<text x="710.0" y="30.0" text-anchor="middle" class="dg-t">Administrateurs</text>
<text x="710.0" y="48.0" text-anchor="middle" class="dg-s">configurent GLPI,</text>
<text x="710.0" y="66.0" text-anchor="middle" class="dg-s">gèrent les profils</text>
<line x1="710" y1="80" x2="428.9" y2="116.8" class="dg-line"/>
<polygon points="420,118 429.6,121.8 428.3,111.9" class="dg-ah"/>
<text x="610" y="116" text-anchor="middle" class="dg-i">HTTP / HTTPS</text>
<rect x="170" y="122" width="500" height="130" rx="10" class="dg-soft"/>
<text x="420" y="144" text-anchor="middle" class="dg-t">Serveur web : Apache ou Nginx + PHP</text>
<rect x="290" y="156" width="260" height="80" rx="8" class="dg-box"/>
<text x="420.0" y="192.0" text-anchor="middle" class="dg-t">Application GLPI</text>
<text x="420.0" y="210.0" text-anchor="middle" class="dg-s">interface, règles, workflows</text>
<line x1="420" y1="254" x2="420.0" y2="287.0" class="dg-line"/>
<polygon points="420,296 425.0,287.0 415.0,287.0" class="dg-ah"/>
<text x="445" y="282" text-anchor="middle" class="dg-i">SQL</text>
<rect x="290" y="298" width="260" height="68" rx="8" class="dg-ok"/>
<text x="420.0" y="319.0" text-anchor="middle" class="dg-t">Base de données</text>
<text x="420.0" y="337.0" text-anchor="middle" class="dg-s">MySQL / MariaDB : tickets, parc,</text>
<text x="420.0" y="355.0" text-anchor="middle" class="dg-s">utilisateurs, historique</text>
<rect x="0" y="298" width="230" height="68" rx="8" class="dg-soft"/>
<text x="115.0" y="328.0" text-anchor="middle" class="dg-t">OCS Inventory</text>
<text x="115.0" y="346.0" text-anchor="middle" class="dg-s">(plugin d&#x27;import)</text>
<line x1="232" y1="332" x2="279.0" y2="332.0" class="dg-line"/>
<polygon points="288,332 279.0,327.0 279.0,337.0" class="dg-ah"/>
<rect x="610" y="298" width="230" height="68" rx="8" class="dg-soft"/>
<text x="725.0" y="328.0" text-anchor="middle" class="dg-t">GLPI Agent</text>
<text x="725.0" y="346.0" text-anchor="middle" class="dg-s">(inventaire natif)</text>
<line x1="608" y1="332" x2="561.0" y2="332.0" class="dg-line"/>
<polygon points="552,332 561.0,337.0 561.0,327.0" class="dg-ah"/>
<text x="420" y="400" text-anchor="middle" class="dg-i">Alimentation automatique de la base de parc</text>
</svg>
<figcaption>GLPI : un serveur web, une application, une base de données</figcaption>
</figure>

### 3.3 Les modules essentiels

<figure class="graphe diagramme"><svg viewBox="0 0 840 300" style="max-width:840px" role="img" aria-label="Les modules de GLPI : tickets, parc (CMDB), base de connaissances et licences, reliés entre eux" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="60" width="230" height="150" rx="8" class="dg-box"/>
<text x="115.0" y="104.0" text-anchor="middle" class="dg-t">Tickets</text>
<text x="115.0" y="122.0" text-anchor="middle" class="dg-s">Incidents</text>
<text x="115.0" y="140.0" text-anchor="middle" class="dg-s">Demandes de service</text>
<text x="115.0" y="158.0" text-anchor="middle" class="dg-s">Problèmes</text>
<text x="115.0" y="176.0" text-anchor="middle" class="dg-s">Changements</text>
<rect x="305" y="60" width="230" height="150" rx="8" class="dg-ok"/>
<text x="420.0" y="113.0" text-anchor="middle" class="dg-t">Parc (CMDB)</text>
<text x="420.0" y="131.0" text-anchor="middle" class="dg-s">Ordinateurs, imprimantes</text>
<text x="420.0" y="149.0" text-anchor="middle" class="dg-s">Équipements réseau</text>
<text x="420.0" y="167.0" text-anchor="middle" class="dg-s">Logiciels, téléphones</text>
<rect x="610" y="60" width="230" height="150" rx="8" class="dg-box"/>
<text x="725.0" y="122.0" text-anchor="middle" class="dg-t">Connaissances</text>
<text x="725.0" y="140.0" text-anchor="middle" class="dg-s">Solutions aux incidents</text>
<text x="725.0" y="158.0" text-anchor="middle" class="dg-s">Procédures</text>
<line x1="232" y1="135" x2="294.0" y2="135.0" class="dg-line"/>
<polygon points="303,135 294.0,130.0 294.0,140.0" class="dg-ah"/>
<line x1="303" y1="135" x2="241.0" y2="135.0" class="dg-line"/>
<polygon points="232,135 241.0,140.0 241.0,130.0" class="dg-ah"/>
<line x1="612" y1="135" x2="546.0" y2="135.0" class="dg-line"/>
<polygon points="537,135 546.0,140.0 546.0,130.0" class="dg-ah"/>
<rect x="305" y="240" width="230" height="50" rx="8" class="dg-soft"/>
<text x="420.0" y="270.0" text-anchor="middle" class="dg-s">Licences, contrats</text>
<line x1="420" y1="238" x2="420.0" y2="221.0" class="dg-line"/>
<polygon points="420,212 415.0,221.0 425.0,221.0" class="dg-ah"/>
<text x="268" y="125" text-anchor="middle" class="dg-i">lien</text>
<text x="573" y="125" text-anchor="middle" class="dg-i">solution</text>
</svg>
<figcaption>Les modules de GLPI et leurs liens</figcaption>
</figure>

**Menu principal :**

| **Menu** | **Contenu** |
|---|---|
| **Accueil** | Tableau de bord : vue d'ensemble des tickets ouverts |
| **Parc** | Ordinateurs, moniteurs, logiciels, réseau, périphériques, imprimantes, téléphones |
| **Assistance** | Tickets, problèmes, changements, planification, statistiques |
| **Gestion** | Fournisseurs, contrats, documents, licences |
| **Outils** | Base de connaissances, notes, rapports |
| **Administration** | Utilisateurs, groupes, entités, profils |
| **Configuration** | Intitulés (catégories...), règles, plugins, authentification |

### 3.4 La fiche d'un ticket GLPI

Tous les champs que tu remplissais à la main en S03 deviennent des champs structurés et traçables :

| **Champ** | **Équivalent en S03** | **Dans GLPI** |
|---|---|---|
| **Titre** | Titre du ticket | Texte libre |
| **Type** | Incident / demande | Incident ou Demande |
| **Catégorie** | Domaine technique | Réseau, Système, Matériel, Logiciel... |
| **Demandeur** | Utilisateur concerné | Lié à l'annuaire (LDAP, AD) |
| **Technicien ou groupe** | Niveau N1, N2 | Onglet *Acteurs* |
| **Urgence et impact** | Matrice | Saisis séparément ; **priorité calculée** (de très basse à majeure) |
| **Statut** | Étape du cycle | Voir ci-dessous |
| **Suivi** | Actions N1 | Fil de messages, **privé** (techniciens) ou **public** (visible de l'utilisateur) |
| **Solution** | Résolution | Onglet *Solution*, lien possible vers la base de connaissances |
| **Éléments** | Équipement concerné | Onglet *Éléments* : lien vers le parc |
| **SLA** | Délai | Calculé, avec alerte avant dépassement |

### 3.5 Les statuts d'un ticket GLPI

<figure class="graphe diagramme"><svg viewBox="0 0 880 330" style="max-width:880px" role="img" aria-label="Statuts d&#x27;un ticket GLPI : nouveau, en cours attribué, en cours planifié, en attente, résolu, clos ; un ticket résolu peut être refusé et repasser en cours" xmlns="http://www.w3.org/2000/svg">
<g transform="translate(0,34)">
<rect x="0" y="40" width="170" height="70" rx="8" class="dg-box"/>
<text x="85.0" y="71.0" text-anchor="middle" class="dg-t">Nouveau</text>
<text x="85.0" y="89.0" text-anchor="middle" class="dg-s">créé, non pris en charge</text>
<rect x="190" y="40" width="170" height="70" rx="8" class="dg-box"/>
<text x="275.0" y="71.0" text-anchor="middle" class="dg-t">En cours</text>
<text x="275.0" y="89.0" text-anchor="middle" class="dg-s">attribué ou planifié</text>
<rect x="420" y="40" width="170" height="70" rx="8" class="dg-warn"/>
<text x="505.0" y="71.0" text-anchor="middle" class="dg-t">Résolu</text>
<text x="505.0" y="89.0" text-anchor="middle" class="dg-s">solution saisie</text>
<rect x="650" y="40" width="170" height="70" rx="8" class="dg-ok"/>
<text x="735.0" y="71.0" text-anchor="middle" class="dg-t">Clos</text>
<text x="735.0" y="89.0" text-anchor="middle" class="dg-s">validé, archivé</text>
<line x1="172" y1="75" x2="179.0" y2="75.0" class="dg-line"/>
<polygon points="188,75 179.0,70.0 179.0,80.0" class="dg-ah"/>
<line x1="362" y1="75" x2="409.0" y2="75.0" class="dg-line"/>
<polygon points="418,75 409.0,70.0 409.0,80.0" class="dg-ah"/>
<line x1="592" y1="75" x2="639.0" y2="75.0" class="dg-line"/>
<polygon points="648,75 639.0,70.0 639.0,80.0" class="dg-ah"/>
<text x="175" y="35" text-anchor="middle" class="dg-i"></text>
<rect x="190" y="200" width="170" height="60" rx="8" class="dg-soft"/>
<text x="275.0" y="226.0" text-anchor="middle" class="dg-t">En attente</text>
<text x="275.0" y="244.0" text-anchor="middle" class="dg-s">info utilisateur ou tiers</text>
<line x1="250" y1="112" x2="250.0" y2="189.0" class="dg-line"/>
<polygon points="250,198 255.0,189.0 245.0,189.0" class="dg-ah"/>
<line x1="300" y1="198" x2="300.0" y2="121.0" class="dg-dash"/>
<polygon points="300,112 295.0,121.0 305.0,121.0" class="dg-ah"/>
<text x="160" y="160" text-anchor="middle" class="dg-i">mise en attente</text>
<text x="372" y="160" text-anchor="middle" class="dg-i">reprise</text>
<path d="M505 40 C505 -10 275 -10 275 38" class="dg-dash"/>
<text x="390" y="2" text-anchor="middle" class="dg-i">refus : le ticket repasse en cours</text>
<text x="735" y="130" text-anchor="middle" class="dg-i">clôture après validation</text>
<text x="735" y="146" text-anchor="middle" class="dg-i">ou automatique (délai)</text>
</g>
</svg>
<figcaption>Les statuts d&#x27;un ticket GLPI</figcaption>
</figure>

> [!WARNING]
> **Résolu ≠ Clos.** « Résolu » : le technicien a saisi la solution. « Clos » : le ticket est terminé, après validation de l'utilisateur ou clôture automatique au bout d'un délai configurable.

### 3.6 Les profils

| **Profil** | **Accès** | **Peut faire** |
|---|---|---|
| **Super-admin** | Tout | Configuration complète |
| **Admin** | Tout sauf configuration système | Gérer utilisateurs, profils, entités |
| **Technicien** | Assistance et Parc | Créer et traiter des tickets, consulter le parc |
| **Responsable** | Supervision | Statistiques, SLA, rapports |
| **Utilisateur (self-service)** | Portail | Créer ses tickets, suivre ses tickets |
| **Observateur** | Lecture seule | Voir sans modifier |

### 3.7 Les catégories

Les catégories routent les tickets vers les bons groupes et alimentent les statistiques par domaine. Arborescence type pour SimIO SARL :

| **Catégorie** | **Sous-catégories** |
|---|---|
| **Matériel** | Poste fixe, portable, imprimante, périphérique |
| **Logiciel** | Système d'exploitation, bureautique, applications métier, sécurité |
| **Réseau** | Pas d'accès, lenteur, Wi-Fi, VPN |
| **Accès et comptes** | Mot de passe oublié ou expiré, droits insuffisants, création de compte |
| **Autre** | — |

> [!NOTE]
> Une arborescence trop fine n'est pas utilisée ; trop grossière, elle ne sert à rien. C'est un chantier à part entière.

### 3.8 Le lien inventaire → GLPI

Sans lien, les deux outils travaillent en silos : l'un connaît les postes, l'autre les tickets. En alimentant le parc de GLPI automatiquement (par **GLPI Agent**, ou par import depuis **OCS Inventory** grâce à son plugin), on obtient :

- les postes inventoriés qui apparaissent dans **Parc → Ordinateurs** ;
- des tickets **liés** à l'équipement concerné ;
- l'historique du poste visible depuis le ticket ;
- les changements matériels détectés par l'agent, visibles dans GLPI.

Pour l'import OCS : renseigner l'adresse du serveur OCS et un compte SQL dédié, tester la connexion, puis lancer la synchronisation initiale ; les postes OCS apparaissent dans le parc.

### 3.9 Statistiques et tableaux de bord

| **Rapport** | **Contenu** | **Usage** |
|---|---|---|
| **Tickets par statut** | Nouveau, en cours, résolu, clos | État des files d'attente |
| **Délai moyen de résolution (MTTR)** | Par catégorie | Mesure d'efficacité |
| **Tickets par technicien** | Charge individuelle | Management d'équipe |
| **Respect des SLA** | Part des tickets traités dans les délais | Engagement de service |
| **Tickets par catégorie** | Volume par domaine | Repérer les incidents récurrents |
| **Évolution mensuelle** | Tendance | Pilotage |

> [!NOTE]
> **Lien avec l'épreuve E5 :** savoir lire et commenter un tableau de bord est valorisable. Dire « j'ai configuré les SLA et produit le rapport mensuel pour la DSI » mobilise la compétence B1.2.

---

## À retenir

- Un outil de tickets garantit **traçabilité, priorité calculée, lien avec le parc, solution écrite**.
- La **priorité** vient de l'impact et de l'urgence ; on **lie l'équipement en cause**, pas celui de l'appelant.
- **Résolu** : solution écrite ; **clos** : archivé, après validation ou délai.
- Un suivi **privé** n'est visible que des techniciens ; un suivi **public** l'est aussi de l'utilisateur.
- Les **profils** décident de ce que chacun voit et fait.
- InfraLab simule le raisonnement ; **GLPI** est l'outil réel ; l'inventaire (OCS ou GLPI Agent) l'alimente.

## Je vérifie mes acquis

- [ ] J'explique pourquoi la priorité se calcule et je lis la matrice impact × urgence
- [ ] Je choisis l'équipement à lier à un ticket
- [ ] J'explique la différence entre « Résolu » et « Clos »
- [ ] J'explique l'architecture GLPI (serveur web, PHP, base de données)
- [ ] Je navigue dans les menus principaux de GLPI
- [ ] Je crée, qualifie, affecte, résous et clos un ticket
- [ ] Je distingue un suivi privé d'un suivi public
- [ ] Je lis les statistiques (délais, SLA, volumes)
