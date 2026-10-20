# Annexe – Modèle de plan de tests et de rapport de tests

*BTS SIO SISR 1re année – Bloc 1 – S17*

## 1. Plan de tests (à compléter avant d'exécuter)

Écris le **résultat attendu avant** de lancer le test. Garde une preuve (capture datée) pour chaque test.

| **N°** | **Niveau** | **Objectif** | **Prérequis** | **Étapes** | **Résultat attendu** | **Résultat obtenu** | **Statut** | **Preuve** |
|---|---|---|---|---|---|---|---|---|
| 1 | Fonctionnement | GLPI est accessible | GLPI installé | Ouvrir l'adresse de GLPI dans un navigateur | La page de connexion s'affiche | | | |
| 2 | Fonctionnement | OCS est accessible | OCS installé | Ouvrir la console OCS | La console s'affiche | | | |
| 3 | Intégration | Synchronisation OCS vers GLPI | T1, T2, T3 réalisées | Lancer la synchronisation, ouvrir la liste des ordinateurs | Le poste de test apparaît | | | |
| 4 | Intégration | Remontée de l'agent | Agent installé sur le poste | Forcer un inventaire sur le poste, consulter la console | Le poste remonte ses informations | | | |
| 5 | Acceptation | Ouverture d'un ticket | Catalogue publié | Se connecter comme utilisateur et ouvrir un ticket depuis le catalogue | Le ticket est enregistré avec la bonne catégorie | | | |
| 6 | Acceptation | Suivi du ticket | Ticket du test 5 | Le technicien traite le ticket, l'utilisateur consulte le suivi | L'utilisateur voit l'état et la solution | | | |
| | | | | | | | | |

**Statut :** conforme, non conforme ou non exécuté.

## 2. Rapport de tests (à rédiger après l'exécution)

| **Rubrique** | **Contenu** |
|---|---|
| Projet, équipe, date | |
| Synthèse | Nombre de tests : ___ · conformes : ___ · non conformes : ___ · taux de conformité : ___ % |
| Anomalies | Pour chaque anomalie : test concerné, description, cause, correction, résultat du nouveau test |
| Décision | Service accepté / accepté avec réserves / refusé |
| Réserves et suites | Ce qui reste à faire, par qui, pour quand |
| Signatures | Équipe projet · client (enseignant) |

> [!NOTE]
> Le taux de conformité se calcule ainsi : tests conformes ÷ tests exécutés. Si une anomalie est corrigée, le test est **rejoué** : le rapport garde les deux passages.
