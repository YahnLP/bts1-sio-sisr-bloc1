# S02 – Inventorier un poste de travail

| Élément | Détail |
|---|---|
| **Niveau** | BTS SIO option SISR, 1re année – bloc 1 |
| **Séance** | S02 (séance 2 sur 19) – Phase 1 |
| **Durée** | 4 heures |
| **Parcours** | **Cœur** – Inventaire (B1.1) : prérequis de S05, S06, S11. Voir le [parcours cœur et complément](../../ressources/parcours-coeur-complement.md). |
| **Prérequis** | S01. |
| **Matériel** | Poste Windows (VM ou physique), VM Debian (option) |
| **Compétences travaillées** | B1.1 · B1.2 (amorcée) (voir [le référentiel](../../ressources/referentiel.md)) |

> [!NOTE]
> **Question qui guide la séance :** *« Combien de postes avons-nous, avec quoi dedans, et comment le retrouver quand un utilisateur appelle ? »*

## Objectifs

À la fin de la séance, l'étudiant est capable de :

1. **Définir** la gestion de parc et **justifier** l'inventaire ;
2. **Distinguer** matériel, logiciel et configuration réseau d'un poste ;
3. **Collecter** les informations d'un poste avec les outils Windows (et Linux) ;
4. **Remplir** une fiche technique et **relire** les licences logicielles ;
5. **Citer** les bonnes pratiques de documentation d'un inventaire.

## Contenu de la séance

| Document | Rôle |
|---|---|
| [Cours – La gestion de parc et l'inventaire d'un poste](01-cours.md) | Cours |
| [TP – Inventaire d'un poste de travail](02-tp.md) | TP |
| [Aide-mémoire – Inventaire d'un poste](03-aide-memoire.md) | Aide-mémoire |
| [Annexe – Exemple de fiche technique complète](annexe-exemple-fiche.md) | Annexe |
| [Annexe – Fiche technique d'un poste (à remplir)](annexe-fiche-technique.md) | Annexe |

## Déroulé conseillé (4 h)

| Durée | Activité | Format |
|---|---|---|
| 0 h 00 – 0 h 15 | **Accroche** : un poste tombe en panne, que sait-on de lui ? | Oral |
| 0 h 15 – 1 h 15 | **Cours** : gestion de parc, ITIL « actifs », fiche technique, commandes de collecte | Cours et questions |
| 1 h 15 – 3 h 30 | **TP** : inventaire d'un poste et fiche technique | Binôme |
| 3 h 30 – 4 h 00 | **Bilan de compétences** | Individuel |

## Retour en entreprise

Si ta situation le permet : **observer** comment ton entreprise traite le sujet de la séance, **documenter** en une demi-page l'écart avec le TP, ou **réaliser** une partie après accord de ton tuteur. Voir [Transfert en entreprise](../../ressources/transfert-entreprise.md). Le travail réalisé peut alimenter une [fiche de réalisation](../../ressources/fiche-realisation-professionnelle.md).

## Évaluation

- Compte rendu avec captures d'écran datées, schéma et explications, nommé `RENDU-B1-S02-NOM.pdf`.
- Bilan de compétences rempli à la fin de la séance (individuel).

<details markdown="1">
<summary>Notes pour l'enseignant</summary>

- **Compétences :** codes relus sur le référentiel (page [Référentiel](../../ressources/referentiel.md)) ; le choix des compétences pour cette séance est une proposition à valider.
- Les commandes de collecte utilisent PowerShell (`Get-CimInstance`) : l’ancien outil WMIC est obsolète.

</details>
