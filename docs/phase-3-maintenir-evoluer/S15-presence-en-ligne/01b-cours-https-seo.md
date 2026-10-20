# Cours – HTTPS, certificats et référencement

*BTS SIO SISR 1re année – Bloc 1 – S15*

## 1. Qu'est-ce que HTTPS ?

### 1.1 Définition

**HTTPS** = **HTTP Secure** = protocole HTTP + couche de chiffrement SSL/TLS.

```
   HTTP (non sécurisé)              vs         HTTPS (sécurisé)
   ───────────────────────                    ─────────────────────
   http://monsite.com                         https://monsite.com
   Port 80                                    Port 443
   Données en clair                           Données chiffrées
   Non sécurisé                             Connexion sécurisée

   RISQUE HTTP :
   ───────────────────────────────────────────────────────────────
   Attaque "Man-in-the-Middle" (MITM) :
   • L'attaquant intercepte la communication
   • Il peut lire les données (mots de passe, CB...)
   • Il peut modifier les données

   PROTECTION HTTPS :
   ───────────────────────────────────────────────────────────────
   • Chiffrement de bout en bout
   • Impossible de lire ou modifier les données
   • Authentification du serveur (certificat)
```

### 1.2 Les 3 Raisons d'Activer HTTPS

**① SÉCURITÉ DES DONNÉES**

Toutes les données échangées entre le navigateur et le serveur sont **chiffrées** :
- Mots de passe
- Coordonnées bancaires
- Données personnelles
- Contenu des formulaires

> [!TIP]
> **Sans HTTPS :** Un attaquant sur le même réseau WiFi (café, gare) peut intercepter toutes les données.

**② CONFIANCE DES UTILISATEURS**

Un navigateur affiche un **avertissement de sécurité** sur un site servi en HTTP simple : beaucoup de visiteurs quittent alors la page. Les données saisies (formulaires, mots de passe) circulent en clair.

Le **cadenas vert**  est devenu un symbole de confiance. Son absence = perte de crédibilité.

**③ RÉFÉRENCEMENT (SEO)**

Depuis 2014, Google favorise les sites HTTPS dans ses résultats de recherche.

```
   IMPACT SEO
   ───────────────────────────────────────────────────────────────
   Site HTTP : Pénalité de classement
   Site HTTPS : Bonus de classement

   Exemple :
   • Deux sites identiques (contenu, qualité)
   • Site A en HTTP → Position 8 sur Google
   • Site B en HTTPS → Position 4 sur Google
```

Depuis 2018, Chrome affiche **"Non sécurisé"** pour tous les sites HTTP → impact direct sur le taux de clic.

## 2. Le Certificat SSL/TLS

### 2.1 Qu'est-ce qu'un Certificat ?

Un **certificat SSL/TLS** est un fichier électronique qui :
1. Prouve l'**identité** du site web (authentification)
2. Contient la **clé publique** permettant le chiffrement

```
   ANALOGIE : CARTE D'IDENTITÉ
   ───────────────────────────────────────────────────────────────
   Certificat SSL = Carte d'identité du site web

   Contient :
   • Nom du site (monsite.com)
   • Nom de l'organisation (Entreprise ABC)
   • Période de validité (du 01/01/jj au 01/01/jj+1)
   • Clé publique (pour chiffrer les échanges)
   • Signature de l'autorité de certification (CA)

   Délivré par :
   • Autorité de Certification (CA) reconnue
   • Ex : Let's Encrypt, DigiCert, Sectigo...
```

### 2.2 Les Types de Certificats

| **Type** | **Validation** | **Affichage** | **Usage** | **Prix** |
|---|---|---|---|---|
| **DV** (Domain Validation) | Automatique (propriété domaine) |  + nom domaine | Blog, site vitrine PME | 0-50 €/an |
| **OV** (Organization Validation) | Vérification entreprise |  + nom entreprise | Site corporate | 100-300 €/an |
| **EV** (Extended Validation) | Vérification approfondie |  + barre verte + nom entreprise | E-commerce, banques | 300-1000 €/an |

> [!NOTE]
> **Dans la plupart des cas** (site vitrine, blog, petite entreprise), un certificat **DV gratuit** (Let's Encrypt) suffit.

### 2.3 Let's Encrypt — Le Certificat Gratuit

**Let's Encrypt** est une autorité de certification (CA) qui délivre des certificats SSL/TLS **gratuits** depuis 2015.

```
   CARACTÉRISTIQUES
   ───────────────────────────────────────────────────────────────
   OK : Gratuit
   OK : Automatisé (installation en 5 minutes)
   OK : Reconnu par tous les navigateurs
   OK : Renouvellement automatique tous les 90 jours
   OK : Utilisé par 400 millions de sites web

   FONCTIONNEMENT
   ───────────────────────────────────────────────────────────────
   1. Installation de Certbot (client Let's Encrypt)
   2. Certbot contacte Let's Encrypt
   3. Let's Encrypt vérifie que vous possédez le domaine
   4. Délivrance du certificat
   5. Configuration automatique d'Apache/Nginx
   6. Renouvellement auto tous les 90 jours
```

**Commande d'installation (production) :**

```bash
# Ubuntu avec Apache
sudo apt install certbot python3-certbot-apache -y
sudo certbot --apache -d monsite.com -d www.monsite.com
```

> [!WARNING]
> **Limitation :** Let's Encrypt nécessite un **nom de domaine public** accessible depuis Internet. En TP local (monsite.local), on utilise un **certificat auto-signé**.

## 3. Certificat Auto-signé (TP Local)

### 3.1 Pourquoi Auto-signé en TP ?

En environnement de TP avec un domaine local (`monsite.local`), Let's Encrypt ne fonctionne pas car :
- Le domaine n'existe pas publiquement
- Let's Encrypt ne peut pas vérifier la propriété

**Solution :** Créer un **certificat auto-signé** — un certificat que l'on génère soi-même.

```
   CERTIFICAT AUTO-SIGNÉ
   ───────────────────────────────────────────────────────────────
   Avantages :
   OK : Fonctionne en local
   OK : Chiffrement actif (données protégées)
   OK : Gratuit, rapide (5 min)

   Inconvénients :
   KO : Navigateur affiche un avertissement de sécurité
   KO : "Connexion non privée" / "Certificat non valide"
   KO : Inutilisable en production

   Usage :
   • Tests locaux
   • Développement
   • Environnement de TP
```

### 3.2 Créer un Certificat Auto-signé

**Commande OpenSSL :**

```bash
# Générer une clé privée + certificat auto-signé valide 365 jours
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout /etc/ssl/private/monsite.key \
  -out /etc/ssl/certs/monsite.crt
```

**Réponses aux questions :**
```
Country Name (2 letter code) [AU]: FR
State or Province Name [Some-State]: Occitanie
Locality Name []: Toulouse
Organization Name []: Mon Entreprise
Organizational Unit Name []: IT
Common Name (FQDN) []: monsite.local
Email Address []: admin@monsite.local
```

> [!NOTE]
> **Common Name** = nom de domaine exact du site (`monsite.local`).

## 4. Référencement Basique (SEO)

### 4.1 Qu'est-ce que le SEO ?

**SEO** = **Search Engine Optimization** = ensemble de techniques pour améliorer la visibilité d'un site dans les résultats de recherche (Google, Bing...).

```
   OBJECTIF SEO
   ───────────────────────────────────────────────────────────────
   Être en 1ère page de Google sur les mots-clés stratégiques

   Exemple : PME plomberie à Toulouse
   ───────────────────────────────────────────────────────────────
   Mots-clés cibles :
   • "plombier Toulouse"
   • "dépannage plomberie Toulouse"
   • "chauffagiste Toulouse urgence"

   Sans SEO : Position 50+ → 0 visiteur
   Avec SEO : Position 1-5 → 100+ visiteurs/mois → clients
```

**Les 3 Piliers du SEO :**

| **Pilier** | **Description** | **Exemples** |
|---|---|---|
| **SEO On-Page** | Optimisation du contenu et du code du site | Titres, méta-descriptions, balises H1/H2, images |
| **SEO Off-Page** | Liens externes pointant vers le site (backlinks) | Articles invités, annuaires, réseaux sociaux |
| **SEO Technique** | Performance et structure technique | Vitesse, mobile-friendly, sitemap, HTTPS |

> [!NOTE]
> **Cette séance se concentre sur le SEO On-Page** (le plus accessible pour un débutant).

### 4.2 SEO On-Page — Les Bases

**① Balise TITLE (titre de la page)**

```html
<head>
  <title>Plombier Toulouse | Dépannage 24/7 | AquaTech</title>
</head>
```

- Apparaît dans l'onglet du navigateur
- Apparaît dans les résultats Google (en bleu, cliquable)
- **50-60 caractères max**
- Doit contenir les **mots-clés principaux**

**② Meta DESCRIPTION**

```html
<meta name="description" content="Plombier à Toulouse disponible 24/7. Dépannage urgent, installation chaudière, débouchage. Devis gratuit en 2h. ☎ 05 XX XX XX XX">
```

- Apparaît dans les résultats Google (texte gris sous le titre)
- **150-160 caractères max**
- Doit donner **envie de cliquer**
- Contient les mots-clés + appel à l'action

**③ Balises H1, H2, H3 (titres hiérarchiques)**

```html
<h1>Plombier à Toulouse — Intervention Rapide 24/7</h1>

<h2>Nos Services de Plomberie</h2>
<h3>Dépannage d'urgence</h3>
<h3>Installation de chaudière</h3>

<h2>Pourquoi Nous Choisir ?</h2>
```

- **H1** : titre principal de la page (1 seul par page)
- **H2** : sections principales
- **H3** : sous-sections

> [!TIP]
> Google utilise ces balises pour comprendre la structure du contenu.

**④ Attribut ALT des images**

```html
<img src="plombier-toulouse.jpg" alt="Plombier intervenant sur une fuite d'eau à Toulouse">
```

- Décrit l'image pour Google (qui ne "voit" pas les images)
- Améliore l'accessibilité (lecteurs d'écran pour malvoyants)
- Mots-clés pertinents

### 4.3 Sitemap XML

Un **sitemap** est un fichier XML listant toutes les pages du site pour faciliter l'indexation par Google.

**Exemple sitemap.xml :**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://monsite.com/</loc>
    <lastmod>2024-02-16</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://monsite.com/services</loc>
    <lastmod>2024-02-15</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>
```

**WordPress génère automatiquement un sitemap :** `https://monsite.com/sitemap.xml`

**Soumettre le sitemap à Google :**
1. Aller sur **Google Search Console**
2. Ajouter son site
3. Indexation → Sitemaps → Ajouter sitemap.xml

### 4.4 Google Search Console

**Google Search Console** est un outil gratuit de Google pour suivre le référencement de son site.

**Fonctionnalités :**
- Soumettre son sitemap
- Voir les mots-clés qui amènent des visiteurs
- Identifier les erreurs d'indexation
- Vérifier la compatibilité mobile
- Suivre les backlinks

**Inscription :**
1. Aller sur https://search.google.com/search-console
2. Ajouter son site (propriété)
3. Vérifier la propriété (ajout balise HTML ou fichier)

---
