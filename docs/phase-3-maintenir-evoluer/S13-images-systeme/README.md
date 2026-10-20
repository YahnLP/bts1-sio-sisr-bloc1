# S13 – Déployer des postes avec des images système

| Élément | Détail |
|---|---|
| **Niveau** | BTS SIO option SISR, 1re année – bloc 1 |
| **Séance** | S13 (séance 13 sur 19) – Phase 3 |
| **Durée** | 4 heures |
| **Parcours** | **Complément** – Déploiement par images : technique, sans séance dépendante. Voir le [parcours cœur et complément](../../ressources/parcours-coeur-complement.md). |
| **Prérequis** | S02, S04, S05. |
| **Matériel** | Clonezilla Live, deux machines virtuelles Windows, ISO ; simulateur InfraLab (navigateur, facultatif) |
| **Compétences travaillées** | B1.1 · B1.5 · B1.2 (voir [le référentiel](../../ressources/referentiel.md)) |

> [!NOTE]
> **Question qui guide la séance :** *« Trente postes à installer le lundi matin : comment ne pas tout refaire trente fois ? »*

## Objectifs

À la fin de la séance, l'étudiant est capable de :

1. **Distinguer** installation, clonage et image système ;
2. **Préparer** une machine de référence (Sysprep, nettoyage) ;
3. **Capturer** et **déployer** une image avec Clonezilla ;
4. **Vérifier** le déploiement (SID, nom, tests) ;
5. **Situer** WDS et MDT comme solutions en entreprise.

## Contenu de la séance

| Document | Rôle |
|---|---|
| [Cours – Images système, clonage et déploiement](01-cours.md) | Cours |
| [TP – Capturer et déployer une image système](02-tp.md) | TP |
| [Aide-mémoire – Images système](03-aide-memoire.md) | Aide-mémoire |
| [Annexe – Checklist Sysprep](annexe-checklist-sysprep.md) | Annexe |
| [Annexe – Dépannage de Clonezilla](annexe-depannage-clonezilla.md) | Annexe |

## Déroulé conseillé (4 h)

| Durée | Activité | Format |
|---|---|---|
| 0 h 00 – 0 h 15 | **Accroche** : l'installation à la main d'un poste prend combien de temps ? | Oral |
| 0 h 15 – 1 h 15 | **Cours** : image, machine de référence, Sysprep, outils, workflow | Cours et questions |
| 1 h 15 – 3 h 30 | **TP** : capturer et déployer une image | Binôme |
| 3 h 30 – 4 h 00 | **Bilan de compétences** | Individuel |

## Retour en entreprise

Si ta situation le permet : **observer** comment ton entreprise traite le sujet de la séance, **documenter** en une demi-page l'écart avec le TP, ou **réaliser** une partie après accord de ton tuteur. Voir [Transfert en entreprise](../../ressources/transfert-entreprise.md). Le travail réalisé peut alimenter une [fiche de réalisation](../../ressources/fiche-realisation-professionnelle.md).

## Évaluation

- Compte rendu avec captures d'écran datées, schéma et explications, nommé `RENDU-B1-S13-NOM.pdf`.
- Bilan de compétences rempli à la fin de la séance (individuel).

<details markdown="1">
<summary>Notes pour l'enseignant</summary>

- **Compétences :** codes relus sur le référentiel (page [Référentiel](../../ressources/referentiel.md)).
- Prévoir des machines virtuelles avec disque et démarrage réseau ou ISO Clonezilla ; le TP est long : privilégier la préparation avant la séance.

</details>
