# TP – Découvrir Git

*BTS SIO SISR 1re année – Bloc 1 – S16*

## Objectif

Comprendre les commandes de base de Git par la pratique.

## ÉTAPE 1 — Installer Git (2 min)

```bash
sudo apt install git -y
git --version
```

## ÉTAPE 2 — Configurer Git (3 min)

```bash
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@exemple.com"
```

## ÉTAPE 3 — Créer un Projet et Initialiser Git (3 min)

```bash
mkdir mon-wiki-scripts
cd mon-wiki-scripts
git init
# Résultat : "Initialized empty Git repository"
```

## ÉTAPE 4 — Créer un Fichier et Faire un Commit (5 min)

```bash
# Créer un fichier
echo "# Scripts pour le Wiki IT" > README.md

# Vérifier l'état
git status
# Résultat : README.md en "Untracked files"

# Ajouter au suivi
git add README.md

# Vérifier l'état
git status
# Résultat : README.md en "Changes to be committed"

# Faire le commit
git commit -m "Ajout du fichier README"

# Voir l'historique
git log
```

## ÉTAPE 5 — Modifier et Faire un Second Commit (5 min)

```bash
# Modifier le fichier
echo "" >> README.md
echo "## Liste des scripts" >> README.md
echo "- backup.sh : Script de sauvegarde" >> README.md

# Voir les modifications
git diff README.md

# Ajouter et commiter
git add README.md
git commit -m "Ajout de la section liste des scripts"

# Voir l'historique complet
git log
# On voit maintenant 2 commits
```

## Bilan de la séance

Remplis ce bilan **seul**, honnêtement : il sert à décider ce qu'il faut reprendre. Niveau : **Non maîtrisé**, **Maîtrise partielle**, **Bonne maîtrise** ou **Excellente maîtrise** (le vocabulaire des grilles nationales d'évaluation) ; **Non évalué** si tu n'as pas travaillé la compétence aujourd'hui.

| Compétence du référentiel | Ce que j'ai fait dans cette séance | Niveau |
|---|---|---|
| **B1.4** – Travailler en mode projet | | |
| **B1.5** – Mettre à disposition des utilisateurs un service informatique | | |
| **B1.6** – Organiser son développement professionnel | | |

> [!NOTE]
> Les codes sont ceux du [référentiel](../../ressources/referentiel.md) (l'arrêté numérote des activités : les codes « B… » sont un usage courant). Le choix des compétences pour cette séance est une proposition de l'enseignant, **à valider**.

**Je sais faire, sans aide :**

- [ ] Expliquer les enjeux et les règles du travail collaboratif ;
- [ ] Installer un wiki technique (DokuWiki) et structurer ses pages ;
- [ ] Utiliser Git pour suivre des fichiers (init, add, commit, log) ;
- [ ] Décrire la gestion des terminaux mobiles (BYOD, gestion centralisée) et les bonnes règles d'usage ;
- [ ] Choisir un outil de partage de documents selon des critères.

**Ce que je dois reprendre :** ______________________

**Ma question à poser à l'enseignant :** ______________________
