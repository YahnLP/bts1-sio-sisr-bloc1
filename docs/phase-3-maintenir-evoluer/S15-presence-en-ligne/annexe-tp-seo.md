# Annexe – TP facultatif : référencement avec Yoast SEO

*BTS SIO SISR 1re année – Bloc 1 – S15*

## Objectif

Installer et configurer le plugin Yoast SEO pour optimiser le référencement du site WordPress.

## ÉTAPE 1 — Installer Yoast SEO (3 min)

**Dans WordPress :**

1. Extensions → Ajouter
2. Rechercher : **Yoast SEO**
3. Cliquer **Installer** (sur Yoast SEO by Team Yoast)
4. Cliquer **Activer**

## ÉTAPE 2 — Configuration Initiale (5 min)

1. SEO → Général
2. **Assistant de configuration** → Démarrer
3. Suivre les étapes :

**Étape 1 — Type de site :**
- Sélectionner : **Blog** (ou Entreprise locale si approprié)

**Étape 2 — Organisation ou personne :**
- Sélectionner : **Organisation**
- Nom : Mon Entreprise TP
- Logo : (laisser vide ou uploader un logo)

**Étape 3 — Profils sociaux :**
- (Laisser vide pour le TP)

**Étape 4 — Indexation :**
- Tout cocher (par défaut)

**Étape 5 — Plusieurs auteurs :**
- Non (site géré par 1 personne)

**Étape 6 — Terminé**

## ÉTAPE 3 — Optimiser une Page (7 min)

**Éditer la page "Bienvenue" (créée dans le TP WordPress) :**

1. Pages → Toutes les pages
2. Éditer "Bienvenue"
3. Descendre jusqu'à la section **Yoast SEO**

**Phrase clé cible :**
- Saisir : `WordPress LAMP tutorial`

**Optimiser le titre SEO :**
- Titre actuel : "Bienvenue"
- Nouveau titre : `Installation WordPress sur LAMP - Tutoriel Complet`
- Yoast affiche un aperçu Google

**Optimiser la méta-description :**
- Cliquer "Modifier l'extrait"
- Saisir : `Guide complet pour installer WordPress sur une stack LAMP (Linux, Apache, MySQL, PHP). Installation pas à pas avec captures d'écran.`

**Score SEO Yoast :**
- Yoast analyse la page
- Affiche des suggestions (points verts ✅ / orange  / rouges ❌)
- Exemples de suggestions :
  - "La phrase clé apparaît dans le titre" ✅
  - "La méta-description fait 155 caractères" ✅
  - "La phrase clé apparaît dans l'URL" 

**Améliorer l'URL (slug) :**
- Dans le bloc "Permalien" (en haut de la page)
- Modifier : `wordpress-lamp-tutorial`

**Mettre à jour la page**

## ÉTAPE 4 — Vérifier le Sitemap (5 min)

Yoast SEO génère automatiquement un sitemap XML.

**Accéder au sitemap :**
- URL : https://monsite.local/sitemap_index.xml
- Le navigateur affiche le sitemap XML

**Contenu du sitemap :**
- Liste des pages du site
- Liste des articles
- Dates de dernière modification

> [!NOTE]
> **En production :** Soumettre ce sitemap à Google Search Console.
