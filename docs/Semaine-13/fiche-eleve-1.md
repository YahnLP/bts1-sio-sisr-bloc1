# 📚 FICHE DE COURS ÉLÈVE
## "Gestion des Changements · Change Management ITIL"

*Version 1.0 — BTS SIO SISR — Année 1 — Semaine 13*

---

## 🎯 Compétences Travaillées

| **Code** | **Compétence** |
|----------|---------------|
| **B1.2** | Exploiter des référentiels ITIL (Change Management) |
| **B3.3** | Documenter et formaliser un changement |

---

## PARTIE I — Définition et Périmètre

### I.A. Qu'est-ce qu'un Changement ?

En ITIL 4, un **changement** est défini comme :

> *"L'ajout, la modification ou la suppression de tout élément susceptible d'avoir un effet sur les services IT."*

```
   EXEMPLES DE CHANGEMENTS
   ─────────────────────────────────────────────────────────────
   ✅ Ajout d'un serveur
   ✅ Mise à jour OS (Windows Server 2019 → 2022)
   ✅ Modification firewall (nouvelle règle)
   ✅ Ajout d'un VLAN
   ✅ Migration application vers le cloud

   ❌ PAS DES CHANGEMENTS
   ─────────────────────────────────────────────────────────────
   ❌ Réinitialisation mot de passe (demande standard)
   ❌ Remplacement disque défaillant à l'identique (incident)
   ❌ Redémarrage service bloqué (incident)
```

---

### I.B. Changement vs Incident vs Demande

| **Type** | **Déclencheur** | **Objectif** | **Validation** |
|---|---|---|---|
| **Incident** | Interruption non planifiée | Restaurer le service | Technicien N1/N2 |
| **Demande de service** | Besoin utilisateur standard | Fournir un service | Automatisé ou N1 |
| **Changement** | Évolution planifiée | Modifier l'infrastructure | **CAB** |

---

## PARTIE II — Le Cycle de Vie d'un Changement

### II.A. Les 7 Étapes

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

---

### II.B. Le CAB (Change Advisory Board)

Le **CAB** est un comité qui évalue et approuve les changements.

| **Membre** | **Rôle** | **Apporte** |
|---|---|---|
| **Change Manager** | Président du CAB | Vue d'ensemble |
| **Responsable DSI** | Valide l'alignement stratégique | Budget, priorités |
| **Technicien expert** | Évalue la faisabilité | Compétence technique |
| **Responsable métier** | Représente les utilisateurs | Impact métier |
| **Responsable sécurité** | Évalue les risques | Conformité |

---

### II.C. Analyse de Risque

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

---

## PARTIE III — Les 3 Types de Changements

### III.A. Changement Standard

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

---

### III.B. Changement Normal

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

---

### III.C. Changement Urgent (Emergency)

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

---

## PARTIE IV — La RFC (Request For Change)

### IV.A. Structure Complète

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

## V. Vocabulaire Clé

| **Terme** | **Définition** |
|-----------|---------------|
| **Change** | Modification d'un élément de l'infrastructure IT |
| **RFC** | Request For Change — demande formelle de changement |
| **CAB** | Change Advisory Board — comité décisionnel |
| **E-CAB** | Emergency CAB — CAB restreint pour urgences |
| **Change Manager** | Responsable du processus de gestion des changements |
| **Runbook** | Document détaillant l'implémentation étape par étape |
| **Rollback** | Retour à l'état antérieur en cas d'échec |
| **Baseline** | État de référence avant changement |

