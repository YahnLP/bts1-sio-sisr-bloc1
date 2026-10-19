# TP – Installer GLPI

*BTS SIO SISR 1re année – Bloc 1 – S17*

## Objectif

Installer GLPI et OCS Inventory Server sur Ubuntu Server.

## ÉTAPE 1 — Installer les Prérequis (10 min)

**Si LAMP déjà installé (S15) :**

```bash
apache2 -v && mysql --version && php -v
# Si tout fonctionne, passer à l'étape 2
```

**Si LAMP non installé :**

```bash
sudo apt update
sudo apt install apache2 mysql-server php libapache2-mod-php php-mysql php-curl php-gd php-mbstring php-xml php-zip php-ldap php-imap php-apcu -y

# Sécuriser MySQL
sudo mysql_secure_installation
# Mot de passe root : MySQL2024!
```

## ÉTAPE 2 — Télécharger et Installer GLPI (10 min)

```bash
cd /tmp
wget https://github.com/glpi-project/glpi/releases/download/10.0.12/glpi-10.0.12.tgz
tar -xzf glpi-10.0.12.tgz
sudo mv glpi /var/www/

# Permissions
sudo chown -R www-data:www-data /var/www/glpi
sudo chmod -R 755 /var/www/glpi
```

**Créer la base de données GLPI :**

```bash
sudo mysql -u root -p
# Mot de passe : MySQL2024!
```

```sql
CREATE DATABASE glpi_db;
CREATE USER 'glpi_user'@'localhost' IDENTIFIED BY 'GlpiPass2024!';
GRANT ALL PRIVILEGES ON glpi_db.* TO 'glpi_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

**Configurer VirtualHost Apache :**

```bash
sudo nano /etc/apache2/sites-available/glpi.conf
```

**Contenu :**

```apache
<VirtualHost *:80>
    ServerName glpi.local
    DocumentRoot /var/www/glpi/public

    <Directory /var/www/glpi/public>
        Options FollowSymLinks
        AllowOverride All
        Require all granted
        RewriteEngine On
        RewriteCond %{HTTP:Authorization} ^(.+)$
        RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteRule ^(.*)$ index.php [QSA,L]
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/glpi_error.log
    CustomLog ${APACHE_LOG_DIR}/glpi_access.log combined
</VirtualHost>
```

> [!NOTE]
> Avec GLPI 10, le dossier `public` ne contient pas de fichier `.htaccess` : les lignes `RewriteRule` ci-dessus sont **indispensables**. Sans elles, toutes les pages répondent « 404 Not Found ».

**Activer :**

```bash
sudo a2ensite glpi.conf
sudo a2enmod rewrite
sudo systemctl reload apache2
```

**Configurer /etc/hosts (poste client) :**

```
192.168.X.X    glpi.local
```

## ÉTAPE 3 — Installation Web de GLPI (10 min)

**Navigateur :** http://glpi.local

**Étape 1 — Langue :**
- Français → **OK**

**Étape 2 — Licence :**
- Accepter la licence GPL → **Continuer**

**Étape 3 — Choix installation :**
- **Installer**

**Étape 4 — Base de données :**
- Serveur SQL : `localhost`
- Utilisateur SQL : `glpi_user`
- Mot de passe SQL : `GlpiPass2024!`
- **Continuer**

**Étape 5 — Sélection BDD :**
- Sélectionner : `glpi_db`
- **Continuer**

**Étape 6 — Initialisation :**
- L'installation crée les tables
- **Continuer**

**Étape 7 — Fin :**
- Comptes par défaut créés
- **Utiliser GLPI**

**Connexion :**
- Identifiant : `glpi`
- Mot de passe : `glpi`

**⚠ Changer le mot de passe immédiatement :**
- Administration → Utilisateurs → glpi → Mot de passe : `AdminGlpi2024!`

---
