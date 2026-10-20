# Corrigé – S15 : Présence en ligne (LAMP, HTTPS, SGBD)

*Réservé à l'enseignant. **Testé** sur Ubuntu 24.04 (Apache 2.4.58, MariaDB 10.11, PHP 8.3) : le TP SGBD en entier, le HTTPS en ​entier (certificat, site SSL, redirection, test strict), et la connexion PHP → base depuis Apache. **Non testé** : le téléchargement et l'installation de WordPress (le site de téléchargement n'est pas joignable depuis l'environnement de rédaction).*

## TP 1 – LAMP et WordPress

| Point | Attendu | Remarque |
|---|---|---|
| Page par défaut ​Apache | « Apache2 Ubuntu Default Page » | |
| PHP | `PHP Version 8.1.x` sur Ubuntu 22.04 (8.3 sur Ubuntu 24.04) | Adapter à la version utilisée |
| VirtualHost | `a2ensite`, `a2enmod rewrite`, `configtest` → `Syntax OK` | Oublier `a2enmod rewrite` : les permaliens renvoient 404 |
| Fichier `hosts` du client | Adresse du serveur et `monsite.local` | Sans cela, le nom ne se résout pas |
| Installation web | « Bravo ! WordPress a été installé. » | |
| Sécurité | `DISALLOW_FILE_EDIT` ​ajouté | Chercher le commentaire de fin de bloc de réglages : sa formulation varie selon la version |

**Points d'attention.**

- Le TP affecte `chmod -R 755` à **tout** le site : c'est une **simplification**. En pratique, dossiers en 755 et fichiers en 644.
- Les mots de passe du TP (`MotDePasseMySQL2024!`, `WpPass2024!`, `AdminWP2024!`) sont des identifiants de **laboratoire**.
- Le paquet `php-xmlrpc` est disponible sur Ubuntu 24.04 mais n'est plus utile aux versions récentes de WordPress : sa ​présence ou son absence ne bloque pas le TP.
- **Supprimer `info.php`** après le test : le TP le dit, à contrôler.

## TP 2 – HTTPS (testé)

| Étape | Résultat constaté |
|---|---|
| Certificat | Fichiers `monsite.key` et `monsite.crt` créés ; sujet et émetteur identiques (auto-signé), validité 365 ​jours |
| `a2enmod ssl`, `a2ensite monsite-ssl.conf`, `configtest` | `Syntax OK` |
| `http://monsite.local` après ajout de `Redirect permanent` | Réponse **301** vers `https://monsite.local/` |
| `https://monsite.local` en vérifiant le certificat | **Échec** : certificat auto-signé (c'est l'objectif du TP) |
| `https://monsite.local` en acceptant le certificat | **200** |

**À signaler.** Le TP insiste sur le *Common Name* (« IMPORTANT : mettre le nom exact »). Les navigateurs actuels s'appuient sur le champ **Subject Alternative Name** (SAN) ; un certificat sans SAN est refusé avec une erreur de nom, en plus de l'avertissement d'auto-signature. Variante recommandée (testée) :

```bash
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout /etc/ssl/private/monsite.key -out /etc/ssl/certs/monsite.crt \
  -subj "/CN=monsite.local" -addext "subjectAltName=DNS:monsite.local"
```

**À faire dire.** Un ​certificat auto-signé **chiffre** mais n'**authentifie** pas le serveur : le navigateur ne peut pas vérifier l'identité. En production, on utilise un certificat signé par une autorité reconnue.

## TP 3 – SGBD (testé)

Valeurs observées avec MariaDB 10.11 :

| Étape | Attendu |
|---|---|
| Port 3306 | Écoute sur **127.0.0.1** seulement |
| `SHOW GRANTS` | `GRANT USAGE ON *.* …` puis `GRANT SELECT, INSERT, UPDATE, DELETE ON parc.* …` |
| `CREATE TABLE` avec le ​compte applicatif | `ERROR 1142 (42000): CREATE command denied to user 'appli_parc'@'localhost' for table …` |
| Insertion de 5 postes | `SELECT *` renvoie 5 lignes |

### Requêtes de l'étape 4 (exemples)

```sql
SELECT * FROM postes WHERE service = 'Comptabilité';
SELECT COUNT(*) FROM postes WHERE systeme = 'Windows 10';
SELECT * FROM postes WHERE date_achat < '2023-01-01';
UPDATE postes SET service = 'Direction' WHERE nom = 'PC-RH-042';
```

Avant l'`UPDATE` ou le `DELETE`, exécuter le `SELECT` avec le **même** `WHERE`.

### Export, suppression, restauration

- Après `mysqldump`, le fichier fait quelques Ko (2,4 Ko sur 5 postes).
- Après `DROP DATABASE`, restauration, `SELECT COUNT(*)` : **5** (valeur d'avant). Le compte `appli_parc` peut de nouveau lire `parc` **sans avoir été recréé** : ses ​droits sont stockés à part.

### Incohérence à connaître

Le TP 1 installe **MySQL** (`mysql-server`, service `mysql`), alors que le TP SGBD suppose **MariaDB** (`systemctl is-active mariadb`). Un élève qui a suivi le TP 1 obtient « `inactive` » ou « unit not found » : c'est le **nom du service**, pas une panne. Faire utiliser `systemctl is-active mysql` dans ce cas. Les commandes SQL du TP fonctionnent sur les deux.

Autre piège connu selon la version de MySQL : après `mysql_secure_installation` avec définition d'un mot de passe `root`, `sudo mysql` sans mot de passe peut être refusé : ​utiliser `sudo mysql -u root -p`.

## Pièges fréquents

- **Droits trop larges** (`GRANT ALL PRIVILEGES ON *.*`) : refaire avec le **moindre privilège**.
- **Oublier `FLUSH PRIVILEGES`** : sans effet sur les versions récentes pour `GRANT`, mais l'habitude reste utile à expliquer.
- **Mot de passe de laboratoire repris dans une réalisation E5.**
- **Redirection HTTP → HTTPS en boucle** : `Redirect` placé dans le VirtualHost HTTPS.

## Bilan de compétences

Auto-évaluation ; B1.3, B1.5 et B1.2 proposées, à valider.
