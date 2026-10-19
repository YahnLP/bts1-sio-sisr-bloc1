# Corrigé – S18 : Tickets, guide utilisateur et fiche de réalisation

*Réservé à l'enseignant. Séance de rédaction et de simulation : pas de manipulation technique testable. Les commandes citées sont des opérations Windows standard, non rejouées ici.*

## Particularité du TP « trois tickets »

Le TP **contient déjà** le diagnostic et la résolution de chaque incident (hypothèses, tests, cause, solution). Les élèves peuvent donc recopier. Deux usages :

1. **Version à trous** : distribuer le TP **sans** les rubriques « Diagnostic » et « Résolution » ; les élèves construisent leurs hypothèses, l'enseignant joue le rôle du poste (il répond aux tests demandés).
2. **Version modèle** : garder le TP tel quel et demander une **variante** : un quatrième ticket dont l'élève imagine la cause et la résolution dans le même format.

Le texte d'origine reste la **référence de correction** de la méthode : titre précis, hypothèses numérotées, **un test par hypothèse**, cause, résolution, validation, temps passé.

## Incidents du TP

| Incident | Cause | Résolution | Points de méthode |
|---|---|---|---|
| 1 – Accès refusé au dossier Comptabilité | Droits NTFS du groupe retirés | Rajouter le groupe avec « Modification » | Écarter d'abord le mot de passe et le réseau (test AD, ping) |
| 2 – GestCom : erreur de connexion à la base | Service SQL Server arrêté (mise à jour nocturne supposée) | Démarrer le service, le passer en démarrage automatique | Vérifier **l'étendue** (plusieurs utilisateurs touchés) : problème global, pas poste |
| 3 – Compte verrouillé | Verrouillage après tentatives échouées (politique AD) | Déverrouiller le compte | Ne pas réinitialiser le mot de passe sans nécessité ; informer l'utilisateur |

**Nuances à connaître**

- L'incident 2 conclut « probablement suite aux mises à jour » : c'est une **hypothèse**, pas une preuve. Un bon technicien consulte le **journal des événements** avant d'écrire cette cause.
- La **priorité « Critique »** de l'incident 2 se justifie par l'impact (tout le service) ; vérifier que l'élève l'argumente.
- L'incident 3 suppose un seuil de verrouillage défini dans l'annuaire (5 essais dans le scénario). Ce seuil **dépend de la politique** du domaine : il n'est pas activé partout.
- Le ticket « Diagnostic » de l'incident 1 doit rester **factuel** (« absent de la liste ») et non accusateur (« quelqu'un a supprimé »).

### Grille de relecture d'un ticket

| Critère | Attendu |
|---|---|
| Titre | Symptôme + utilisateur |
| Description | Faits, moment, message d'erreur exact |
| Priorité | Justifiée par impact et urgence |
| Diagnostic | Hypothèses ordonnées, un test chacune |
| Solution | Actions, cause, validation, prévention |
| Temps passé | Renseigné, plausible |

## Guide utilisateur GLPI

| Critère | Attendu |
|---|---|
| Structure | Page de garde, table des matières, introduction, accès, trois tutoriels, FAQ (au moins 5 questions), contact |
| Captures | 9 captures annotées (flèche, encadré, numéro) ; **sans donnée réelle** |
| Langage | Sans jargon, une action par étape |
| Test | Un camarade réalise le tutoriel **sans aide** : lire ses blocages |

Pièges : captures non annotées, pas de numéro de version, adresse du site recopiée sans vérification, captures montrant un mot de passe.

## Fiche de réalisation du projet

Points de contrôle (voir la grille de S10) :

- le contexte dit que SimIO SARL est un **cas d'étude de formation** (pas une entreprise réelle) ;
- la **contribution personnelle** est distincte du travail d'équipe ;
- chaque résultat est **appuyé par une mesure** réellement faite ;
- les compétences cochées sont celles qu'on peut **prouver** (la présence en ligne n'est pas travaillée dans ce projet) ;
- l'élève rappelle que **cette réalisation seule ne suffit pas** : l'environnement doit être conforme à l'annexe II.E et le dossier s'appuyer aussi sur des missions menées en entreprise.

## Documentation dans le wiki

Les pages « Architecture », « Installation GLPI + OCS » et « Incidents résolus » sont des **squelettes** : elles contiennent des « [Suite de la procédure…] » à compléter. Une page qui garde ces mentions n'est pas terminée.

Le champ « Date de réalisation : (à compléter) » doit être rempli.

## Pièges fréquents

- **Tickets recopiés** du TP sans changer un mot.
- **Guide trop technique** pour un employé (parle de « session PHP » au lieu de « se connecter »).
- **Fiche qui survend** le projet (« j'ai déployé l'infrastructure de l'entreprise »).

## Bilan de compétences

Auto-évaluation ; B1.2, B1.4, B1.5 et B1.6 proposées, à valider.
