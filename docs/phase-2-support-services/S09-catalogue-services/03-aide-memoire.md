# Aide-mémoire – Catalogue de services

*BTS SIO SISR 1re année – Bloc 1 – S09*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

## Fiche de service

| Rubrique | Exemple |
|---|---|
| Nom (vue métier) | Messagerie professionnelle |
| Description | Envoyer et recevoir des courriels |
| Qui peut le demander ? | Tout salarié |
| Comment le demander ? | Ticket, catégorie « Messagerie » |
| Engagement (SLA) | Délais de prise en charge et de traitement |
| Disponibilité | Heures, jours |
| Contact | Support informatique |

## Deux vues

- **Vue métier** : pour les utilisateurs (mots simples).
- **Vue technique** : pour l'équipe (serveurs, procédures, supervision).

**Cycle de vie d'un service :** actif → déprécié → retiré.

## Continuité et conservation

| Notion | En une phrase |
|---|---|
| PCA | Continuer l'activité **pendant** la panne (service minimal, mode dégradé) |
| PRA | **Repartir** après le sinistre (RTO, RPO) |
| Sauvegarder | Pouvoir restaurer |
| Conserver | Garder une donnée utile pendant une durée définie |
| Archiver | Garder une donnée à valeur légale ou probante, intègre, à accès restreint |

**À vérifier pour la continuité :** sauvegarde plus récente que le RPO, restauration testée, procédure à jour, secours disponible. Sinon : **signaler le manquement**.
