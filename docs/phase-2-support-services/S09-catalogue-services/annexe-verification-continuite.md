# Annexe – Vérifier les conditions de continuité

*BTS SIO SISR 1re année – Bloc 1 – S09*

## Consigne (≈ 20 min)

Chez SimIO SARL, le responsable demande un point sur la continuité des services. Pour chaque service, compare la situation observée aux exigences, puis **signale les manquements** dans la dernière colonne. La règle de l'organisation (fictive) : une restauration doit être testée **au moins une fois par an** et une procédure doit correspondre à la version en production.

| **Service** | **RTO attendu** | **RPO attendu** | **Dernière sauvegarde** | **Dernier test de restauration** | **Procédure à jour ?** | **Manquements** |
|---|---|---|---|---|---|---|
| Messagerie | 4 h | 1 h | il y a 1 h | il y a 14 mois | oui | |
| Serveur de fichiers | 8 h | 24 h | il y a 3 jours | jamais | non (version de 2021) | |
| Switch cœur (configuration) | 2 h | 24 h | il y a 30 jours | il y a 6 mois | oui | |
| Annuaire | 4 h | 24 h | il y a 20 h | il y a 2 mois | oui | |

## Questions

1. Combien de manquements as-tu relevés au total ?
2. Quel service est le plus exposé ? Justifie.
3. Rédige le message de signalement (3 lignes) adressé au responsable pour le service que tu as choisi : constat, risque, proposition.
