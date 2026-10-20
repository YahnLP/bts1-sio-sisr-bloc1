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

<figure class="graphe diagramme"><svg viewBox="0 0 800 250" style="max-width:800px" role="img" aria-label="Processus de gestion d&#x27;un changement, de la demande à la clôture" xmlns="http://www.w3.org/2000/svg">
<rect x="10" y="20" width="180" height="80" rx="8" class="dg-box"/>
<text x="100.0" y="56.0" text-anchor="middle" class="dg-t">1. Demande</text>
<text x="100.0" y="74.0" text-anchor="middle" class="dg-s">RFC du demandeur</text>
<line x1="190" y1="60" x2="201.0" y2="60.0" class="dg-line"/>
<polygon points="210,60 201.0,55.0 201.0,65.0" class="dg-ah"/>
<rect x="210" y="20" width="180" height="80" rx="8" class="dg-box"/>
<text x="300.0" y="56.0" text-anchor="middle" class="dg-t">2. Évaluation</text>
<text x="300.0" y="74.0" text-anchor="middle" class="dg-s">faisabilité, impact, risques</text>
<line x1="390" y1="60" x2="401.0" y2="60.0" class="dg-line"/>
<polygon points="410,60 401.0,55.0 401.0,65.0" class="dg-ah"/>
<rect x="410" y="20" width="180" height="80" rx="8" class="dg-box"/>
<text x="500.0" y="56.0" text-anchor="middle" class="dg-t">3. Décision</text>
<text x="500.0" y="74.0" text-anchor="middle" class="dg-s">approbation ou rejet (CAB)</text>
<line x1="590" y1="60" x2="601.0" y2="60.0" class="dg-line"/>
<polygon points="610,60 601.0,55.0 601.0,65.0" class="dg-ah"/>
<rect x="610" y="20" width="180" height="80" rx="8" class="dg-box"/>
<text x="700.0" y="56.0" text-anchor="middle" class="dg-t">4. Planification</text>
<text x="700.0" y="74.0" text-anchor="middle" class="dg-s">fenêtre, runbook, rollback</text>
<rect x="110" y="140" width="180" height="80" rx="8" class="dg-box"/>
<text x="200.0" y="176.0" text-anchor="middle" class="dg-t">5. Implémentation</text>
<text x="200.0" y="194.0" text-anchor="middle" class="dg-s">exécution documentée</text>
<line x1="290" y1="180" x2="301.0" y2="180.0" class="dg-line"/>
<polygon points="310,180 301.0,175.0 301.0,185.0" class="dg-ah"/>
<rect x="310" y="140" width="180" height="80" rx="8" class="dg-box"/>
<text x="400.0" y="176.0" text-anchor="middle" class="dg-t">6. Validation</text>
<text x="400.0" y="194.0" text-anchor="middle" class="dg-s">objectifs atteints ?</text>
<line x1="490" y1="180" x2="501.0" y2="180.0" class="dg-line"/>
<polygon points="510,180 501.0,175.0 501.0,185.0" class="dg-ah"/>
<rect x="510" y="140" width="180" height="80" rx="8" class="dg-ok"/>
<text x="600.0" y="176.0" text-anchor="middle" class="dg-t">7. Clôture</text>
<text x="600.0" y="194.0" text-anchor="middle" class="dg-s">CMDB, archivage de la RFC</text>
<path d="M700 100 L700 120 L200 120 L200 140" class="dg-line"/>
<line x1="200" y1="128" x2="200.0" y2="131.0" class="dg-line"/>
<polygon points="200,140 205.0,131.0 195.0,131.0" class="dg-ah"/>
</svg>
</figure>

- **Évaluation technique** : le Change Manager évalue faisabilité technique, impact sur les services, ressources nécessaires et risques.
- **Approbation ou rejet** : le CAB décide (approuvé, rejeté ou reporté).
- **Planification** : date de la fenêtre de maintenance, runbook (ordre des tâches), plan de rollback, communication aux utilisateurs.
- **Implémentation** : exécution du changement, documentation en temps réel.
- **Validation** : vérifier que le changement a atteint ses objectifs.
- **Clôture** : mise à jour de la CMDB, archivage de la RFC.

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

<figure class="graphe diagramme"><svg viewBox="0 0 640 300" style="max-width:640px" role="img" aria-label="Matrice de risque d&#x27;un changement : impact selon la probabilité d&#x27;échec" xmlns="http://www.w3.org/2000/svg">
<text x="360" y="20" text-anchor="middle" class="dg-t">Probabilité d&#x27;échec</text>
<text x="230" y="46" text-anchor="middle" class="dg-s">Faible</text>
<text x="370" y="46" text-anchor="middle" class="dg-s">Moyenne</text>
<text x="510" y="46" text-anchor="middle" class="dg-s">Élevée</text>
<text x="40" y="60" text-anchor="start" class="dg-t">Impact</text>
<text x="150" y="110" text-anchor="end" class="dg-s">Faible</text>
<rect x="160" y="70" width="130" height="60" rx="6" class="dg-ok"/>
<text x="225" y="106" text-anchor="middle" class="dg-t">FAIBLE</text>
<rect x="300" y="70" width="130" height="60" rx="6" class="dg-ok"/>
<text x="365" y="106" text-anchor="middle" class="dg-t">FAIBLE</text>
<rect x="440" y="70" width="130" height="60" rx="6" class="dg-warn"/>
<text x="505" y="106" text-anchor="middle" class="dg-t">MOYEN</text>
<text x="150" y="180" text-anchor="end" class="dg-s">Moyen</text>
<rect x="160" y="140" width="130" height="60" rx="6" class="dg-ok"/>
<text x="225" y="176" text-anchor="middle" class="dg-t">FAIBLE</text>
<rect x="300" y="140" width="130" height="60" rx="6" class="dg-warn"/>
<text x="365" y="176" text-anchor="middle" class="dg-t">MOYEN</text>
<rect x="440" y="140" width="130" height="60" rx="6" class="dg-bad"/>
<text x="505" y="176" text-anchor="middle" class="dg-t">ÉLEVÉ</text>
<text x="150" y="250" text-anchor="end" class="dg-s">Élevé</text>
<rect x="160" y="210" width="130" height="60" rx="6" class="dg-warn"/>
<text x="225" y="246" text-anchor="middle" class="dg-t">MOYEN</text>
<rect x="300" y="210" width="130" height="60" rx="6" class="dg-bad"/>
<text x="365" y="246" text-anchor="middle" class="dg-t">ÉLEVÉ</text>
<rect x="440" y="210" width="130" height="60" rx="6" class="dg-dark"/>
<text x="505" y="246" text-anchor="middle" class="dg-w">CRITIQUE</text>
</svg>
</figure>

**Actions selon le risque :**

- **FAIBLE** : approbation simplifiée.
- **MOYEN** : approbation du CAB et plan de rollback.
- **ÉLEVÉ** : CAB et tests préalables.
- **CRITIQUE** : direction, simulation et équipe en astreinte (standby).

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

