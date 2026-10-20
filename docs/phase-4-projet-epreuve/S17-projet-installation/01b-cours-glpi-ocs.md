# Cours – GLPI, OCS, catalogue de services : rappels et approfondissement

*BTS SIO SISR 1re année – Bloc 1 – S17*

## 1. GLPI (Rappels + Approfondissement)

### 1.1 Rappel : Qu'est-ce que GLPI ?

**GLPI** (Gestion Libre de Parc Informatique) est un logiciel open source de :
- **Gestion de parc** (inventaire matériel et logiciel)
- **Helpdesk** (gestion des tickets d'incidents et demandes)
- **Gestion des actifs IT** (licences, contrats, fournisseurs)

```
   GLPI — FONCTIONNALITÉS PRINCIPALES
   ─────────────────────────────────────────────────────────────

   ① INVENTAIRE
      • Matériel (PC, serveurs, imprimantes, téléphones)
      • Logiciels (licences, versions)
      • Réseau (switches, routeurs, IP)

   ② HELPDESK
      • Tickets d'incidents
      • Tickets de demandes de service
      • Suivi et historique

   ③ GESTION ADMINISTRATIVE
      • Contrats (maintenance, support)
      • Fournisseurs
      • Budgets

   ④ BASE DE CONNAISSANCES
      • Articles de résolution
      • FAQ
      • Procédures
```

**Chiffres clés :**
- 15 000+ organisations utilisent GLPI
- Disponible en 45 langues
- 500+ plugins disponibles

### 1.2 OCS Inventory — Inventaire Automatique

**OCS Inventory** est un outil d'inventaire automatique qui remonte les informations vers GLPI.

<figure class="graphe diagramme"><svg viewBox="0 0 780 190" style="max-width:780px" role="img" aria-label="Remontée d&#x27;inventaire : agent OCS, serveur OCS, GLPI" xmlns="http://www.w3.org/2000/svg">
<rect x="10" y="40" width="200" height="100" rx="8" class="dg-box"/>
<text x="110.0" y="77.0" text-anchor="middle" class="dg-t">Agent OCS</text>
<text x="110.0" y="95.0" text-anchor="middle" class="dg-s">sur chaque poste</text>
<text x="110.0" y="113.0" text-anchor="middle" class="dg-s">tâche planifiée</text>
<rect x="290" y="40" width="200" height="100" rx="8" class="dg-ok"/>
<text x="390.0" y="77.0" text-anchor="middle" class="dg-t">Serveur OCS Inventory</text>
<text x="390.0" y="95.0" text-anchor="middle" class="dg-s">reçoit et stocke</text>
<text x="390.0" y="113.0" text-anchor="middle" class="dg-s">met à disposition (API)</text>
<rect x="570" y="40" width="200" height="100" rx="8" class="dg-dark"/>
<text x="670.0" y="77.0" text-anchor="middle" class="dg-w">GLPI</text>
<text x="670.0" y="95.0" text-anchor="middle" class="dg-s">plugin OCS : importe</text>
<text x="670.0" y="113.0" text-anchor="middle" class="dg-s">affiche l&#x27;inventaire</text>
<line x1="210" y1="90" x2="281.0" y2="90.0" class="dg-line"/>
<polygon points="290,90 281.0,85.0 281.0,95.0" class="dg-ah"/>
<text x="250" y="78" text-anchor="middle" class="dg-s">inventaire</text>
<line x1="570" y1="90" x2="499.0" y2="90.0" class="dg-dash"/>
<polygon points="490,90 499.0,95.0 499.0,85.0" class="dg-ah"/>
<text x="530" y="78" text-anchor="middle" class="dg-s">import</text>
</svg>
</figure>

- **Agent OCS** (sur chaque poste) : tâche planifiée (ex. tous les jours à 9 h), scanne le matériel (CPU, RAM, disques, réseau) et les logiciels installés, envoie les données au serveur OCS.
- **Serveur OCS Inventory** : reçoit les données des agents, les stocke dans sa base et les met à disposition par API.
- **GLPI** : se connecte au serveur OCS par plugin, importe automatiquement les nouveaux ordinateurs, met à jour l'inventaire existant et affiche tout dans son interface.

**Avantages :**
- **Avantage :** Inventaire automatique (pas de saisie manuelle)
- **Avantage :** Mise à jour en temps réel
- **Avantage :** Détection des changements matériels/logiciels
- **Avantage :** Conformité licences (détecter les logiciels non autorisés)

## 2. Le Catalogue de Services

### 2.1 Définition

Un **catalogue de services IT** est la liste structurée de tous les services proposés par la DSI aux utilisateurs.

```
   CATALOGUE DE SERVICES = MENU DE LA DSI

   Comme un menu de restaurant :
   ────────────────────────────────────────────────────────────
   • Liste tous les plats disponibles (services)
   • Indique les ingrédients (prérequis)
   • Précise les délais de préparation (SLA)
   • Affiche les prix (coûts si applicable)

   Catalogue de services IT :
   ────────────────────────────────────────────────────────────
   • Liste tous les services IT disponibles
   • Décrit comment les demander
   • Indique les délais de livraison (SLA)
   • Précise les conditions d'accès
```

### 2.2 Structure d'un Catalogue

**Organisation en 3 niveaux :**

```
NIVEAU 1 — CATÉGORIES PRINCIPALES
├── Support Utilisateur
├── Infrastructure & Réseau
├── Applications Métier
└── Sécurité

NIVEAU 2 — SOUS-CATÉGORIES
└── Support Utilisateur
    ├── Compte et Authentification
    ├── Poste de Travail
    ├── Messagerie
    └── Impression

NIVEAU 3 — SERVICES DÉTAILLÉS
└── Compte et Authentification
    ├── Création de compte utilisateur
    ├── Réinitialisation mot de passe
    ├── Déblocage de compte
    └── Modification droits d'accès
```

### 2.3 Fiche de Service Type

Chaque service du catalogue doit avoir une **fiche descriptive** :

```
╔══════════════════════════════════════════════════════════════╗
║             FICHE DE SERVICE                                 ║
╠══════════════════════════════════════════════════════════════╣
║  Nom du service     : Réinitialisation mot de passe         ║
║  Catégorie          : Support > Compte et Authentification  ║
║  Type               : Demande de service                     ║
╠══════════════════════════════════════════════════════════════╣
║  Description :                                               ║
║  Réinitialiser le mot de passe d'un utilisateur bloqué ou   ║
║  oublié, conformément à la politique de sécurité.           ║
╠══════════════════════════════════════════════════════════════╣
║  Bénéficiaires      : Tous les employés                     ║
║  Prérequis          : Validation identité (manager ou RH)   ║
╠══════════════════════════════════════════════════════════════╣
║  SLA (Délai)        : 2 heures ouvrées                      ║
║  Disponibilité      : Lun-Ven 8h-18h                        ║
╠══════════════════════════════════════════════════════════════╣
║  Procédure de demande :                                      ║
║  1. Créer un ticket dans GLPI                               ║
║  2. Catégorie : Support > Compte                            ║
║  3. Fournir : nom, prénom, service                          ║
║  4. Validation manager (par email)                          ║
╠══════════════════════════════════════════════════════════════╣
║  Contact support    : support@simio.local                   ║
╚══════════════════════════════════════════════════════════════╝
```

### 2.4 Avantages d'un Catalogue

**Pour les utilisateurs :**
- **Avantage :** Savent quels services sont disponibles
- **Avantage :** Connaissent les délais de livraison
- **Avantage :** Savent comment demander un service
- **Avantage :** Autonomie (self-service)

**Pour la DSI :**
- **Avantage :** Standardisation des demandes
- **Avantage :** Priorisation facilitée (SLA définis)
- **Avantage :** Mesure de la qualité de service
- **Avantage :** Réduction des demandes hors périmètre

## 3. Le Cycle de Vie d'un Ticket

### 3.1 Les États d'un Ticket

<figure class="graphe diagramme"><svg viewBox="0 0 780 230" style="max-width:780px" role="img" aria-label="Statuts d&#x27;un ticket GLPI : du nouveau ticket à la clôture" xmlns="http://www.w3.org/2000/svg">
<rect x="10" y="20" width="160" height="70" rx="8" class="dg-box"/>
<text x="90.0" y="51.0" text-anchor="middle" class="dg-t">Nouveau</text>
<text x="90.0" y="69.0" text-anchor="middle" class="dg-s">en attente d&#x27;affectation</text>
<rect x="210" y="20" width="170" height="70" rx="8" class="dg-box"/>
<text x="295.0" y="51.0" text-anchor="middle" class="dg-t">En cours (attribué)</text>
<text x="295.0" y="69.0" text-anchor="middle" class="dg-s">un technicien travaille dessus</text>
<rect x="420" y="20" width="160" height="70" rx="8" class="dg-ok"/>
<text x="500.0" y="51.0" text-anchor="middle" class="dg-t">Résolu</text>
<text x="500.0" y="69.0" text-anchor="middle" class="dg-s">en attente de validation</text>
<rect x="620" y="20" width="150" height="70" rx="8" class="dg-dark"/>
<text x="695.0" y="51.0" text-anchor="middle" class="dg-w">Clos</text>
<text x="695.0" y="69.0" text-anchor="middle" class="dg-s">archivé</text>
<line x1="170" y1="55" x2="201.0" y2="55.0" class="dg-line"/>
<polygon points="210,55 201.0,50.0 201.0,60.0" class="dg-ah"/>
<line x1="380" y1="55" x2="411.0" y2="55.0" class="dg-line"/>
<polygon points="420,55 411.0,50.0 411.0,60.0" class="dg-ah"/>
<line x1="580" y1="55" x2="611.0" y2="55.0" class="dg-line"/>
<polygon points="620,55 611.0,50.0 611.0,60.0" class="dg-ah"/>
<rect x="210" y="140" width="170" height="70" rx="8" class="dg-warn"/>
<text x="295.0" y="162.0" text-anchor="middle" class="dg-t">En attente</text>
<text x="295.0" y="180.0" text-anchor="middle" class="dg-s">info utilisateur, commande</text>
<text x="295.0" y="198.0" text-anchor="middle" class="dg-s">chronomètre SLA en pause</text>
<line x1="295" y1="90" x2="295.0" y2="131.0" class="dg-line"/>
<polygon points="295,140 300.0,131.0 290.0,131.0" class="dg-ah"/>
<rect x="10" y="140" width="160" height="70" rx="8" class="dg-bad"/>
<text x="90.0" y="171.0" text-anchor="middle" class="dg-t">Annulé (optionnel)</text>
<text x="90.0" y="189.0" text-anchor="middle" class="dg-s">retiré ou doublon</text>
<line x1="90" y1="90" x2="90.0" y2="131.0" class="dg-line"/>
<polygon points="90,140 95.0,131.0 85.0,131.0" class="dg-ah"/>
</svg>
</figure>

- **Nouveau** : ticket créé, en attente d'affectation à un technicien.
- **En cours (attribué)** : affecté à un technicien qui travaille sur la résolution.
- **En attente** : ticket en pause (information utilisateur, commande...), chronomètre SLA en pause.
- **Résolu** : solution trouvée et appliquée, en attente de validation par l'utilisateur.
- **Clos** : l'utilisateur confirme, le ticket est archivé.
- **Annulé** (optionnel) : demande retirée par l'utilisateur ou doublon.

### 3.2 Les Champs Essentiels d'un Ticket

| **Champ** | **Description** | **Exemple** |
|---|---|---|
| **Titre** | Résumé court du problème | "Impossible d'accéder au serveur fichiers" |
| **Demandeur** | Utilisateur ayant créé le ticket | Julie Dupont (Comptabilité) |
| **Catégorie** | Classification du problème | Réseau > Accès serveur |
| **Priorité** | Urgence × Impact | 3 (Moyenne) |
| **Description** | Détails du problème | "Depuis ce matin 9h, message d'erreur..." |
| **Technicien** | Personne assignée à la résolution | Marc Technician |
| **Statut** | État actuel | En cours |
| **Solution** | Description de la résolution | "Droits NTFS manquants → ajoutés" |

### 3.3 Diagnostic d'un Incident (Méthodologie)

**Méthode en 5 étapes :**

```
ÉTAPE 1 — COLLECTER LES INFORMATIONS
─────────────────────────────────────────────────────────────
Questions à poser :
• Quand le problème est-il apparu ?
• Quel est le message d'erreur exact ?
• Le problème affecte-t-il d'autres utilisateurs ?
• Des changements récents ont-ils été effectués ?

ÉTAPE 2 — REPRODUIRE LE PROBLÈME
─────────────────────────────────────────────────────────────
• Tenter de reproduire le problème sur le poste de l'utilisateur
• Tester sur un autre poste (problème local ou global ?)

ÉTAPE 3 — FORMULER DES HYPOTHÈSES
─────────────────────────────────────────────────────────────
Exemples :
• H1 : Droits d'accès insuffisants
• H2 : Problème réseau (câble, switch)
• H3 : Service Windows arrêté

ÉTAPE 4 — TESTER LES HYPOTHÈSES
─────────────────────────────────────────────────────────────
• Vérifier les droits NTFS → OK, droits corrects
• Tester ping vers serveur → KO, pas de réponse
  → H2 confirmée : problème réseau

ÉTAPE 5 — APPLIQUER LA SOLUTION
─────────────────────────────────────────────────────────────
• Vérifier câble réseau → débranché
• Rebrancher le câble
• Tester ping → OK
• Utilisateur peut accéder au serveur → Résolu
```

---
