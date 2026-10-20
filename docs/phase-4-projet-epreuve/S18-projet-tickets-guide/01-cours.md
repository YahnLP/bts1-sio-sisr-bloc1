# Cours – Documentation utilisateur, tutoriels et FAQ

*BTS SIO SISR 1re année – Bloc 1 – S18*

> [!NOTE] Ce que tu dois savoir déjà
> - **Prérequis :** S17.
> - **À garder en tête :** lis le cours **avant** le TP ; la section « À retenir » en fin de cours résume l'essentiel.

## À la fin de ce cours, tu sauras

- [ ] **Résoudre** trois tickets réalistes de bout en bout ;
- [ ] **Rédiger** un guide utilisateur avec tutoriels et FAQ ;
- [ ] **Documenter** le projet dans le wiki (architecture, installation, incidents) ;
- [ ] **Présenter** le projet en quelques minutes ;
- [ ] **Rédiger** une fiche de réalisation pour le portfolio.

---


## 1. Documentation Technique vs Utilisateur

### 1.1 Les Deux Types de Documentation

```
   DOCUMENTATION TECHNIQUE
   ─────────────────────────────────────────────────────────────
   Public : Techniciens, administrateurs IT
   Objectif : Installer, configurer, maintenir un système
   Langage : Technique, précis, avec jargon IT
   Contenu : Procédures détaillées, commandes, configurations
   
   Exemple :
   "Installation de GLPI sur Ubuntu Server 22.04 avec Apache 2.4,
   PHP 8.1 et MariaDB 10.6. Configuration du VirtualHost avec
   DocumentRoot /var/www/glpi/public et activation du module
   rewrite pour la réécriture d'URL."

   DOCUMENTATION UTILISATEUR
   ─────────────────────────────────────────────────────────────
   Public : Utilisateurs finaux (employés, non-techniciens)
   Objectif : Utiliser un service au quotidien
   Langage : Simple, accessible, sans jargon
   Contenu : Actions essentielles, captures d'écran, FAQ
   
   Exemple :
   "Comment créer un ticket de support ?
   1. Allez sur http://support.entreprise.fr
   2. Cliquez sur le bouton vert 'Nouveau ticket'
   3. Remplissez le formulaire
   4. Cliquez sur 'Envoyer'"
```

### 1.2 Règles de Rédaction Utilisateur

**① UTILISER UN LANGAGE SIMPLE**

```
MAUVAIS (trop technique)
"Authentifiez-vous sur l'interface GLPI en saisissant vos 
credentials LDAP dans le formulaire d'authentification."

BON (simple et direct)
"Connectez-vous avec votre identifiant et mot de passe habituels."
```

**② ÊTRE CONCRET ET DIRECT**

```
MAUVAIS (abstrait)
"Il est possible de générer une demande d'assistance via 
le système de ticketing intégré."

BON (concret)
"Pour demander de l'aide, créez un ticket en 3 clics."
```

**③ UNE ACTION = UNE PHRASE COURTE**

```
MAUVAIS (phrase longue)
"Après avoir ouvert votre navigateur web et tapé l'adresse du
support dans la barre d'adresse, vous devrez cliquer sur le
bouton de connexion situé en haut à droite de la page d'accueil."

BON (étapes numérotées)
1. Ouvrez votre navigateur
2. Allez sur http://support.entreprise.fr
3. Cliquez sur "Connexion" en haut à droite
```

**④ UTILISER DES CAPTURES D'ÉCRAN ANNOTÉES**

Un bon guide utilisateur comporte **au moins une capture par étape importante**.

```
Annotations recommandées :
• Flèche rouge → bouton à cliquer
• Encadré rouge → champ à remplir
• Numéro → ordre des actions
• Texte explicatif → clarification si besoin
```

## 2. Structure d'un Guide Utilisateur

### 2.1 Modèle Type

```
═══════════════════════════════════════════════════════════════
                    GUIDE UTILISATEUR [NOM DU SERVICE]
═══════════════════════════════════════════════════════════════

TABLE DES MATIÈRES
──────────────────────────────────────────────────────────────
1. Introduction
2. Accéder au service
3. Tâches courantes
   3.1. [Tâche 1]
   3.2. [Tâche 2]
   3.3. [Tâche 3]
4. Foire Aux Questions (FAQ)
5. Contact et support

1. INTRODUCTION
──────────────────────────────────────────────────────────────
[Nom du service] est l'outil de [description simple] utilisé
par tous les employés de [entreprise].

Avec cet outil, vous pouvez :
• [Fonction 1]
• [Fonction 2]
• [Fonction 3]

Ce guide vous explique comment utiliser les fonctions essentielles.

2. ACCÉDER AU SERVICE
──────────────────────────────────────────────────────────────
Adresse web : http://[url]
Identifiant : Votre identifiant habituel
Mot de passe : Votre mot de passe habituel

[Capture d'écran de la page de connexion]

3. TÂCHES COURANTES
──────────────────────────────────────────────────────────────

3.1. [TÂCHE 1] — Comment faire [action] ?
─────────────────────────────────────────────────────────
1. [Étape 1]
   [Capture annotée]

2. [Étape 2]
   [Capture annotée]

3. [Étape 3]
   [Capture annotée]

Résultat attendu : [ce qui doit se passer]

4. FOIRE AUX QUESTIONS
──────────────────────────────────────────────────────────────
Q : [Question fréquente 1] ?
R : [Réponse courte et claire]

Q : [Question fréquente 2] ?
R : [Réponse courte et claire]

5. CONTACT ET SUPPORT
──────────────────────────────────────────────────────────────
En cas de problème, contactez le support IT :
• Email : support@entreprise.fr
• Téléphone : 01 XX XX XX XX
• Ticket GLPI : http://glpi.entreprise.fr

Horaires : Lun-Ven 8h-18h
═══════════════════════════════════════════════════════════════
```

### 2.2 Les Sections Essentielles

| **Section** | **Contenu** | **Obligatoire** |
|---|---|---|
| **Introduction** | À quoi sert le service ? Qui l'utilise ? | Oui |
| **Accès** | Comment se connecter ? URL, identifiants | Oui |
| **Tâches courantes** | 3-5 tutoriels pas-à-pas | Oui |
| **FAQ** | Questions fréquentes et réponses | Oui |
| **Contact support** | Qui contacter en cas de problème ? | Oui |
| **Glossaire** | Définitions des termes techniques (optionnel) | ☐ Non |
| **Raccourcis clavier** | (si applicable) | ☐ Non |

## 3. Créer des Tutoriels Efficaces

### 3.1 Le Principe du "Pas-à-Pas Visuel"

Un tutoriel efficace suit cette structure :

```
═══════════════════════════════════════════════════════════════
TUTORIEL : [TITRE DE L'ACTION]
═══════════════════════════════════════════════════════════════

Durée estimée : [X minutes]
Difficulté : ☆☆☆ (Facile / Moyen / Avancé)

─────────────────────────────────────────────────────────────
ÉTAPE 1 : [ACTION]
─────────────────────────────────────────────────────────────
[Description courte]

[CAPTURE D'ÉCRAN ANNOTÉE]

Conseil : [Astuce ou point d'attention]

─────────────────────────────────────────────────────────────
ÉTAPE 2 : [ACTION]
─────────────────────────────────────────────────────────────
[Description courte]

[CAPTURE D'ÉCRAN ANNOTÉE]

─────────────────────────────────────────────────────────────
[...suite des étapes...]
─────────────────────────────────────────────────────────────

RÉSULTAT
─────────────────────────────────────────────────────────────
À la fin de ce tutoriel, vous avez [résultat obtenu].

[CAPTURE DU RÉSULTAT FINAL]

═══════════════════════════════════════════════════════════════
```

### 3.2 Bonnes Pratiques des Captures

**① QUALITÉ DE L'IMAGE**

- Résolution : 1280×720 minimum
- Format : PNG (pas de compression, texte net)
- Recadrage : Garder uniquement la zone utile

**② ANNOTATIONS**

```
TYPES D'ANNOTATIONS UTILES
──────────────────────────────────────────────────────────────
Flèche rouge        → Indique où cliquer
Encadré rouge       → Champ à remplir
①②③ Numéros           → Ordre des actions
Bulle de texte      → Explication courte
**Attention :** Icône attention     → Point important
```

**③ COHÉRENCE VISUELLE**

- Utiliser toujours les **mêmes couleurs** (ex : rouge pour les actions)
- Même **style d'annotation** dans tout le guide
- Même **police et taille** pour les textes

**④ NOMMAGE DES FICHIERS**

```
Convention recommandée :
Guide_GLPI_Etape1_Connexion.png
Guide_GLPI_Etape2_CreerTicket.png
Guide_GLPI_Etape3_RemplirFormulaire.png
```

## 4. La FAQ (Foire Aux Questions)

### 4.1 Identifier les Questions Fréquentes

Les questions fréquentes proviennent de :
- **Retours utilisateurs** (tickets de support répétitifs)
- **Tests utilisateurs** (observation de nouveaux utilisateurs)
- **Anticipation** (points qui semblent confus dans l'interface)

**Exemples de questions fréquentes GLPI :**

```
Q : J'ai oublié mon mot de passe, que faire ?
Q : Comment savoir si mon ticket a été traité ?
Q : Puis-je annuler un ticket ?
Q : À qui s'adresse mon ticket ?
Q : Combien de temps avant d'avoir une réponse ?
Q : Puis-je ajouter une pièce jointe à un ticket ?
Q : Comment voir mes tickets précédents ?
Q : Que signifie "Statut : En attente" ?
```

### 4.2 Structure d'une FAQ

```
═══════════════════════════════════════════════════════════════
                    FOIRE AUX QUESTIONS (FAQ)
═══════════════════════════════════════════════════════════════

CONNEXION
──────────────────────────────────────────────────────────────
Q : J'ai oublié mon mot de passe, que faire ?
R : Contactez le support IT par téléphone (01 XX XX XX XX).
    Votre mot de passe sera réinitialisé sous 2 heures.

Q : Mon compte est bloqué, pourquoi ?
R : Après 5 tentatives de connexion échouées, votre compte est
    automatiquement verrouillé. Contactez le support.

TICKETS
──────────────────────────────────────────────────────────────
Q : Comment savoir si mon ticket a été traité ?
R : Vous recevez un email automatique à chaque changement de
    statut. Vous pouvez aussi consulter "Mes tickets" sur GLPI.

Q : Combien de temps avant d'avoir une réponse ?
R : Délai garanti selon la priorité :
    • Urgente : 2 heures
    • Normale : 8 heures
    • Basse : 24 heures

DIVERS
──────────────────────────────────────────────────────────────
Q : Je n'ai pas reçu l'email de confirmation, est-ce normal ?
R : Vérifiez votre dossier "Courrier indésirable". Si l'email
    n'y est pas, contactez le support.

═══════════════════════════════════════════════════════════════
```

---

## À retenir

- Un ticket est traité **de bout en bout** : qualification, diagnostic, solution, clôture, base de connaissances.
- Un **guide utilisateur** est court, illustré et testé par un utilisateur réel.
- La **documentation** (architecture, procédures, incidents) permet à un autre technicien de reprendre.
- La **fiche de réalisation** dit la vérité sur le contexte et sur **ta** contribution.

