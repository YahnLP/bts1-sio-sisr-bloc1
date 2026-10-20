# S17 – Projet de support : installer GLPI, OCS et le catalogue

| Élément | Détail |
|---|---|
| **Niveau** | BTS SIO option SISR, 1re année – bloc 1 |
| **Séance** | S17 (séance 17 sur 19) – Phase 4 |
| **Durée** | 4 heures |
| **Parcours** | **Cœur** – Projet de bout en bout : mode projet (B1.4) et réalisation pour l'E5. Voir le [parcours cœur et complément](../../ressources/parcours-coeur-complement.md). |
| **Prérequis** | S05, S06, S09, S16. |
| **Matériel** | Trois VM Debian ou Ubuntu, un poste Windows, wiki de l'équipe |
| **Compétences travaillées** | B1.4 · B1.5 · B1.1 · B1.2 (voir [le référentiel](../../ressources/referentiel.md)) |

> [!NOTE]
> **Question qui guide la séance :** *« L'entreprise n'a rien : mettre en place le support de A à Z, en équipe, en respectant un calendrier. »*

## Objectifs

À la fin de la séance, l'étudiant est capable de :

1. **Organiser** un projet : rôles, jalons, planning, comptes rendus ;
2. **Installer** GLPI et OCS Inventory et les **synchroniser** ;
3. **Déployer** l'agent sur un poste ;
4. **Créer** le catalogue de services dans GLPI ;
5. **Documenter** dans le wiki au fur et à mesure ;
6. **Choisir** une approche prédictive ou agile et **suivre** le projet dans un outil de gestion de projet ;
7. **Rédiger** un plan de tests et un rapport de tests (intégration, acceptation).

## Contenu de la séance

| Document | Rôle |
|---|---|
| [Cours – Travailler en mode projet](01-cours-mode-projet.md) | Cours |
| [Cours – GLPI, OCS, catalogue de services : rappels et approfondissement](01b-cours-glpi-ocs.md) | Cours (suite) |
| [Projet – Mettre en place le support de SimIO SARL (fil rouge, S17 et S18)](02-projet.md) | Projet |
| [TP – Installer GLPI](02b-tp-glpi.md) | TP (suite) |
| [TP – Installer OCS Inventory et le synchroniser avec GLPI](02c-tp-ocs.md) | TP |
| [TP – Créer le catalogue de services dans GLPI](02d-tp-catalogue.md) | TP |
| [Aide-mémoire – Mode projet](03-aide-memoire.md) | Aide-mémoire |
| [Annexe – Modèle de catalogue de services](annexe-modele-catalogue.md) | Annexe |
| [Annexe – Modèle de plan et de rapport de tests](annexe-modele-tests.md) | Annexe |

## Déroulé conseillé (4 h)

| Durée | Activité | Format |
|---|---|---|
| 0 h 00 – 0 h 45 | **Cours** : le mode projet (rôles, jalons, planning), approches prédictive et agile, outil de projet, tests ; lancement | Équipe |
| 0 h 45 – 3 h 35 | **TP** : planning dans l'outil (≈ 10 min), installation, synchronisation, catalogue, puis plan et rapport de tests (≈ 15 min) | Équipe de trois |
| 3 h 35 – 4 h 00 | **Point d'étape** et bilan de compétences | Équipe, puis individuel |

## Retour en entreprise

Si ta situation le permet : **observer** comment ton entreprise traite le sujet de la séance, **documenter** en une demi-page l'écart avec le TP, ou **réaliser** une partie après accord de ton tuteur. Voir [Transfert en entreprise](../../ressources/transfert-entreprise.md). Le travail réalisé peut alimenter une [fiche de réalisation](../../ressources/fiche-realisation-professionnelle.md).

## Évaluation

- Compte rendu avec captures d'écran datées, schéma et explications, nommé `RENDU-B1-S17-NOM.pdf`.
- Bilan de compétences rempli à la fin de la séance (individuel).

<details markdown="1">
<summary>Notes pour l'enseignant</summary>

- **Compétences :** codes relus sur le référentiel (page [Référentiel](../../ressources/referentiel.md)).
- Séance de travail en équipe : prévoir un tableau de planning visible (papier ou outil libre).
- **Ajout (savoirs du référentiel) :** approches prédictive et agile, outil de gestion de projet (fonctionnalités et paramétrage), tests d'intégration et d'acceptation avec rapport de test. Le temps ajouté est pris sur la durée du cours d'ouverture et sur le point d'étape : si l'installation prend du retard, finir le catalogue (T4) en début de S18. Le barème du projet a été rééquilibré (/100) : **à valider**. Les écrans du module « Projets » de GLPI dépendent de la version installée : **à vérifier**.
- Le cours « mode projet » est ajouté par la refonte : la compétence B1.4 n'était pas travaillée explicitement.

</details>
