# S11 – Gérer les configurations et les sauvegarder

| Élément | Détail |
|---|---|
| **Niveau** | BTS SIO option SISR, 1re année – bloc 1 |
| **Séance** | S11 (séance 11 sur 19) – Phase 3 |
| **Durée** | 4 heures |
| **Parcours** | **Cœur** – Configurations et sauvegarde (B1.1, B1.5). Voir le [parcours cœur et complément](../../ressources/parcours-coeur-complement.md). |
| **Prérequis** | S02 (inventaire), S06 (CMDB et actifs). |
| **Matériel** | Simulateur ou Packet Tracer (une config Cisco), VM Debian avec Git |
| **Compétences travaillées** | B1.1 · B1.5 · B1.2 (voir [le référentiel](../../ressources/referentiel.md)) |

> [!NOTE]
> **Question qui guide la séance :** *« Un switch est remplacé, une mise à jour tourne mal : comment revenir à la configuration d'hier ? »*

## Objectifs

À la fin de la séance, l'étudiant est capable de :

1. **Définir** la gestion des configurations, la CMDB et la ligne de base ;
2. **Nommer** et **horodater** des fichiers de configuration ;
3. **Distinguer** configuration courante et configuration de démarrage d'un équipement Cisco ;
4. **Comparer** deux versions d'une configuration ;
5. **Automatiser** une sauvegarde simple et l'**essayer** (restauration) ;
6. **Versionner** une configuration avec Git (aperçu).

## Contenu de la séance

| Document | Rôle |
|---|---|
| [Cours – Gestion des configurations et versioning](01-cours.md) | Cours |
| [TP – Sauvegarder, versionner et restaurer une configuration](02-tp.md) | TP |
| [Aide-mémoire – Configurations et sauvegarde](03-aide-memoire.md) | Aide-mémoire |
| [Annexe – Modèle de journal des modifications](annexe-changelog.md) | Annexe |
| [Annexe – Scripts de sauvegarde automatique (Bash)](annexe-script-sauvegarde.md) | Annexe |

## Déroulé conseillé (4 h)

| Durée | Activité | Format |
|---|---|---|
| 0 h 00 – 0 h 15 | **Accroche** : « qui a modifié ce switch ? » | Oral |
| 0 h 15 – 1 h 30 | **Cours** : configurations, versioning, Cisco running et startup, Git | Cours et questions |
| 1 h 30 – 3 h 30 | **TP** : sauvegarder, versionner et restaurer | Binôme |
| 3 h 30 – 4 h 00 | **Bilan de compétences** | Individuel |

## Retour en entreprise

Si ta situation le permet : **observer** comment ton entreprise traite le sujet de la séance, **documenter** en une demi-page l'écart avec le TP, ou **réaliser** une partie après accord de ton tuteur. Voir [Transfert en entreprise](../../ressources/transfert-entreprise.md). Le travail réalisé peut alimenter une [fiche de réalisation](../../ressources/fiche-realisation-professionnelle.md).

## Évaluation

- Compte rendu avec captures d'écran datées, schéma et explications, nommé `RENDU-B1-S11-NOM.pdf`.
- Bilan de compétences rempli à la fin de la séance (individuel).

<details markdown="1">
<summary>Notes pour l'enseignant</summary>

- **Compétences :** codes relus sur le référentiel (page [Référentiel](../../ressources/referentiel.md)) ; le choix des compétences pour cette séance est une proposition à valider.
- Le TP de rédaction de l'ancienne séance 10 a été déplacé en S10.
- Les notions de sauvegarde (3-2-1, RPO, RTO) sont revues en profondeur dans le bloc 2 (S16) : ici, on sauvegarde des **configurations**.

</details>
