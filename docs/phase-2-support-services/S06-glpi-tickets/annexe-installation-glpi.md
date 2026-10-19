# Annexe – Installer GLPI sur Debian ou Ubuntu

*BTS SIO SISR 1re année – Bloc 1 – S06*

## ANNEXE A — SCRIPT D'INSTALLATION GLPI SUR DEBIAN

*Pour les apprenants profil avancé — Configuration B*

*Testé sur Debian 12 Bookworm / Ubuntu 22.04 LTS*

```bash
#!/bin/bash
# ─── INSTALLATION GLPI 10.x SUR DEBIAN/UBUNTU ────────────────────────
# Usage : sudo bash install_glpi.sh
# Durée : ~15 minutes selon la connexion

set -e  # Arrêt en cas d'erreur

echo "=== [1/6] Mise à jour du système ==="
apt update && apt upgrade -y

echo "=== [2/6] Installation Apache, PHP et extensions ==="
apt install -y apache2 php php-mysql php-curl php-gd php-intl \
  php-ldap php-mbstring php-xml php-zip php-bz2 php-imap \
  libapache2-mod-php mariadb-server

echo "=== [3/6] Sécurisation MariaDB ==="
# Répondre aux questions : root pw, suppr anonymous, désactiver root remote, etc.
mysql_secure_installation

echo "=== [4/6] Création de la base de données GLPI ==="
mysql -u root -p <<EOF
CREATE DATABASE glpi CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'glpi'@'localhost' IDENTIFIED BY 'GlpiPass2024!';
GRANT ALL PRIVILEGES ON glpi.* TO 'glpi'@'localhost';
FLUSH PRIVILEGES;
EOF

echo "=== [5/6] Téléchargement et décompression de GLPI ==="
cd /var/www/html
GLPI_VERSION="10.0.12"
wget -q "https://github.com/glpi-project/glpi/releases/download/${GLPI_VERSION}/glpi-${GLPI_VERSION}.tgz"
tar -xzf "glpi-${GLPI_VERSION}.tgz"
rm "glpi-${GLPI_VERSION}.tgz"
chown -R www-data:www-data glpi/
chmod -R 755 glpi/

echo "=== [6/6] Configuration Apache ==="
cat > /etc/apache2/sites-available/glpi.conf <<'APACHECONF'
<VirtualHost *:80>
    ServerName glpi.local
    DocumentRoot /var/www/html/glpi/public

    <Directory /var/www/html/glpi/public>
        Require all granted
        RewriteEngine On
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteRule ^(.*)$ index.php [QSA,L]
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/glpi_error.log
    CustomLog ${APACHE_LOG_DIR}/glpi_access.log combined
</VirtualHost>
APACHECONF

a2ensite glpi.conf
a2enmod rewrite
a2dissite 000-default.conf
systemctl restart apache2

echo ""
echo "════════════════════════════════════════════════════════"
echo " GLPI installé ! Finaliser via le navigateur :"
echo " http://[IP_DU_SERVEUR]/glpi"
echo " Base de données : glpi / GlpiPass2024! / localhost"
echo " Identifiants par défaut : glpi / glpi"
echo "════════════════════════════════════════════════════════"
```

**Post-installation (dans le navigateur) :**
1. Aller sur `http://[IP]/glpi`
2. Choisir la langue → Suivant
3. Accepter la licence → Continuer
4. Cliquer "Installer" (pas "Mettre à jour")
5. Renseigner les paramètres de base de données : `localhost` / `glpi` / `GlpiPass2024!`
6. Finaliser — noter les identifiants affichés
7. **IMPORTANT :** supprimer le dossier d'installation : `rm -rf /var/www/html/glpi/install`

---
