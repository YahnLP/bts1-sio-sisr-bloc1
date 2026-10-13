# TP – Créer le catalogue de services dans GLPI

*BTS SIO SISR 1re année – Bloc 1 – S17*

## Objectif

Créer un catalogue de services IT structuré dans GLPI.

## ÉTAPE 1 — Activer le Catalogue de Services (5 min)

**Dans GLPI :**

1. Configuration → Assistance → Catégories de tickets
2. Créer l'arborescence de catégories (voir Annexe 2)

## ÉTAPE 2 — Créer les Catégories Principales (10 min)

**Créer les catégories suivantes :**

| **Catégorie** | **Description** |
|---|---|
| Support Utilisateur | Assistance aux utilisateurs finaux |
| Infrastructure & Réseau | Services liés aux serveurs et au réseau |
| Applications Métier | Support sur les applications spécifiques |
| Sécurité | Demandes liées à la sécurité IT |

**Procédure :**
1. Configuration → Intitulés → Catégories de tickets
2. Cliquer **+** (Ajouter)
3. Nom : `Support Utilisateur`
4. **Ajouter**
5. Répéter pour les 3 autres catégories

## ÉTAPE 3 — Créer les Sous-Catégories (15 min)

**Sous Support Utilisateur, créer :**

| **Sous-catégorie** | **Parent** |
|---|---|
| Compte et Authentification | Support Utilisateur |
| Poste de Travail | Support Utilisateur |
| Messagerie | Support Utilisateur |
| Impression | Support Utilisateur |

**Sous Infrastructure & Réseau, créer :**

| **Sous-catégorie** | **Parent** |
|---|---|
| Serveur | Infrastructure & Réseau |
| Réseau | Infrastructure & Réseau |
| Stockage | Infrastructure & Réseau |

**Procédure :**
1. Cliquer sur **Support Utilisateur**
2. Cliquer **Ajouter un élément fils**
3. Nom : `Compte et Authentification`
4. **Ajouter**
5. Répéter pour les autres

---

## Bilan de la séance

Remplis ce bilan **seul**, honnêtement : il sert à décider ce qu'il faut reprendre. Niveau : **Non maîtrisé**, **Maîtrise partielle**, **Bonne maîtrise** ou **Excellente maîtrise** (le vocabulaire des grilles nationales d'évaluation) ; **Non évalué** si tu n'as pas travaillé la compétence aujourd'hui.

| Compétence du référentiel | Ce que j'ai fait dans cette séance | Niveau |
|---|---|---|
| **B1.4** – Travailler en mode projet | | |
| **B1.5** – Mettre à disposition des utilisateurs un service informatique | | |
| **B1.1** – Gérer le patrimoine informatique | | |
| **B1.2** – Répondre aux incidents et aux demandes d'assistance et d'évolution | | |

> [!NOTE]
> Les codes sont ceux du [référentiel](../../ressources/referentiel.md) (l'arrêté numérote des activités : les codes « B… » sont un usage courant). Le choix des compétences pour cette séance est une proposition de l'enseignant, **à valider**.

**Je sais faire, sans aide :**

- [ ] Organiser un projet : rôles, jalons, planning, comptes rendus ;
- [ ] Installer GLPI et OCS Inventory et les synchroniser ;
- [ ] Déployer l'agent sur un poste ;
- [ ] Créer le catalogue de services dans GLPI ;
- [ ] Documenter dans le wiki au fur et à mesure.

**Ce que je dois reprendre :** ______________________

**Ma question à poser à l'enseignant :** ______________________
