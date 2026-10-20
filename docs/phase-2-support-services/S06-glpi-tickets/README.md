# S06 – Gérer les tickets : InfraLab, puis GLPI

| Élément | Détail |
|---|---|
| **Niveau** | BTS SIO option SISR, 1re année – bloc 1 |
| **Séance** | S06 (séance 6 sur 19) – Phase 2 |
| **Durée** | 4 heures |
| **Parcours** | **Cœur** – Outil de tickets (B1.2) : réutilisé dans S17 et S18. Voir le [parcours cœur et complément](../../ressources/parcours-coeur-complement.md). |
| **Prérequis** | S03 (tickets), S05 (OCS). |
| **Matériel** | Navigateur pour le simulateur [InfraLab](https://yahnlp.github.io/InfraLab/) (aucune installation) et le fichier de la séance ; serveur GLPI (fourni ou installé par un script), postes |
| **Compétences travaillées** | B1.2 · B1.1 · B1.5 (voir [le référentiel](../../ressources/referentiel.md)) |

> [!NOTE]
> **Question qui guide la séance :** *« Comment suivre chaque demande du dépôt à la clôture, et prouver que le service a été rendu ? »*

## Objectifs

À la fin de la séance, l'étudiant est capable de :

1. **Qualifier** un ticket (catégorie, impact, urgence, priorité) et le **lier** à l'équipement en cause ;
2. **Distinguer** « résolu » et « clos » et **rédiger** une solution exploitable ;
3. **Décrire** l'architecture de GLPI et ses profils d'utilisateurs ;
4. **Créer**, **affecter**, **escalader** et **clôturer** un ticket dans GLPI ;
5. **Lire** un tableau de bord de suivi et **expliquer** le lien entre inventaire et tickets ;
6. **Installer** GLPI à partir d'un script (annexe).

## Contenu de la séance

| Document | Rôle |
|---|---|
| [Cours – Gérer les tickets : principes, InfraLab, GLPI](01-cours.md) | Cours |
| [TP – Gérer des tickets de bout en bout : InfraLab, puis GLPI](02-tp.md) | TP |
| [Aide-mémoire – Gérer les tickets](03-aide-memoire.md) | Aide-mémoire |
| [Fichier InfraLab : une matinée au service desk](../../ressources/infralab/s06-service-desk.infralab.json) | Fichier de départ du simulateur |
| [Annexe – Installer GLPI sur Debian ou Ubuntu](annexe-installation-glpi.md) | Annexe |
| [Annexe – Fiche de navigation rapide dans GLPI](annexe-navigation-glpi.md) | Annexe |

## Déroulé conseillé (4 h)

| Durée | Activité | Format |
|---|---|---|
| 0 h 00 – 0 h 15 | **Rappel d'amorçage** (S03, S05) | Oral |
| 0 h 15 – 0 h 45 | **Cours** : ce qu'un outil de tickets garantit, correspondance InfraLab et GLPI | Cours et questions |
| 0 h 45 – 2 h 35 | **TP, partie 1, InfraLab** : TP 11 et 12, puis une matinée au service desk | Individuel ou binôme |
| 2 h 35 – 3 h 35 | **TP, partie 2, GLPI** : un incident jusqu'à l'escalade, une demande jusqu'à la clôture, statistiques | Binôme |
| 3 h 35 – 4 h 00 | **Bilan de compétences** | Individuel |

## Retour en entreprise

Si ta situation le permet : **observer** comment ton entreprise traite le sujet de la séance, **documenter** en une demi-page l'écart avec le TP, ou **réaliser** une partie après accord de ton tuteur. Voir [Transfert en entreprise](../../ressources/transfert-entreprise.md). Le travail réalisé peut alimenter une [fiche de réalisation](../../ressources/fiche-realisation-professionnelle.md).

## Évaluation

- Compte rendu avec captures d'écran datées, tableaux du TP et explications, nommé `RENDU-B1-S06-NOM.pdf`, accompagné du rapport InfraLab des TP 11 et 12 et du fichier `.infralab.json` de la matinée au service desk.
- Bilan de compétences rempli à la fin de la séance (individuel).

<details markdown="1">
<summary>Notes pour l'enseignant</summary>

- **Compétences :** codes relus sur le référentiel (page [Référentiel](../../ressources/referentiel.md)).
- Les versions de GLPI changent vite : vérifier le script d'installation et l'interface avant la séance.
- Le fichier de la matinée est généré par `tools/infralab/gen-course-files.ts`. Il contient sept tickets « Nouveau », et l'imprimante IMP-COMPTA est réellement éteinte (à rallumer dans la vue Infrastructure).
- **Corrigé indicatif de la qualification** (matrice d'InfraLab, d'autres choix argumentés sont recevables) : imprimante de la comptabilité, Matériel / Imprimante, impact élevé, urgence élevée, P1, équipement IMP-COMPTA ; VPN d'Éric, impact moyen et urgence élevée, P2 ; session d'Alice (compte et accès / mot de passe), impact faible et urgence élevée (elle est bloquée), P3 ; imprimante de Chloé, Excel de Chloé, accès au dossier RH et nouveau poste : impact faible, urgence faible ou moyenne, P4. Ordre de traitement : P1, P2, P3, puis les P4.
- Le TP 50 « Un incident de bout en bout » est une version auto-corrigée d'une partie de la matinée ; il est disponible dans InfraLab une fois fusionnée la PR YahnLP/InfraLab #1.
- Le TP 42 « Une matinée au service desk » du catalogue (tickets qui arrivent au fil du temps) est un bon prolongement.

</details>
