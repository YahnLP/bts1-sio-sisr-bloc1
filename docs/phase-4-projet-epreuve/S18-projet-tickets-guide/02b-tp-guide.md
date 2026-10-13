# TP – Rédiger le guide utilisateur de GLPI

*BTS SIO SISR 1re année – Bloc 1 – S18*

## Objectif

Créer un guide utilisateur complet pour permettre aux employés de SimIO SARL d'utiliser GLPI pour créer et suivre leurs tickets de support.

## Livrables

1. **Guide utilisateur GLPI** (document Word/LibreOffice, 5-8 pages)
2. **3 tutoriels détaillés** avec captures annotées :
   - Tutoriel 1 : Se connecter à GLPI
   - Tutoriel 2 : Créer un ticket de support
   - Tutoriel 3 : Suivre l'état d'un ticket
3. **FAQ** (5 questions minimum)

## ÉTAPE 1 — Préparer les Captures (15 min)

**Installer un outil de capture :**

**Windows :**
- Snipping Tool (intégré Windows 10/11)
- OU télécharger ShareX : https://getsharex.com

**Linux :**
- Flameshot : `sudo apt install flameshot`

**Prendre les captures suivantes :**

| **Capture** | **Description** |
|---|---|
| Capture 1 | Page d'accueil GLPI (http://glpi.local) |
| Capture 2 | Formulaire de connexion |
| Capture 3 | Page d'accueil utilisateur connecté |
| Capture 4 | Bouton "Créer un ticket" |
| Capture 5 | Formulaire de création de ticket (vide) |
| Capture 6 | Formulaire de création de ticket (rempli) |
| Capture 7 | Ticket créé avec confirmation |
| Capture 8 | Liste "Mes tickets" |
| Capture 9 | Détail d'un ticket (statut, solution) |

**Annoter les captures :**
- Flèche rouge sur les boutons à cliquer
- Encadré rouge sur les champs à remplir
- Numéros pour l'ordre des actions

## ÉTAPE 2 — Rédiger le Guide (30 min)

**Utiliser le modèle fourni (Annexe 1).**

### Page 1 — Page de garde

```
═══════════════════════════════════════════════════════════════
              GUIDE UTILISATEUR
              SUPPORT IT — GLPI

              SimIO SARL

              Version 1.0 — (date)
═══════════════════════════════════════════════════════════════
```

### Page 2 — Table des matières

```
TABLE DES MATIÈRES
──────────────────────────────────────────────────────────────
1. Introduction .............................................. 3
2. Accéder à GLPI ............................................ 4
3. Tutoriels
   3.1. Se connecter ......................................... 5
   3.2. Créer un ticket de support .......................... 6
   3.3. Suivre l'état d'un ticket ........................... 7
4. Foire Aux Questions (FAQ) ................................. 8
5. Contact et support ........................................ 9
```

### Page 3 — Introduction

```
1. INTRODUCTION
──────────────────────────────────────────────────────────────
GLPI est l'outil de support informatique de SimIO SARL.

Grâce à GLPI, vous pouvez :
• Signaler un problème informatique (ordinateur, logiciel, réseau)
• Demander de l'aide au support IT
• Suivre l'avancement de vos demandes

Ce guide vous explique comment utiliser GLPI au quotidien.
```

### Page 4 — Accéder à GLPI

```
2. ACCÉDER À GLPI
──────────────────────────────────────────────────────────────
Adresse web : http://glpi.local
              (ou http://support.simio.local)

Identifiant : Votre identifiant Windows habituel
              (exemple : pdurand)

Mot de passe : Votre mot de passe Windows habituel

[INSÉRER CAPTURE 1 : Page d'accueil GLPI]

💡 Conseil : Ajoutez cette page à vos favoris pour y accéder
             rapidement.
```

### Pages 5-7 — Tutoriels (voir ÉTAPE 3)

### Page 8 — FAQ (voir ÉTAPE 4)

### Page 9 — Contact

```
5. CONTACT ET SUPPORT
──────────────────────────────────────────────────────────────
En cas de problème avec GLPI ou pour toute question :

Email : support@simio.local
Téléphone : 05 XX XX XX XX
Ticket GLPI : http://glpi.local

Horaires du support :
Lundi - Vendredi : 8h00 - 18h00

Délais de réponse garantis :
• Urgence : 2 heures
• Normal : 8 heures
• Basse priorité : 24 heures
```

## ÉTAPE 3 — Rédiger les 3 Tutoriels (15 min)

### Tutoriel 1 : Se connecter à GLPI

```
═══════════════════════════════════════════════════════════════
TUTORIEL : SE CONNECTER À GLPI
═══════════════════════════════════════════════════════════════

Durée : 1 minute
Difficulté : ☆☆☆ Facile

─────────────────────────────────────────────────────────────
ÉTAPE 1 : Ouvrir votre navigateur web
─────────────────────────────────────────────────────────────
Ouvrez Chrome, Firefox ou Edge.

─────────────────────────────────────────────────────────────
ÉTAPE 2 : Aller sur GLPI
─────────────────────────────────────────────────────────────
Dans la barre d'adresse, tapez : http://glpi.local

[CAPTURE 1 ANNOTÉE : Page d'accueil]

─────────────────────────────────────────────────────────────
ÉTAPE 3 : Saisir vos identifiants
─────────────────────────────────────────────────────────────
• Identifiant : Tapez votre identifiant Windows
• Mot de passe : Tapez votre mot de passe Windows

[CAPTURE 2 ANNOTÉE : Formulaire connexion avec encadrés rouges]

⚠️ Attention : Respectez les majuscules et minuscules.

─────────────────────────────────────────────────────────────
ÉTAPE 4 : Cliquer sur "Connexion"
─────────────────────────────────────────────────────────────
Cliquez sur le bouton bleu "Connexion".

[CAPTURE 2 ANNOTÉE : Flèche rouge sur le bouton]

─────────────────────────────────────────────────────────────
RÉSULTAT
─────────────────────────────────────────────────────────────
Vous êtes maintenant connecté. Votre nom apparaît en haut à
droite de l'écran.

[CAPTURE 3 : Page d'accueil utilisateur connecté]

═══════════════════════════════════════════════════════════════
```

### Tutoriel 2 : Créer un ticket de support

*(Structure similaire, 4-5 étapes avec captures)*

### Tutoriel 3 : Suivre l'état d'un ticket

*(Structure similaire, 3-4 étapes avec captures)*

## ÉTAPE 4 — Rédiger la FAQ (10 min)

**Créer au minimum 5 questions-réponses :**

```
Q : J'ai oublié mon mot de passe GLPI, que faire ?
R : Votre mot de passe GLPI est le même que votre mot de passe
    Windows. Si vous avez oublié votre mot de passe Windows,
    contactez le support au 05 XX XX XX XX.

Q : Comment savoir si mon ticket a été traité ?
R : Vous recevez un email automatique à chaque changement de
    statut de votre ticket. L'email indique si le ticket est
    "En cours", "Résolu" ou "Clos".

Q : Puis-je annuler un ticket que j'ai créé ?
R : Oui. Ouvrez le ticket, puis cliquez sur "Actions" →
    "Supprimer". Si le ticket est déjà "En cours", contactez
    plutôt le technicien assigné.

Q : À qui est envoyé mon ticket ?
R : Votre ticket est automatiquement attribué à un technicien
    du support IT selon la catégorie choisie.

Q : Combien de temps avant d'avoir une réponse ?
R : Cela dépend de la priorité :
    • Urgente : 2 heures maximum
    • Normale : 8 heures maximum
    • Basse : 24 heures maximum
```

---
