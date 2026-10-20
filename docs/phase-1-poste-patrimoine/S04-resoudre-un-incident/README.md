# S04 – Résoudre un incident : diagnostic et base de connaissances

| Élément | Détail |
|---|---|
| **Niveau** | BTS SIO option SISR, 1re année – bloc 1 |
| **Séance** | S04 (séance 4 sur 19) – Phase 1 |
| **Durée** | 4 heures |
| **Parcours** | **Cœur** – Diagnostic d'un incident (B1.2). Voir le [parcours cœur et complément](../../ressources/parcours-coeur-complement.md). |
| **Prérequis** | S03 (ticket, cycle de vie). |
| **Matériel** | Poste Windows (VM), poste Linux (option) ; simulateur InfraLab (navigateur, facultatif) |
| **Compétences travaillées** | B1.2 · B1.1 · B1.5 (amorcée) (voir [le référentiel](../../ressources/referentiel.md)) |

> [!NOTE]
> **Question qui guide la séance :** *« Une imprimante n'imprime plus, un dossier refuse l'accès, un poste est lent : par où commence-t-on, et que garde-t-on pour la prochaine fois ? »*

> [!NOTE]
> **Recoupement avec d'autres séances.** Le processus de traitement d'un incident est aussi vu en [CEJM 1re année, S09 – Gérer un incident : processus, priorités et indicateurs](https://yahnlp.github.io/bts1-sio-sisr-cejma/phase-2-organisation-risques-financement/S09-gestion-incidents/). Selon l'ordre de vos séances, la première pose les bases et la seconde les reprend en rappel (15 à 20 minutes). Ici, garder le diagnostic et la base de connaissances.

## Objectifs

À la fin de la séance, l'étudiant est capable de :

1. **Appliquer** les sept étapes du cycle de vie d'un incident ;
2. **Diagnostiquer** méthodiquement (de la couche physique vers l'application) ;
3. **Résoudre** trois incidents types : impression, droits d'accès, lenteur ;
4. **Rédiger** une fiche de base de connaissances exploitable par un collègue ;
5. **Utiliser** les commandes de diagnostic Windows courantes ;
6. **Distinguer** un incident, un problème et une demande de service ;
7. **Mener** une prise de contrôle à distance avec l'accord de l'utilisateur.

## Contenu de la séance

| Document | Rôle |
|---|---|
| [Cours – Cycle de vie d'un incident, diagnostic et base de connaissances](01-cours.md) | Cours |
| [TP – Résoudre trois incidents, puis une prise en main à distance](02-tp.md) | TP |
| [Aide-mémoire – Résoudre un incident](03-aide-memoire.md) | Aide-mémoire |
| [Annexe – Checklist rapide de diagnostic N1](annexe-checklist-n1.md) | Annexe |

## Déroulé conseillé (4 h)

| Durée | Activité | Format |
|---|---|---|
| 0 h 00 – 0 h 15 | **Rappel d'amorçage** (S03) et accroche | Oral |
| 0 h 15 – 1 h 25 | **Cours** : cycle de vie d'un incident, méthode de diagnostic, base de connaissances, incident et problème, prise de contrôle à distance | Cours et questions |
| 1 h 25 – 3 h 35 | **TP** : trois incidents chez SimIO SARL (≈ 1 h 50), puis prise en main à distance (≈ 20 min) | Binôme |
| 3 h 35 – 4 h 00 | **Bilan de compétences** | Individuel |

## Retour en entreprise

Si ta situation le permet : **observer** comment ton entreprise traite le sujet de la séance, **documenter** en une demi-page l'écart avec le TP, ou **réaliser** une partie après accord de ton tuteur. Voir [Transfert en entreprise](../../ressources/transfert-entreprise.md). Le travail réalisé peut alimenter une [fiche de réalisation](../../ressources/fiche-realisation-professionnelle.md).

## Évaluation

- Compte rendu avec captures d'écran datées, schéma et explications, nommé `RENDU-B1-S04-NOM.pdf`.
- Bilan de compétences rempli à la fin de la séance (individuel).

<details markdown="1">
<summary>Notes pour l'enseignant</summary>

- **Compétences :** codes relus sur le référentiel (page [Référentiel](../../ressources/referentiel.md)).
- Les trois incidents sont simulés dans un environnement de TP : à répéter sur des postes réels de la salle si possible.
- **Ajout (savoirs du référentiel) :** la distinction incident / problème et la prise de contrôle à distance répondent aux savoirs « prise de contrôle d'un poste de travail » et « gestion des incidents et des problèmes ». La durée de la séance est inchangée : le rappel et le bilan sont raccourcis, et l'incident 3 peut être traité en démonstration si le temps manque. **À valider.**
- La partie 4 du TP demande deux postes Windows Professionnel ou Entreprise ; le choix d'un outil de télé-assistance (propriétaire ou libre) est laissé à l'organisation.

</details>
