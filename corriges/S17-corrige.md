# Corrigé – S17 : Projet de support (GLPI, OCS, catalogue)

*Réservé à l'enseignant. **Testé** : l'installation de GLPI 10.0.12 sur Ubuntu 24.04 (Apache 2.4.58, PHP 8.3, MariaDB 10.11). **Partiellement testé** : OCS ​Inventory Server 2.12.1 (installation exécutée ; la console web n'a pas répondu dans mon test, cause non diagnostiquée). **Non testés** : l'agent Windows et le plugin de synchronisation.*

## Corrections apportées au TP dans cette PR

| Fichier | ​Problème constaté | Correction |
|---|---|---|
| `02b-tp-glpi.md` | Le VirtualHost du TP (`AllowOverride All` seul) ne suffit pas pour GLPI 10 : le dossier `public` n'a pas de `.htaccess`, **toutes les pages répondent 404** | Ajout des règles `RewriteRule` dans le VirtualHost, avec une note (testé : la page « Setup GLPI » s'affiche) |
| `02c-tp-ocs.md` | La liste de paquets Perl est incomplète pour OCS 2.12.1 (`setup.sh` s'arrête sur `Archive::Zip` ; Apache refuse ensuite de démarrer sans `Switch`) | Ajout de `libarchive-zip-perl` et `libswitch-perl` |
| `02c-tp-ocs.md` | `setup.sh` pose une question « Rest API server » absente du TP ; avec `y`, il s'arrête sur `Mojolicious::Lite` | Réponse `n` indiquée |
| `02c-tp-ocs.md` | La ​configuration du serveur de communication n'est pas activée par défaut (`z-ocsinventory-server`) | Ajout de `sudo a2enconf z-ocsinventory-server` avant le redémarrage |

## Points d'attention non corrigés

- **OCS, console web** : dans mon test, `/ocsreports/` renvoyait un **403 vide** après installation. Je n'en ai pas trouvé la cause (la ​version 2.12.1 émet aussi des avertissements de fonctions dépréciées avec PHP 8.3). À **essayer avant la séance** sur la machine de TP ; ne pas considérer l'étape comme validée.
- **XML::Entities** : un avertissement du serveur de communication signale ce module absent (paquet non disponible sur Ubuntu 24.04). Sans effet constaté sur le démarrage d'Apache.
- **Plugin OCS pour GLPI** : l'étape de synchronisation dépend d'un plugin à télécharger sur le site des ​plugins ; sa compatibilité avec la version de GLPI est à **vérifier avant la séance**.
- **Version de GLPI** : harmonisée sur 10.0.12 (version testée) dans le TP de S17, le TP de S18 et l'annexe de S06.
- **Mots de passe** (`MySQL2024!`, `GlpiPass2024!`, `AdminGlpi2024!`, `AdminOCS2024!`) : identifiants de laboratoire. Les comptes par défaut `glpi/glpi` et `admin/admin` doivent être **changés dès la première connexion** (le TP le demande).

## Constats à valider pendant le projet (GLPI testé)

| Contrôle | ​Attendu |
|---|---|
| Page d'accueil `http://glpi.local` | Redirige vers l'installation, puis vers la page « Authentification - GLPI » |
| Base | Environ 390 tables créées (390 sur mon test) |
| Comptes créés par défaut | `glpi`, `tech`, `normal`, `post-only`, `glpi-system` |
| Fuseaux horaires | Avertissement possible (« Timezones usage cannot be activated ») : sans gravité pour le TP |

## Catalogue de services (GLPI)

Arborescence attendue (TP) :

| ​Niveau 1 | Niveau 2 |
|---|---|
| Support Utilisateur | Compte et Authentification, Poste de Travail, Messagerie, Impression |
| Infrastructure & Réseau | ​Serveur, Réseau, Stockage |
| Applications Métier | (à compléter) |
| Sécurité | (à compléter) |

Remarque : la procédure du TP demande d'abord « Configuration → Assistance → Catégories de tickets », puis « Configuration → Intitulés → Catégories de tickets ». Les intitulés de menu varient selon la version : demander aux élèves de **noter le chemin réel** dans leur compte ​rendu.

## Évaluation du projet

La grille de la fiche projet (100 points) est une **proposition à valider**. Repères de notation :

| Critère | Points | Ce qu'on regarde |
|---|---|---|
| GLPI + OCS | /15 | Fonctionnement vérifié (connexion, ​inventaire remonté) |
| Catalogue | /15 | Catégories structurées, fiches de service complètes |
| Tickets | /20 | Trois tickets traités et documentés |
| Wiki | /15 | Pages datées, signées, avec captures |
| Oral | /10 | Clarté, contribution personnelle |
| Planification et suivi dans l'outil de projet | /5 | Projet et tâches saisis, avancement actualisé |
| Plan et rapport de tests | /10 | Voir la section suivante |
| Équipe | /10 | Rôles, ​planning, comptes rendus |

Une **note individuelle** peut s'appuyer sur la fiche de contribution rédigée en S18, pas seulement sur le résultat collectif.

## Planification et tests (ajout)

**Planification dans l'outil de projet (/5).** Attendu : un projet créé, les quatre tâches T1 à T4 avec responsable, ​durée et état, un avancement mis à jour à chaque jalon. Pénaliser un planning saisi une seule fois et jamais actualisé.

**Plan de tests.** Attendu : au moins six tests répartis sur les trois niveaux (fonctionnement, intégration, acceptation), avec un ​résultat attendu écrit **avant** l'exécution. Exemples de bons tests d'intégration : le poste de test apparaît dans GLPI après la synchronisation ; l'agent remonte un inventaire forcé. Exemples d'acceptation : un utilisateur ouvre un ticket depuis le catalogue ; il en suit le traitement.

**Rapport de tests (/10 avec le plan).** Attendu : synthèse chiffrée, par ​exemple 6 tests exécutés dont 5 conformes, soit 5 / 6 = 83 % ; anomalies décrites avec cause, correction et test rejoué ; décision motivée (accepté, accepté avec réserves, refusé) ; signatures.

**Barème indicatif du bloc tests.**

| Élément | Points |
|---|---|
| Plan de tests complet, ​résultats attendus avant exécution | 4 |
| Preuves datées pour chaque test | 2 |
| Rapport : synthèse chiffrée et anomalies traitées | 3 |
| Décision d'acceptation motivée | 1 |

**Pièges fréquents :** écrire le résultat ​attendu après avoir vu le résultat obtenu ; ne tester que le fonctionnement et jamais l'acceptation ; rapport sans anomalie ni nouveau test alors qu'un test a échoué ; confondre taux de ​conformité et nombre de tests.

## Pièges fréquents

- **Installation GLPI qui répond 404** : règles de réécriture manquantes (voir ci-dessus).
- **Droits sur `/var/www/glpi/files`** : après une commande lancée en `root`, les fichiers appartiennent à `root` et GLPI ne peut plus écrire ses journaux (`chown -R www-data:www-data /var/www/glpi`).
- **Agent OCS pointant sur la mauvaise URL** : `http://IP/ocsinventory` (et non `/ocsreports`).
- **Un seul membre de l'équipe fait tout** : prévoir un ​suivi par rôle.

## Bilan de compétences

Auto-évaluation ; B1.4, B1.5, B1.1 et B1.2 proposées, à valider.
