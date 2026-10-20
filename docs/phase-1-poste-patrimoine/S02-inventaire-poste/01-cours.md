# Cours – La gestion de parc et l'inventaire d'un poste

*BTS SIO SISR 1re année – Bloc 1 – S02*

> [!NOTE] Ce que tu dois savoir déjà
> - **Prérequis :** S01.
> - **À garder en tête :** lis le cours **avant** le TP ; la section « À retenir » en fin de cours résume l'essentiel.

## À la fin de ce cours, tu sauras

- [ ] **Définir** la gestion de parc et **justifier** l'inventaire ;
- [ ] **Distinguer** matériel, logiciel et configuration réseau d'un poste ;
- [ ] **Collecter** les informations d'un poste avec les outils Windows (et Linux) ;
- [ ] **Remplir** une fiche technique et **relire** les licences logicielles ;
- [ ] **Citer** les bonnes pratiques de documentation d'un inventaire.

---


## 1. La Gestion de Parc : Enjeux et Définition

### 1.1 Définition

La **gestion de parc informatique** (ou **asset management** en anglais) désigne l'ensemble des activités permettant de **recenser, suivre et administrer** tous les équipements informatiques et logiciels d'une organisation, tout au long de leur cycle de vie.

<figure class="graphe diagramme"><svg viewBox="0 0 860 215" style="max-width:860px" role="img" aria-label="Cycle de vie d&#x27;un équipement en cinq étapes : acquisition, déploiement, exploitation, maintenance, fin de vie" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="10" width="160" height="150" rx="8" class="dg-box"/>
<text x="80.0" y="63.0" text-anchor="middle" class="dg-t">1  Acquisition</text>
<text x="80.0" y="81.0" text-anchor="middle" class="dg-s">Achat / leasing</text>
<text x="80.0" y="99.0" text-anchor="middle" class="dg-s">Réception</text>
<text x="80.0" y="117.0" text-anchor="middle" class="dg-s">Vérification</text>
<rect x="0" y="166" width="160" height="38" rx="8" class="dg-ok"/>
<text x="80" y="190" text-anchor="middle" class="dg-s">Créer la fiche</text>
<line x1="161" y1="85" x2="165.0" y2="85.0" class="dg-line"/>
<polygon points="174,85 165.0,80.0 165.0,90.0" class="dg-ah"/>
<rect x="175" y="10" width="160" height="150" rx="8" class="dg-box"/>
<text x="255.0" y="63.0" text-anchor="middle" class="dg-t">2  Déploiement</text>
<text x="255.0" y="81.0" text-anchor="middle" class="dg-s">Installation</text>
<text x="255.0" y="99.0" text-anchor="middle" class="dg-s">Configuration</text>
<text x="255.0" y="117.0" text-anchor="middle" class="dg-s">Intégration au parc</text>
<rect x="175" y="166" width="160" height="38" rx="8" class="dg-ok"/>
<text x="255" y="190" text-anchor="middle" class="dg-s">Compléter la fiche</text>
<line x1="336" y1="85" x2="340.0" y2="85.0" class="dg-line"/>
<polygon points="349,85 340.0,80.0 340.0,90.0" class="dg-ah"/>
<rect x="350" y="10" width="160" height="150" rx="8" class="dg-box"/>
<text x="430.0" y="63.0" text-anchor="middle" class="dg-t">3  Exploitation</text>
<text x="430.0" y="81.0" text-anchor="middle" class="dg-s">Utilisation</text>
<text x="430.0" y="99.0" text-anchor="middle" class="dg-s">Support utilisateur</text>
<text x="430.0" y="117.0" text-anchor="middle" class="dg-s">Mises à jour</text>
<rect x="350" y="166" width="160" height="38" rx="8" class="dg-ok"/>
<text x="430" y="190" text-anchor="middle" class="dg-s">Tenir la fiche à jour</text>
<line x1="511" y1="85" x2="515.0" y2="85.0" class="dg-line"/>
<polygon points="524,85 515.0,80.0 515.0,90.0" class="dg-ah"/>
<rect x="525" y="10" width="160" height="150" rx="8" class="dg-box"/>
<text x="605.0" y="63.0" text-anchor="middle" class="dg-t">4  Maintenance</text>
<text x="605.0" y="81.0" text-anchor="middle" class="dg-s">Réparation</text>
<text x="605.0" y="99.0" text-anchor="middle" class="dg-s">Remplacer une pièce</text>
<text x="605.0" y="117.0" text-anchor="middle" class="dg-s">Mise à niveau</text>
<rect x="525" y="166" width="160" height="38" rx="8" class="dg-ok"/>
<text x="605" y="190" text-anchor="middle" class="dg-s">Historiser dans la fiche</text>
<line x1="686" y1="85" x2="690.0" y2="85.0" class="dg-line"/>
<polygon points="699,85 690.0,80.0 690.0,90.0" class="dg-ah"/>
<rect x="700" y="10" width="160" height="150" rx="8" class="dg-box"/>
<text x="780.0" y="63.0" text-anchor="middle" class="dg-t">5  Fin de vie</text>
<text x="780.0" y="81.0" text-anchor="middle" class="dg-s">Décommission</text>
<text x="780.0" y="99.0" text-anchor="middle" class="dg-s">Effacer les données</text>
<text x="780.0" y="117.0" text-anchor="middle" class="dg-s">Recyclage / don</text>
<rect x="700" y="166" width="160" height="38" rx="8" class="dg-ok"/>
<text x="780" y="190" text-anchor="middle" class="dg-s">Clôturer la fiche</text>
</svg>
<figcaption>Le cycle de vie d&#x27;un équipement et ce que devient sa fiche à chaque étape</figcaption>
</figure>

*Légende : Le cycle de vie d'un équipement informatique en 5 phases. La fiche d'inventaire naît lors de l'acquisition et est mise à jour à chaque étape. Elle est clôturée (et conservée en archive) lors du décommissionnement.*

### 1.2 Pourquoi Inventorier ? Les 6 Raisons Fondamentales

**1. Assistance et Dépannage**
Sans inventaire, chaque incident demande une investigation préalable du matériel et des logiciels. Avec un inventaire, le technicien connaît l'environnement avant même d'arriver au bureau de l'utilisateur.

**2. Gestion des Licences**
Les logiciels professionnels sont vendus sous licence. Une organisation qui utilise 80 copies d'un logiciel pour lequel elle a 60 licences est en **infraction légale** — et s'expose à des amendes lors d'audits (Microsoft, Adobe, BSA). L'inventaire évite les sur-licenciements (gaspillage) et les sous-licenciements (risque juridique).

**3. Planification et Budget**
Savoir quelle part du parc est ancienne (âge des machines, fin de garantie) permet de planifier les renouvellements matériels, d'anticiper les budgets et d'éviter les pannes en série en période de surcharge.

**4. Sécurité**
Un équipement non inventorié est un équipement non géré : pas de mises à jour, pas d'antivirus, potentiellement compromis. L'inventaire est la première ligne de défense d'une politique de sécurité. On ne peut pas sécuriser ce qu'on ne connaît pas.

**5. Conformité et Audit**
La réglementation (RGPD, ISO 27001, NIS2) impose de connaître les actifs qui traitent des données. Un auditeur de conformité demande systématiquement l'inventaire du parc comme premier document.

**6. Continuité de Service (ITIL)**
En cas de panne ou de sinistre, l'inventaire permet de savoir exactement ce qui a été perdu ou endommagé, d'évaluer l'impact et de prioriser la restauration des équipements critiques.

### 1.3 Les Trois Dimensions de l'Inventaire

Un inventaire de parc complet couvre trois dimensions distinctes :

<figure class="graphe diagramme"><svg viewBox="0 0 790 255" style="max-width:790px" role="img" aria-label="Un inventaire de parc : matériel, logiciels et licences, avec localisation, utilisateur affecté et historique" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="8" width="250" height="26" rx="6" class="dg-dark"/>
<text x="125" y="26" text-anchor="middle" class="dg-w">Matériel</text>
<rect x="0" y="38" width="250" height="150" rx="6" class="dg-box"/>
<text x="16" y="62" text-anchor="start" class="dg-s">• PC et portables</text>
<text x="16" y="84" text-anchor="start" class="dg-s">• Serveurs</text>
<text x="16" y="106" text-anchor="start" class="dg-s">• Commutateurs (switchs)</text>
<text x="16" y="128" text-anchor="start" class="dg-s">• Routeurs</text>
<text x="16" y="150" text-anchor="start" class="dg-s">• Imprimantes</text>
<text x="16" y="172" text-anchor="start" class="dg-s">• Téléphones</text>
<rect x="270" y="8" width="250" height="26" rx="6" class="dg-dark"/>
<text x="395" y="26" text-anchor="middle" class="dg-w">Logiciels</text>
<rect x="270" y="38" width="250" height="150" rx="6" class="dg-box"/>
<text x="286" y="62" text-anchor="start" class="dg-s">• Systèmes d&#x27;exploitation</text>
<text x="286" y="84" text-anchor="start" class="dg-s">• Bureautique</text>
<text x="286" y="106" text-anchor="start" class="dg-s">• Logiciels métier</text>
<text x="286" y="128" text-anchor="start" class="dg-s">• Sécurité</text>
<text x="286" y="150" text-anchor="start" class="dg-s">• Agents informatiques</text>
<rect x="540" y="8" width="250" height="26" rx="6" class="dg-dark"/>
<text x="665" y="26" text-anchor="middle" class="dg-w">Licences</text>
<rect x="540" y="38" width="250" height="150" rx="6" class="dg-box"/>
<text x="556" y="62" text-anchor="start" class="dg-s">• Type (OEM, volume, abonnement)</text>
<text x="556" y="84" text-anchor="start" class="dg-s">• Nombre</text>
<text x="556" y="106" text-anchor="start" class="dg-s">• Date d&#x27;expiration</text>
<text x="556" y="128" text-anchor="start" class="dg-s">• Clé / numéro de série</text>
<rect x="0" y="200" width="790" height="46" rx="8" class="dg-ok"/>
<text x="395" y="228" text-anchor="middle" class="dg-t">Pour chaque élément : localisation  +  utilisateur affecté  +  historique des interventions</text>
</svg>
<figcaption>Ce que contient un inventaire de parc</figcaption>
</figure>

### 1.4 Types de Licences Logicielles à Connaître

| **Type de licence** | **Signification** | **Exemple** |
|---|---|---|
| **OEM** (Original Equipment Manufacturer) | Liée au matériel — non transférable | Windows livré avec un PC |
| **Retail / Boîte** | Liée à un utilisateur — transférable entre machines | Achat en magasin |
| **Volume (VL)** | Bloc de licences pour une organisation | Microsoft Open License |
| **Abonnement (SaaS)** | Location mensuelle ou annuelle | Microsoft 365, Adobe CC |
| **Open Source / GPL** | Libre d'utilisation, de modification et de distribution | Linux, LibreOffice |
| **Freeware** | Gratuit, mais code non accessible et conditions restrictives | 7-Zip, VLC (gratuit mais pas open source) |
| **Shareware** | Essai gratuit limité — paiement pour les fonctions complètes | WinRAR |

> [!WARNING]
> **Cas courant en entreprise :** Un logiciel "gratuit" en usage personnel peut être payant pour un usage commercial. Vérifier systématiquement les conditions de licence, même pour les logiciels réputés gratuits.

## 2. ITIL et Gestion des Actifs

### 2.1 La Pratique ITIL "Gestion des Actifs IT"

Dans le référentiel **ITIL 4**, la **Gestion des Actifs IT** (IT Asset Management — ITAM) est une pratique dédiée à planifier et gérer le cycle de vie complet de tous les actifs IT. Elle s'appuie sur une base de données appelée **CMDB** (Configuration Management DataBase).

| **Terme ITIL** | **Signification** | **Équivalent concret** |
|---|---|---|
| **Actif IT** | Tout élément ayant une valeur pour l'organisation | Un PC, un serveur, une licence, un câble |
| **CMDB** | Base de données des configurations | L'inventaire de parc en base de données |
| **CI** | Configuration Item — élément géré dans la CMDB | Une fiche technique dans la CMDB |
| **Relation** | Lien entre deux CIs | "Ce PC est utilisé par cet utilisateur qui est dans ce service" |

> [!TIP]
> **Pour votre culture professionnelle :** Les outils de gestion de parc professionnels (GLPI, ManageEngine, Lansweeper, ServiceNow) sont des implémentations concrètes de la CMDB ITIL. Vous les rencontrerez dès votre premier poste en entreprise.

### 2.2 Outils de Gestion de Parc

| **Outil** | **Type** | **Caractéristiques** |
|---|---|---|
| **GLPI** | Open source (PHP) | ITSM complet — tickets + inventaire + CMDB |
| **OCS Inventory** | Open source | Agent local pour inventaire automatique |
| **Lansweeper** | Freemium | Scan réseau automatique — très répandu en PME |
| **Microsoft SCCM / Intune** | Microsoft (payant) | Gestion centralisée parc Windows |
| **ManageEngine AssetExplorer** | Freemium | ITAM complet, très utilisé en France |
| **Excel / Google Sheets** | Universel (gratuit) | Simple mais non automatisé — PME sans outil dédié |

## 3. La Fiche Technique : Cœur de l'Inventaire

### 3.1 Qu'est-ce qu'une Fiche Technique ?

Une **fiche technique** (ou **fiche d'inventaire**) est le document qui recense toutes les informations pertinentes d'un équipement informatique à un moment donné. Elle est à la fois :

- Une **preuve d'existence** de l'équipement dans le parc
- Un **outil de diagnostic** pour les interventions futures
- Une **trace d'historique** des modifications apportées
- Un **élément de conformité** pour les audits

### 3.2 Informations à Collecter pour un Poste de Travail

**Identification :**

| **Champ** | **Exemple** | **Où le trouver** |
|---|---|---|
| Numéro d'inventaire | PC-2024-042 | Étiquette sur le boîtier |
| Numéro de série | 5CG9382XKL | Étiquette, BIOS, `Get-CimInstance Win32_BIOS` |
| Marque et modèle | Dell OptiPlex 7090 | Étiquette, boîtier |
| Type d'équipement | Poste fixe / Laptop / Tout-en-un | Visuel |
| Date d'achat | 14/03/2023 | Facture, bon de livraison |
| Fin de garantie | 14/03/2026 | Site constructeur, facture |
| Localisation | Bâtiment A — Bureau 214 | Relevé physique |
| Utilisateur affecté | Alice Martin — Service RH | RH ou AD |

**Composants Matériels :**

| **Composant** | **Détail à noter** | **Outil de collecte** |
|---|---|---|
| **Processeur (CPU)** | Marque, modèle, fréquence, nombre de cœurs | `msinfo32`, `Get-CimInstance Win32_Processor`, `lscpu` |
| **Mémoire vive (RAM)** | Capacité totale (Go), fréquence, nombre de barrettes | `msinfo32`, `Get-CimInstance Win32_PhysicalMemory` |
| **Stockage** | Type (HDD/SSD/NVMe), capacité, marque | `msinfo32`, gestionnaire de disques, `lsblk` |
| **Carte graphique (GPU)** | Marque, modèle, VRAM | Gestionnaire de périphériques |
| **Carte réseau (Ethernet)** | Marque, modèle, adresse MAC | `ipconfig /all`, `ip link` |
| **WiFi** | Marque, modèle, normes supportées (802.11ac, ax...) | Gestionnaire de périphériques |
| **Carte mère** | Marque, modèle, version BIOS | `msinfo32`, `dmidecode` |
| **Alimentation** | Puissance (W) — laptops : capacité batterie | Physique ou fiche constructeur |
| **Écran** | Taille, résolution, marque | Physique, affichage Windows |

**Système et Logiciels :**

| **Champ** | **Exemple** | **Outil de collecte** |
|---|---|---|
| Système d'exploitation | Windows 11 Pro 23H2 | `winver`, `msinfo32`, `uname -a` |
| Clé de licence OS | OEM / intégrée UEFI | `(Get-CimInstance SoftwareLicensingService).OA3xOriginalProductKey` |
| Domaine / Groupe de travail | `siosarl.local` | `msinfo32`, Propriétés système |
| Logiciels installés | Liste avec versions | Ajout/Suppression de programmes, `Get-Package` |
| Antivirus | Windows Defender 4.18.x | Centre de sécurité Windows |
| Dernière mise à jour OS | 12/10/2024 — KB5031455 | Windows Update |

**Réseau :**

| **Champ** | **Exemple** | **Outil de collecte** |
|---|---|---|
| Adresse IP | 192.168.0.52 (DHCP) ou fixe | `ipconfig`, `ip addr` |
| Masque de sous-réseau | 255.255.255.0 (/24) | `ipconfig`, `ip addr` |
| Passerelle par défaut | 192.168.0.1 | `ipconfig`, `ip route` |
| Serveur DNS | 192.168.0.145 | `ipconfig /all` |
| Adresse MAC | 00:1A:2B:3C:4D:5E | `ipconfig /all`, `ip link` |
| VLAN | VLAN 10 — RH | Switch/documentation réseau |

### 3.3 Commandes de Collecte — Windows

```powershell
# ─── Informations système complètes ──────────────────────────────
msinfo32                    # Interface graphique complète
msinfo32 /report C:\info.txt  # Export en fichier texte

# ─── CPU ─────────────────────────────────────────────────────────
Get-CimInstance Win32_Processor | Select-Object Name, NumberOfCores, MaxClockSpeed
# → Intel(R) Core(TM) i5-10400 @ 2.90GHz   6   2904

# ─── RAM ─────────────────────────────────────────────────────────
Get-CimInstance Win32_PhysicalMemory | Select-Object Capacity, Speed, Manufacturer
# → 8589934592  3200   (8 Go en octets, 3200 MHz)

# ─── Stockage ────────────────────────────────────────────────────
Get-PhysicalDisk | Select-Object FriendlyName, MediaType, Size

# ─── Numéro de série ─────────────────────────────────────────────
Get-CimInstance Win32_BIOS | Select-Object SerialNumber

# ─── Réseau ──────────────────────────────────────────────────────
ipconfig /all               # IP, masque, GW, DNS, MAC

# ─── Logiciels installés ─────────────────────────────────────────
Get-ItemProperty HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\* |
    Select-Object DisplayName, DisplayVersion, Publisher |
    Sort-Object DisplayName
```

### 3.4 Commandes de Collecte — Linux (Debian/Ubuntu)

```bash
# ─── CPU ─────────────────────────────────────────────────────────
lscpu
cat /proc/cpuinfo | grep "model name" | uniq

# ─── RAM ─────────────────────────────────────────────────────────
free -h                                # Mémoire totale et disponible
sudo dmidecode --type 17               # Détail des barrettes (root requis)

# ─── Stockage ────────────────────────────────────────────────────
lsblk                                  # Disques et partitions
df -h                                  # Espace utilisé par partition
sudo fdisk -l                          # Détail des disques

# ─── Matériel complet ────────────────────────────────────────────
sudo lshw                              # Inventaire matériel complet
sudo lshw -short                       # Version condensée
sudo lshw -html > inventaire.html      # Export HTML

# ─── Réseau ──────────────────────────────────────────────────────
ip addr show                           # Adresses IP + MACs
ip route show                          # Table de routage (passerelle)
cat /etc/resolv.conf                   # Serveurs DNS

# ─── Numéro de série ─────────────────────────────────────────────
sudo dmidecode -s system-serial-number
sudo dmidecode -s baseboard-product-name

# ─── Logiciels installés ─────────────────────────────────────────
dpkg --list                            # Tous les paquets installés
dpkg --list | grep "ii" | wc -l        # Compter les paquets
apt list --installed 2>/dev/null       # Version moderne
```

### 3.5 Bonnes Pratiques de Documentation

| **Règle** | **Mauvaise pratique** | **Bonne pratique** |
|---|---|---|
| **Précision** | "RAM : 8 Go" | "RAM : 2 × 8 Go DDR4 3200 MHz Samsung" |
| **Complétude** | Laisser un champ vide | Indiquer "Inconnu" ou "À vérifier" |
| **Datation** | Pas de date | Chaque fiche porte une date de création et une date de dernière modification |
| **Versionning** | Écraser l'ancienne fiche | Conserver l'historique (v1.0 → v1.1 → v2.0) |
| **Objectivité** | "Vieux PC lent" | "Dell OptiPlex 3050, i3-7100, 4 Go RAM — obsolète selon politique renouvellement (> 5 ans)" |
| **Format standard** | Fiche libre sans structure | Modèle standardisé pour toute l'organisation |
| **Accessibilité** | Fiche sur le bureau du technicien | Fiche dans le GLPI ou espace partagé |

## À retenir

- Un **inventaire** recense chaque équipement avec son matériel, ses logiciels, sa configuration réseau et ses licences.
- On ne gère (et on ne sécurise) que ce qu'on **connaît**.
- Chaque fiche porte une **date** et un **identifiant unique** (numéro de série, nom du poste).
- Sous Windows, on collecte avec `msinfo32` et PowerShell (`Get-CimInstance`) ; l'ancien `wmic` est obsolète.

## Je vérifie mes acquis

- [ ] Je cite 4 raisons pour lesquelles un inventaire de parc est indispensable
- [ ] Je distingue inventaire matériel, logiciel et licences
- [ ] Je connais les 3 types de licences les plus courants (OEM, Volume, SaaS)
- [ ] Je sais quelle commande Windows/Linux utiliser pour trouver le CPU, la RAM, le numéro de série
- [ ] J'ai rempli une fiche technique complète sans champ vide
- [ ] J'explique le lien entre gestion de parc et CMDB ITIL
- [ ] Je comprends pourquoi un logiciel "gratuit" peut créer un problème de licence en entreprise

---
