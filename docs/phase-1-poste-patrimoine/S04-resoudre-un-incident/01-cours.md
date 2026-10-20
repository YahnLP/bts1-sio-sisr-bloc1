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

<figure class="graphe diagramme"><svg viewBox="0 0 900 330" style="max-width:900px" role="img" aria-label="Cycle de résolution d&#x27;un incident en sept étapes, du signalement à la clôture" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="8" width="200" height="110" rx="8" class="dg-box"/>
<text x="100.0" y="50.0" text-anchor="middle" class="dg-t">1  Signalement</text>
<text x="100.0" y="68.0" text-anchor="middle" class="dg-s">L&#x27;utilisateur contacte</text>
<text x="100.0" y="86.0" text-anchor="middle" class="dg-s">le support</text>
<line x1="202" y1="63" x2="222.0" y2="63.0" class="dg-line"/>
<polygon points="231,63 222.0,58.0 222.0,68.0" class="dg-ah"/>
<rect x="233" y="8" width="200" height="110" rx="8" class="dg-box"/>
<text x="333.0" y="50.0" text-anchor="middle" class="dg-t">2  Enregistrement</text>
<text x="333.0" y="68.0" text-anchor="middle" class="dg-s">Ticket ouvert dans l&#x27;ITSM</text>
<text x="333.0" y="86.0" text-anchor="middle" class="dg-s">Infos collectées</text>
<line x1="435" y1="63" x2="455.0" y2="63.0" class="dg-line"/>
<polygon points="464,63 455.0,58.0 455.0,68.0" class="dg-ah"/>
<rect x="466" y="8" width="200" height="110" rx="8" class="dg-box"/>
<text x="566.0" y="50.0" text-anchor="middle" class="dg-t">3  Qualification</text>
<text x="566.0" y="68.0" text-anchor="middle" class="dg-s">Catégorie, priorité</text>
<text x="566.0" y="86.0" text-anchor="middle" class="dg-s">Niveau attribué</text>
<line x1="668" y1="63" x2="688.0" y2="63.0" class="dg-line"/>
<polygon points="697,63 688.0,58.0 688.0,68.0" class="dg-ah"/>
<rect x="699" y="8" width="200" height="110" rx="8" class="dg-box"/>
<text x="799.0" y="50.0" text-anchor="middle" class="dg-t">4  Diagnostic</text>
<text x="799.0" y="68.0" text-anchor="middle" class="dg-s">Méthode structurée</text>
<text x="799.0" y="86.0" text-anchor="middle" class="dg-s">Hypothèses testées une à une</text>
<rect x="699" y="200" width="200" height="110" rx="8" class="dg-box"/>
<text x="799.0" y="242.0" text-anchor="middle" class="dg-t">5  Résolution</text>
<text x="799.0" y="260.0" text-anchor="middle" class="dg-s">Solution appliquée</text>
<text x="799.0" y="278.0" text-anchor="middle" class="dg-s">testée, documentée</text>
<line x1="697" y1="255" x2="677.0" y2="255.0" class="dg-line"/>
<polygon points="668,255 677.0,260.0 677.0,250.0" class="dg-ah"/>
<rect x="466" y="200" width="200" height="110" rx="8" class="dg-box"/>
<text x="566.0" y="242.0" text-anchor="middle" class="dg-t">6  Validation</text>
<text x="566.0" y="260.0" text-anchor="middle" class="dg-s">L&#x27;utilisateur confirme</text>
<text x="566.0" y="278.0" text-anchor="middle" class="dg-s">le retour du service</text>
<line x1="464" y1="255" x2="444.0" y2="255.0" class="dg-line"/>
<polygon points="435,255 444.0,260.0 444.0,250.0" class="dg-ah"/>
<rect x="233" y="200" width="200" height="110" rx="8" class="dg-ok"/>
<text x="333.0" y="242.0" text-anchor="middle" class="dg-t">7  Clôture</text>
<text x="333.0" y="260.0" text-anchor="middle" class="dg-s">MTTR calculé</text>
<text x="333.0" y="278.0" text-anchor="middle" class="dg-s">Base de connaissances</text>
<line x1="799.0" y1="120" x2="799.0" y2="189.0" class="dg-line"/>
<polygon points="799.0,198 804.0,189.0 794.0,189.0" class="dg-ah"/>
</svg>
<figcaption>Les sept étapes de résolution d&#x27;un incident</figcaption>
</figure>

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

<figure class="graphe diagramme"><svg viewBox="0 0 760 330" style="max-width:760px" role="img" aria-label="Les sept couches OSI et l&#x27;ordre du diagnostic : on commence par la couche physique et on remonte vers l&#x27;application" xmlns="http://www.w3.org/2000/svg">
<rect x="80" y="8" width="240" height="38" rx="8" class="dg-soft"/>
<text x="200.0" y="32.0" text-anchor="middle" class="dg-t">7  Application</text>
<text x="340" y="32" text-anchor="start" class="dg-s">vérifier en dernier : droits, logiciel</text>
<rect x="80" y="52" width="240" height="38" rx="8" class="dg-soft"/>
<text x="200.0" y="76.0" text-anchor="middle" class="dg-t">6  Présentation</text>
<rect x="80" y="96" width="240" height="38" rx="8" class="dg-soft"/>
<text x="200.0" y="120.0" text-anchor="middle" class="dg-t">5  Session</text>
<rect x="80" y="140" width="240" height="38" rx="8" class="dg-box"/>
<text x="200.0" y="164.0" text-anchor="middle" class="dg-t">4  Transport</text>
<text x="340" y="164" text-anchor="start" class="dg-s">ports, pare-feu, service actif ?</text>
<rect x="80" y="184" width="240" height="38" rx="8" class="dg-box"/>
<text x="200.0" y="208.0" text-anchor="middle" class="dg-t">3  Réseau</text>
<text x="340" y="208" text-anchor="start" class="dg-s">adresse IP, routage, ping ?</text>
<rect x="80" y="228" width="240" height="38" rx="8" class="dg-box"/>
<text x="200.0" y="252.0" text-anchor="middle" class="dg-t">2  Liaison</text>
<text x="340" y="252" text-anchor="start" class="dg-s">adresse MAC, commutateur, VLAN ?</text>
<rect x="80" y="272" width="240" height="38" rx="8" class="dg-ok"/>
<text x="200.0" y="296.0" text-anchor="middle" class="dg-t">1  Physique</text>
<text x="340" y="296" text-anchor="start" class="dg-s">vérifier en premier : câble, voyant, alimentation</text>
<line x1="48" y1="300" x2="48.0" y2="23.0" class="dg-line"/>
<polygon points="48,14 43.0,23.0 53.0,23.0" class="dg-ah"/>
<text transform="translate(28,160) rotate(-90)" text-anchor="middle" class="dg-i">sens du diagnostic</text>
</svg>
<figcaption>Le diagnostic remonte les couches OSI du bas vers le haut</figcaption>
</figure>

Les couches 5 à 7 se vérifient en dernier : on ne cherche un problème de logiciel ou de droits qu'une fois les couches basses éliminées.

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

| Niveau | À vérifier |
|---|---|
| **1. Physique** | • Imprimante allumée ? Voyant d'état normal ?<br>• Câble alimentation branché ?<br>• Câble USB ou réseau branché des deux côtés ?<br>• Papier présent ? Bourrage papier ? |
| **2. Système** | • Imprimante visible dans "Périphériques et imprimantes" ?<br>• État de l'imprimante : en ligne / hors ligne / en pause ?<br>• File d'attente : travaux bloqués ? Vider la file.<br>• Imprimante définie comme "Par défaut" ? |
| **3. Pilote / Réseau** | • Pilote installé et à jour ?<br>• Si réseau : ping vers l'IP de l'imprimante ?<br>• Port d'impression correct (IP, port 9100 ou 515) ?<br>• Pare-feu bloquant le port d'impression ? |
| **4. Application** | • L'application peut-elle imprimer (test page Windows) ?<br>• Problème avec un seul logiciel ou tous ?<br>• Droits d'impression pour l'utilisateur ? |

#### ACCÈS DOSSIER REFUSÉ

| Niveau | À vérifier |
|---|---|
| **1. Connectivité** | • Le partage réseau est-il accessible ? (ping du serveur)<br>• Le chemin UNC est-il correct ? (\\serveur\partage)<br>• Le lecteur réseau est-il connecté ? |
| **2. Authentification** | • L'utilisateur est-il authentifié sur le domaine ?<br>• Le compte est-il actif et non verrouillé ?<br>• Mot de passe expiré ? |
| **3. Droits De Partage** | • L'utilisateur (ou son groupe) est-il dans les droits de partage ?<br>• Niveau de droits suffisant (Lecture / Modification / Contrôle total) ? |
| **4. Droits Ntfs** | • Droits NTFS sur le dossier pour l'utilisateur ou son groupe ?<br>• Vérifier les "Permissions effectives" (onglet Sécurité → Avancé)<br>• Un refus (Deny) explicite annule tout droit accordé<br>• Héritage activé ou désactivé sur ce dossier ? |

> [!NOTE]
> Règle : c'est la permission LA PLUS RESTRICTIVE entre droits de partage et droits NTFS qui s'applique

#### POSTE LENT

| Niveau | À vérifier |
|---|---|
| **1. RESSOURCES SYSTÈME (Gestionnaire des tâches)** | • CPU : consommation anormale ? Quel processus ?<br>• RAM : utilisation > 85% ? Fichier d'échange actif ?<br>• Disque : activité à 100% ? Disque HDD saturé ?<br>• Réseau : activité suspecte en arrière-plan ? |
| **2. Processus Et Services** | • Processus inconnus consommant des ressources → malware ?<br>• Mises à jour Windows en cours silencieusement ?<br>• Antivirus en scan complet ?<br>• Service défaillant en boucle ? |
| **3. Démarrage Et Persistance** | • Nombreux programmes au démarrage ? (msconfig / Démarrage)<br>• Espace disque disponible < 10% → ralentissement swap<br>• Fragmentation disque HDD ? (SSD : non pertinent) |
| **4. Matériel** | • RAM insuffisante pour l'usage (< 4Go pour W11)<br>• Température CPU élevée → throttling (HWMonitor)<br>• Disque dur défaillant ? (CrystalDiskInfo — état SMART) |

## 3. La Base de Connaissances (Knowledge Base)

### 3.1 Pourquoi une Base de Connaissances ?

La **base de connaissances** (KB) est le référentiel des solutions aux incidents déjà rencontrés et résolus. Elle transforme l'expérience individuelle d'un technicien en **capital collectif** de la DSI.

<figure class="graphe diagramme"><svg viewBox="0 0 780 260" style="max-width:780px" role="img" aria-label="Comparaison d&#x27;un incident traité sans base de connaissances et avec base de connaissances" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="8" width="360" height="230" rx="8" class="dg-bad"/>
<text x="180.0" y="83.0" text-anchor="middle" class="dg-t">Sans base de connaissances</text>
<text x="180.0" y="101.0" text-anchor="middle" class="dg-s">Incident résolu, le technicien « sait »</text>
<text x="180.0" y="119.0" text-anchor="middle" class="dg-s">3 mois plus tard : même incident,</text>
<text x="180.0" y="137.0" text-anchor="middle" class="dg-s">un autre technicien</text>
<text x="180.0" y="155.0" text-anchor="middle" class="dg-s">Il repart de zéro : 45 minutes</text>
<text x="180.0" y="173.0" text-anchor="middle" class="dg-s">Utilisateur frustré</text>
<rect x="420" y="8" width="360" height="230" rx="8" class="dg-ok"/>
<text x="600.0" y="83.0" text-anchor="middle" class="dg-t">Avec base de connaissances</text>
<text x="600.0" y="101.0" text-anchor="middle" class="dg-s">Incident résolu, solution documentée</text>
<text x="600.0" y="119.0" text-anchor="middle" class="dg-s">3 mois plus tard : même incident,</text>
<text x="600.0" y="137.0" text-anchor="middle" class="dg-s">un autre technicien</text>
<text x="600.0" y="155.0" text-anchor="middle" class="dg-s">Il consulte la base : 5 minutes</text>
<text x="600.0" y="173.0" text-anchor="middle" class="dg-s">Utilisateur satisfait, MTTR en baisse</text>
</svg>
<figcaption>Sans et avec base de connaissances : le même incident, trois mois plus tard</figcaption>
</figure>

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
