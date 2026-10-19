# Corrigé – S05 : Inventaire automatique avec OCS Inventory

*Réservé à l'enseignant. Le serveur OCS Inventory doit être préinstallé et joignable depuis les postes de la salle ; les valeurs dépendent de la salle. **Non testé en sandbox** : le serveur et l'agent Windows ne sont pas disponibles dans l'environnement de rédaction.*

## Étape 1 – Console

L'exploration sert à repérer : la liste des ordinateurs, les logiciels, la configuration et les rapports. Le compte `admin/admin` du TP est celui du **laboratoire** : à changer dans tout environnement réel (le TP le rappelle).

## Étape 2 – Agent

| Paramètre | Attendu |
|---|---|
| Serveur | L'adresse du serveur de la salle |
| Port | 80 (HTTP) ou 443 (HTTPS) selon l'installation |
| TAG | `TP-BTS-SIO` (ou une étiquette propre à la classe) |
| Service créé | Oui (service de l'agent, démarrage automatique) |

**Pannes fréquentes.**

- **Connexion impossible au serveur** : pare-feu, URL sans `/ocsinventory`, port erroné. Vérifier d'abord la résolution et la connectivité (`Test-NetConnection`).
- **Agent lancé sans droits d'administrateur** : inventaire partiel ou installation refusée.
- **Heure du poste décalée** : certains inventaires sont rejetés ou datés de façon incohérente.

## Étape 3 – Comparaison avec la fiche S02

| Information | Résultat attendu |
|---|---|
| Nom, CPU, OS, adresse IP, MAC, numéro de série | Identiques, à la mise en forme près (tirets ou deux-points dans l'adresse MAC) |
| RAM | Peut différer de quelques centaines de Mo selon la mesure (mémoire réservée) |
| Nombre de logiciels | Plus élevé dans OCS (composants, redistribuables, mises à jour) |

Toute **différence** est à documenter, pas seulement à signaler.

## Questions de réflexion

| Q | Éléments de réponse |
|---|---|
| Q1 | OCS recense **tout** ce que le registre déclare (pilotes, bibliothèques, correctifs), la fiche manuelle ne garde que les logiciels utiles. |
| Q2 | Exemples : détecter l'**installation d'un logiciel non autorisé** ; suivre les **mises à jour manquantes** ; connaître la **machine affectée** lors d'une alerte de sécurité ; préparer un **renouvellement** de matériel. |
| Q3 | L'inventaire recense la **configuration**, pas l'activité personnelle. Il doit être prévu par la **charte informatique**, et les personnes concernées doivent être **informées** (RGPD). Limiter les données collectées à ce qui est utile (principe de minimisation). |
| Q4 | Réponse propre à l'entreprise ; si l'entreprise n'a pas d'outil, la décrire comme un constat. |

## Lien avec GLPI

OCS **collecte** l'inventaire ; GLPI **gère** le parc et les tickets. Un élève qui évoque l'intégration (plugin ou agent GLPI) va dans le sens de S06.

## Pièges fréquents

- **Capture sans date ni nom de poste.**
- **Identifiants réels** laissés sur une capture.
- **Confondre inventaire et supervision** : l'inventaire décrit, la supervision surveille en continu.

## Bilan de compétences

Auto-évaluation ; B1.1 et B1.5 (amorcée) proposées, à valider.
