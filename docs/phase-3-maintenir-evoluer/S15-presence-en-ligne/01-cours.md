# Cours – Présence en ligne, CMS et pile LAMP

*BTS SIO SISR 1re année – Bloc 1 – S15*

> [!NOTE] Ce que tu dois savoir déjà
> - **Prérequis :** S13 du bloc 2 conseillé (LAMP, SSH) ; sinon suivre le TP pas à pas.
> - **À garder en tête :** lis le cours **avant** le TP ; la section « À retenir » en fin de cours résume l'essentiel.

## À la fin de ce cours, tu sauras

- [ ] **Justifier** la présence en ligne d'une organisation et **choisir** un type de site ;
- [ ] **Décrire** l'architecture LAMP et le rôle d'un CMS ;
- [ ] **Installer** WordPress sur une pile LAMP ;
- [ ] **Activer** HTTPS avec un certificat auto-signé et **expliquer** la différence avec un certificat public ;
- [ ] **Manipuler** une base de données (créer une base, un utilisateur, interroger) ;
- [ ] **Citer** les bases du référencement.

---


## 1. Pourquoi une Organisation Doit Être en Ligne

### 1.1 Les 5 Raisons Business

```
   ① VISIBILITÉ ET DÉCOUVRABILITÉ
   ──────────────────────────────────────────────────────────────
   Beaucoup de clients cherchent une entreprise en ligne avant
   de la contacter.

   Sans site web :
   • Invisible sur les moteurs de recherche
   • Absent des comparateurs
   • Pas de fiche Google My Business complète

   Avec site web :
   • Référencement naturel (SEO) → trafic gratuit
   • Publicité ciblée (Google Ads)
   • Présence locale (Google Maps, avis)

   ② CRÉDIBILITÉ ET CONFIANCE
   ──────────────────────────────────────────────────────────────
   Les internautes jugent souvent le sérieux d'une entreprise
   sur la qualité de son site web.

   Site web professionnel = signal de sérieux
   Pas de site = doute sur la fiabilité

   ③ DISPONIBILITÉ 24/7
   ──────────────────────────────────────────────────────────────
   Un site web ne ferme jamais :
   • Consultation services à 22h le dimanche
   • Formulaire de contact/devis en continu
   • FAQ répond sans mobiliser le standard

   Intérêt : des demandes arrivent hors des horaires de bureau

   ④ OUTIL COMMERCIAL ET MARKETING
   ──────────────────────────────────────────────────────────────
   Le site web est un commercial qui ne dort jamais :
   • Présentation produits/services avec photos
   • Témoignages clients
   • Call-to-action (devis, achat, contact)
   • Mesure du ROI (Google Analytics)

   ⑤ RECRUTEMENT ET RÉPUTATION EMPLOYEUR
   ──────────────────────────────────────────────────────────────
   Les candidats se renseignent sur l'entreprise en ligne avant
   de postuler.

   Site web employeur :
   • Présentation culture d'entreprise
   • Offres d'emploi visibles
   • Attractivité RH
```

### 1.2 Les Types de Présence en Ligne

| **Type** | **Objectif** | **Contenu** | **Coût/an** | **Exemple** |
|---|---|---|---|---|
| **Site vitrine** | Présenter l'entreprise | 5-10 pages | 500-1500 € | Cabinet comptable |
| **Blog** | Partager expertise, SEO | Articles réguliers | 300-800 € | Cabinet avocat |
| **E-commerce** | Vendre en ligne | Catalogue, panier, paiement | 2000-5000 € | Boutique vêtements |
| **Application web** | Fournir service en ligne | Fonctionnalités interactives | 5000-20000 € | SaaS |
| **Portail intranet** | Centraliser infos employés | Documents RH, annuaire | 1000-3000 € | PME > 50 salariés |

> [!NOTE]
> Pour beaucoup de petites structures, un **site vitrine** ou un **blog** suffit.

### 1.3 Coûts et ROI

**Coût d'un site web professionnel (WordPress) :**

```
   INVESTISSEMENT INITIAL
   ──────────────────────────────────────────────────────────────
   Nom de domaine (.fr, .com)           : 10-20 €/an
   Hébergement web                       : 50-150 €/an
   Thème WordPress premium (optionnel)   : 0-60 € (unique)
   Développement/configuration           : 500-2000 €
                                          OU 0 € (alternant)
   ───────────────────────────────────────────────────────────────
   TOTAL première année                  : 560-2230 €

   COÛT ANNUEL RÉCURRENT
   ──────────────────────────────────────────────────────────────
   Hébergement + domaine                 : 60-170 €/an
   Maintenance                           : 200-600 €/an
                                          OU 0 € (interne)
   ───────────────────────────────────────────────────────────────
   TOTAL années suivantes                : 60-770 €/an
```

**Calcul du ROI (exemple PME plomberie) :**

```
   Coût site : 1 000 € première année, puis 300 €/an

   Clients gagnés via le site : 15/an (sur 80 clients totaux)
   CA moyen par client : 800 €
   CA généré par le site : 15 × 800 € = 12 000 €

   ROI = (12 000 - 1 000) / 1 000 × 100 = 1 100%
   → Le site est rentabilisé dès la première année
```

## 2. Les CMS (Content Management Systems)

### 2.1 Définition

Un **CMS** est un logiciel qui permet de créer, gérer et modifier le contenu d'un site web **sans coder**.

```
   SITE WEB CODÉ À LA MAIN          vs          SITE WEB AVEC CMS
   ────────────────────────────                ─────────────────────
   Modifier un texte :                         Modifier un texte :
   1. Ouvrir fichier HTML                      1. Se connecter au CMS
   2. Trouver la ligne                         2. Cliquer "Modifier"
   3. Modifier le code                         3. Taper le texte
   4. Sauvegarder                              4. Cliquer "Publier"
   5. Uploader via FTP                         → Fini
   6. Vider le cache
   → Nécessite compétences tech                → Accessible non-technicien
```

**Avantages d'un CMS :**
- ✅ Pas besoin de coder
- ✅ Interface graphique intuitive (WYSIWYG)
- ✅ Gestion utilisateurs et droits
- ✅ Thèmes pré-faits (design professionnel)
- ✅ Plugins/extensions (fonctionnalités sans développement)
- ✅ SEO facilité
- ✅ Communauté et support

**Inconvénients :**
- ❌ Performance inférieure à un site codé optimisé
- ❌ Failles de sécurité potentielles (plugins non à jour)
- ❌ Moins de flexibilité
- ❌ Dépendance à l'écosystème du CMS

### 2.2 Comparatif des Principaux CMS

| **CMS** | **Positionnement** | **Cas d'usage** | **Difficulté** | **Points forts** |
|---|---|---|---|---|
| **WordPress** | CMS généraliste très répandu | Site vitrine, blog, e-commerce |  | Facilité, communauté énorme |
| **Shopify** | E-commerce | E-commerce clé en main |  | Spécialisé vente, hébergement inclus |
| **Joomla** | CMS généraliste | Sites communautaires |  | Flexibilité, gestion utilisateurs |
| **Drupal** | CMS généraliste | Sites entreprise complexes |  | Sécurité, performance |
| **PrestaShop** | E-commerce | E-commerce PME |  | Gratuit, français, modules |
| **Wix** | Site builder | Sites très simples |  | Tout-en-un, drag & drop |

> [!NOTE]
> **Choix pour la séance :** WordPress est très répandu, open source, gratuit et très documenté.

### 2.3 WordPress — Écosystème

**Écosystème :** des milliers de plugins et de thèmes (gratuits et payants), une très large communauté. La qualité et la maintenance varient : on vérifie la date de dernière mise à jour et le nombre d'installations avant d'installer un plugin.

**Composants :**

```
   WORDPRESS.ORG (open source, auto-hébergé — ce qu'on installe)
   ──────────────────────────────────────────────────────────────
   Logiciel gratuit à télécharger et installer sur son serveur
   Contrôle total, personnalisation illimitée
   Nécessite : serveur, base de données, maintenance

   WORDPRESS.COM (SaaS, hébergé par Automattic)
   ──────────────────────────────────────────────────────────────
   Service en ligne clé en main
   Hébergement inclus, pas de maintenance technique
   Limité en personnalisation (sauf plan payant)

   THÈMES (apparence visuelle)
   ──────────────────────────────────────────────────────────────
   Gratuits : 11 000+ sur wordpress.org/themes
   Payants : ThemeForest (60 $)
   Installation : Apparence → Thèmes → Ajouter

   PLUGINS (extensions de fonctionnalités)
   ──────────────────────────────────────────────────────────────
   Exemples populaires :
   • Yoast SEO (référencement)
   • WooCommerce (e-commerce)
   • Contact Form 7 (formulaires)
   • Wordfence (sécurité)
   • Jetpack (backups, performance)
```

## 3. La Stack LAMP

### 3.1 Architecture LAMP

**LAMP** = **Linux, Apache, MySQL, PHP** — stack d'hébergement web open source la plus répandue.

```
   ARCHITECTURE LAMP
   ──────────────────────────────────────────────────────────────

   CLIENT (Navigateur)
       │
       │ HTTP Request (http://monsite.local)
       ↓
   ┌──────────────────────────────────────────────────────────┐
   │  SERVEUR LINUX (Ubuntu Server 22.04)                     │
   │                                                           │
   │   ┌──────────────────────────────────────────────────┐   │
   │   │  APACHE (Serveur Web)                           │   │
   │   │  • Écoute port 80 (HTTP)                        │   │
   │   │  • Reçoit requête HTTP                          │   │
   │   │  • Identifie le VirtualHost                     │   │
   │   │  • Lit le fichier (.html, .php...)              │   │
   │   └────────────────┬─────────────────────────────┘   │
   │                    │                                  │
   │                    │ Si fichier .php                  │
   │                    ↓                                  │
   │   ┌──────────────────────────────────────────────────┐   │
   │   │  PHP (Langage de programmation)                 │   │
   │   │  • Interprète le code PHP                       │   │
   │   │  • Exécute les instructions                     │   │
   │   │  • Génère HTML dynamique                        │   │
   │   └────────────────┬─────────────────────────────┘   │
   │                    │                                  │
   │                    │ Si requête SQL (données)         │
   │                    ↓                                  │
   │   ┌──────────────────────────────────────────────────┐   │
   │   │  MySQL / MariaDB (Base de données)              │   │
   │   │  • Stocke les données (articles, users...)      │   │
   │   │  • Exécute requêtes SQL                         │   │
   │   │  • Renvoie résultats à PHP                      │   │
   │   └──────────────────────────────────────────────────┘   │
   │                                                           │
   └──────────────────────────────────────────────────────────┘
       │
       │ HTTP Response (HTML généré)
       ↓
   CLIENT (Affichage)
```

### 3.2 Rôle de Chaque Composant

| **Composant** | **Rôle** | **Équivalent quotidien** |
|---|---|---|
| **Linux** | Système d'exploitation du serveur | Le bâtiment qui héberge le restaurant |
| **Apache** | Serveur web (traite requêtes HTTP) | Le serveur qui prend commandes et sert |
| **MySQL** | Base de données (stocke contenus) | La cuisine où sont stockés les ingrédients |
| **PHP** | Langage de programmation | Le cuisinier qui prépare les plats |

### 3.3 Alternatives à LAMP

| **Stack** | **Composants** | **Usage** |
|---|---|---|
| **LEMP** | Linux + **Nginx** + MySQL + PHP | Alternative moderne (meilleure perf) |
| **WAMP** | **Windows** + Apache + MySQL + PHP | Développement Windows |
| **MEAN** | MongoDB + Express + Angular + **Node.js** | Stack JavaScript full-stack |

## À retenir

- Un site web repose sur un **serveur web**, un langage serveur et une **base de données** (LAMP).
- Un **CMS** comme WordPress accélère la création mais exige des **mises à jour** régulières.
- **HTTPS** chiffre les échanges et rassure le visiteur ; Let's Encrypt fournit des certificats gratuits.
- Les **mots de passe**, les droits d'accès et les **sauvegardes** font partie de la sécurité d'un site.

## Je vérifie mes acquis

- [ ] J'explique 3 raisons pour lesquelles une PME doit avoir un site web
- [ ] Je compare site vitrine, blog et e-commerce
- [ ] Je calcule le ROI d'un site web
- [ ] Je définis un CMS et cite ses avantages
- [ ] Je compare WordPress, Joomla, Drupal
- [ ] J'explique l'architecture LAMP et le rôle de chaque composant
- [ ] J'installe une stack LAMP complète
- [ ] Je configure un VirtualHost Apache
- [ ] J'installe WordPress et le configure
