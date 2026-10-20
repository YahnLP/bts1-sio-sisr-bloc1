# Cours – La gestion des changements (ITIL)

*BTS SIO SISR 1re année – Bloc 1 – S14*

> [!NOTE] Ce que tu dois savoir déjà
> - **Prérequis :** S03 (ITIL), S06.
> - **À garder en tête :** lis le cours **avant** le TP ; la section « À retenir » en fin de cours résume l'essentiel.

## À la fin de ce cours, tu sauras

- [ ] **Définir** un changement et le **distinguer** d'un incident ;
- [ ] **Décrire** le cycle d'un changement, le rôle du CAB et l'analyse de risque ;
- [ ] **Rédiger** une demande de changement (RFC) ;
- [ ] **Choisir** des sources de veille fiables et **organiser** une routine ;
- [ ] **Documenter** sa veille pour le portfolio.

---


## 1. Définition et Périmètre

### 1.1 Qu'est-ce qu'un Changement ?

En ITIL 4, un **changement** est défini comme :

> *"L'ajout, la modification ou la suppression de tout élément susceptible d'avoir un effet sur les services IT."*

```
   EXEMPLES DE CHANGEMENTS
   ─────────────────────────────────────────────────────────────
   OK : Ajout d'un serveur
   OK : Mise à jour OS (Windows Server 2019 → 2022)
   OK : Modification firewall (nouvelle règle)
   OK : Ajout d'un VLAN
   OK : Migration application vers le cloud

   KO : PAS DES CHANGEMENTS
   ─────────────────────────────────────────────────────────────
   KO : Réinitialisation mot de passe (demande standard)
   KO : Remplacement disque défaillant à l'identique (incident)
   KO : Redémarrage service bloqué (incident)
```

### 1.2 Changement vs Incident vs Demande

| **Type** | **Déclencheur** | **Objectif** | **Validation** |
|---|---|---|---|
| **Incident** | Interruption non planifiée | Restaurer le service | Technicien N1/N2 |
| **Demande de service** | Besoin utilisateur standard | Fournir un service | Automatisé ou N1 |
| **Changement** | Évolution planifiée | Modifier l'infrastructure | **CAB** |

## 2. Le Cycle de Vie d'un Changement

### 2.1 Les 7 Étapes

```
   ① DEMANDE (RFC — Request For Change)
   ──────────────────────────────────────────────────────────────
   Un demandeur crée une RFC documentant le changement souhaité

   ② ÉVALUATION TECHNIQUE
   ──────────────────────────────────────────────────────────────
   Le Change Manager évalue :
   • Faisabilité technique
   • Impact sur les services
   • Ressources nécessaires
   • Risques

   ③ APPROBATION ou REJET
   ──────────────────────────────────────────────────────────────
   Le CAB décide : approuvé / rejeté / reporté

   ④ PLANIFICATION
   ──────────────────────────────────────────────────────────────
   • Date de la fenêtre de maintenance
   • Runbook (ordre des tâches)
   • Plan de rollback
   • Communication utilisateurs

   ⑤ IMPLÉMENTATION
   ──────────────────────────────────────────────────────────────
   Exécution du changement
   Documentation en temps réel

   ⑥ VALIDATION
   ──────────────────────────────────────────────────────────────
   Vérifier que le changement a atteint ses objectifs

   ⑦ CLÔTURE
   ──────────────────────────────────────────────────────────────
   Mise à jour CMDB
   Archivage de la RFC
```

### 2.2 Le CAB (Change Advisory Board)

Le **CAB** est un comité qui évalue et approuve les changements.

| **Membre** | **Rôle** | **Apporte** |
|---|---|---|
| **Change Manager** | Président du CAB | Vue d'ensemble |
| **Responsable DSI** | Valide l'alignement stratégique | Budget, priorités |
| **Technicien expert** | Évalue la faisabilité | Compétence technique |
| **Responsable métier** | Représente les utilisateurs | Impact métier |
| **Responsable sécurité** | Évalue les risques | Conformité |

### 2.3 Analyse de Risque

Chaque changement est évalué selon **impact** × **probabilité** :

```
   MATRICE DE RISQUE
   ──────────────────────────────────────────────────────────────

                        PROBABILITÉ D'ÉCHEC
                     Faible    Moyenne    Élevée
                   ┌─────────┬──────────┬──────────┐
   IMPACT    Faible│  FAIBLE │  FAIBLE  │  MOYEN   │
             Moyen │  FAIBLE │  MOYEN   │  ÉLEVÉ   │
             Élevé │  MOYEN  │  ÉLEVÉ   │ CRITIQUE │
                   └─────────┴──────────┴──────────┘

   Actions selon le risque :
   FAIBLE    → Approbation simplifiée
   MOYEN     → Approbation CAB + plan rollback
   ÉLEVÉ     → CAB + tests préalables
   CRITIQUE  → Direction + simulation + équipe standby
```

## 3. Les 3 Types de Changements

### 3.1 Changement Standard

Changement **pré-approuvé**, faible risque, procédure documentée.

```
   EXEMPLES
   ──────────────────────────────────────────────────────────────
   • Redémarrage mensuel planifié serveurs
   • Déploiement mises à jour sécurité Microsoft
   • Ajout utilisateur à Active Directory

   PROCESSUS
   ──────────────────────────────────────────────────────────────
   1. Procédure approuvée une fois par le CAB
   2. Exécution sans nouvelle approbation
   3. Documentation dans GLPI
```

### 3.2 Changement Normal

Nécessite **évaluation et approbation** du CAB.

```
   EXEMPLES
   ──────────────────────────────────────────────────────────────
   • Ajout d'un nouveau serveur
   • Modification topologie réseau (VLAN)
   • Migration application vers nouvelle version

   PROCESSUS
   ──────────────────────────────────────────────────────────────
   1. RFC soumise
   2. Évaluation technique
   3. Présentation au CAB
   4. Décision → planification → implémentation
```

### 3.3 Changement Urgent (Emergency)

Application **immédiate** pour incident critique.

```
   EXEMPLES
   ──────────────────────────────────────────────────────────────
   • Patch sécurité critique (CVE exploit actif)
   • Restauration serveur critique en panne
   • Blocage attaque en cours

   PROCESSUS ACCÉLÉRÉ
   ──────────────────────────────────────────────────────────────
   1. RFC urgente
   2. Approbation E-CAB (Emergency CAB)
   3. Implémentation immédiate
   4. Documentation a posteriori
```

## 4. La RFC (Request For Change)

### 4.1 Structure Complète

```
╔══════════════════════════════════════════════════════════════════════╗
║                    REQUEST FOR CHANGE (RFC)                          ║
╠══════════════════════════════════════════════════════════════════════╣
║  N° RFC         : RFC-2024-___          Date : __________           ║
║  Type           : ☐ Standard  ☐ Normal  ☐ Urgent                   ║
╠══════════════════════════════════════════════════════════════════════╣
║  1. IDENTIFICATION                                                   ║
║  Demandeur      : _________________________________________         ║
║  Service        : _________________________________________         ║
║  Date souhaitée : _________________________________________         ║
╠══════════════════════════════════════════════════════════════════════╣
║  2. DESCRIPTION DU CHANGEMENT                                        ║
║  Titre          : _________________________________________         ║
║  Description détaillée :                                            ║
║  _______________________________________________________________     ║
╠══════════════════════════════════════════════════════════════════════╣
║  3. JUSTIFICATION                                                    ║
║  Pourquoi ce changement :                                           ║
║  _______________________________________________________________     ║
║  Bénéfices attendus :                                               ║
║  _______________________________________________________________     ║
╠══════════════════════════════════════════════════════════════════════╣
║  4. IMPACT ET RISQUE                                                 ║
║  Services impactés  : _____________________________________         ║
║  Nombre utilisateurs : _____________________________________        ║
║  Niveau de risque   : ☐ Faible ☐ Moyen ☐ Élevé ☐ Critique         ║
╠══════════════════════════════════════════════════════════════════════╣
║  5. PLAN D'IMPLÉMENTATION                                            ║
║  Fenêtre maintenance : Du __________ au __________                  ║
║  Étapes prévues :                                                    ║
║  1. _____________________________________________________________    ║
║  2. _____________________________________________________________    ║
╠══════════════════════════════════════════════════════════════════════╣
║  6. PLAN DE ROLLBACK                                                 ║
║  Procédure de retour arrière :                                      ║
║  _______________________________________________________________     ║
║  Rollback testé : ☐ Oui  ☐ Non                                     ║
╠══════════════════════════════════════════════════════════════════════╣
║  7. COMMUNICATION                                                    ║
║  Utilisateurs à informer : _____________________________________     ║
║  Moyen : ☐ Email  ☐ Intranet  ☐ Autre                              ║
╠══════════════════════════════════════════════════════════════════════╣
║  8. VALIDATION                                                       ║
║  Critères de succès :                                               ║
║  _______________________________________________________________     ║
╠══════════════════════════════════════════════════════════════════════╣
║  9. DÉCISION CAB                                                     ║
║  Date réunion   : _________________________________________         ║
║  Décision       : ☐ Approuvée  ☐ Rejetée  ☐ Reportée              ║
║  Signature      : _________________________________________         ║
╚══════════════════════════════════════════════════════════════════════╝
```

---

## À retenir

- Un **changement** suit un cycle : demande, évaluation du risque, autorisation, mise en œuvre, **retour arrière prévu**, clôture.
- On **teste** avant, on **prévient** les utilisateurs, on **garde une trace**.
- La **veille** est organisée : sources choisies, fréquence fixe, notes **datées**.
- Une veille sert à **décider** (mise à jour, alerte de sécurité), pas à accumuler des liens.

