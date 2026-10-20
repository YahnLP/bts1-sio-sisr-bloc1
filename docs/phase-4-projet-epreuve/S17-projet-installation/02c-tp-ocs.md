# TP – Installer OCS Inventory et le synchroniser avec GLPI

*BTS SIO SISR 1re année – Bloc 1 – S17*

## Objectif

Installer OCS Inventory Server, déployer l'agent sur un client, synchroniser avec GLPI.

## ÉTAPE 1 — Installer OCS Inventory Server (15 min)

```bash
# Installer les dépendances
sudo apt install make gcc perl libxml-simple-perl libcompress-zlib-perl libdbi-perl libdbd-mysql-perl libnet-ip-perl libsoap-lite-perl libapache-dbi-perl libapache2-mod-perl2 libio-compress-perl libarchive-zip-perl libswitch-perl -y

# Télécharger OCS
cd /tmp
wget https://github.com/OCSInventory-NG/OCSInventory-ocsreports/releases/download/2.12.1/OCSNG_UNIX_SERVER-2.12.1.tar.gz
tar -xzf OCSNG_UNIX_SERVER-2.12.1.tar.gz
cd OCSNG_UNIX_SERVER-2.12.1

# Installer
sudo ./setup.sh
```

**Réponses aux questions :**
```
Which host is running database server [localhost] → Entrée
On which port is running database server [3306] → Entrée
Where is Apache daemon binary [/usr/sbin/apache2] → Entrée
Apache user [www-data] → Entrée
Apache group [www-data] → Entrée

Do you wish to setup Communication server on this computer [y/n] → y
Do you wish to setup Administration server on this computer [y/n] → y
Do you wish to setup Rest API server on this computer [y/n] → n   (inutile ici ; avec y, il manque des modules Perl)

MySQL root password → MySQL2024!
```

**Activer la configuration du serveur de communication, puis relancer Apache :**

```bash
sudo a2enconf z-ocsinventory-server
sudo systemctl restart apache2
```

**Accéder à OCS :**
- URL : http://glpi.local/ocsreports
- Identifiant : `admin`
- Mot de passe : `admin`

****Attention :** Changer le mot de passe :**
- Configuration → Users → admin → Password : `AdminOCS2024!`

## ÉTAPE 2 — Déployer Agent OCS sur Client Windows (10 min)

**Sur un poste client Windows :**

1. Télécharger l'agent : https://github.com/OCSInventory-NG/WindowsAgent/releases
2. Exécuter `OCS-NG-Windows-Agent-Setup.exe`
3. **Configuration agent :**
   - URL serveur : `http://192.168.X.X/ocsinventory`
   - TAG : `Projet1`
   - Lancer inventaire immédiatement : ☑ Oui
4. Installer

**Vérifier la remontée :**
- OCS Server : http://glpi.local/ocsreports
- All computers → le PC doit apparaître

## ÉTAPE 3 — Synchroniser OCS avec GLPI (5 min)

**Dans GLPI :**

1. Configuration → Plugins → **OCS Inventory NG**
2. Si pas installé : télécharger depuis https://plugins.glpi-project.org
3. Installer le plugin
4. Configuration du plugin :
   - URL serveur OCS : `http://localhost/ocsinventory`
   - Login : `admin`
   - Password : `AdminOCS2024!`
5. **Tester la connexion** → OK
6. **Lancer la synchronisation**
7. Parc → Ordinateurs → le PC remonté par OCS apparaît dans GLPI

---
