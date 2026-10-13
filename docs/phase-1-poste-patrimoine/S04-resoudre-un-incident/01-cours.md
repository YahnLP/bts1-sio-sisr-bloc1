# Cours – Cycle de vie d'un incident, diagnostic et base de connaissances

*BTS SIO SISR 1re année – Bloc 1 – S04*

> [!NOTE] Ce que tu dois savoir déjà
> - **Prérequis :** S03 (ticket, cycle de vie).
> - **À garder en tête :** lis le cours **avant** le TP ; la section « À retenir » en fin de cours résume l'essentiel.

## À la fin de ce cours, tu sauras

- [ ] **Appliquer** les sept étapes du cycle de vie d'un incident ;
- [ ] **Diagnostiquer** méthodiquement (de la couche physique vers l'application) ;
- [ ] **Résoudre** trois incidents types : impression, droits d'accès, lenteur ;
- [ ] **Rédiger** une fiche de base de connaissances exploitable par un collègue ;
- [ ] **Utiliser** les commandes de diagnostic Windows courantes.

---


## 1. Cycle de Vie Complet d'un Incident

### 1.1 Les 7 Étapes

```
   ① SIGNALEMENT          ② ENREGISTREMENT        ③ QUALIFICATION
   ─────────────          ─────────────────        ───────────────
   Utilisateur            Ticket ouvert            Catégorie
   contacte le      →     dans l'outil       →     Priorité (P1-P4)
   support                ITSM                     Impact / Urgence
   (tel, mail,            Toutes les               Niveau attribué
   portail)               infos collectées         (N1/N2/N3)

        │
        ▼
   ④ DIAGNOSTIC           ⑤ RÉSOLUTION            ⑥ VALIDATION
   ────────────           ──────────────           ────────────
   Méthode                Solution                 Utilisateur
   structurée       →     appliquée          →     confirme
   Hypothèses             Testée                   que le service
   testées 1 à 1          Documentée               est restauré

        │
        ▼
   ⑦ CLÔTURE
   ─────────
   Ticket fermé
   MTTR calculé
   Satisfaction recueillie
   Alimentation base
   de connaissances
```

### 1.2 Ce Qui Doit Figurer dans le Ticket à Chaque Étape

| **Étape** | **Ce qu'on ajoute au ticket** |
|---|---|
| ① Signalement | — (avant l'ouverture du ticket) |
| ② Enregistrement | Utilisateur, description, date/heure, équipement concerné |
| ③ Qualification | Catégorie, priorité, niveau attribué, SLA applicable |
| ④ Diagnostic | Actions de diagnostic tentées + résultats observés |
| ⑤ Résolution | Solution complète appliquée, étapes détaillées |
| ⑥ Validation | Confirmation de l'utilisateur (date/heure, moyen) |
| ⑦ Clôture | MTTR, satisfaction si recueillie, flag "à mettre en KB" |

> [!NOTE]
> **Règle professionnelle :** Le ticket doit être rempli **en temps réel**, pas reconstruit de mémoire après la résolution. Un ticket rédigé après coup perd la chronologie et les hypothèses infructueuses — qui sont pourtant précieuses pour les incidents futurs.

## 2. La Méthode de Diagnostic Structurée

### 2.1 Le Principe des Couches OSI Appliqué au Diagnostic

La méthode la plus efficace pour diagnostiquer un incident réseau ou système consiste à remonter les couches du modèle OSI **du bas vers le haut** — de la couche physique (câble, alimentation) vers la couche application (logiciel, droits).

```
   COUCHE 7 — Application   ← Vérifier en dernier
   COUCHE 6 — Présentation
   COUCHE 5 — Session
   COUCHE 4 — Transport     ← Ports, firewall, service actif ?
   COUCHE 3 — Réseau        ← IP, routage, ping ?
   COUCHE 2 — Liaison       ← MAC, switch, VLAN ?
   COUCHE 1 — Physique      ← Vérifier en premier
                               Câble branché ?
                               Voyant allumé ?
                               Alimentation ?
```

**En pratique pour chaque incident :**

> *"Avant de toucher au logiciel, vérifie le câble. Avant de vérifier le câble, regarde si la machine est allumée."*

### 2.2 Méthode de Diagnostic Générale — 5 Questions

Pour tout incident, se poser ces 5 questions dans l'ordre :

| **Question** | **Ce qu'elle révèle** | **Exemple** |
|---|---|---|
| **1. Est-ce que ça a déjà fonctionné ?** | Régression vs jamais configuré | "Ça marchait hier" → chercher ce qui a changé |
| **2. Qu'est-ce qui a changé récemment ?** | Cause probable immédiate | Mise à jour, déplacement, nouveau câble... |
| **3. Est-ce que c'est reproductible ?** | Incident ponctuel vs permanent | Toujours / parfois / une seule fois |
| **4. Le problème est-il isolé ou généralisé ?** | 1 utilisateur vs infrastructure | 1 PC → poste / tous les PC → réseau ou serveur |
| **5. Y a-t-il un message d'erreur ?** | Information diagnostique directe | Copier le message exact — ne pas paraphraser |

### 2.3 Diagnostic de Chaque Type d'Incident

#### IMPRIMANTE

```
   NIVEAU 1 — PHYSIQUE
   ├── Imprimante allumée ? Voyant d'état normal ?
   ├── Câble alimentation branché ?
   ├── Câble USB ou réseau branché des deux côtés ?
   └── Papier présent ? Bourrage papier ?

   NIVEAU 2 — SYSTÈME
   ├── Imprimante visible dans "Périphériques et imprimantes" ?
   ├── État de l'imprimante : en ligne / hors ligne / en pause ?
   ├── File d'attente : travaux bloqués ? Vider la file.
   └── Imprimante définie comme "Par défaut" ?

   NIVEAU 3 — PILOTE / RÉSEAU
   ├── Pilote installé et à jour ?
   ├── Si réseau : ping vers l'IP de l'imprimante ?
   ├── Port d'impression correct (IP, port 9100 ou 515) ?
   └── Pare-feu bloquant le port d'impression ?

   NIVEAU 4 — APPLICATION
   ├── L'application peut-elle imprimer (test page Windows) ?
   ├── Problème avec un seul logiciel ou tous ?
   └── Droits d'impression pour l'utilisateur ?
```

#### ACCÈS DOSSIER REFUSÉ

```
   NIVEAU 1 — CONNECTIVITÉ
   ├── Le partage réseau est-il accessible ? (ping du serveur)
   ├── Le chemin UNC est-il correct ? (\\serveur\partage)
   └── Le lecteur réseau est-il connecté ?

   NIVEAU 2 — AUTHENTIFICATION
   ├── L'utilisateur est-il authentifié sur le domaine ?
   ├── Le compte est-il actif et non verrouillé ?
   └── Mot de passe expiré ?

   NIVEAU 3 — DROITS DE PARTAGE
   ├── L'utilisateur (ou son groupe) est-il dans les droits de partage ?
   └── Niveau de droits suffisant (Lecture / Modification / Contrôle total) ?

   NIVEAU 4 — DROITS NTFS
   ├── Droits NTFS sur le dossier pour l'utilisateur ou son groupe ?
   ├── Vérifier les "Permissions effectives" (onglet Sécurité → Avancé)
   ├── Un refus (Deny) explicite annule tout droit accordé
   └── Héritage activé ou désactivé sur ce dossier ?

   → Règle : c'est la permission LA PLUS RESTRICTIVE entre
     droits de partage et droits NTFS qui s'applique
```

#### POSTE LENT

```
   NIVEAU 1 — RESSOURCES SYSTÈME (Gestionnaire des tâches)
   ├── CPU : consommation anormale ? Quel processus ?
   ├── RAM : utilisation > 85% ? Fichier d'échange actif ?
   ├── Disque : activité à 100% ? Disque HDD saturé ?
   └── Réseau : activité suspecte en arrière-plan ?

   NIVEAU 2 — PROCESSUS ET SERVICES
   ├── Processus inconnus consommant des ressources → malware ?
   ├── Mises à jour Windows en cours silencieusement ?
   ├── Antivirus en scan complet ?
   └── Service défaillant en boucle ?

   NIVEAU 3 — DÉMARRAGE ET PERSISTANCE
   ├── Nombreux programmes au démarrage ? (msconfig / Démarrage)
   ├── Espace disque disponible < 10% → ralentissement swap
   └── Fragmentation disque HDD ? (SSD : non pertinent)

   NIVEAU 4 — MATÉRIEL
   ├── RAM insuffisante pour l'usage (< 4Go pour W11)
   ├── Température CPU élevée → throttling (HWMonitor)
   └── Disque dur défaillant ? (CrystalDiskInfo — état SMART)
```

## 3. La Base de Connaissances (Knowledge Base)

### 3.1 Pourquoi une Base de Connaissances ?

La **base de connaissances** (KB) est le référentiel des solutions aux incidents déjà rencontrés et résolus. Elle transforme l'expérience individuelle d'un technicien en **capital collectif** de la DSI.

```
   SANS BASE DE CONNAISSANCES          AVEC BASE DE CONNAISSANCES
   ──────────────────────────          ──────────────────────────
   Incident résolu                →    Incident résolu
   Le technicien "sait"           →    Solution documentée dans KB
   3 mois plus tard, même         →    3 mois plus tard, même
   incident, autre technicien          incident, autre technicien
   → repart de zéro               →    → consulte KB → 5 min
   → 45 min                            → Utilisateur satisfait
   → Utilisateur frustré          →    → MTTR en baisse
```

### 3.2 Structure d'une Fiche KB

| **Section** | **Contenu** |
|---|---|
| **Titre** | Description concise du symptôme |
| **Symptômes** | Comment se manifeste le problème (ce que voit l'utilisateur) |
| **Cause(s) connue(s)** | Pourquoi ça arrive (1 à 3 causes les plus fréquentes) |
| **Solution** | Étapes de résolution numérotées et précises |
| **Vérification** | Comment s'assurer que c'est résolu |
| **Escalade** | Quand escalader vers N2 (si non résolu après ces étapes) |
| **Mots-clés** | Pour faciliter la recherche |
| **Auteur / Date** | Traçabilité |

## 4. Commandes Utiles par Incident

### Imprimante — Windows

```powershell
# Lister les imprimantes installées
Get-Printer | Select-Object Name, PrinterStatus

# État de l'imprimante
Get-Printer -Name "Nom_Imprimante" | Select-Object PrinterStatus, WorkOffline

# Vider la file d'attente manuellement
net stop spooler
del /Q /F /S "%systemroot%\System32\spool\PRINTERS\*.*"
net start spooler

# Ping vers une imprimante réseau
ping [IP_imprimante]
```

```powershell
# PowerShell — lister les imprimantes
Get-Printer | Select-Object Name, PrinterStatus, PortName

# Redémarrer le spooler
Restart-Service -Name Spooler

# Supprimer une imprimante
Remove-Printer -Name "Nom_Imprimante"
```

### Droits et Accès — Windows

```cmd
:: Droits NTFS d'un dossier
icacls "C:\Dossier\Cible"

:: Appliquer des droits NTFS
icacls "C:\Dossier\Cible" /grant "DOMAINE\Utilisateur:(R)"
icacls "C:\Dossier\Cible" /grant "DOMAINE\Utilisateur:(M)"  :: Modification
icacls "C:\Dossier\Cible" /grant "DOMAINE\GRP_RH:(F)"       :: Contrôle total

:: Partages disponibles sur le serveur
net share

:: Tester l'accès à un partage
net use \\serveur\partage
```

```powershell
# Vérifier les droits NTFS sur un dossier
Get-Acl "C:\Dossier\Cible" | Format-List

# Droits effectifs pour un utilisateur (GUI nécessaire pour "Permissions effectives")
# En PowerShell - vérifier l'appartenance aux groupes
Get-ADGroupMember -Identity "GRP_RH" | Where-Object { $_.Name -eq "alice.martin" }
```

### Performances Système — Windows

```powershell
# Processus consommateurs (tri par CPU)
tasklist /fo table | sort /r /+65

# Espace disque
Get-CimInstance Win32_LogicalDisk | Select-Object DeviceID, FreeSpace, Size

# Informations RAM
(Get-CimInstance Win32_ComputerSystem).TotalPhysicalMemory
(Get-CimInstance Win32_OperatingSystem).FreePhysicalMemory
```

```powershell
# Top 10 processus par CPU
Get-Process | Sort-Object CPU -Descending | Select-Object -First 10 Name, CPU, WorkingSet

# Top 10 processus par RAM
Get-Process | Sort-Object WorkingSet -Descending | Select-Object -First 10 Name, WorkingSet

# Espace disque disponible
Get-PSDrive -PSProvider FileSystem | Select-Object Name, Used, Free

# Services en échec
Get-Service | Where-Object { $_.Status -eq "Stopped" -and $_.StartType -eq "Automatic" }

# Programmes au démarrage
Get-CimInstance Win32_StartupCommand | Select-Object Name, Command, Location
```

## À retenir

- On suit toujours la même **démarche** : qualifier, reproduire, isoler, tester une hypothèse à la fois, résoudre, documenter.
- On **ouvre un ticket avant** de diagnostiquer et on y note chaque action.
- Une solution qui marche est **documentée** (base de connaissances) pour la réutiliser.
- Si le cas dépasse son niveau, on **escalade** avec les éléments déjà recueillis.

## Je vérifie mes acquis

- [ ] Je décris les 7 étapes du cycle de vie d'un incident
- [ ] J'applique les 5 questions de diagnostic dans l'ordre
- [ ] Je diagnostique une imprimante en partant de la couche physique
- [ ] Je vérifie les droits NTFS avec `icacls` ou l'interface graphique
- [ ] J'identifie un processus qui sature le CPU avec le Gestionnaire des tâches
- [ ] Je remplis un ticket en temps réel pendant la résolution
- [ ] Je rédige une fiche de base de connaissances exploitable par un collègue

---
