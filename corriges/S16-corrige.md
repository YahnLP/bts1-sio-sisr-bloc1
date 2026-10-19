# Corrigé – S16 : Travail collaboratif (wiki, Git, terminaux mobiles)

*Réservé à l'enseignant. **Testé** : la partie Git. **Non testé** : l'installation de DokuWiki (le site de téléchargement n'est pas joignable depuis l'environnement de rédaction) ; seule la logique de la configuration Apache est relue. La partie « terminaux mobiles » est un cours sans TP.*

## TP 1 – DokuWiki

| Étape | Attendu | Pièges |
|---|---|---|
| 1. Apache et PHP | `apache2 -v` et `php -v` répondent | Paquets manquants : `php-xml` est nécessaire |
| 2. Téléchargement | Un dossier `dokuwiki-AAAA-MM-JJ…` apparaît dans `/tmp` | Le nom du dossier change selon la version : l'élève **adapte** la commande `mv` |
| 3. Déplacement et droits | `www-data` propriétaire de `/var/www/dokuwiki` | `chmod -R 755` est une simplification (fichiers en 644 en pratique) |
| 4. VirtualHost | `a2ensite wiki.conf`, `reload`, `configtest` | Le site par défaut peut encore répondre : désactiver `000-default.conf` ou tester par le **nom** `wiki.local` |
| 5. Fichier `hosts` | Adresse du serveur et `wiki.local` | Sans cela, le nom n'est pas résolu |
| 6. Installation web | « DokuWiki est maintenant configuré. » | Politique ACL : « Public » (lecture pour tous, écriture pour les utilisateurs) est cohérente avec le sujet |
| 7. Sécurité | `install.php` supprimé : `ls` répond « No such file or directory » | Oublier cette étape laisse l'installeur accessible |

**À faire dire / à vérifier**

- `AllowOverride All` n'est pas un détail : DokuWiki s'appuie sur des fichiers `.htaccess` pour protéger ses dossiers de configuration et de données. **Test à faire** : `curl -sI http://wiki.local/conf/local.php` doit renvoyer un refus (403), pas le contenu.
- Le mot de passe `AdminWiki2024!` est un identifiant de **laboratoire**.

## TP 2 – Structurer le wiki

Critères de relecture :

| Critère | Attendu |
|---|---|
| Arborescence | Les cinq rubriques (Serveurs, Réseau, Procédures, Incidents, Projet) avec des liens qui fonctionnent (pas de lien rouge oublié) |
| Page d'accueil | Navigation, guide d'utilisation, règles de rédaction |
| Page « Serveurs » | Tableau rempli (nom, adresse, rôle, système, responsable) ; **adresses cohérentes** avec le plan du projet |
| Procédure « Création d'un utilisateur AD » | Auteur, date, version, objectif, prérequis, étapes numérotées, vérification, dépannage, historique |

**Incohérences à relever** dans la procédure modèle du TP :

- le domaine cité est `techcorp.local`, alors que le fil rouge est `siosarl.local` ;
- un mot de passe provisoire (`Pass@2024!`) figure dans la procédure : acceptable en laboratoire, **à ne pas reproduire** dans une procédure réelle.

## TP 3 – Git (testé)

| Étape | Attendu |
|---|---|
| `git init` | « Initialized empty Git repository » |
| Après `echo … > README.md` | `git status` : fichier **non suivi** (*untracked*) |
| Après `git add` | Fichier dans « Changes to be committed » |
| Après le 1er `commit` | `git log` : un commit |
| Après modification, `git diff` | Lignes ajoutées avec `+` |
| Après le 2e `commit` | `git log` : **deux** commits |

**Piège** : `git commit` sans identité configurée (`Please tell me who you are`) : revenir à l'étape de configuration.

## Cours – Terminaux mobiles

Question de contrôle du cours (perte d'un téléphone personnel recevant la messagerie professionnelle) :

1. **Prévenir immédiatement** le support (ticket prioritaire).
2. L'entreprise peut **verrouiller** ou **effacer la partie professionnelle** si l'appareil est géré, **réinitialiser** les mots de passe et **révoquer les sessions**.
3. En BYOD, l'entreprise **ne peut pas** effacer les données personnelles sans cadre écrit.

Aucune manipulation n'est demandée. Si une console de gestion de flotte est disponible, une démonstration d'inscription d'un appareil et d'application d'une politique complète utilement la séance.

## Pièges fréquents

- **Wiki sans règles de rédaction** : devient une décharge de pages non datées.
- **Procédure sans vérification ni dépannage.**
- **Messages de commit vagues** (« modif »).

## Bilan de compétences

Auto-évaluation ; B1.4, B1.5 et B1.6 proposées, à valider.
