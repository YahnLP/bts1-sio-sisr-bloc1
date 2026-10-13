# TP – Activer HTTPS avec un certificat auto-signé

*BTS SIO SISR 1re année – Bloc 1 – S15*

## Objectif

Installer un certificat SSL auto-signé sur le serveur WordPress (TP précédent de cette séance) et forcer la redirection HTTP → HTTPS.

## Prérequis

- VM Ubuntu Server avec WordPress fonctionnel (TP précédent de cette séance)
- Site accessible en HTTP sur http://monsite.local

## ÉTAPE 1 — Générer le Certificat (5 min)

```bash
# Générer clé privée + certificat auto-signé valide 365 jours
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout /etc/ssl/private/monsite.key \
  -out /etc/ssl/certs/monsite.crt
```

**Répondre aux questions :**
```
Country Name: FR
State: Occitanie
Locality: Toulouse
Organization: Mon Entreprise TP
Common Name: monsite.local  ← IMPORTANT : mettre le nom exact
Email: admin@monsite.local
```

**Vérifier les fichiers créés :**

```bash
ls -l /etc/ssl/private/monsite.key
ls -l /etc/ssl/certs/monsite.crt
```

## ÉTAPE 2 — Configurer Apache pour HTTPS (10 min)

```bash
# Créer le VirtualHost HTTPS
sudo nano /etc/apache2/sites-available/monsite-ssl.conf
```

**Contenu du fichier :**

```apache
<VirtualHost *:443>
    ServerName monsite.local
    DocumentRoot /var/www/monsite

    # SSL Configuration
    SSLEngine on
    SSLCertificateFile /etc/ssl/certs/monsite.crt
    SSLCertificateKeyFile /etc/ssl/private/monsite.key

    <Directory /var/www/monsite/>
        Options FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/monsite_ssl_error.log
    CustomLog ${APACHE_LOG_DIR}/monsite_ssl_access.log combined
</VirtualHost>
```

**Sauvegarder :** Ctrl+O → Entrée → Ctrl+X

## ÉTAPE 3 — Activer SSL et le VirtualHost (5 min)

```bash
# Activer le module SSL d'Apache
sudo a2enmod ssl

# Activer le VirtualHost HTTPS
sudo a2ensite monsite-ssl.conf

# Vérifier la configuration
sudo apache2ctl configtest
# Résultat attendu : Syntax OK

# Recharger Apache
sudo systemctl reload apache2
```

## ÉTAPE 4 — Forcer la Redirection HTTP → HTTPS (5 min)

```bash
# Éditer le VirtualHost HTTP (port 80)
sudo nano /etc/apache2/sites-available/monsite.conf
```

**Ajouter avant `</VirtualHost>` :**

```apache
    # Redirection HTTP → HTTPS
    Redirect permanent / https://monsite.local/
```

**Fichier complet :**

```apache
<VirtualHost *:80>
    ServerName monsite.local
    ServerAdmin admin@monsite.local
    DocumentRoot /var/www/monsite

    # Redirection HTTP → HTTPS
    Redirect permanent / https://monsite.local/

    ErrorLog ${APACHE_LOG_DIR}/monsite_error.log
    CustomLog ${APACHE_LOG_DIR}/monsite_access.log combined
</VirtualHost>
```

**Recharger Apache :**

```bash
sudo systemctl reload apache2
```

## ÉTAPE 5 — Test et Validation (5 min)

**Test dans le navigateur :**

1. Aller sur http://monsite.local
2. Le site doit **automatiquement rediriger** vers https://monsite.local
3. Le navigateur affiche un **avertissement de sécurité** :
   - Chrome : "Votre connexion n'est pas privée"
   - Firefox : "Avertissement : risque probable de sécurité"

**Accepter le certificat :**
- Chrome : Cliquer "Paramètres avancés" → "Accéder au site"
- Firefox : Cliquer "Avancé" → "Accepter le risque et poursuivre"

4. Le site s'affiche en HTTPS avec  (cadenas) + avertissement

**Vérifier le certificat :**
- Cliquer sur le cadenas 
- "Le certificat n'est pas valide"
- Afficher le certificat → vérifier les informations (Common Name = monsite.local)

## ÉTAPE 6 — Configurer WordPress pour HTTPS (5 min)

**Dans le tableau de bord WordPress :**

1. Réglages → Général
2. **Adresse web de WordPress** : `https://monsite.local`
3. **Adresse web du site** : `https://monsite.local`
4. **Enregistrer les modifications**

**Vérifier :**
- Toutes les pages du site sont maintenant en HTTPS
- Les liens internes utilisent HTTPS

---
