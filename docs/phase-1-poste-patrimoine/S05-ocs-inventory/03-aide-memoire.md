# Aide-mémoire – OCS Inventory

*BTS SIO SISR 1re année – Bloc 1 – S05*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

## Architecture

- **Agent** installé sur chaque poste : collecte matériel et logiciels.
- **Serveur** : reçoit les inventaires par **HTTP(S)**.
- **Console** web : consulter, rechercher, exporter.

| Étape | À vérifier |
|---|---|
| Installation de l'agent | Adresse du serveur correcte |
| Premier inventaire | Forcé depuis le poste ou attendu |
| Console | Le poste apparaît (nom, dernière connexion) |
| Écarts | Comparer avec la fiche technique faite à la main |

**Intérêt :** inventaire à jour sans passer devant chaque poste. **Limite :** il ne voit que les postes qui ont l'agent et qui se connectent.