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
- [ ] **Utiliser** les commandes de diagnostic Windows courantes ;
- [ ] **Distinguer** un incident, un problème et une demande de service ;
- [ ] **Mener** une prise de contrôle à distance dans un cadre autorisé.

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

## 5. Incident, problème, demande : ne pas tout mélanger

Trois mots reviennent sans cesse dans un centre de services. Ils désignent trois choses différentes, traitées différemment.

| **Notion** | **Définition** | **Objectif** | **Exemple** |
|---|---|---|---|
| **Incident** | Interruption ou dégradation non prévue d'un service | Rétablir le service **vite** | L'imprimante de la comptabilité est hors ligne |
| **Problème** | Cause, connue ou non, d'un ou de plusieurs incidents | Supprimer la cause pour que l'incident **ne revienne pas** | Le pilote d'impression est remplacé à chaque mise à jour automatique |
| **Demande de service** | Demande courante, prévue au catalogue de services | La satisfaire dans le délai annoncé | Créer un compte pour un nouvel arrivant |

### 5.1 Contournement et erreur connue

- Un **contournement** (*workaround*) rétablit le service **sans supprimer la cause** : réinstaller le pilote, vider la file d'attente.
- Une **erreur connue** est un problème dont la cause est identifiée et dont le contournement est documenté. Sa fiche va dans la base de connaissances : le technicien suivant n'a plus qu'à l'appliquer.

### 5.2 Quand passer de l'incident au problème ?

On ouvre un **problème** lorsque :

- le même incident se **répète** (la checklist N1 fixe la limite à la 3e occurrence) ;
- un incident touche **beaucoup d'utilisateurs** ou dure trop longtemps ;
- la **cause reste inconnue** après le diagnostic.

Le technicien N1 ne résout pas le problème : il **relie ses tickets** au problème et fournit ses observations. L'analyse de la cause revient en général au niveau 2 ou 3.

> [!NOTE]
> **Exemple chiffré.** En 4 semaines, 12 tickets « imprimante de la comptabilité hors ligne » sont ouverts. Chaque ticket coûte environ 25 minutes au support : 12 × 25 = 300 minutes, soit 5 heures, sans compter le temps perdu par les utilisateurs. Le service ouvre un problème. Après analyse, le pilote d'impression est remplacé par une version générique à chaque mise à jour automatique. La solution durable est de bloquer cette mise à jour : c'est un **changement** (voir S14).

### 5.3 Chercher la cause : la méthode des « cinq pourquoi »

On pose la question « pourquoi ? » jusqu'à une cause sur laquelle on peut agir.

| **Pourquoi ?** | **Réponse** |
|---|---|
| Pourquoi l'imprimante est-elle hors ligne ? | Le pilote n'est plus reconnu |
| Pourquoi n'est-il plus reconnu ? | Il a été remplacé par un pilote générique |
| Pourquoi a-t-il été remplacé ? | Une mise à jour Windows l'a installé |
| Pourquoi la mise à jour l'a-t-elle fait ? | Les pilotes ne sont pas exclus de la mise à jour automatique |
| Pourquoi ne sont-ils pas exclus ? | Aucune règle n'a été définie dans la stratégie de groupe (S11 du bloc 2) |

Le nombre de questions n'est pas fixé à cinq : on s'arrête quand la cause est actionnable.

> [!NOTE]
> Les outils de gestion de tickets comme GLPI (S06) proposent un objet « Problème » que l'on relie aux tickets concernés.

## 6. Prendre le contrôle d'un poste à distance

### 6.1 Pourquoi et quand

La prise de contrôle à distance permet de **voir ce que voit l'utilisateur** et d'agir sur son poste sans se déplacer. Elle fait gagner du temps, mais elle suppose que le poste soit **allumé, démarré et joignable par le réseau**. Elle ne sert donc pas pour une panne réseau, une panne matérielle ou un poste qui ne démarre plus.

### 6.2 Deux familles d'outils

| **Famille** | **Principe** | **Exemples** | **Usage** |
|---|---|---|---|
| **Ouverture d'une session distante** | On se connecte au poste comme à un serveur, dans une session dédiée | Bureau à distance Windows (protocole RDP, port TCP 3389) | Administration de serveurs et de postes **sans utilisateur devant** |
| **Partage de la session de l'utilisateur** | L'utilisateur et le technicien voient le même écran, souris et clavier sont partagés | Assistance rapide de Windows, VNC, outils tiers de télé-assistance | **Dépannage en direct** avec l'utilisateur |

> [!NOTE]
> Les outils tiers cités sont des **exemples**. Certains sont propriétaires (TeamViewer, AnyDesk), d'autres libres et auto-hébergeables (RustDesk, VNC). Le choix de l'outil de l'organisation est à **valider** avec elle ; la séance ne dépend d'aucun outil unique.

**Bureau à distance Windows : ce qu'il faut savoir**

- Le poste **cible** doit être en édition **Professionnel** ou **Entreprise** : l'édition Famille ne peut pas recevoir de connexion.
- Sur un poste client, **une seule session interactive** est possible à la fois : se connecter verrouille la session de l'utilisateur local. C'est pourquoi RDP convient mal au dépannage en direct.
- L'**authentification au niveau du réseau** (NLA) doit rester activée.
- Le port 3389 ne doit **jamais** être exposé directement sur Internet : on passe par un VPN (voir S13 du bloc 3) ou une passerelle.

### 6.3 Le cadre : consentement, traçabilité, confidentialité

Prendre le contrôle d'un poste, c'est pouvoir lire des documents et des messages. Trois règles s'appliquent :

1. **Accord de l'utilisateur** avant toute connexion, noté dans le ticket (qui, quand, par quel moyen). La charte informatique de l'organisation doit prévoir ces interventions.
2. **Minimisation** : on n'ouvre que ce qui sert à résoudre l'incident, on ne consulte pas les documents personnels, on prévient avant d'afficher une fenêtre.
3. **Traçabilité** : on note dans le ticket l'heure de début et de fin, les actions réalisées, et on ferme l'accès à la fin.

Les données vues pendant une intervention peuvent être des **données à caractère personnel** : le technicien est tenu à la confidentialité (voir le RGPD en bloc 3 et en CEJM). Les règles exactes (durée de conservation des journaux, information des salariés) dépendent de la charte de l'organisation : **à valider** avec elle et avec son délégué à la protection des données.

### 6.4 Le piège : le faux support

Des escrocs appellent en se présentant comme le « support technique » et demandent d'installer un outil de prise en main pour « réparer » le poste. Deux règles :

- **c'est l'utilisateur qui appelle le support**, pas l'inverse, sauf si un ticket est ouvert ;
- le technicien **s'identifie** et l'utilisateur **vérifie** par le canal habituel avant de donner un code de connexion.

### 6.5 Procédure type du technicien N1

| **Étape** | **Action** |
|---|---|
| 1 | Vérifier que la prise de contrôle est utile (le poste est joignable) et ouvrir ou mettre à jour le ticket |
| 2 | Demander l'accord de l'utilisateur et le noter |
| 3 | Établir la connexion avec l'outil de l'organisation |
| 4 | Annoncer ce que l'on fait, agir pas à pas, noter chaque action |
| 5 | Faire **valider le résultat** par l'utilisateur |
| 6 | Fermer la connexion, désactiver l'accès s'il n'est plus utile |
| 7 | Clôturer le ticket : durée, actions, éventuelle fiche de base de connaissances |

## À retenir

- On suit toujours la même **démarche** : qualifier, reproduire, isoler, tester une hypothèse à la fois, résoudre, documenter.
- On **ouvre un ticket avant** de diagnostiquer et on y note chaque action.
- Une solution qui marche est **documentée** (base de connaissances) pour la réutiliser.
- Si le cas dépasse son niveau, on **escalade** avec les éléments déjà recueillis.
- Un **incident** se traite vite (contournement) ; un **problème** se traite pour supprimer la cause. Les incidents qui se répètent sont reliés à un problème.
- On ne prend le contrôle d'un poste qu'avec l'**accord de l'utilisateur**, en notant au ticket l'heure et les actions.

## Je vérifie mes acquis

- [ ] Je décris les 7 étapes du cycle de vie d'un incident
- [ ] J'applique les 5 questions de diagnostic dans l'ordre
- [ ] Je diagnostique une imprimante en partant de la couche physique
- [ ] Je vérifie les droits NTFS avec `icacls` ou l'interface graphique
- [ ] J'identifie un processus qui sature le CPU avec le Gestionnaire des tâches
- [ ] Je remplis un ticket en temps réel pendant la résolution
- [ ] Je rédige une fiche de base de connaissances exploitable par un collègue
- [ ] Je distingue un incident, un problème et une demande de service
- [ ] Je cite trois conditions avant de prendre le contrôle d'un poste à distance

---
