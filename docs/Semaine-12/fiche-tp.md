# 🖥️ TP — CAPTURE ET DÉPLOIEMENT D'IMAGE SYSTÈME

*Durée : 90 minutes — Individuel (ou binôme selon matériel)*

---

## Objectif

Créer une machine de référence Windows 10/11, capturer son image avec Clonezilla, puis déployer cette image sur une seconde machine vierge.

---

## Matériel Fourni

- **VM 1** : Machine de référence (Windows 10/11 installé)
- **VM 2** : Machine cible vierge (disque vide)
- **ISO Clonezilla Live** : Disponible sur le serveur ou à télécharger
- **Stockage image** : Clé USB 16 Go OU serveur SSH/NFS/Samba

---

## PHASE 1 — Préparation de la Machine de Référence (20 min)

### 1.1. Installation des Logiciels Standards

Sur la **VM 1** (machine de référence), installer :

| **Logiciel** | **Version** | **URL** |
|---|---|---|
| 7-Zip | Dernière stable | https://www.7-zip.org |
| VLC Media Player | Dernière stable | https://www.videolan.org |
| Mozilla Firefox | Dernière stable | https://www.mozilla.org/firefox |
| Adobe Acrobat Reader DC | Dernière | https://get.adobe.com/reader |

> 💡 **Astuce :** Utiliser Chocolatey pour installer en batch :
> ```powershell
> choco install 7zip vlc firefox adobereader -y
> ```

### 1.2. Personnalisation

- [ ] Changer le fond d'écran (logo de votre établissement ou image neutre)
- [ ] Créer un raccourci "Mes Applications" sur le bureau pointant vers `C:\Program Files`
- [ ] Désactiver les notifications Windows (Paramètres → Système → Notifications)

### 1.3. Nettoyage Pré-Capture

```cmd
# Nettoyage des fichiers temporaires
cleanmgr.exe

# Vider la corbeille
```

Décocher "Fichiers de mise à jour Windows" si vous voulez conserver les updates.

### 1.4. Sysprep (OBLIGATOIRE sous Windows)

**⚠️ SAUVEGARDER VOTRE TRAVAIL AVANT SYSPREP — La machine va s'éteindre**

```cmd
# Ouvrir une invite de commandes en Administrateur
cd C:\Windows\System32\Sysprep
sysprep.exe /generalize /oobe /shutdown
```

**Options choisies dans la GUI Sysprep (si vous préférez l'interface graphique) :**
- Action de nettoyage : **Généraliser le système**
- Options d'arrêt : **Arrêter le système**
- Cocher : ☑ **Généraliser**

La machine va redémarrer, exécuter Sysprep, puis **s'éteindre automatiquement**.

> 🛑 **NE PAS REDÉMARRER LA MACHINE APRÈS SYSPREP** — Elle est prête à être capturée.

---

## PHASE 2 — Capture de l'Image avec Clonezilla (25 min)

### 2.1. Boot sur Clonezilla Live

1. Attacher l'ISO Clonezilla à la **VM 1**
2. Configurer le boot pour démarrer sur le CD/ISO
3. Redémarrer la VM → Clonezilla Live démarre

### 2.2. Choix des Options Clonezilla

**Interface Clonezilla :**

```
Clonezilla live (Default settings, VGA 800x600)
→ [Entrée]

Choose language : fr_FR.UTF-8 French | Français
→ [Entrée]

Ne pas toucher au mappage du clavier
→ [Entrée]

Start Clonezilla
→ [Entrée]

device-image   (Travailler avec disques ou partitions en utilisant des images)
→ [Entrée]

local_dev   (Monter un périphérique local)
→ [Entrée]

[Insérer votre clé USB ou configurer le serveur SSH]
→ [Entrée] après détection

Sélectionner le périphérique de destination pour l'image
→ Choisir votre clé USB (ex : sdb1)
→ [Entrée]

Mode Beginner   (Mode débutant: Accepter les options par défaut)
→ [Entrée]

savedisk   (Sauvegarder_disque_local_en_image)
→ [Entrée]
```

### 2.3. Nom de l'Image et Lancement

```
Nom de l'image : 2024-11-20-Win11-Office-img
→ [Entrée]

Disque source à sauvegarder : sda (disque de la VM)
→ Espace pour sélectionner, [Entrée]

Vérifier/réparer le système de fichiers avant de sauvegarder : -fsck
→ [Entrée]

Vérifier l'image sauvegardée : -scs (Skip checking)
→ [Entrée] (recommandé pour gagner du temps en TP)

Choisir si vous voulez chiffrer l'image : -senc (Skip)
→ [Entrée]

Action à effectuer après avoir terminé : poweroff
→ [Entrée]

Appuyez sur [Entrée] pour continuer...
→ [Entrée]

Êtes-vous sûr de vouloir continuer ? (y/n)
→ y [Entrée]
```

**La capture démarre.** Durée estimée : **10-20 minutes** selon la taille du disque et la vitesse USB.

**État d'avancement affiché :**
```
Cloning /dev/sda to /home/partimag/2024-11-20-Win11-Office-img
Rate: 2.1 GB/min, Estimated time remaining: 00:03:45
```

Une fois terminé, la VM s'éteint automatiquement.

### 2.4. Vérification de l'Image

Sur votre clé USB (ou serveur), vous devez trouver :

```
/home/partimag/2024-11-20-Win11-Office-img/
├── sda-chs.sf          (Géométrie du disque)
├── sda-pt.sf           (Table de partitions)
├── sda1.ntfs-ptcl-img.gz.aa   (Partition système compressée)
├── sda1.ntfs-ptcl-img.gz.ab
├── ...
├── Info-dmi.txt        (Infos matériel)
└── blkdev.list         (Liste des périphériques)
```

---

## PHASE 3 — Déploiement de l'Image (20 min)

### 3.1. Boot Clonezilla sur la Machine Cible

1. Attacher l'ISO Clonezilla à la **VM 2** (machine cible vierge)
2. Boot sur Clonezilla Live
3. Même choix de langue/clavier qu'à l'étape 2.1

### 3.2. Restauration de l'Image

```
Start Clonezilla
→ [Entrée]

device-image
→ [Entrée]

local_dev
→ [Entrée]

[Insérer la même clé USB avec l'image]
→ Sélectionner sdb1

Mode Beginner
→ [Entrée]

restoredisk   (Restaurer_image_vers_disque_local)
→ [Entrée]

Sélectionner l'image à restaurer : 2024-11-20-Win11-Office-img
→ [Entrée]

Disque cible : sda (disque de la VM 2)
→ Espace puis [Entrée]

⚠️ AVERTISSEMENT : Toutes les données sur sda seront EFFACÉES
Êtes-vous sûr de vouloir continuer ? (y/n)
→ y [Entrée]

Le nom de périphérique du disque cible est sda.
Êtes-vous sûr de vouloir continuer ? (y/n)
→ y [Entrée]
```

**Le déploiement démarre.** Durée : **5-15 minutes**.

Une fois terminé :
```
Action à effectuer : reboot
→ [Entrée]
```

Retirer l'ISO Clonezilla et laisser la VM 2 redémarrer normalement.

---

## PHASE 4 — Post-Configuration et Validation (25 min)

### 4.1. Première Configuration Windows (OOBE)

Si Sysprep a été exécuté correctement, l'assistant de configuration Windows s'affiche :

| **Étape** | **Choix recommandé** |
|---|---|
| Région | France |
| Disposition clavier | Français (France) |
| Nom de la machine | `PC-CLONE-01` (ou selon convention) |
| Compte utilisateur | `Admin-TP` (compte local) |
| Mot de passe | `MotDePasse123!` |
| Questions de sécurité | Remplir 3 questions |

Terminer la configuration → Windows démarre sur le bureau.

### 4.2. Vérification du SID

**Pourquoi vérifier le SID ?** Pour s'assurer que Sysprep a bien généralisé l'image et que chaque clone a un SID unique.

```cmd
# Ouvrir cmd en Administrateur
whoami /user
```

**Résultat attendu :**
```
INFORMATIONS SUR L'UTILISATEUR
------------------------------

Nom d'utilisateur          SID
========================== ========================================
PC-CLONE-01\Admin-TP       S-1-5-21-XXXXXXXXXX-YYYYYYYYYY-ZZZZZZZZZZ-1001
```

Comparer le SID avec celui de la machine de référence (si disponible). Ils doivent être **différents**.

### 4.3. Tests de Validation

| **Test** | **Procédure** | **Résultat attendu** |
|---|---|---|
| **Logiciels installés** | Vérifier que 7-Zip, VLC, Firefox, Adobe sont présents | ✅ Tous présents |
| **Fond d'écran** | Vérifier la personnalisation | ✅ Fond d'écran personnalisé affiché |
| **Raccourci bureau** | Ouvrir "Mes Applications" | ✅ Pointe vers C:\Program Files |
| **Connexion réseau** | `ping 8.8.8.8` | ✅ Réponse reçue |
| **Activation Windows** | Paramètres → Mise à jour et sécurité → Activation | État visible (activé ou non selon clé) |

### 4.4. Tableau de Comparaison

| **Élément** | **Machine de référence (VM 1)** | **Clone déployé (VM 2)** | **Identique ?** |
|---|---|---|---|
| Nom de machine | | PC-CLONE-01 | ❌ (normal) |
| SID | S-1-5-21-123... | S-1-5-21-456... | ❌ (normal) |
| Logiciels installés | 7-Zip, VLC, Firefox, Adobe | | ✅ |
| Fond d'écran | Personnalisé | | ✅ |
| Espace disque utilisé | ~15 Go | | ✅ |

---

## PHASE 5 — Documentation (Lien S11)

Rédiger une **procédure de déploiement** selon le modèle S11 (Annexe 2) incluant :

1. **Objectif** : Déployer une image Windows 11 standardisée
2. **Prérequis** : Clonezilla Live, clé USB 16 Go, 2 VMs
3. **Étapes** : Phase 1 à 4 (résumées avec captures clés)
4. **Troubleshooting** : 2 erreurs courantes (voir Annexe 1)
5. **Références** : Lien vers documentation Clonezilla officielle

