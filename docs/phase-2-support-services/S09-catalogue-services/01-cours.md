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
- [ ] **Décrire** le cycle de vie d'un service.

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

   📧 COMMUNICATION
   ├── Messagerie d'entreprise
   ├── Calendrier et salles de réunion
   └── Téléphonie (fixe / mobile)

   💾 DONNÉES ET STOCKAGE
   ├── Partage de fichiers (dossiers réseau)
   ├── Sauvegarde et restauration
   └── Archivage

   🖥️ POSTE DE TRAVAIL
   ├── Installation et configuration d'un poste
   ├── Logiciels métier et bureautique
   └── Impression

   🔒 ACCÈS ET IDENTITÉ
   ├── Création / modification de compte
   ├── Réinitialisation de mot de passe
   └── Accès VPN (télétravail)

   🌐 RÉSEAU ET CONNECTIVITÉ
   ├── Accès Internet
   ├── WiFi entreprise
   └── Connexion filaire

   🛠️ SUPPORT ET ASSISTANCE
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
   │  🔑 Problème avec mon mot de passe                        │
   │  📧 Ma messagerie ne fonctionne pas                       │
   │  🖨️ Mon imprimante ne répond pas                          │
   │  💾 Je ne peux pas accéder à un dossier partagé           │
   │  💻 Je souhaite installer un logiciel                     │
   │  🆕 Demande de création de compte                        │
   │  📞 Autre demande                                         │
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

## À retenir

- Un **catalogue de services** décrit ce que l'organisation offre, du point de vue de l'**utilisateur**.
- Chaque **fiche de service** précise description, public, disponibilité, engagements, procédure de demande et contact.
- Le catalogue relie les services au **SLA** et aux **procédures**.
- Il est **tenu à jour** : une fiche périmée est pire qu'une fiche absente.

