# Cours – Le catalogue de services

*BTS SIO SISR 1re année – Bloc 1 – S09*

> [!NOTE] Ce que tu dois savoir déjà
> - **Prérequis :** S06, S07.
> - **À garder en tête :** lis le cours **avant** le TP ; la section « À retenir » en fin de cours résume l'essentiel.

## À la fin de ce cours, tu sauras

- [ ] **Définir** un catalogue de services et ses deux vues (utilisateurs, techniciens) ;
- [ ] **Rédiger** une fiche de service ;
- [ ] **Classer** des services en catégories ;
- [ ] **Situer** le catalogue dans GLPI ;
- [ ] **Décrire** le cycle de vie d'un service ;
- [ ] **Distinguer** PCA et PRA et **vérifier** les conditions de continuité d'un service ;
- [ ] **Distinguer** sauvegarder, conserver et archiver, et citer des durées légales indicatives.

---


## 1. Définition et Rôle du Catalogue de Services

### 1.1 Définition ITIL

En ITIL 4, le **catalogue de services** est la liste complète et structurée de tous les services IT disponibles, publiée à destination des utilisateurs et des clients internes.

Il répond à la question fondamentale que tout utilisateur se pose :

> *"Qu'est-ce que la DSI peut faire pour moi, et comment le demander ?"*

### 1.2 Les Deux Vues du Catalogue

ITIL distingue deux catalogues complémentaires qui servent des publics différents :

```
   ┌───────────────────────────────────────────────────────────────┐
   │              CATALOGUE DE SERVICES                            │
   │                                                               │
   │   VUE MÉTIER (Utilisateurs)     VUE TECHNIQUE (DSI)          │
   │   ──────────────────────────    ───────────────────────────   │
   │   "Accès à la messagerie"       Serveur Exchange 2019         │
   │   "Que peut-il faire ?"         Architecture HA, 2 nœuds      │
   │   "Comment y accéder ?"         Composants : AD, DNS, MX...   │
   │   "Que faire si ça ne marche    SLA : 99,9% / RTO 2h          │
   │    pas ?"                       Responsable technique : X      │
   │   "Quel délai si panne ?"       Procédures exploitation        │
   │                                                               │
   │   → Publié sur le portail       → Document interne DSI        │
   │     GLPI, intranet                (DAT, CMDB)                 │
   └───────────────────────────────────────────────────────────────┘
```

> [!TIP]
> **La règle d'or de la vue métier :** Jamais de jargon technique. Si l'utilisateur doit connaître un terme technique pour comprendre la fiche de service, c'est que la fiche est mal rédigée.

### 1.3 Pourquoi un Catalogue de Services ?

| **Bénéfice** | **Pour les utilisateurs** | **Pour la DSI** |
|---|---|---|
| **Visibilité** | Savent ce qui existe | Peuvent communiquer leur offre |
| **Autonomie** | Savent comment accéder sans appeler | Réduction des demandes informelles |
| **Attentes réalistes** | Connaissent les SLA et délais | Réduction des plaintes injustifiées |
| **Gouvernance** | — | Base pour les priorités budgétaires |
| **Onboarding** | Nouveaux employés autonomes plus vite | Réduction des appels helpdesk N1 |
| **Amélioration continue** | Peuvent évaluer les services | Mesure de satisfaction formalisée |

## 2. La Fiche de Service

### 2.1 Structure d'une Fiche de Service

Une **fiche de service** est le document unitaire décrivant un service spécifique. Elle contient :

| **Section** | **Contenu** | **Exemple — Service Messagerie** |
|---|---|---|
| **Nom du service** | Nom clair et court en termes métier | Messagerie d'entreprise |
| **Description** | Ce que le service fait pour l'utilisateur (2-3 phrases, zéro jargon) | "Permet d'envoyer et recevoir des emails professionnels depuis votre poste, smartphone ou navigateur web." |
| **Bénéficiaires** | Qui peut utiliser ce service | Tous les employés de SimIO SARL |
| **Conditions d'accès** | Ce qu'il faut pour en bénéficier | Compte Active Directory actif |
| **Comment accéder** | Procédure simple pour commencer | "Ouvrir Outlook sur votre poste — vos identifiants réseau sont les mêmes" |
| **Fonctionnalités incluses** | Ce que couvre le service | Email, agenda partagé, contacts, salle de réunion |
| **Ce qui est EXCLU** | Limitations importantes | Pièces jointes > 25 Mo — stockage personnel illimité (OneDrive séparé) |
| **Disponibilité** | Plage horaire + SLA | 24h/24 — SLA 99,9% — hors maintenance planifiée dimanche 22h-6h |
| **Délai de support** | Selon priorité | P1 < 4h, P3 < 24h |
| **Comment signaler un problème** | Canal de contact | Ticket GLPI — Catégorie : Logiciel > Messagerie |
| **Responsable technique** | Contact DSI | [Technicien désigné] |
| **Dernière révision** | Date et version | 2024-09-01 — v1.0 |

### 2.2 Les Catégories de Services IT

Un catalogue de services est organisé en **catégories** cohérentes. Voici une organisation typique pour une PME :

```
   CATALOGUE DE SERVICES IT — SimIO SARL
   ─────────────────────────────────────────────────────────────────

   COMMUNICATION
   ├── Messagerie d'entreprise
   ├── Calendrier et salles de réunion
   └── Téléphonie (fixe / mobile)

   DONNÉES ET STOCKAGE
   ├── Partage de fichiers (dossiers réseau)
   ├── Sauvegarde et restauration
   └── Archivage

   POSTE DE TRAVAIL
   ├── Installation et configuration d'un poste
   ├── Logiciels métier et bureautique
   └── Impression

   ACCÈS ET IDENTITÉ
   ├── Création / modification de compte
   ├── Réinitialisation de mot de passe
   └── Accès VPN (télétravail)

   RÉSEAU ET CONNECTIVITÉ
   ├── Accès Internet
   ├── WiFi entreprise
   └── Connexion filaire

   SUPPORT ET ASSISTANCE
   ├── Helpdesk N1 (centre de services)
   ├── Dépannage sur site
   └── Formation utilisateur
```

### 2.3 Le Catalogue dans GLPI

GLPI peut exposer le catalogue de services directement sur le **portail utilisateur**. Chaque service du catalogue devient une **catégorie de ticket** avec des formulaires adaptés.

```
   PORTAIL GLPI UTILISATEUR
   ─────────────────────────────────────────────────────────────────
   L'utilisateur arrive sur le portail et voit :

   ┌────────────────────────────────────────────────────────────┐
   │   Problème avec mon mot de passe                        │
   │   Ma messagerie ne fonctionne pas                       │
   │   Mon imprimante ne répond pas                          │
   │   Je ne peux pas accéder à un dossier partagé           │
   │   Je souhaite installer un logiciel                     │
   │  🆕 Demande de création de compte                        │
   │   Autre demande                                         │
   └────────────────────────────────────────────────────────────┘

   Chaque tuile crée automatiquement un ticket avec :
   - La catégorie pré-remplie
   - Les champs adaptés à ce type de demande
   - L'affectation automatique au bon groupe technique
   - Le SLA correspondant appliqué automatiquement
```

### 2.4 Cycle de Vie d'un Service dans le Catalogue

Un service n'est pas éternel. ITIL définit son cycle de vie dans le catalogue :

```
   NOUVEAU SERVICE          SERVICE ACTIF           SERVICE RETIRÉ
   ───────────────          ─────────────           ──────────────
   Analyse du besoin   →    Disponible dans    →    Annonce de
   Construction            le catalogue            fin de service
   Tests                   SLA suivi               Migration
   Communication           Améliorations           Retrait du
   → Mise en service        selon retours           catalogue
     (PV — S7)                                     Archivage
```

---

## 3. Criticité, continuité et reprise d'activité

Chaque fiche de service indique sa **disponibilité attendue**. Plus un service est critique, plus il faut prévoir ce qui se passe quand il tombe : c'est l'objet des plans de continuité et de reprise.

### 3.1 PCA et PRA : continuer ou redémarrer

| **Plan** | **Question à laquelle il répond** | **Objectif** | **Exemple** |
|---|---|---|---|
| **PCA** (plan de continuité d'activité) | « Comment continuer à travailler **pendant** la panne ? » | Maintenir un service minimal, parfois en **mode dégradé** | Le site garde un serveur de secours ; en dernier recours, les commandes se prennent sur papier |
| **PRA** (plan de reprise d'activité) | « Comment **repartir** après le sinistre ? » | Rétablir le système d'information dans un délai et avec une perte de données acceptables | Restaurer la configuration du switch cœur et les données du serveur de fichiers |

Deux mesures encadrent ces plans, vues en S07 (RTO et RPO) :

- le **RTO** : durée maximale d'interruption acceptable ;
- le **RPO** : quantité maximale de données que l'on accepte de perdre, exprimée en durée (« les 24 dernières heures »).

### 3.2 Ce que contient un plan

1. Les **activités critiques** et les services qui les portent.
2. Le **RTO** et le **RPO** de chaque service.
3. Les **solutions de secours** (sauvegardes, matériel, site de repli).
4. Les **rôles et les contacts** : qui décide, qui exécute, qui prévient.
5. Les **procédures** de bascule et de restauration, à jour.
6. Les **tests périodiques**, avec leur compte rendu.

### 3.3 Le rôle du technicien : vérifier et signaler

Le technicien ne rédige pas seul le plan, mais il **vérifie que les conditions de la continuité sont réunies** et **signale les manquements**.

| **Vérification** | **Manquement si…** |
|---|---|
| La dernière sauvegarde est assez récente | son âge dépasse le RPO du service |
| Une restauration a été testée | aucun test récent n'existe (règle de l'organisation, par exemple au moins une fois par an) |
| La procédure est à jour | elle décrit une version ancienne du service |
| Le matériel ou le service de secours est disponible | il manque ou il est périmé |

> [!NOTE]
> **Exemple chiffré.** La configuration du switch cœur est sauvegardée une fois par mois (voir S11 pour la sauvegarde des configurations). Son RPO attendu est de 24 heures. Dans le pire cas, on perd 30 jours de modifications, soit 30 fois plus que prévu : c'est un **manquement** à signaler (ticket ou rapport), avec une proposition : sauvegarde automatique après chaque modification.

## 4. Conserver, sauvegarder, archiver

Ces trois mots ne veulent pas dire la même chose.

| **Action** | **But** | **Exemple** |
|---|---|---|
| **Sauvegarder** | Pouvoir **restaurer** après une perte | Copie quotidienne du serveur de fichiers |
| **Conserver** | Garder une donnée **utile** à l'activité pendant une durée définie | Dossier client actif |
| **Archiver** | Garder une donnée à valeur **légale ou probante**, de façon intègre et à accès restreint | Factures des exercices clos |

Une donnée suit un cycle : **base active**, puis **archive intermédiaire** (accès rare, durée légale à respecter), puis **destruction** ou archivage définitif. La destruction fait partie de l'obligation : une donnée personnelle ne doit pas être gardée plus longtemps que nécessaire.

**Ordres de grandeur de durées (à vérifier sur des sources officielles avant usage)**

| **Donnée** | **Durée indicative** |
|---|---|
| Journaux de connexion conservés par les hébergeurs et les fournisseurs d'accès | 1 an |
| Pièces comptables et factures | 10 ans |
| Bulletins de paie (copie conservée par l'employeur) | 5 ans |
| Données personnelles en général | Durée fixée par le responsable de traitement, proportionnée à la finalité |

Le technicien applique la **politique de conservation** de son organisation : il ne supprime pas ce qui doit être gardé et il purge ce qui doit être détruit. Pour l'intégrité d'une archive, on note la date et on calcule une empreinte (voir la séance S18 de CEJM pour la preuve électronique et la séance S05 du bloc 3 pour la sauvegarde).

## À retenir

- Un **catalogue de services** décrit ce que l'organisation offre, du point de vue de l'**utilisateur**.
- Chaque **fiche de service** précise description, public, disponibilité, engagements, procédure de demande et contact.
- Le catalogue relie les services au **SLA** et aux **procédures**.
- Il est **tenu à jour** : une fiche périmée est pire qu'une fiche absente.
- Le **PCA** fait continuer l'activité pendant la panne ; le **PRA** la fait repartir après. Le technicien **vérifie** les conditions (sauvegarde récente, restauration testée, procédure à jour) et **signale** les manquements.
- **Sauvegarder**, **conserver** et **archiver** sont trois actions différentes ; on applique la politique de conservation de l'organisation.

