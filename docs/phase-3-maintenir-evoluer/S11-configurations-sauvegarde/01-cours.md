# Cours – Gestion des configurations et versioning

*BTS SIO SISR 1re année – Bloc 1 – S11*

> [!NOTE] Ce que tu dois savoir déjà
> - **Prérequis :** S02 (inventaire), S06 (CMDB et actifs).
> - **À garder en tête :** lis le cours **avant** le TP ; la section « À retenir » en fin de cours résume l'essentiel.

## À la fin de ce cours, tu sauras

- [ ] **Définir** la gestion des configurations, la CMDB et la ligne de base ;
- [ ] **Nommer** et **horodater** des fichiers de configuration ;
- [ ] **Distinguer** configuration courante et configuration de démarrage d'un équipement Cisco ;
- [ ] **Comparer** deux versions d'une configuration ;
- [ ] **Automatiser** une sauvegarde simple et l'**essayer** (restauration) ;
- [ ] **Versionner** une configuration avec Git (aperçu).

---


## 1. Gestion des Configurations selon ITIL

### 1.1 Configuration Management — Définition

En ITIL 4, la **gestion des configurations** (Configuration Management) est la pratique qui consiste à maintenir une information fiable et à jour sur tous les **éléments de configuration** (CI — Configuration Items) de l'infrastructure IT et leurs relations.

```
   CMDB (Configuration Management DataBase)
   ────────────────────────────────────────────────────────────
   Base de données centrale contenant tous les CI et leurs relations

   Exemples de CI :
   ├── Serveurs (physiques, virtuels)
   ├── Équipements réseau (switches, routeurs, firewalls)
   ├── Postes de travail (fixes, portables)
   ├── Logiciels (OS, applications, versions)
   ├── Licences (nombre, type, expiration)
   ├── Documents (DAT, procédures, schémas)
   └── Relations entre CI (ce serveur héberge cette application,
       cette application utilise cette base de données...)
```

### 1.2 Baseline de Configuration

Une **baseline** (ou **référence de configuration**) est un instantané figé de la configuration d'un CI à un moment donné, qui sert de référence pour les changements futurs.

```
   EXEMPLE — Baseline Serveur Web Production
   ─────────────────────────────────────────────────────────────
   Baseline v1.0 — 2024-09-15
   ├── Serveur : SRV-WEB-01 / Ubuntu 22.04.3 LTS
   ├── Apache 2.4.52
   ├── PHP 8.1.12
   ├── MariaDB 10.6.12
   ├── Sites hébergés : intranet.siosarl.local, catalogue.siosarl.local
   ├── Certificat SSL : Let's Encrypt — expire 2024-12-10
   ├── Configuration réseau : IP 192.168.10.50/24, GW .1, DNS .10
   ├── Fichiers de config : /etc/apache2/sites-available/*
   └── Date de création baseline : 2024-09-15

   → Tout changement par rapport à cette baseline doit être documenté
     et validé (Change Management)
```

> [!TIP]
> **Pourquoi une baseline ?** Sans baseline, on ne peut pas savoir si une configuration actuelle est conforme à ce qu'elle devrait être. C'est la référence pour les audits de conformité et les retours arrière (rollback) en cas de problème.

### 1.3 Relations entre CI dans la CMDB

Un CI ne vit jamais seul. La CMDB enregistre les **dépendances** entre CI :

<figure class="graphe diagramme"><svg viewBox="0 0 760 300" style="max-width:760px" role="img" aria-label="Relations entre éléments de configuration autour de l&#x27;application intranet" xmlns="http://www.w3.org/2000/svg">
<rect x="280" y="120" width="200" height="56" rx="8" class="dg-dark"/>
<text x="380.0" y="153.0" text-anchor="middle" class="dg-w">Application intranet</text>
<rect x="10" y="20" width="200" height="50" rx="8" class="dg-box"/>
<text x="110.0" y="50.0" text-anchor="middle" class="dg-t">SRV-WEB-01</text>
<line x1="380" y1="120" x2="218.5" y2="63.0" class="dg-line"/>
<polygon points="210,60 216.8,67.7 220.2,58.3" class="dg-ah"/>
<text x="250" y="76" text-anchor="middle" class="dg-s">hébergée sur</text>
<rect x="550" y="20" width="200" height="50" rx="8" class="dg-box"/>
<text x="650.0" y="41.0" text-anchor="middle" class="dg-t">BASE-INTRANET</text>
<text x="650.0" y="59.0" text-anchor="middle" class="dg-s">MariaDB sur SRV-DB-01</text>
<line x1="430" y1="120" x2="542.0" y2="64.0" class="dg-line"/>
<polygon points="550,60 539.7,59.6 544.2,68.5" class="dg-ah"/>
<text x="520" y="96" text-anchor="middle" class="dg-s">utilise</text>
<rect x="10" y="230" width="200" height="50" rx="8" class="dg-warn"/>
<text x="110.0" y="251.0" text-anchor="middle" class="dg-t">Licence PHP</text>
<text x="110.0" y="269.0" text-anchor="middle" class="dg-s">10 utilisateurs simultanés</text>
<line x1="330" y1="176" x2="217.9" y2="235.8" class="dg-line"/>
<polygon points="210,240 220.3,240.2 215.6,231.4" class="dg-ah"/>
<text x="230" y="214" text-anchor="middle" class="dg-s">nécessite</text>
<rect x="550" y="230" width="200" height="50" rx="8" class="dg-box"/>
<text x="650.0" y="251.0" text-anchor="middle" class="dg-t">Switch-CoreN1</text>
<text x="650.0" y="269.0" text-anchor="middle" class="dg-s">VLAN 20</text>
<line x1="430" y1="176" x2="542.1" y2="235.8" class="dg-line"/>
<polygon points="550,240 544.4,231.4 539.7,240.2" class="dg-ah"/>
<text x="530" y="214" text-anchor="middle" class="dg-s">accessible via</text>
</svg>
</figure>

**Impact :**

- Si SRV-WEB-01 tombe en panne, l'intranet est inaccessible.
- Si Switch-CoreN1 redémarre, tous les services du VLAN 20 sont coupés.
- Si la licence PHP expire, l'intranet peut cesser de fonctionner.

> [!NOTE]
> **Utilité en gestion d'incidents :** Quand un incident P1 survient ("L'intranet est HS"), la CMDB permet de voir immédiatement tous les composants impliqués et de remonter la chaîne de dépendance pour identifier la cause.

## 2. Versioning des Configurations

### 2.1 Pourquoi Versionner ?

Le **versioning** (ou **gestion de versions**) consiste à garder une trace de toutes les versions successives d'un fichier de configuration, avec l'horodatage et l'auteur de chaque modification.

| **Sans versioning** | **Avec versioning** |
|---|---|
| On écrase l'ancienne config à chaque modification | Chaque modification crée une nouvelle version datée |
| En cas d'erreur, on ne peut pas revenir en arrière | On peut restaurer n'importe quelle version antérieure |
| On ne sait pas qui a changé quoi ni quand | Chaque changement est tracé (auteur, date, raison) |
| Impossible de comparer deux états du système | Diff entre versions pour voir ce qui a changé |

### 2.2 Méthodes de Versioning

| **Méthode** | **Principe** | **Avantages** | **Inconvénients** | **Usage** |
|---|---|---|---|---|
| **Fichiers horodatés** | Copier le fichier avec date dans le nom | Simple, universel | Pas de diff automatique, volume de stockage | Petite infra, configs manuelles |
| **Git / SVN** | Dépôt versionné avec historique complet | Diff, merge, rollback, commentaires | Nécessite apprentissage Git | Infra moyenne à grande |
| **Outils spécialisés** | Rancid, Oxidized (pour équipements réseau) | Automatisation, alertes sur changement non autorisé | Configuration initiale complexe | Datacenter, parc réseau important |
| **Backup CMDB** | Sauvegarde automatique de la CMDB GLPI | Intégré ITSM | Pas de granularité fichier | PME avec GLPI |

### 2.3 Fichiers Horodatés — Convention de Nommage

Si vous gérez les configurations manuellement (sans Git), respecter une **convention de nommage stricte** :

```
   Format recommandé :
   [Type]_[Équipement]_[YYYYMMDD]_[Version].[extension]

   Exemples :
   config_Switch-Core1_20241015_v1.0.txt
   config_SRV-DHCP_20241022_v2.3.conf
   baseline_Firewall-PFSense_20241101_v1.0.xml

   Arborescence :
   /backup/configs/
   ├── switches/
   │   ├── Switch-Core1/
   │   │   ├── config_Switch-Core1_20241001_v1.0.txt
   │   │   ├── config_Switch-Core1_20241015_v1.1.txt
   │   │   └── config_Switch-Core1_20241101_v2.0.txt
   │   └── Switch-Distrib-RH/
   ├── serveurs/
   └── firewalls/

   + Un fichier CHANGELOG.md par équipement :
   Switch-Core1 — Historique des modifications
   v2.0 — 2024-11-01 — Ajout VLAN 30 pour Marketing — Auteur: [Nom]
   v1.1 — 2024-10-15 — Correction ACL port 22 — Auteur: [Nom]
   v1.0 — 2024-10-01 — Configuration initiale — Auteur: [Nom]
```

## 3. Configurations Réseau (Running vs Startup)

### 3.1 Cisco IOS — Deux Configurations

Les équipements réseau Cisco (et la plupart des constructeurs) utilisent deux emplacements de stockage pour la configuration :

<figure class="graphe diagramme"><svg viewBox="0 0 760 230" style="max-width:760px" role="img" aria-label="Configuration active en RAM et configuration sauvegardée en NVRAM" xmlns="http://www.w3.org/2000/svg">
<rect x="10" y="20" width="330" height="150" rx="8" class="dg-warn"/>
<text x="175.0" y="64.0" text-anchor="middle" class="dg-t">running-config</text>
<text x="175.0" y="82.0" text-anchor="middle" class="dg-s">RAM : volatile, effacée au redémarrage</text>
<text x="175.0" y="100.0" text-anchor="middle" class="dg-s">configuration ACTIVE, en cours d&#x27;utilisation</text>
<text x="175.0" y="118.0" text-anchor="middle" class="dg-s">show running-config</text>
<text x="175.0" y="136.0" text-anchor="middle" class="dg-s">toute modification passe ici d&#x27;abord</text>
<rect x="420" y="20" width="330" height="150" rx="8" class="dg-ok"/>
<text x="585.0" y="73.0" text-anchor="middle" class="dg-t">startup-config</text>
<text x="585.0" y="91.0" text-anchor="middle" class="dg-s">NVRAM : survit au redémarrage</text>
<text x="585.0" y="109.0" text-anchor="middle" class="dg-s">configuration SAUVEGARDÉE, chargée au démarrage</text>
<text x="585.0" y="127.0" text-anchor="middle" class="dg-s">show startup-config</text>
<line x1="340" y1="70" x2="411.0" y2="70.0" class="dg-line"/>
<polygon points="420,70 411.0,65.0 411.0,75.0" class="dg-ah"/>
<text x="380.0" y="70.0" text-anchor="middle" class="dg-s"></text>
<text x="380" y="58" text-anchor="middle" class="dg-s">copy run start</text>
<line x1="420" y1="125" x2="349.0" y2="125.0" class="dg-dash"/>
<polygon points="340,125 349.0,130.0 349.0,120.0" class="dg-ah"/>
<text x="380" y="142" text-anchor="middle" class="dg-s">démarrage</text>
<text x="380" y="204" text-anchor="middle" class="dg-i">sans sauvegarde vers la startup-config, les modifications sont perdues au redémarrage</text>
</svg>
</figure>

### 3.2 Commandes Cisco IOS Essentielles

```cisco
! ─── Voir la configuration active ───
Switch# show running-config
! Affiche toute la config en RAM (peut être long)

! ─── Voir la configuration de démarrage ───
Switch# show startup-config
! Affiche la config qui sera chargée au prochain boot

! ─── Comparer les deux configs ───
Switch# show archive config differences
! Montre les différences entre running et startup (si disponible)

! ─── Sauvegarder la running-config vers la startup-config ───
Switch# copy running-config startup-config
! ou raccourci :
Switch# write memory
Switch# wr

! ─── Exporter la config vers un serveur TFTP ───
Switch# copy running-config tftp:
! Puis entrer l'IP du serveur TFTP et le nom de fichier

! ─── Restaurer une config depuis TFTP ───
Switch# copy tftp: running-config
! Attention : fusionne avec la config existante, ne la remplace pas

! ─── Effacer la startup-config (reset factory) ───
Switch# erase startup-config
! Au prochain redémarrage, l'équipement démarre vierge
```

### 3.3 Workflow Professionnel de Modification

```
   ÉTAPE 1 — SAUVEGARDE PRÉVENTIVE
   ──────────────────────────────────────────────────────────────
   Avant toute modification, sauvegarder la config actuelle :
   Switch# copy running-config tftp:
   Destination : backup_Switch-Core1_20241115_avant-modif.txt

   ÉTAPE 2 — MODIFICATION EN MODE CONFIG
   ──────────────────────────────────────────────────────────────
   Switch# configure terminal
   Switch(config)# [commandes de modification]
   Switch(config)# exit

   ÉTAPE 3 — TEST ET VALIDATION
   ──────────────────────────────────────────────────────────────
   Vérifier que la modification fonctionne (ping, accès, VLAN...)
   Si KO → annuler (reload sans sauvegarder)
   Si OK → passer à l'étape 4

   ÉTAPE 4 — SAUVEGARDE PERMANENTE
   ──────────────────────────────────────────────────────────────
   Switch# copy running-config startup-config
   → La modification survivra au redémarrage

   ÉTAPE 5 — DOCUMENTATION
   ──────────────────────────────────────────────────────────────
   Exporter la nouvelle config et mettre à jour le CHANGELOG :
   Switch# copy running-config tftp:
   Destination : config_Switch-Core1_20241115_v2.1.txt

   Fichier CHANGELOG.md :
   v2.1 — 2024-11-15 — Ajout VLAN 40 Commerce — Auteur: [Nom]
```

### 3.4 Comparer Deux Versions de Configuration

Pour identifier ce qui a changé entre deux versions, utiliser un outil de diff :

**Sous Linux :**
```bash
diff -u config_Switch_20241001_v1.0.txt config_Switch_20241115_v2.1.txt

# Ou pour une sortie plus lisible :
diff -u config_Switch_20241001_v1.0.txt config_Switch_20241115_v2.1.txt | colordiff
```

**Sous Windows :**
- WinMerge (gratuit, interface graphique)
- Notepad++ avec plugin Compare
- Visual Studio Code avec extension GitLens

**En ligne :**
- diffchecker.com (copier-coller les deux configs)

## 4. Versioning avec Git (Aperçu)

### 4.1 Pourquoi Git pour les Configs ?

**Git** n'est pas réservé au code source — il est parfait pour versionner des fichiers de configuration texte :

| **Avantage Git** | **Exemple sur configs réseau** |
|---|---|
| Historique complet | Voir tous les changements depuis 2 ans |
| Auteur et date | Savoir qui a modifié quoi et quand |
| Commentaire de commit | "Ajout VLAN 40 pour le service Commerce — Ticket GLPI #1234" |
| Diff automatique | `git diff` montre exactement les lignes modifiées |
| Rollback facile | Revenir à une version antérieure en 1 commande |
| Branches | Tester une modif dans une branche sans toucher à la prod |

### 4.2 Workflow Git pour Configs — Exemple

```bash
# ─── Initialisation du dépôt (une seule fois) ───
cd /backup/configs
git init
git config user.name "Technicien Réseau"
git config user.email "technicien@siosarl.local"

# ─── Ajouter une première config ───
# (après avoir exporté depuis le switch)
cp ~/downloads/config_Switch-Core1.txt switches/Switch-Core1.txt
git add switches/Switch-Core1.txt
git commit -m "Config initiale Switch-Core1 — v1.0"

# ─── 2 semaines plus tard : modification du switch ───
# (exporter la nouvelle config)
cp ~/downloads/config_Switch-Core1_nouvelle.txt switches/Switch-Core1.txt
git add switches/Switch-Core1.txt
git commit -m "Ajout VLAN 40 Commerce — Ticket GLPI #1234"

# ─── Voir l'historique ───
git log --oneline
# Affiche :
# a3f82c1 Ajout VLAN 40 Commerce — Ticket GLPI #1234
# e7b12f4 Config initiale Switch-Core1 — v1.0

# ─── Voir ce qui a changé entre deux commits ───
git diff e7b12f4 a3f82c1

# ─── Revenir à une version antérieure (rollback) ───
git checkout e7b12f4 -- switches/Switch-Core1.txt
# Le fichier est restauré à la version initiale
# Il faut ensuite le réappliquer sur le switch
```

## À retenir

- On sauvegarde les **configurations** (pas seulement les données) avec **date** et **somme de contrôle**.
- Une sauvegarde **non testée** n'est pas une sauvegarde : on teste la **restauration**.
- Avec **Git**, chaque modification de configuration est **versionnée et expliquée**.
- Le script de sauvegarde garde une **trace** (journal) et supprime les anciennes copies selon une règle.

## Je vérifie mes acquis

- [ ] Je définis Configuration Management selon ITIL
- [ ] J'explique ce qu'est une baseline et pourquoi elle est utile
- [ ] Je distingue running-config (RAM) et startup-config (NVRAM)
- [ ] Je sais sauvegarder une running-config vers startup-config
- [ ] J'applique une convention de nommage cohérente aux fichiers de config
- [ ] J'explique pourquoi versionner les configs est essentiel
- [ ] Je documente un changement de configuration (qui, quoi, quand, pourquoi)
- [ ] Je peux comparer deux versions de configuration avec diff
