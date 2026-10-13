# Cours – OCS Inventory : gestion de parc automatisée

*BTS SIO SISR 1re année – Bloc 1 – S05*

> [!NOTE] Ce que tu dois savoir déjà
> - **Prérequis :** S02 (fiche technique), S04.
> - **À garder en tête :** lis le cours **avant** le TP ; la section « À retenir » en fin de cours résume l'essentiel.

## À la fin de ce cours, tu sauras

- [ ] **Expliquer** l'intérêt d'un inventaire automatique et l'architecture client/serveur d'OCS ;
- [ ] **Installer** l'agent sur un poste Windows et **forcer** un inventaire ;
- [ ] **Retrouver** son poste dans la console et **lire** les informations collectées ;
- [ ] **Comparer** OCS avec d'autres outils de gestion de parc ;
- [ ] **Situer** le lien entre OCS et GLPI.

---


## 1. Pourquoi Automatiser l'Inventaire ?

En S02, vous avez rempli manuellement la fiche technique d'un seul poste — cela a pris 30 à 45 minutes. Projetons cette expérience à l'échelle :

| **Taille du parc** | **Inventaire manuel** | **Inventaire automatisé** |
|---|---|---|
| 1 poste | 45 min | 2 min (installation agent) |
| 50 postes | 37h30 (1 semaine) | 2h (déploiement agent en masse) |
| 200 postes | 150h (1 mois) | 4h (déploiement GPO ou script) |
| 1 000 postes | — (irréaliste) | ½ journée |

**Trois problèmes supplémentaires de l'inventaire manuel :**

1. **L'information vieillit dès qu'elle est écrite.** Une mise à jour Windows, un ajout de RAM, un changement de disque — la fiche manuelle est déjà obsolète.
2. **L'inventaire n'est jamais exhaustif.** On oublie des postes, des imprimantes réseau, des équipements dans des armoires.
3. **Aucune alerte sur les changements.** Si quelqu'un installe un logiciel non autorisé ou retire une barrette de RAM, on ne le sait pas.

La **gestion de parc automatisée** résout ces trois problèmes : les agents remontent les informations périodiquement, l'inventaire se met à jour sans intervention humaine, et les modifications sont traçables.

## 2. OCS Inventory NG

### 2.1 Présentation

**OCS Inventory NG** (Open Computer and Software Inventory Next Generation) est un logiciel **open source** de gestion d'inventaire de parc informatique. Il est utilisé par des milliers d'organisations dans le monde, particulièrement en France où il est très répandu dans les collectivités et PME.

| **Paramètre** | **Valeur** |
|---|---|
| **Licence** | GPL v2 (open source — gratuit) |
| **Site officiel** | ocsinventory-ng.org |
| **Éditeur communautaire** | OCS Inventory Team |
| **Systèmes supportés (agent)** | Windows, Linux, macOS, Android, AIX, Solaris |
| **Technologies serveur** | Apache + PHP + MySQL/MariaDB |
| **Intégration** | GLPI (via plugin FusionInventory) |

### 2.2 Architecture Client/Serveur

```
   ┌─────────────────────────────────────────────────────────────────┐
   │                    ARCHITECTURE OCS INVENTORY                    │
   │                                                                 │
   │   POSTES DU PARC                  SERVEUR OCS                  │
   │   ─────────────                  ───────────                   │
   │                                                                 │
   │  PC Windows ──────── HTTPS ──────►┌─────────────────┐          │
   │  PC Linux   ──────── HTTPS ──────►│  Serveur Apache │          │
   │  Mac        ──────── HTTPS ──────►│  PHP            │          │
   │  Laptop     ──────── HTTPS ──────►│  MySQL/MariaDB  │          │
   │                                   └────────┬────────┘          │
   │   ↑                                        │                   │
   │   Agent OCS                                ▼                   │
   │   installé sur                    ┌─────────────────┐          │
   │   chaque poste                    │  Console Web    │          │
   │                                   │  ocsreports     │          │
   │                                   │  (navigateur)   │          │
   │                                   └─────────────────┘          │
   │                                          ↑                     │
   │                                   Admin DSI                    │
   └─────────────────────────────────────────────────────────────────┘
```

*Légende : Architecture OCS Inventory. L'agent installé sur chaque poste collecte les informations matérielles et logicielles, puis les envoie au serveur OCS via HTTPS. Le serveur stocke les données dans MySQL. L'administrateur accède aux inventaires via la console web `ocsreports`. Le protocole HTTPS garantit la confidentialité des données de parc en transit.*

### 2.3 Fonctionnement de l'Agent

L'**agent OCS** est un service (daemon) qui s'exécute en arrière-plan sur chaque poste. Ses actions :

```
   DÉMARRAGE DU POSTE
         │
         ▼
   Agent OCS démarre
   (service Windows ou cron Linux)
         │
         ▼
   Collecte des informations :
   • Matériel (CPU, RAM, disques, cartes réseau...)
   • OS (version, patches installés, clé de licence)
   • Logiciels (liste complète avec versions)
   • Réseau (IP, MAC, VLAN si disponible)
   • Périphériques connectés
         │
         ▼
   Comparaison avec le dernier inventaire envoyé
   (changements uniquement si "ipdiscover" ou delta)
         │
         ▼
   Envoi au serveur OCS via HTTPS (XML compressé)
   URL : http(s)://[serveur]/ocsinventory
         │
         ▼
   Serveur stocke en base de données
   Console web mise à jour
```

### 2.4 Ce qu'OCS Inventory Collecte

| **Catégorie** | **Informations collectées** |
|---|---|
| **Matériel** | CPU (modèle, fréquence, cœurs), RAM (capacité, slots), Disques (modèle, taille, type), Carte mère, BIOS (version, date), Carte réseau (MAC, IP, type) |
| **Système** | OS (nom, version, build, langue), Clé de licence OS, Domaine/groupe de travail, Nom du poste, Uptime |
| **Logiciels** | Liste complète avec éditeur, version, date d'installation, chemin |
| **Réseau** | Toutes les interfaces (IP, masque, MAC, VLAN) |
| **Périphériques** | Moniteurs (marque, résolution), Imprimantes, Ports (USB, PCI...) |
| **Sécurité** | Antivirus détecté, pare-feu, mises à jour manquantes (optionnel) |

> [!NOTE]
> **Point sécurité :** OCS Inventory collecte des informations potentiellement sensibles (configuration du réseau, logiciels installés, parfois clés de licence). Le serveur OCS doit être sécurisé (HTTPS, authentification forte, accès restreint) et les données traitées conformément au RGPD.

### 2.5 Avantages et Limites

| **Avantages** | **Limites** |
|---|---|
| ✅ Inventaire automatique et périodique | ❌ Nécessite un agent sur chaque poste |
| ✅ Détection des changements | ❌ Agent = charge CPU/RAM (légère) |
| ✅ Open source et gratuit | ❌ Interface web vieillissante |
| ✅ Multi-OS (Windows, Linux, Mac) | ❌ Pas de gestion native des licences avancée |
| ✅ Intégration GLPI (via plugin) | ❌ Nécessite un serveur dédié |
| ✅ API REST disponible | ❌ Configuration initiale complexe |
| ✅ Très répandu en France | ❌ Alternatives plus modernes existent (Lansweeper, Rudder) |

### 2.6 OCS et GLPI — L'Écosystème Complet

OCS Inventory et GLPI fonctionnent souvent ensemble dans les organisations françaises :

```
   OCS INVENTORY                      GLPI
   ─────────────                      ────
   Collecte automatique   ──────────► Reçoit l'inventaire
   des données matérielles            via plugin FusionInventory
   et logicielles                     ou import natif

                                       + Gestion des tickets
                                       + CMDB relationnelle
                                       + Gestion des licences
                                       + Base de connaissances
                                       + Planification
                                       + Rapports SLA
```

> [!TIP]
> **En entreprise :** On dit souvent "on est sous GLPI + OCS". GLPI est l'outil de gestion (tickets, actifs, CMDB), OCS est le collecteur automatique qui l'alimente. L'un sans l'autre est moins efficace.

### 2.7 Commandes de l'Agent Windows

```cmd
:: Forcer un inventaire immédiat (lancer depuis le répertoire d'installation)
"C:\Program Files\OCS Inventory Agent\OCSInventory.exe" /np /server:[IP_SERVEUR]

:: Forcer un inventaire avec logs détaillés
"C:\Program Files\OCS Inventory Agent\OCSInventory.exe" /np /server:[IP_SERVEUR] /debug /logfile:C:\Temp\ocs_debug.log

:: Vérifier le service Windows OCS
sc query OCS_AGENT
Get-Service -Name "OCS_AGENT"

:: Voir les logs de l'agent
type "C:\ProgramData\OCS Inventory Agent\OCSInventory.log"
```

### 2.8 Comparaison des Outils de Gestion de Parc

| **Outil** | **Type** | **Inventaire Auto** | **Tickets** | **CMDB** | **Coût** |
|---|---|---|---|---|---|
| **OCS Inventory** | Open source | ✅ (agent) | ❌ | ❌ | Gratuit |
| **GLPI seul** | Open source | ❌ (manuel) | ✅ | ✅ | Gratuit |
| **GLPI + OCS** | Open source | ✅ | ✅ | ✅ | Gratuit |
| **Lansweeper** | Freemium | ✅ (agentless) | ❌ | Limité | Free/<100 |
| **SCCM/Intune** | Microsoft | ✅ (agent) | ❌ | ✅ | Inclus M365 |
| **ServiceNow** | SaaS | ✅ | ✅ | ✅ | Très élevé |

---

## À retenir

- Un **agent** installé sur chaque poste envoie son inventaire au **serveur** OCS.
- L'inventaire automatique est **à jour et complet** là où la fiche manuelle ne l'est qu'à un instant donné.
- On **compare** toujours le résultat automatique à une vérification manuelle.
- OCS et GLPI se **complètent** : inventaire d'un côté, tickets et parc de l'autre.

