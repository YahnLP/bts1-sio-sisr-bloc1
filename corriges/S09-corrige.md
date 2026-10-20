# Corrigé – S09 : Catalogue de services

*Réservé à l'enseignant. Les fiches sont à construire par les élèves : ce corrigé donne un ​exemple complet et une grille de relecture.*

## Exemple de fiche : Réinitialisation de mot de passe

### Vue métier (utilisateur)

| Section | Exemple |
|---|---|
| Nom du service | Mot de passe oublié ou expiré |
| Description | Vous retrouvez l'accès à votre compte en quelques minutes. Vous ​recevez un mot de passe provisoire à changer à la première connexion. |
| Bénéficiaires | Tous les employés |
| Conditions d'accès | Avoir un compte actif ; pouvoir justifier de son identité |
| Comment y accéder | 1. Contacter le support. 2. Répondre aux ​questions de vérification. 3. Changer le mot de passe provisoire. |
| Fonctionnalités | Réinitialisation du mot de passe ; déblocage du compte |
| Exclusions | Récupération des données perdues ; changement de nom de compte |
| Disponibilité | Heures de support, jours ouvrés |
| Délai si problème | Prise en ​charge sous 30 min (priorité adaptée à l'impact) |
| Signaler un problème | Catégorie « Accès et Comptes » dans le portail ou par téléphone |

### Vue technique (DSI)

| Section | Exemple |
|---|---|
| Infrastructure | Annuaire (Active Directory) |
| Dépendances | Contrôleur de domaine, réseau |
| SLA interne | RTO 1 h (annuaire) ; RPO 24 h |
| ​Responsable | Technicien d'exploitation |
| Procédures | Vérification d'identité, réinitialisation, déblocage |
| Supervision | Disponibilité de l'annuaire, nombre de demandes |

## Grille de relecture d'une fiche

| Critère | Attendu |
|---|---|
| Vue métier sans jargon | ​Aucun sigle non expliqué |
| Description | Dit **ce que le service apporte**, pas comment il fonctionne |
| Exclusions | 2 à 3 points concrets |
| Cohérence des deux vues | Les ​dépendances techniques expliquent la disponibilité annoncée |
| SLA | Plage horaire et taux cohérents avec ceux de S07 |
| Procédure d'accès | Moins de 3 étapes |

## Points de discussion à la mise en commun

- **Cohérence des taux de disponibilité** entre services : un service qui dépend de l'annuaire ne peut pas promettre mieux que l'annuaire.
- **Ce qui est exclu** : mieux vaut peu d'exclusions précises que beaucoup de vagues.
- **Vue métier et vue technique** ​décrivent le même service, mais pas pour le même lecteur.

## Partie B – Vérifier les conditions de continuité

*Les données de l'annexe sont fictives. La règle « un test de restauration au ​moins une fois par an » est une règle de l'organisation fictive, à adapter à la réalité de votre contexte.*

| Service | Manquements attendus |
|---|---|
| Messagerie | Test de restauration ​vieux de 14 mois, donc supérieur à un an (sauvegarde récente : elle respecte le RPO d'une heure) |
| Serveur de fichiers | Dernière sauvegarde vieille de 3 jours pour un RPO de 24 heures ; restauration jamais testée ; procédure obsolète (version de 2021) |
| ​Switch cœur (configuration) | Dernière sauvegarde vieille de 30 jours pour un RPO de 24 heures |
| Annuaire | Aucun manquement (sauvegarde il y a 20 heures, test il y a 2 mois, procédure à jour) |

**Total attendu : 5 manquements** (1 + 3 + 1 + 0).

**Service le plus exposé :** le ​serveur de fichiers, qui cumule trois manquements. L'organisation ne sait pas s'il peut être restauré, et la perte pourrait atteindre 3 jours de données au lieu de 24 heures.

**Message de signalement (exemple).** « Le serveur de fichiers a été sauvegardé pour la dernière fois il y a 3 jours alors que nous acceptons de perdre au plus 24 ​heures, et aucune restauration n'a jamais été testée. En cas de panne, nous risquons de perdre jusqu'à 3 jours de travail et de ne pas pouvoir restaurer. Je propose de relancer la ​sauvegarde quotidienne, d'organiser un test de restauration cette semaine et de mettre la procédure à jour. »

**Critères d'évaluation :** le constat est chiffré et comparé à l'exigence ; le risque est exprimé pour l'organisation ; la proposition est concrète et réaliste.

**Pièges fréquents :** confondre RTO et RPO ; compter la sauvegarde récente de la messagerie ​comme un manquement ; signaler sans proposer d'action.

## Pièges fréquents

- **Copie de la vue technique** dans la vue métier.
- **Service décrit par son outil** (« GLPI ») plutôt que par ce qu'il apporte (« Signaler un problème »).
- **SLA identique pour tous les services** sans réflexion.
- **Catalogue incomplet** : un ​service oublié (accès Internet, impression) perturbe la consolidation.

## Bilan de compétences

Auto-évaluation ; B1.5, B1.1 et B1.4 proposées, à valider.
