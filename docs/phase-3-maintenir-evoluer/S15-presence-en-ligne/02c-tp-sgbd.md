# TP – Créer une base, un utilisateur et manipuler des données

*BTS SIO SISR 1re année – Bloc 1 – S15*

> [!NOTE]
> **But.** Situation : SimIO SARL veut un petit suivi de ses postes dans une base de données, accessible à une application avec un compte limité. Tu crées la base, tu l'interroges, tu la sauvegardes, puis tu la restaures.
>
> **Comment ce TP fonctionne.** Avant de manipuler, tu écris ce que tu **anticipes** (« J'anticipe »). Puis tu testes et tu notes ce que tu **constates**. Tu **comprends** ce que fait chaque commande (« Je comprends »). Un **bilan de compétences** clôt la séance. Le TP se fait sur une **machine virtuelle réelle** (Debian ou Ubuntu).

**Durée estimée : 45 minutes.** Travail en **binôme**.

## Contraintes

- Le compte de l'application **n'est pas administrateur** et ne voit **que** la base `parc`.
- Les mots de passe de ce TP sont des **identifiants de laboratoire** : ils ne sont jamais repris dans une réalisation présentée à l'épreuve.

## Étape 1 : vérifier le service (5 min)

```bash
sudo apt install -y mariadb-server       # inutile s'il est déjà installé avec la pile LAMP
systemctl is-active mariadb
sudo ss -tlnp | grep 3306
```

**Je comprends.** `ss -tlnp` liste les ports TCP en **écoute** (`-l`) avec le processus (`-p`). Sur une installation par défaut, MariaDB n'écoute que sur **127.0.0.1** : la base n'est pas joignable depuis le réseau.

Sur quelle adresse la base écoute-t-elle ? ______________

## Étape 2 : créer la base et le compte de l'application (10 min)

**J'anticipe.** Pourquoi ne pas utiliser le compte `root` de la base dans l'application ?

<details markdown="1">
<summary>Éléments de réponse</summary>

Si l'application (ou son mot de passe) est compromise, l'attaquant aurait **tous les droits** sur **toutes** les bases. Un compte dédié, limité à une base et à quelques opérations, **limite les dégâts**.

</details>

```bash
sudo mysql
```

```sql
CREATE DATABASE parc CHARACTER SET utf8mb4;
CREATE USER 'appli_parc'@'localhost' IDENTIFIED BY 'LabParc2025';
GRANT SELECT, INSERT, UPDATE, DELETE ON parc.* TO 'appli_parc'@'localhost';
FLUSH PRIVILEGES;
SHOW GRANTS FOR 'appli_parc'@'localhost';
EXIT;
```

**Je comprends.** `sudo mysql` se connecte en administrateur via le compte système `root`. `SHOW GRANTS` **affiche** les droits : c'est ainsi qu'on vérifie qu'on a bien donné **ce qu'on voulait, et rien de plus**.

## Étape 3 : créer la table et la remplir (10 min)

```bash
mysql -u appli_parc -p parc
```

L'application n'a **pas** le droit `CREATE` : la création de table échoue. Constate le message, puis crée la table en administrateur :

```sql
CREATE TABLE postes (id INT);
```

*Message obtenu :* ______________________________

```bash
sudo mysql parc
```

```sql
CREATE TABLE postes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(40) NOT NULL,
    service VARCHAR(40),
    systeme VARCHAR(40),
    date_achat DATE
);
EXIT;
```

Reviens avec le compte de l'application et insère **cinq postes** de ton choix :

```bash
mysql -u appli_parc -p parc
```

```sql
INSERT INTO postes (nom, service, systeme, date_achat)
VALUES ('PC-RH-042', 'RH', 'Windows 11', '2024-02-12'),
       ('PC-CPT-007', 'Comptabilité', 'Windows 10', '2022-09-01');
-- ajoute-en trois autres
SELECT * FROM postes;
```

**Je comprends.** Les droits `INSERT` et `SELECT` suffisent pour **remplir et lire** ; `CREATE TABLE` est un droit de **structure**, que l'on **n'accorde pas** à l'application.

## Étape 4 : interroger et modifier (10 min)

À toi d'écrire les requêtes (note chacune) :

| Question | Ma requête |
|---|---|
| Quels sont les postes du service Comptabilité ? | |
| Combien de postes tournent sous Windows 10 ? (indice : `COUNT(*)`) | |
| Quels postes ont été achetés avant 2023 ? | |
| Passer `PC-RH-042` au service Direction | |

**J'anticipe.** Avant de lancer un `DELETE` pour retirer un poste, quelle requête exécutes-tu d'abord ?

<details markdown="1">
<summary>Éléments de réponse</summary>

Le `SELECT` avec **la même condition** `WHERE` : on vérifie qu'il renvoie bien **la ou les lignes voulues** (et pas la table entière) avant de les supprimer.

</details>

## Étape 5 : exporter, supprimer, restaurer (10 min)

```bash
sudo mysqldump parc > ~/parc-sauvegarde.sql
ls -l ~/parc-sauvegarde.sql
sudo mysql -e "DROP DATABASE parc; CREATE DATABASE parc CHARACTER SET utf8mb4;"
sudo mysql parc < ~/parc-sauvegarde.sql
sudo mysql parc -e "SELECT COUNT(*) FROM postes;"
```

**Je comprends.** On **détruit** volontairement la base, puis on la **restaure** : le compte des lignes revient à sa valeur d'avant. Les droits du compte `appli_parc` sur `parc.*` **sont conservés** : ils sont gérés **à part**, dans la base système (et non dans l'export de `parc`).

Combien de lignes après restauration ? ______ Était-ce la valeur d'avant ? ______

## Pour aller plus loin

Retrouve dans `wp-config.php` (TP WordPress) le nom de la base et le compte utilisés. Quels privilèges ce compte a-t-il ? (`SHOW GRANTS FOR 'compte'@'localhost';`)

## Retour en entreprise

Si ta situation le permet : **demande** quelles bases de données hébergent les applications de ton entreprise, **qui** les administre et **comment** elles sont sauvegardées (voir [Transfert en entreprise](../../ressources/transfert-entreprise.md)).

## Bilan de la séance

Remplis ce bilan **seul**, honnêtement : il sert à décider ce qu'il faut reprendre. Niveau : **Non maîtrisé**, **Maîtrise partielle**, **Bonne maîtrise** ou **Excellente maîtrise** (le vocabulaire des grilles nationales d'évaluation) ; **Non évalué** si tu n'as pas travaillé la compétence aujourd'hui.

| Compétence du référentiel | Ce que j'ai fait dans cette séance | Niveau |
|---|---|---|
| **B1.3** – Développer la présence en ligne de l'organisation | | |
| **B1.5** – Mettre à disposition des utilisateurs un service informatique | | |
| **B1.2** – Répondre aux incidents et aux demandes d'assistance et d'évolution | | |

> [!NOTE]
> Les codes sont ceux du [référentiel](../../ressources/referentiel.md) (l'arrêté numérote des activités : les codes « B… » sont un usage courant). Le choix des compétences pour cette séance est une proposition de l'enseignant, **à valider**.

**Je sais faire, sans aide :**

- [ ] Justifier la présence en ligne d'une organisation et choisir un type de site ;
- [ ] Décrire l'architecture LAMP et le rôle d'un CMS ;
- [ ] Installer WordPress sur une pile LAMP ;
- [ ] Activer HTTPS avec un certificat auto-signé et expliquer la différence avec un certificat public ;
- [ ] Manipuler une base de données (créer une base, un utilisateur, interroger) ;
- [ ] Citer les bases du référencement.

**Ce que je dois reprendre :** ______________________

**Ma question à poser à l'enseignant :** ______________________
