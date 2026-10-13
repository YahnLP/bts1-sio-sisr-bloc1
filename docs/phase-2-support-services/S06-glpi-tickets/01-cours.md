# Cours – GLPI : gestion libre de parc informatique

*BTS SIO SISR 1re année – Bloc 1 – S06*

> [!NOTE] Ce que tu dois savoir déjà
> - **Prérequis :** S03 (tickets), S05 (OCS).
> - **À garder en tête :** lis le cours **avant** le TP ; la section « À retenir » en fin de cours résume l'essentiel.

## À la fin de ce cours, tu sauras

- [ ] **Décrire** l'architecture de GLPI et ses profils d'utilisateurs ;
- [ ] **Créer**, **affecter**, **escalader** et **clôturer** un ticket ;
- [ ] **Lire** un tableau de bord de suivi ;
- [ ] **Expliquer** le lien entre l'inventaire (OCS) et les tickets (GLPI) ;
- [ ] **Installer** GLPI à partir d'un script (annexe).

---


## 1. Présentation de GLPI

### 1.1 Qu'est-ce que GLPI ?

**GLPI** (Gestion Libre de Parc Informatique) est un logiciel **ITSM** (IT Service Management) open source développé en PHP, très répandu en France. Il intègre dans un seul outil :

- La **gestion des tickets** (incidents, demandes, problèmes, changements)
- La **CMDB** (inventaire des actifs IT)
- La **base de connaissances** (solutions aux incidents récurrents)
- La **gestion des licences** logicielles
- La **planification** des maintenances et interventions
- Les **statistiques et rapports** de performance (SLA, MTTR...)

| **Paramètre** | **Valeur** |
|---|---|
| **Éditeur** | Teclib (France) + communauté open source |
| **Licence** | GPL v2 (gratuit) |
| **Langage** | PHP + MySQL/MariaDB |
| **Interface** | Web (navigateur) |
| **Plateformes** | Tout serveur Linux/Windows avec Apache/Nginx + PHP |
| **Utilisateurs** | + de 300 000 organisations dans le monde |
| **Intégration** | OCS Inventory, FusionInventory, LDAP/AD, SSO |

> [!TIP]
> **GLPI dans le monde professionnel :** GLPI est l'outil ITSM le plus déployé dans les collectivités territoriales, établissements d'enseignement, administrations et PME françaises. Il est mentionné dans de très nombreuses fiches de poste technicien / admin système. Le maîtriser vous différencie immédiatement.

### 1.2 Architecture GLPI

```
   UTILISATEURS FINAUX        TECHNICIENS              ADMINISTRATEURS
   (créent des tickets        (traitent les tickets,   (configurent GLPI,
   via portail ou email)      accèdent à la CMDB)      gèrent les profils)
         │                          │                          │
         └──────────────────────────┴──────────────────────────┘
                                    │
                             HTTP / HTTPS
                                    │
                    ┌───────────────▼──────────────────┐
                    │         SERVEUR WEB               │
                    │    Apache / Nginx + PHP 8.x       │
                    │                                   │
                    │    ┌─────────────────────────┐   │
                    │    │    APPLICATION GLPI      │   │
                    │    │   (interface, logique,   │   │
                    │    │    règles, workflows)    │   │
                    │    └────────────┬────────────┘   │
                    └─────────────────┼────────────────┘
                                      │ SQL
                    ┌─────────────────▼────────────────┐
                    │         BASE DE DONNÉES           │
                    │       MySQL / MariaDB             │
                    │  (tickets, actifs, utilisateurs,  │
                    │   connaissances, historique...)   │
                    └──────────────────────────────────┘

   ───── ALIMENTATION AUTOMATIQUE DE LA CMDB ─────

   OCS Inventory ──── Plugin OCS Import ────►  GLPI CMDB
   (inventaire)                                (actifs liés aux tickets)

   FusionInventory ─── Agent natif GLPI ────►  GLPI CMDB
   (alternative OCS)
```

### 1.3 La Place de GLPI dans l'Écosystème ITSM

```
   ┌─────────────────────────────────────────────────────────┐
   │                      GLPI                               │
   │                                                         │
   │  ┌──────────────┐    ┌─────────────┐   ┌───────────┐  │
   │  │   TICKETS     │    │    CMDB     │   │    KB     │  │
   │  │ Incidents     │◄──►│ Computers   │◄──│ Solutions │  │
   │  │ Demandes      │    │ Printers    │   │ Procédures│  │
   │  │ Problèmes     │    │ Network     │   └───────────┘  │
   │  │ Changements   │    │ Software    │                   │
   │  └──────────────┘    └──────┬──────┘   ┌───────────┐  │
   │                             │           │ LICENCES  │  │
   │                    ┌────────▼────┐      │ Audit     │  │
   │                    │ OCS Import  │      │ Expiration│  │
   │                    │  (plugin)   │      └───────────┘  │
   │                    └────────┬────┘                     │
   └─────────────────────────────┼───────────────────────────┘
                                  │
                        ┌─────────▼──────────┐
                        │   OCS Inventory    │
                        │   (agents postes)  │
                        └────────────────────┘
```

## 2. Interface GLPI : Les Modules Essentiels

### 2.1 Menu Principal

```
   GLPI — Barre de navigation principale
   ─────────────────────────────────────────────────────────────────
   Accueil   Parc   Assistance   Gestion   Outils   Admin   Config
      │        │        │           │         │        │        │
      │        │        │           │         │        │        └─ Profils, LDAP,
      │        │        │           │         │        │           Plugins, Règles
      │        │        │           │         │        └─ Utilisateurs, Entités
      │        │        │           │         └─ Prise de notes, Tâches, Rapports
      │        │        │           └─ Fournisseurs, Contrats, Documents, Licences
      │        │        └─ Tickets ★, Problèmes, Changements, Planification
      │        └─ Ordinateurs ★, Moniteurs, Logiciels, Réseau,
      │           Périphériques, Imprimantes, Téléphones
      └─ Tableau de bord — Vue d'ensemble des tickets ouverts
```

### 2.2 La Fiche d'un Ticket GLPI

Un ticket dans GLPI contient tous les champs que vous remplissez manuellement depuis S3 — mais dans une interface structurée et traçable :

| **Champ** | **Équivalent cours** | **Options GLPI** |
|---|---|---|
| **Titre** | Titre du ticket | Texte libre |
| **Type** | Incident / Demande | Incident / Demande de service |
| **Catégorie** | Domaine technique | Réseau, Système, Matériel, Logiciel, Sécurité... |
| **Demandeur** | Utilisateur concerné | Lié à l'annuaire GLPI / LDAP / AD |
| **Technicien affecté** | Niveau N1/N2 | Utilisateur ou groupe technique |
| **Priorité** | P1 à P4 | 1-Très haute à 5-Très basse (calculée automatiquement) |
| **Urgence + Impact** | Matrice S3 | Saisie séparée → priorité calculée |
| **Statut** | Étape du cycle | Nouveau → En cours → En attente → Résolu → Clôturé |
| **Description** | Description incident | Texte riche (images, fichiers joints) |
| **Suivi** | Actions N1 dans le ticket | Fils de messages (internes ou publics) |
| **Solution** | Résolution | Texte + lien KB optionnel |
| **CI lié** | Équipement concerné | Lié à un actif de la CMDB |
| **SLA** | Délai contractuel | Calculé automatiquement, alerte si dépassement |

### 2.3 Cycle de Vie d'un Ticket dans GLPI

```
   STATUT          ACTION                    QUI
   ──────────────────────────────────────────────────────────────
   [ Nouveau ]  ← Ticket créé (portail, email, téléphone)
        │
        ▼
   [ En cours   ← Technicien s'affecte ou est affecté
     (attribué)]
        │
        ▼
   [ En cours   ← Technicien travaille sur la résolution
     (planifié)]
        │
        ├──► [ En attente ] ← En attente d'info utilisateur / fournisseur
        │         │
        │         └──► Retour à En cours dès réponse reçue
        │
        ▼
   [ Résolu   ] ← Solution saisie par le technicien
        │
        ▼
   [ Clôturé  ] ← Validé par l'utilisateur OU clôture automatique (ex. 72h)
```

> [!WARNING]
> **Différence importante :** "Résolu" signifie que le technicien a appliqué une solution. "Clôturé" signifie que l'utilisateur a confirmé que la solution fonctionne. Un ticket peut rester en "Résolu" plusieurs jours si l'utilisateur n'a pas encore confirmé. La clôture automatique après X jours est configurable.

### 2.4 Les Profils Utilisateurs dans GLPI

GLPI gère des **profils** (rôles) qui définissent ce que chaque type d'utilisateur peut voir et faire :

| **Profil** | **Accès** | **Peut faire** |
|---|---|---|
| **Super-Admin** | Tout | Configuration complète, tous les modules |
| **Admin** | Tout sauf configuration système | Gérer utilisateurs, profils, entités |
| **Technicien** | Assistance + Parc | Créer/traiter tickets, consulter CMDB |
| **Responsable** | Supervision | Voir statistiques, SLA, rapports |
| **Utilisateur final** | Portail uniquement | Créer tickets pour soi-même, consulter ses tickets |
| **Observateur** | Lecture seule | Voir sans modifier |

### 2.5 Les Catégories de Tickets

Les **catégories** permettent de router automatiquement les tickets vers les bons groupes techniques et d'alimenter les statistiques par domaine. Une bonne arborescence de catégories est essentielle :

```
Exemple d'arborescence de catégories SimIO SARL :

├── Matériel
│   ├── Ordinateur (poste fixe)
│   ├── Laptop
│   ├── Imprimante
│   └── Périphérique
├── Logiciel
│   ├── Système d'exploitation
│   ├── Bureautique (Office)
│   ├── Métier (ERP, CRM...)
│   └── Sécurité (antivirus)
├── Réseau
│   ├── Connectivité (pas d'accès)
│   ├── Lenteur réseau
│   ├── WiFi
│   └── VPN
├── Accès et Comptes
│   ├── Mot de passe oublié / expiré
│   ├── Droits insuffisants
│   └── Création de compte
└── Autre
```

## 3. Le Lien OCS → GLPI

### 3.1 Pourquoi Lier OCS et GLPI ?

Sans lien OCS-GLPI, les deux outils fonctionnent en silos :
- OCS a l'inventaire des postes
- GLPI a les tickets d'incidents

Avec le lien OCS-GLPI (via le plugin **OCS Inventory NG**) :
- Les postes inventoriés par OCS apparaissent automatiquement dans la CMDB GLPI
- Un ticket peut être lié au CI du poste concerné
- L'historique matériel du poste est visible depuis le ticket
- Les changements matériels détectés par OCS sont visibles dans GLPI

### 3.2 Configuration du Plugin OCS Import

**Depuis GLPI (Administration → Plugins → OCS Inventory NG) :**

```
Étapes de configuration :

1. Renseigner l'URL du serveur OCS
   Serveur OCS : http://[IP_OCS]/ocsreports

2. Compte de connexion à la base OCS
   Login : glpi (compte SQL dédié, créé sur le serveur OCS)
   Password : [mot de passe]

3. Options d'import :
   ☑ Synchroniser les ordinateurs      → importer les postes OCS
   ☑ Mettre à jour automatiquement     → synchro lors des scans OCS
   ☑ Importer les logiciels            → liste logiciels dans CMDB

4. Tester la connexion
   → "Test de connexion" → attendu : "Connexion réussie"

5. Lancer l'import initial
   → "Synchroniser GLPI avec OCS" → les postes OCS apparaissent
     dans Parc → Ordinateurs
```

### 3.3 Résultat dans GLPI

Après import OCS, chaque poste inventorié par OCS devient un **CI (Configuration Item)** dans GLPI :

```
GLPI → Parc → Ordinateurs → [Poste importé depuis OCS]

Informations disponibles :
├── Matériel (CPU, RAM, disque) ← vient d'OCS
├── Logiciels installés         ← vient d'OCS
├── Réseau (IP, MAC)            ← vient d'OCS
├── Tickets liés                ← ajoutés par les techniciens dans GLPI
├── Historique des modifications ← suivi automatique
└── Utilisateur affecté         ← configuré dans GLPI
```

## 4. Statistiques et Tableaux de Bord

GLPI génère automatiquement des statistiques exploitables pour le reporting DSI :

| **Rapport** | **Contenu** | **Usage** |
|---|---|---|
| **Tickets par statut** | Volume Nouveau / En cours / Résolu / Clôturé | État des files d'attente |
| **MTTR moyen** | Temps de résolution par catégorie | Mesure d'efficacité |
| **Tickets par technicien** | Charge de travail individuelle | Management d'équipe |
| **Respect SLA** | % tickets traités dans les délais | Contractuel |
| **Tickets par catégorie** | Volume par domaine technique | Identifier les incidents récurrents |
| **Évolution mensuelle** | Tendance sur 12 mois | Pilotage long terme |

> [!NOTE]
> **Lien avec l'E5 :** Savoir lire et commenter un tableau de bord GLPI est une compétence valorisable devant le jury E5. Un apprenant qui dit "j'ai configuré les SLA et généré les rapports mensuels pour la DSI" montre qu’il mobilise la compétence B1.2.

## À retenir

- Un **suivi privé** n'est visible que des techniciens ; un suivi **public** l'est aussi de l'utilisateur.
- On **lie** le ticket à l'équipement concerné (onglet *Éléments*).
- Les **statistiques** donnent les délais et les volumes.
- Les **profils** décident de ce que chacun voit et fait.

## Je vérifie mes acquis

- [ ] J'explique l'architecture GLPI (serveur web + PHP + MySQL)
- [ ] Je navigue dans les menus principaux de GLPI
- [ ] Je crée un ticket avec tous les champs obligatoires
- [ ] Je catégorise et affecte un ticket à un technicien
- [ ] Je fais avancer le statut d'un ticket jusqu'à la clôture
- [ ] J'explique la différence entre "Résolu" et "Clôturé"
- [ ] Je sais configurer le lien OCS → GLPI via le plugin
- [ ] Je consulte les statistiques GLPI (MTTR, SLA)
