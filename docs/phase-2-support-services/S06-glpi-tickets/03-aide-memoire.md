# Aide-mémoire – Gérer les tickets (InfraLab et GLPI)

*BTS SIO SISR 1re année – Bloc 1 – S06*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

## Un bon ticket

Qui demande, quoi (le **symptôme**, pas une supposition), depuis quand, sur quel équipement. « Ça marche pas » est inexploitable.

## Qualifier

Catégorie et sous-catégorie, **impact** (combien de personnes ?), **urgence** (quel délai ?) : la **priorité** se calcule.

## Lier

L'équipement **en cause**, pas celui de la personne qui appelle.

## États d'un ticket

| État | Sens |
|---|---|
| Nouveau | Créé, non pris en charge |
| En cours (attribué) | Un technicien le traite |
| En cours (planifié) | Une intervention est planifiée |
| En attente | On attend l'utilisateur ou un tiers (l'horloge du SLA est suspendue dans InfraLab) |
| Résolu | Solution **écrite** |
| Clos | Terminé et archivé |

## À retenir

- Un **suivi privé** n'est visible que des techniciens ; un suivi **public** l'est aussi de l'utilisateur.
- On **lie** le ticket à l'équipement concerné (onglet *Éléments* dans GLPI).
- Les **statistiques** donnent les délais et les volumes.
- Les **profils** décident de ce que chacun voit et fait.
