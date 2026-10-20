# Cours – Travailler en mode projet

*BTS SIO SISR 1re année – Bloc 1 – S17 – à lire avant le [projet](02-projet.md)*

> [!NOTE] Ce que tu dois savoir déjà
> - **Prérequis :** wiki d'équipe et Git (S16), GLPI et OCS (S05, S06).
> - **Expliqués dans ce cours :** projet, parties prenantes, rôles, livrable, jalon, planning, risque, compte rendu, bilan, approche prédictive et agile, outil de projet, tests d'intégration et d'acceptation.

## À la fin de ce cours, tu sauras

- [ ] dire ce qui distingue un **projet** d'une tâche courante ;
- [ ] **découper** un projet en tâches avec des **livrables** et des **jalons** ;
- [ ] **répartir** les rôles dans une équipe de trois ;
- [ ] tenir un **planning** et un **compte rendu** de réunion ;
- [ ] **choisir** entre une approche prédictive et une approche agile ;
- [ ] **paramétrer** et **utiliser** un outil de gestion de projet ;
- [ ] **rédiger** un plan de tests (intégration, acceptation) et un rapport de tests ;
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

## 6. Prédictif ou agile ?

Deux grandes façons d'organiser un projet.

| **Approche** | **Principe** | **Adaptée quand…** | **Limite** |
|---|---|---|---|
| **Prédictive** (séquentielle, « en cascade ») | On planifie **tout au départ** ; les étapes s'enchaînent : besoin, conception, réalisation, tests, livraison | Le besoin est connu et stable, la date et le livrable sont fixés | Un changement tardif coûte cher |
| **Agile** | On livre **par petites parties** (itérations courtes, souvent de 1 à 4 semaines) et on **réajuste** selon les retours de l'utilisateur | Le besoin est flou ou évolue | Demande un utilisateur disponible et une équipe organisée |

Deux méthodes agiles courantes :

- **Kanban** : un tableau en colonnes (À faire, En cours, Fait) et une **limite de tâches en cours** pour éviter de tout commencer sans rien finir ;
- **Scrum** : des itérations (les *sprints*), une liste priorisée des besoins (le *backlog*) et une revue en fin d'itération.

**Et notre projet ?** Le besoin est connu, quatre séances sont fixées, la livraison est datée : l'approche est **prédictive** (tâches, jalons, planning). On y ajoute un **tableau Kanban** pour suivre l'avancement au quotidien : en pratique, beaucoup de projets **mélangent** les deux approches.

## 7. Un outil de gestion de projet

Un outil de projet remplace le tableau papier et garde la **trace** de l'avancement.

| **Fonction** | **À quoi elle sert** |
|---|---|
| Projet et tâches | Découper, attribuer un responsable, estimer une durée |
| État et avancement | Nouveau, en cours, terminé ; pourcentage réalisé |
| Dépendances et jalons | Voir ce qui bloque quoi |
| Diagramme de Gantt | Visualiser le planning |
| Tableau Kanban | Suivre les tâches par colonnes |
| Équipe et droits | Dire qui voit et modifie quoi |

**Paramétrage de base :** définir les états possibles, les types de tâche, les membres de l'équipe et leurs droits. GLPI propose un module « Projets » avec tâches, Gantt et Kanban (dans le menu Outils ; les écrans varient **selon la version**, à vérifier sur ton installation). Des outils libres existent aussi (OpenProject, par exemple) ; le choix de l'outil de l'organisation est à valider avec elle.

## 8. Tester avant de livrer : intégration et acceptation

Un service qui s'installe sans erreur n'est pas encore un service **livrable**. On teste à trois niveaux :

| **Test** | **Question** | **Exemple (projet SimIO)** |
|---|---|---|
| **Test de fonctionnement** | Le composant marche-t-il seul ? | La page de connexion de GLPI s'affiche |
| **Test d'intégration** | Les composants marchent-ils **ensemble** ? | Le poste équipé de l'agent apparaît dans GLPI après synchronisation avec OCS |
| **Test d'acceptation** (recette) | Le service répond-il au **besoin** ? Le client l'accepte-t-il ? | Un utilisateur ouvre un ticket depuis le catalogue et en suit le traitement |

### 8.1 Le plan de tests

On écrit les tests **avant** de les exécuter, avec le **résultat attendu** :

| **N°** | **Objectif** | **Étapes** | **Résultat attendu** | **Résultat obtenu** | **Statut** | **Preuve** |
|---|---|---|---|---|---|---|
| 1 | Synchronisation OCS vers GLPI | Lancer la synchronisation, ouvrir la liste des ordinateurs | Le poste de test apparaît | | | Capture |
| 2 | Création d'un ticket | Se connecter comme utilisateur, ouvrir un ticket de la catégorie « Messagerie » | Le ticket est enregistré avec la bonne catégorie | | | Capture |

### 8.2 Le rapport de tests

| **Rubrique** | **Contenu** |
|---|---|
| Synthèse | Nombre de tests, conformes, non conformes |
| Anomalies | Description, cause, correction, nouveau test |
| Décision | Service accepté, accepté avec réserves, refusé |
| Signature | Équipe projet et client (l'enseignant) |

> [!NOTE]
> **Exemple chiffré.** Sur 8 tests exécutés, 7 sont conformes et 1 non conforme : le taux de conformité est 7 / 8 = 87,5 %. L'anomalie est corrigée puis le test est **rejoué** : le rapport garde la trace des deux passages.

## 9. Montrer sa contribution personnelle

À l'épreuve E5, le jury veut savoir **ce que tu as fait** dans l'équipe. Dès maintenant :

- note dans un **journal personnel** : date, tâche, durée, problème rencontré, solution ;
- garde **tes** captures et **tes** commandes (nom de la machine, date) ;
- dans la fiche de réalisation, écris **« j'ai »**, et précise **ton rôle** et **ce que les autres ont fait**.

## À retenir

- Un projet est **unique**, borné, avec des **livrables** et des **jalons**.
- Les **rôles** (pilote, référent technique, documentation) **tournent** : tout le monde manipule.
- Un **planning** mis à jour et un **compte rendu** régulier permettent de **réagir tôt**.
- Une approche **prédictive** planifie tout au départ ; une approche **agile** livre par itérations et réajuste. Beaucoup de projets mélangent les deux.
- Un **outil de projet** garde la trace des tâches, des états et de l'avancement.
- On teste à trois niveaux : fonctionnement, **intégration**, **acceptation** ; on écrit le **résultat attendu avant** d'exécuter, et on rédige un **rapport de tests**.
- Pour l'épreuve : **ta contribution personnelle** doit être **visible** dans ton journal et dans tes preuves.
