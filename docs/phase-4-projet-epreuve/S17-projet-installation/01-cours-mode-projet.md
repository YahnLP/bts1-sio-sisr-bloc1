# Cours – Travailler en mode projet

*BTS SIO SISR 1re année – Bloc 1 – S17 – à lire avant le [projet](02-projet.md)*

> [!NOTE] Ce que tu dois savoir déjà
> - **Prérequis :** wiki d'équipe et Git (S16), GLPI et OCS (S05, S06).
> - **Expliqués dans ce cours :** projet, parties prenantes, rôles, livrable, jalon, planning, risque, compte rendu, bilan.

## À la fin de ce cours, tu sauras

- [ ] dire ce qui distingue un **projet** d'une tâche courante ;
- [ ] **découper** un projet en tâches avec des **livrables** et des **jalons** ;
- [ ] **répartir** les rôles dans une équipe de trois ;
- [ ] tenir un **planning** et un **compte rendu** de réunion ;
- [ ] **présenter ta contribution personnelle** dans un travail d'équipe.

---

## 1. Qu'est-ce qu'un projet ?

Un **projet** est un travail **unique**, avec un **objectif**, un **début et une fin**, des **ressources limitées** (temps, personnes, matériel) et un **résultat attendu** (le livrable). Une tâche courante (traiter un ticket) se répète ; un projet (mettre en place l'outil de tickets) ne se fait qu'une fois.

| Critère | Tâche courante | Projet |
|---|---|---|
| Fréquence | Répétée | Unique |
| Durée | Courte, connue | Plus longue, à planifier |
| Équipe | Souvent une personne | Plusieurs personnes, des rôles |
| Résultat | Un incident résolu | Un **livrable** nouveau |

## 2. Les composantes d'un projet

| Élément | Question à laquelle il répond | Exemple (projet de support) |
|---|---|---|
| **Besoin** | Pourquoi ? | L'entreprise n'a ni outil de tickets ni inventaire |
| **Objectifs** | Quoi, mesurable ? | Un GLPI avec OCS synchronisé et un catalogue de services |
| **Périmètre** | Jusqu'où ? | Trois serveurs virtuels et un poste de test |
| **Parties prenantes** | Qui est concerné ? | Direction, utilisateurs, équipe projet |
| **Livrables** | Que remet-on ? | Un service fonctionnel, un guide utilisateur, un dossier |
| **Contraintes** | Quelles limites ? | Quatre séances, matériel de la salle |
| **Risques** | Qu'est-ce qui peut mal tourner ? | Panne de VM, retard sur l'installation |

## 3. Les rôles dans l'équipe

Dans une équipe de trois, on attribue des **rôles** qui **tournent** d'un jalon à l'autre :

| Rôle | Responsabilité |
|---|---|
| **Pilote** | Garde le planning, anime les points d'avancement, rend compte à l'enseignant |
| **Référent technique** | Choisit les solutions, répond aux questions techniques de l'équipe |
| **Responsable documentation** | Tient le wiki à jour, archive les preuves, rédige les comptes rendus |

> [!NOTE]
> **Tout le monde manipule.** Les rôles organisent le travail ; ils ne dispensent personne de la technique. Chacun doit pouvoir **expliquer** ce que l'équipe a fait.

## 4. Découper et planifier

**Découper** : on part du livrable final et on le divise en **tâches**, chacune avec un **responsable**, une **durée estimée** et un **livrable**.

| Tâche | Responsable | Durée | Livrable | Dépend de |
|---|---|---|---|---|
| T1 Installer GLPI | | 45 min | GLPI accessible | — |
| T2 Installer OCS | | 45 min | Console OCS | — |
| T3 Synchroniser OCS et GLPI | | 30 min | Parc visible dans GLPI | T1, T2 |
| T4 Créer le catalogue | | 45 min | Catalogue publié | T1 |

Un **jalon** est un point de contrôle : « à la fin de la première heure, GLPI et OCS sont installés ». Le jalon rend l'avancement **vérifiable** et permet de réagir tôt.

<figure class="graphe diagramme"><svg viewBox="0 0 745 270" style="max-width:745px" role="img" aria-label="Diagramme de Gantt" xmlns="http://www.w3.org/2000/svg">
<line class="seq-life" x1="185" y1="34" x2="185" y2="258"/><text x="185" y="24" text-anchor="middle" class="gt-axis">00:30</text>
<line class="seq-life" x1="320" y1="34" x2="320" y2="258"/><text x="320" y="24" text-anchor="middle" class="gt-axis">01:00</text>
<line class="seq-life" x1="455" y1="34" x2="455" y2="258"/><text x="455" y="24" text-anchor="middle" class="gt-axis">01:30</text>
<line class="seq-life" x1="590" y1="34" x2="590" y2="258"/><text x="590" y="24" text-anchor="middle" class="gt-axis">02:00</text>
<line class="seq-life" x1="725" y1="34" x2="725" y2="258"/><text x="725" y="24" text-anchor="middle" class="gt-axis">02:30</text>
<text x="173.4" y="72" text-anchor="end">Installer GLPI</text>
<rect class="gt-bar" x="185" y="54" width="202" height="28" rx="6"/><text x="287" y="73" text-anchor="middle" class="gt-dur">45 min</text>
<text x="173.4" y="112" text-anchor="end">Installer OCS</text>
<rect class="gt-bar" x="185" y="94" width="202" height="28" rx="6"/><text x="287" y="113" text-anchor="middle" class="gt-dur">45 min</text>
<text x="173.4" y="152" text-anchor="end">Synchroniser</text>
<rect class="gt-bar" x="388" y="134" width="135" height="28" rx="6"/><text x="455" y="153" text-anchor="middle" class="gt-dur">30 min</text>
<text x="173.4" y="192" text-anchor="end">Créer le catalogue</text>
<rect class="gt-bar" x="523" y="174" width="202" height="28" rx="6"/><text x="624" y="193" text-anchor="middle" class="gt-dur">45 min</text>
<text x="173.4" y="232" text-anchor="end">Point d'étape (jalon)</text>
<polygon class="gt-ms" points="725,214 739,228 725,242 711,228"/>
</svg></figure>

## 5. Suivre, rendre compte, tirer le bilan

| Moment | Document | Contenu |
|---|---|---|
| Pendant | **Compte rendu** de point d'avancement (5 lignes) | Fait, reste à faire, blocages, décisions |
| Fin de chaque jalon | **Mise à jour du planning** | Écart entre prévu et réel |
| À la fin | **Bilan** | Objectifs atteints ? Écarts et causes ? Ce qu'on referait autrement |

**Je vérifie.** Une équipe a prévu 45 minutes pour installer GLPI et y a passé une heure et demie. Que doit-elle faire, **sans attendre la fin** ?

<details markdown="1">
<summary>Voir la réponse</summary>

**Le signaler au pilote**, **mettre à jour le planning** et **réagir** : demander de l'aide, simplifier une tâche (réduire le périmètre) ou réaffecter des tâches. On note aussi **la cause** du retard (par exemple une erreur de droits) : elle alimente le bilan et le retour d'expérience.

</details>

## 6. Montrer sa contribution personnelle

À l'épreuve E5, le jury veut savoir **ce que tu as fait** dans l'équipe. Dès maintenant :

- note dans un **journal personnel** : date, tâche, durée, problème rencontré, solution ;
- garde **tes** captures et **tes** commandes (nom de la machine, date) ;
- dans la fiche de réalisation, écris **« j'ai »**, et précise **ton rôle** et **ce que les autres ont fait**.

## À retenir

- Un projet est **unique**, borné, avec des **livrables** et des **jalons**.
- Les **rôles** (pilote, référent technique, documentation) **tournent** : tout le monde manipule.
- Un **planning** mis à jour et un **compte rendu** régulier permettent de **réagir tôt**.
- Pour l'épreuve : **ta contribution personnelle** doit être **visible** dans ton journal et dans tes preuves.
