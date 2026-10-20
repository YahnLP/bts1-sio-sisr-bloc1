# S05 – Inventaire automatique : InfraLab, puis OCS Inventory

| Élément | Détail |
|---|---|
| **Niveau** | BTS SIO option SISR, 1re année – bloc 1 |
| **Séance** | S05 (séance 5 sur 19) – Phase 1 |
| **Durée** | 4 heures |
| **Parcours** | **Cœur** – Prérequis de S06 (GLPI s'appuie sur OCS) et de S17. Voir le [parcours cœur et complément](../../ressources/parcours-coeur-complement.md). |
| **Prérequis** | S02 (fiche technique), S04. |
| **Matériel** | Navigateur pour le simulateur [InfraLab](https://yahnlp.github.io/InfraLab/) (aucune installation) et le fichier de la séance ; serveur OCS Inventory (fourni) et poste Windows pour l'agent |
| **Compétences travaillées** | B1.1 · B1.5 (amorcée) (voir [le référentiel](../../ressources/referentiel.md)) |

> [!NOTE]
> **Question qui guide la séance :** *« Comment inventorier cent postes sans passer devant chacun ? »*

## Objectifs

À la fin de la séance, l'étudiant est capable de :

1. **Expliquer** pourquoi l'inventaire manuel ne tient pas à l'échelle d'un parc ;
2. **Distinguer** ce que voit une découverte réseau et ce qu'apporte un agent ;
3. **Dire** pourquoi certains équipements n'ont pas d'agent et comment on les inventorie ;
4. **Diagnostiquer** un agent défaillant et **mesurer** la couverture réelle d'un inventaire ;
5. **Installer** l'agent OCS, forcer un inventaire et **retrouver** le poste dans la console ;
6. **Situer** le lien entre un outil d'inventaire et GLPI.

## Contenu de la séance

| Document | Rôle |
|---|---|
| [Cours – L'inventaire automatique : principes, InfraLab, OCS](01-cours.md) | Cours |
| [TP – Inventorier un parc : InfraLab, puis OCS Inventory](02-tp.md) | TP |
| [Aide-mémoire – Inventaire automatique](03-aide-memoire.md) | Aide-mémoire |
| [Fichier InfraLab : audit d'inventaire de NovaTech](../../ressources/infralab/s05-audit-inventaire.infralab.json) | Fichier de départ du simulateur |
| [TP InfraLab autocorrigé : audit d'inventaire](../../ressources/infralab/tp-49-audit-inventaire.infralab-tp.json) | Fichier de TP du simulateur (à ouvrir avec « Ouvrir ») |

## Déroulé conseillé (4 h)

| Durée | Activité | Format |
|---|---|---|
| 0 h 00 – 0 h 15 | **Rappel d'amorçage** (S02) : la fiche technique à la main | Oral |
| 0 h 15 – 0 h 45 | **Cours** : principes de l'inventaire, découverte, agent, sans-agent | Cours et questions |
| 0 h 45 – 2 h 30 | **TP, partie 1, InfraLab** : TP 6 et 7, puis audit d'inventaire de NovaTech | Individuel ou binôme |
| 2 h 30 – 3 h 30 | **TP, partie 2, OCS Inventory** : installer l'agent, vérifier, relier aux notions d'InfraLab | Binôme |
| 3 h 30 – 4 h 00 | **Bilan de compétences** | Individuel |

## Retour en entreprise

Si ta situation le permet : **observer** comment ton entreprise traite le sujet de la séance, **documenter** en une demi-page l'écart avec le TP, ou **réaliser** une partie après accord de ton tuteur. Voir [Transfert en entreprise](../../ressources/transfert-entreprise.md). Le travail réalisé peut alimenter une [fiche de réalisation](../../ressources/fiche-realisation-professionnelle.md).

## Évaluation

- Compte rendu avec captures d'écran datées, tableaux du TP et explications, nommé `RENDU-B1-S05-NOM.pdf`, accompagné du rapport InfraLab des TP 6 et 7 et du fichier `.infralab.json` de l'audit.
- Bilan de compétences rempli à la fin de la séance (individuel).

<details markdown="1">
<summary>Notes pour l'enseignant</summary>

- **Compétences :** codes relus sur le référentiel (page [Référentiel](../../ressources/referentiel.md)).
- Prévoir un serveur OCS préinstallé et joignable depuis les postes de la salle. Si ce n'est pas possible, la partie 2 peut être menée sur l'outil d'inventaire de l'entreprise de chaque apprenti (voir la variante dans le TP).
- **InfraLab** ne demande aucune installation. Le fichier de l'audit est généré par `tools/infralab/gen-course-files.ts` (voir ci-dessous) ; ses chiffres ci-dessous sont à vérifier si le fichier est régénéré avec une autre version du simulateur.
- **Corrigé de l'audit :** 45 équipements dans le schéma, 43 fiches dans l'outil (absents : INTERNET et FW-SIEGE, sans adresse IP dans la plage scannée). 24 postes : 16 avec agent installé, dont 3 défaillants (PC-DIR-01 agent arrêté, PC-NORD-04 mauvaise adresse de serveur, PC-RH-02 agent obsolète), 8 sans agent (PC21, PC-DIR-02, PC24, PC27, PC-NORD-03, PC-NORD-06, PC-SUD-01, PC-SUD-04). Couverture : 13 sur 24, soit 54 %, avant correction ; 16 sur 24, soit 67 %, après. Office : 13 licences, 16 installations connues (écart de 3), 24 installations réelles (écart réel de 11). Logiciels interdits connus après correction : 4 TeamViewer et 4 VLC ; réels : 5 TeamViewer (dont PC-SUD-04, sans agent) et 4 VLC.
- Les TP 8, 9 et 10 du catalogue servent de prolongement pour les plus rapides.

</details>
