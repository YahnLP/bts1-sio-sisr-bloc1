# Aide-mémoire – Inventaire automatique

*BTS SIO SISR 1re année – Bloc 1 – S05*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

## Deux niveaux de connaissance

| | Découverte réseau | Agent |
|---|---|---|
| Obtient | IP, MAC, nom, constructeur | Système, matériel, logiciels, session |
| Exige | Allumé, relié, adresse IP | Un système qui exécute l'agent |
| Dit | « Il existe » | « Voici ce qu'il contient » |

## Architecture

- **Agent** sur chaque poste : collecte et remonte à intervalle régulier.
- **Serveur** : reçoit les remontées (HTTP ou HTTPS), stocke, garde l'historique.
- **Console** web : consulter, rechercher, exporter.

## Quand l'inventaire ne se met plus à jour

| Cause | Indice | Remède |
|---|---|---|
| Mauvaise adresse de serveur | Échec dans le journal de l'agent | Corriger l'adresse |
| Agent arrêté | Aucune tentative, aucune erreur | Démarrer l'agent |
| Agent obsolète | Version plus ancienne que la courante | Mettre à jour |

## Sans agent

Imprimante, commutateur, NAS, téléphone IP : découverte réseau, SNMP, saisie manuelle, récolement. Une donnée saisie **vieillit**.

## Dans OCS Inventory

| Étape | À vérifier |
|---|---|
| Installation de l'agent | Adresse du serveur correcte |
| Premier inventaire | Forcé depuis le poste ou attendu |
| Console | Le poste apparaît (nom, dernière connexion) |
| Écarts | Comparer avec la fiche technique faite à la main |

**Intérêt :** inventaire à jour sans passer devant chaque poste. **Limite :** il ne voit que les postes qui ont l'agent et qui se connectent.
