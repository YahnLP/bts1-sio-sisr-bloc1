# Cours – Images système, clonage et déploiement

*BTS SIO SISR 1re année – Bloc 1 – S13*

> [!NOTE] Ce que tu dois savoir déjà
> - **Prérequis :** S02, S04, S05.
> - **À garder en tête :** lis le cours **avant** le TP ; la section « À retenir » en fin de cours résume l'essentiel.

## À la fin de ce cours, tu sauras

- [ ] **Distinguer** installation, clonage et image système ;
- [ ] **Préparer** une machine de référence (Sysprep, nettoyage) ;
- [ ] **Capturer** et **déployer** une image avec Clonezilla ;
- [ ] **Vérifier** le déploiement (SID, nom, tests) ;
- [ ] **Situer** WDS et MDT comme solutions en entreprise.

---


## 1. Concepts Fondamentaux

### 1.1 Qu'est-ce qu'une Image Système ?

Une **image système** (ou **image disque**) est une copie exacte du contenu d'un disque dur ou d'une partition, incluant :

```
   IMAGE SYSTÈME = SNAPSHOT COMPLET D'UN DISQUE
   ─────────────────────────────────────────────────────────────
   ├── Système d'exploitation (Windows, Linux...)
   ├── Pilotes matériels (carte réseau, graphique, son...)
   ├── Logiciels pré-installés (Office, navigateurs, outils...)
   ├── Configuration système (services, registre Windows...)
   ├── Personnalisation (fond d'écran, icônes, raccourcis...)
   ├── Comptes utilisateurs locaux
   └── Données (si incluses — généralement non recommandé)

   Format de l'image :
   ├── Fichier unique compressé (.img, .wim, .gz...)
   ├── Taille : 5-15 Go selon contenu (compressé)
   └── Peut être stockée sur serveur, NAS, disque externe
```

> [!TIP]
> **Analogie cuisine :** Une image système, c'est comme une recette de gâteau déjà cuite et congelée. Au lieu de refaire toute la recette à chaque fois (installer Windows, puis Office, puis...), on décongèle le gâteau déjà prêt et on l'adapte (nom de la machine, utilisateur).

### 1.2 Clonage vs Image vs Installation

| **Méthode** | **Principe** | **Avantages** | **Inconvénients** | **Usage** |
|---|---|---|---|---|
| **Installation manuelle** | Installer l'OS puis chaque logiciel un par un | Contrôle total, personnalisation | Très long, risque d'erreur | 1-5 postes uniques |
| **Clonage disque à disque** | Copier bit-à-bit disque A → disque B | Très rapide | Nécessite 2 disques de même taille minimum | Migration 1:1 |
| **Image système** | Capturer → stocker → déployer sur N postes | Rapide, reproductible, centralisé | Préparation initiale | Parc homogène 10+ postes |
| **Déploiement réseau PXE** | Déployer image via réseau (WDS, Fog) | Pas de clé USB, multicast | Infrastructure serveur nécessaire | Parc > 50 postes |

### 1.3 Les Cas d'Usage du Déploiement d'Images

| **Cas d'usage** | **Description** | **Intérêt** |
|---|---|---|
| **Déploiement de parc neuf** | 50-200 nouveaux postes identiques à configurer | Gain de temps très important |
| **Renouvellement de parc** | Remplacer tous les postes tous les 4-5 ans | Gain de temps important |
| **Disaster Recovery** | Restaurer un poste défaillant en 20 min | Restauration rapide |
| **Standardisation** | Garantir que tous les postes sont identiques | Qualité constante + conformité |
| **Formation / Salles TP** | Remettre à neuf 30 postes entre deux sessions | Remise à neuf rapide |
| **Migration OS** | Passer 100 postes de Windows 10 à Windows 11 | Migration homogène |

## 2. La Machine de Référence (Golden Image)

### 2.1 Définition

La **machine de référence** (ou **golden image** / **master image**) est le poste modèle qui sera cloné pour tous les autres postes du parc. Sa qualité détermine la qualité de tous les déploiements.

```
   CONSTRUCTION D'UNE MACHINE DE RÉFÉRENCE — CHECKLIST
   ─────────────────────────────────────────────────────────────

   ☐ ÉTAPE 1 — Installation OS propre
      • OS original (ISO officielle Microsoft ou distribution Linux)
      • Partition unique (C:\ pour Windows, / pour Linux)
      • Pas de données personnelles

   ☐ ÉTAPE 2 — Mises à jour complètes
      • Windows Update jusqu'à 0 mise à jour en attente
      • Redémarrage pour finaliser

   ☐ ÉTAPE 3 — Pilotes matériels
      • Pilotes génériques Microsoft (suffisent pour matériel récent)
      • OU pilotes spécifiques si parc homogène (Dell, HP...)

   ☐ ÉTAPE 4 — Logiciels standards
      • Office, Adobe Reader, 7-Zip, navigateurs...
      • Installer en version silencieuse si possible (déploiement sans GUI)

   ☐ ÉTAPE 5 — Configuration système
      • Services Windows optimisés (désactiver services inutiles)
      • Stratégies de sécurité (pare-feu, UAC, updates auto)
      • Fond d'écran corporate
      • Raccourcis bureautiques standards

   ☐ ÉTAPE 6 — Nettoyage pré-capture
      • Supprimer fichiers temporaires (Disk Cleanup)
      • Vider la corbeille
      • Supprimer les logs de setup
      • Défragmenter le disque (HDD uniquement, pas SSD)

   ☐ ÉTAPE 7 — Sysprep (Windows uniquement — voir II.B)
      • Généralisation pour retirer l'identité unique
```

### 2.2 Sysprep — La Généralisation Windows

**Sysprep** (System Preparation Tool) est un utilitaire Microsoft qui **généralise** une installation Windows pour qu'elle puisse être clonée sans conflit.

```
   PROBLÈME SANS SYSPREP
   ─────────────────────────────────────────────────────────────
   Chaque installation Windows génère un SID (Security Identifier)
   unique pour la machine. Si on clone sans Sysprep :

   PC-REF    → SID : S-1-5-21-123456789-...
   Clone 1   → SID : S-1-5-21-123456789-...  ← IDENTIQUE !
   Clone 2   → SID : S-1-5-21-123456789-...  ← IDENTIQUE !

   Conséquence :
   • Conflits dans Active Directory (même SID = même machine)
   • Problèmes de licences Windows (activation refusée)
   • Erreurs réseau (NetBIOS, WINS...)

   SOLUTION : SYSPREP
   ─────────────────────────────────────────────────────────────
   Sysprep retire l'identité unique de Windows et prépare l'image
   pour être redéployée. À chaque déploiement, Windows génère :
   • Un nouveau SID
   • Un nouveau nom de machine
   • Une nouvelle demande d'activation (si pas de clé générique)
```

**Commande Sysprep (Windows) :**

```cmd
C:\Windows\System32\Sysprep\sysprep.exe /generalize /oobe /shutdown

Options :
/generalize → Retire le SID et les infos spécifiques
/oobe       → Au prochain boot, affiche l'assistant de configuration initiale
/shutdown   → Éteint la machine après Sysprep (prêt à capturer l'image)
```

> [!WARNING]
> **IMPORTANT :** Sysprep **doit** être exécuté AVANT de capturer l'image Windows. Si oublié, tous les clones auront le même SID → problèmes garantis.

### 2.3 Linux et Généralisation

Sous Linux, il n'y a pas de SID, mais il faut quand même **nettoyer** avant de capturer l'image :

```bash
# Supprimer l'historique des commandes
history -c
rm ~/.bash_history

# Supprimer les clés SSH uniques (si présentes)
rm -rf /etc/ssh/ssh_host_*

# Vider les logs système
> /var/log/syslog
> /var/log/auth.log

# Supprimer les règles réseau persistantes (udev)
rm /etc/udev/rules.d/70-persistent-net.rules

# Réinitialiser le hostname (sera reconfiguré au déploiement)
echo "localhost" > /etc/hostname

# Nettoyer le cache APT
apt-get clean
```

## 3. Outils de Clonage et Déploiement

### 3.1 Comparatif des Outils

| **Outil** | **OS supportés** | **Type** | **Complexité** | **Usage typique** |
|---|---|---|---|---|
| **Clonezilla** | Windows, Linux, macOS | Live CD/USB, standalone ou serveur |  | PME, salle TP, technicien autonome |
| **WDS/MDT** | Windows uniquement | Serveur Windows, déploiement PXE réseau |  | Entreprise avec AD, parc > 50 postes |
| **Fog Project** | Windows, Linux | Serveur Linux, déploiement PXE réseau |  | Alternative open source à WDS |
| **Ghost (Symantec)** | Windows, Linux | Payant, entreprise |  | Grandes DSI (déclin face au gratuit) |
| **dd** | Linux (tout) | Ligne de commande |  | Experts Linux, serveurs |
| **Acronis True Image** | Windows, macOS | Payant, GUI simple |  | Particuliers, petites structures |

> [!NOTE]
> **Choix pédagogique :** Clonezilla est retenu car il est gratuit, universel, ne nécessite pas d'infrastructure complexe, et est très utilisé en PME. WDS/MDT pourra servir dans le projet (SimIO) quand l'AD sera en place.

### 3.2 Clonezilla — Présentation

**Clonezilla** est un outil open source de clonage et déploiement basé sur **Partclone** et **dd**. Il existe en deux versions :

```
   CLONEZILLA LIVE (S12)
   ─────────────────────────────────────────────────────────────
   • Boot depuis USB ou CD
   • Mode standalone : 1 machine à la fois
   • Image stockée sur disque externe, serveur SSH, NFS, Samba
   • Interface texte (menus guidés)
   • Usage : technicien mobile, disaster recovery, petit parc

   CLONEZILLA SERVER (SE — Server Edition)
   ─────────────────────────────────────────────────────────────
   • Serveur DRBL (Diskless Remote Boot in Linux)
   • Déploiement multicast : 1 image → N machines simultanément
   • Boot PXE réseau
   • Usage : salle TP, déploiement de masse (50+ postes)
```

### 3.3 WDS/MDT — Aperçu (Approfondi en S17-S18)

**WDS** (Windows Deployment Services) et **MDT** (Microsoft Deployment Toolkit) sont les outils Microsoft pour le déploiement automatisé de Windows en environnement d'entreprise.

<figure class="graphe diagramme"><svg viewBox="0 0 760 250" style="max-width:760px" role="img" aria-label="Déploiement par le réseau : client PXE, serveur DHCP et serveur WDS" xmlns="http://www.w3.org/2000/svg">
<rect x="10" y="20" width="220" height="100" rx="8" class="dg-box"/>
<text x="120.0" y="48.0" text-anchor="middle" class="dg-t">Client (poste à déployer)</text>
<text x="120.0" y="66.0" text-anchor="middle" class="dg-s">boot réseau PXE</text>
<text x="120.0" y="84.0" text-anchor="middle" class="dg-s">télécharge l&#x27;image</text>
<text x="120.0" y="102.0" text-anchor="middle" class="dg-s">unattend.xml</text>
<rect x="520" y="20" width="230" height="100" rx="8" class="dg-ok"/>
<text x="635.0" y="57.0" text-anchor="middle" class="dg-t">Serveur DHCP</text>
<text x="635.0" y="75.0" text-anchor="middle" class="dg-s">options 66 et 67</text>
<text x="635.0" y="93.0" text-anchor="middle" class="dg-s">indique où trouver WDS</text>
<rect x="250" y="150" width="260" height="90" rx="8" class="dg-dark"/>
<text x="380.0" y="182.0" text-anchor="middle" class="dg-w">Serveur WDS (Windows Server)</text>
<text x="380.0" y="200.0" text-anchor="middle" class="dg-s">images .wim, boot PXE</text>
<text x="380.0" y="218.0" text-anchor="middle" class="dg-s">intégré à Active Directory</text>
<line x1="230" y1="60" x2="511.0" y2="60.0" class="dg-line"/>
<polygon points="520,60 511.0,55.0 511.0,65.0" class="dg-ah"/>
<text x="375" y="50" text-anchor="middle" class="dg-s">1. demande d&#x27;adresse et options de boot</text>
<line x1="520" y1="90" x2="239.0" y2="90.0" class="dg-dash"/>
<polygon points="230,90 239.0,95.0 239.0,85.0" class="dg-ah"/>
<text x="375" y="108" text-anchor="middle" class="dg-s">2. adresse + serveur WDS</text>
<line x1="120" y1="120" x2="291.1" y2="148.5" class="dg-line"/>
<polygon points="300,150 291.9,143.6 290.3,153.5" class="dg-ah"/>
<text x="160" y="152" text-anchor="middle" class="dg-s">3. image</text>
</svg>
</figure>

- **Serveur WDS** (rôle Windows Server) : héberge les images de déploiement (.wim), boot PXE sans clé USB, intégré à Active Directory.
- **Serveur DHCP** : fournit les options 66 et 67 (boot PXE) et indique au client où trouver WDS.
- **Client** : boot réseau PXE (option du BIOS), télécharge l'image, déploiement automatique avec fichier de réponses (unattend.xml).

**Avantages :** déploiement sans intervention (zero-touch), injection automatique des pilotes selon le modèle, intégration au domaine, post-configuration par scripts PowerShell.

**Inconvénients :** infrastructure complexe (AD + DHCP + WDS), Windows uniquement, courbe d'apprentissage élevée.

## 4. Workflow de Déploiement avec Clonezilla

### 4.1 Les 4 Phases

```
   PHASE 1 — PRÉPARATION
   ─────────────────────────────────────────────────────────────
   1. Créer la machine de référence (golden image)
   2. Installer OS + logiciels + configuration
   3. Nettoyer et Sysprep (Windows) ou nettoyage manuel (Linux)
   4. Éteindre la machine

   PHASE 2 — CAPTURE DE L'IMAGE
   ─────────────────────────────────────────────────────────────
   1. Booter la machine de référence sur Clonezilla Live (USB/CD)
   2. Choisir "device-image" (sauvegarder vers fichier image)
   3. Sélectionner la destination (serveur SSH, disque externe...)
   4. Choisir "savedisk" (sauvegarder le disque entier)
   5. Nommer l'image (ex : Win11-Office-2024-11-20)
   6. Lancer la capture → durée : 10-30 min selon taille
   7. Image générée : fichier .img compressé

   PHASE 3 — DÉPLOIEMENT DE L'IMAGE
   ─────────────────────────────────────────────────────────────
   1. Booter le poste cible vierge sur Clonezilla Live
   2. Choisir "device-image" (restaurer depuis fichier image)
   3. Sélectionner la source (même emplacement que la capture)
   4. Choisir "restoredisk" (restaurer le disque entier)
   5. Sélectionner l'image à déployer
   6. Confirmer (ATTENTION : écrase tout le disque cible)
   7. Lancer le déploiement → durée : 5-15 min
   8. Redémarrer

   PHASE 4 — POST-CONFIGURATION
   ─────────────────────────────────────────────────────────────
   Windows :
   1. Assistant OOBE s'affiche (si Sysprep exécuté)
   2. Configurer : région, clavier, nom de machine, utilisateur
   3. Activer Windows (clé de produit si nécessaire)
   4. Joindre le domaine AD (si applicable)
   5. Vérifier le SID : ouvrir cmd et taper `whoami /user`
      → Le SID doit être différent de la machine de référence

   Linux :
   1. Changer le hostname : `hostnamectl set-hostname PC-XX`
   2. Regénérer clés SSH : `dpkg-reconfigure openssh-server`
   3. Configurer IP statique ou DHCP selon besoin
   4. Tester la connectivité réseau
```

### 4.2 Commandes Clonezilla Utiles

Clonezilla s'utilise via une interface texte en mode menu, mais voici les choix à effectuer :

```
   CAPTURE D'IMAGE (savedisk)
   ─────────────────────────────────────────────────────────────
   Clonezilla live → device-image → local_dev (disque externe)
   ou ssh_server (serveur distant) ou samba_server

   → Beginner mode (recommandé)
   → savedisk (sauvegarder le disque entier)
   → Nom de l'image : Win11-Office-2024-11-20
   → Disque source : sda (disque à capturer)
   → Options de compression : -z1p (compression gzip, parallèle)
   → Confirmer et lancer

   DÉPLOIEMENT D'IMAGE (restoredisk)
   ─────────────────────────────────────────────────────────────
   Clonezilla live → device-image → local_dev ou ssh_server

   → Beginner mode
   → restoredisk (restaurer le disque entier)
   → Sélectionner l'image : Win11-Office-2024-11-20
   → Disque cible : sda (disque à écraser)
   → ATTENTION : toutes les données du disque cible seront perdues
   → Confirmer et lancer
```

## À retenir

- Une **image système** permet de redéployer un poste identique rapidement.
- On prépare une **machine de référence** (golden image) propre, à jour, sans données personnelles.
- Un **clonage** sans préparation (nom, identifiants uniques) pose des problèmes : on généralise avant de capturer.
- On **documente** le déploiement par une procédure testée.

## Je vérifie mes acquis

- [ ] J'explique la différence entre installation manuelle, clonage et image système
- [ ] Je liste les 7 étapes de création d'une machine de référence
- [ ] J'explique pourquoi Sysprep est obligatoire sous Windows avant capture
- [ ] Je décris le workflow complet de déploiement avec Clonezilla
- [ ] Je sais vérifier que le SID est différent après déploiement
- [ ] Je compare Clonezilla et WDS/MDT (avantages/inconvénients)
- [ ] J'identifie 3 cas d'usage du déploiement d'images en entreprise
