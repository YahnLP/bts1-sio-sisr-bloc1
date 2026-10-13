# Cours – Les bases de données : SGBD et premières requêtes SQL

*BTS SIO SISR 1re année – Bloc 1 – S15 – à lire avant le [TP](02c-tp-sgbd.md)*

> [!NOTE] Ce que tu dois savoir déjà
> - **Prérequis :** la pile LAMP (cours précédent) : Apache, PHP et la base de données qui stocke les articles de WordPress.
> - **Expliqués dans ce cours :** SGBD, base, table, ligne, clé primaire, utilisateur et privilèges, requête SQL, sauvegarde logique.

## À la fin de ce cours, tu sauras

- [ ] dire ce qu'est un **SGBD** et à quoi sert la base de données d'un site WordPress ;
- [ ] **créer** une base, un utilisateur et lui donner **uniquement** les privilèges nécessaires ;
- [ ] **lire** et **écrire** quelques requêtes SQL simples (`SELECT`, `INSERT`, `UPDATE`, `DELETE`) ;
- [ ] **sauvegarder** et **restaurer** une base avec un export ;
- [ ] expliquer pourquoi une application ne se connecte **pas** à la base avec le compte administrateur.

---

## 1. À quoi sert une base de données ?

Un site WordPress ne stocke pas ses articles dans des fichiers : le **texte**, les **comptes**, les **réglages** sont dans une **base de données**. Les fichiers sur le serveur (thème, images, extensions) ne contiennent que **l'habillage**.

| Où est-ce stocké ? | Quoi | Conséquence pour la sauvegarde |
|---|---|---|
| **Base de données** | Articles, pages, utilisateurs, réglages | Il faut **exporter la base** |
| **Dossier du site** | Thème, extensions, images envoyées | Il faut **copier les fichiers** |

> [!WARNING]
> Sauvegarder **seulement** les fichiers d'un site WordPress ne sert à rien si la base est perdue : on retrouve un site vide. Une sauvegarde de site contient **les deux**.

## 2. Le vocabulaire

Un **SGBD** (système de gestion de bases de données) est le logiciel qui **stocke, protège et interroge** les données : **MariaDB** et **MySQL** sont des SGBD relationnels très répandus dans la pile LAMP (le « M »). Le SGBD est un **service** (un processus qui écoute sur un port, le **3306** par défaut).

| Terme | Définition | Analogie |
|---|---|---|
| **Base** | Un ensemble de tables pour une application | Un classeur |
| **Table** | Un tableau de données de même nature | Une feuille du classeur |
| **Colonne** | Une information (nom, date…) avec un type | Un en-tête de colonne |
| **Ligne** (enregistrement) | Une entrée de la table | Une ligne du tableau |
| **Clé primaire** | Colonne qui identifie **chaque ligne de façon unique** | Un numéro de dossier |
| **Utilisateur** | Compte de la base, avec des **privilèges** | Un badge d'accès |

## 3. Créer une base et un utilisateur

On se connecte à la base en administrateur **pour créer**, puis on crée un compte **dédié** à l'application, avec les **seuls droits nécessaires** sur **sa** base.

```sql
CREATE DATABASE parc CHARACTER SET utf8mb4;
CREATE USER 'appli_parc'@'localhost' IDENTIFIED BY 'MotDePasseDeLab';
GRANT SELECT, INSERT, UPDATE, DELETE ON parc.* TO 'appli_parc'@'localhost';
FLUSH PRIVILEGES;
```

| Élément | Rôle |
|---|---|
| `'appli_parc'@'localhost'` | Le compte **et** l'origine autorisée : ici, seulement la machine elle-même |
| `GRANT … ON parc.*` | Droits limités à **la base `parc`** et aux opérations listées |
| `utf8mb4` | Jeu de caractères qui gère les accents et les symboles |

> [!NOTE]
> **Moindre privilège.** L'application n'a besoin ni de créer d'autres bases, ni d'effacer des tables, ni de voir les autres bases. Si le site est piraté, l'attaquant hérite des **droits du compte de l'application** : mieux vaut qu'ils soient minimaux.

## 4. SQL : les quatre actions de base

```sql
CREATE TABLE postes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(40) NOT NULL,
    service VARCHAR(40),
    systeme VARCHAR(40),
    date_achat DATE
);

INSERT INTO postes (nom, service, systeme, date_achat)
VALUES ('PC-RH-042', 'RH', 'Windows 11', '2024-02-12');

SELECT nom, service FROM postes WHERE systeme = 'Windows 11' ORDER BY nom;

UPDATE postes SET service = 'Comptabilité' WHERE nom = 'PC-RH-042';

DELETE FROM postes WHERE nom = 'PC-RH-042';
```

| Mot | Action |
|---|---|
| `INSERT` | **Ajoute** une ligne |
| `SELECT … WHERE` | **Lit** les lignes qui répondent à une condition |
| `UPDATE … WHERE` | **Modifie** des lignes |
| `DELETE … WHERE` | **Supprime** des lignes |

> [!WARNING]
> **Sans `WHERE`, `UPDATE` et `DELETE` s'appliquent à toutes les lignes.** Avant une suppression, écris d'abord la requête `SELECT` avec la même condition et vérifie ce qu'elle renvoie.

**Je vérifie.** Que fait `UPDATE postes SET service = 'RH';` (sans `WHERE`) ?

<details markdown="1">
<summary>Voir la réponse</summary>

Elle met `'RH'` dans la colonne `service` de **toutes** les lignes de la table : on a perdu l'information d'origine. D'où la règle : toujours un `WHERE`, et un test préalable par `SELECT`.

</details>

## 5. Sauvegarder et restaurer

Un **export logique** produit un fichier de requêtes SQL qui reconstruit la base :

```bash
mysqldump -u root -p parc > parc-AAAA-MM-JJ.sql        # sauvegarde
mysql -u root -p parc < parc-AAAA-MM-JJ.sql            # restauration
```

Un export se **teste** : on le restaure dans une **autre** base (ou une autre machine) et on compte les lignes. Le fichier contient les données : il se **protège** comme elles (droits restreints, copie hors du serveur).

## 6. Où se trouve la base de WordPress ?

Le fichier `wp-config.php` contient le **nom de la base**, le **compte** et son **mot de passe** : c'est l'un des fichiers les plus sensibles du site.

| Mesure | Pourquoi |
|---|---|
| Compte dédié à WordPress, droits limités à **sa** base | Limiter les dégâts en cas de piratage |
| `wp-config.php` illisible pour les autres utilisateurs du serveur | Ne pas exposer le mot de passe de la base |
| Base **non accessible depuis le réseau** (`localhost`) | Réduire la surface d'attaque |
| Exports réguliers et testés | Pouvoir revenir en arrière |

## À retenir

- Le site WordPress = **fichiers + base** : on sauvegarde **les deux**.
- Un SGBD est un **service** : il a des **utilisateurs** et des **privilèges**.
- **Un compte par application**, avec **les droits minimaux** sur **sa** base.
- En SQL : `INSERT`, `SELECT`, `UPDATE`, `DELETE`, et **toujours** un `WHERE` pour modifier ou supprimer.
- Un export **non restauré en essai** n'est pas une sauvegarde.
