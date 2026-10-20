# Corrigé – S16 : Travail collaboratif (wiki, Git, terminaux mobiles)

*Réservé à l'enseignant. **Testé** : la partie Git. **Non testé** : l'installation de DokuWiki (le site de téléchargement n'est pas joignable depuis l'environnement de ​rédaction) ; seule la logique de la configuration Apache est relue. Le TP « terminaux mobiles » (`02c`) ne demande aucune installation.*

## TP 1 – DokuWiki

| Étape | Attendu | Pièges |
|---|---|---|
| 1. Apache et PHP | `apache2 -v` et `php -v` répondent | Paquets manquants : `php-xml` est nécessaire |
| 2. Téléchargement | Un dossier `dokuwiki-AAAA-MM-JJ…` apparaît dans `/tmp` | Le nom du dossier change ​selon la version : l'élève **adapte** la commande `mv` |
| 3. Déplacement et droits | `www-data` propriétaire de `/var/www/dokuwiki` | `chmod -R 755` est une simplification (fichiers en 644 en pratique) |
| 4. VirtualHost | `a2ensite wiki.conf`, `reload`, `configtest` | Le site par défaut peut encore répondre : ​désactiver `000-default.conf` ou tester par le **nom** `wiki.local` |
| 5. Fichier `hosts` | Adresse du serveur et `wiki.local` | Sans cela, le nom n'est pas résolu |
| 6. Installation web | « DokuWiki est maintenant configuré. » | Politique ACL : « Public » (lecture pour tous, écriture pour les utilisateurs) est cohérente avec le sujet |
| 7. Sécurité | `install.php` supprimé : `ls` répond « No such file or directory » | Oublier cette étape laisse l'installeur accessible |

**À ​faire dire / à vérifier**

- `AllowOverride All` n'est pas un détail : DokuWiki s'appuie sur des fichiers `.htaccess` pour protéger ses dossiers de configuration et de données. **Test à faire** : `curl -sI http://wiki.local/conf/local.php` doit renvoyer un refus (403), pas le ​contenu.
- Le mot de passe `AdminWiki2024!` est un identifiant de **laboratoire**.

## TP 2 – Structurer le wiki

Critères de relecture :

| Critère | Attendu |
|---|---|
| Arborescence | Les cinq rubriques (Serveurs, Réseau, Procédures, Incidents, Projet) avec des liens qui fonctionnent (pas de lien rouge oublié) |
| Page d'accueil | Navigation, guide d'utilisation, règles de rédaction |
| Page « Serveurs » | Tableau rempli (nom, adresse, rôle, ​système, responsable) ; **adresses cohérentes** avec le plan du projet |
| Procédure « Création d'un utilisateur AD » | Auteur, date, version, objectif, prérequis, étapes numérotées, vérification, dépannage, historique |

**Incohérences à relever** dans la procédure modèle du TP :

- le domaine cité est `techcorp.local`, alors que le fil ​rouge est `siosarl.local` ;
- un mot de passe provisoire (`Pass@2024!`) figure dans la procédure : acceptable en laboratoire, **à ne pas reproduire** dans une procédure réelle.

## TP 3 – Git (testé)

| Étape | Attendu |
|---|---|
| `git init` | « Initialized empty Git repository » |
| Après `echo … > README.md` | `git status` : fichier **non suivi** (*untracked*) |
| Après `git add` | Fichier dans « ​Changes to be committed » |
| Après le 1er `commit` | `git log` : un commit |
| Après modification, `git diff` | Lignes ajoutées avec `+` |
| Après le 2e `commit` | `git log` : **deux** commits |

**Piège** : `git commit` sans identité configurée (`Please tell me who you are`) : revenir à l'étape de configuration.

## Cours – Terminaux mobiles

Question de contrôle du cours (perte d'un téléphone personnel recevant la messagerie professionnelle) :

1. **Prévenir immédiatement** le support (ticket prioritaire).
2. L'entreprise peut **verrouiller** ou **effacer la partie professionnelle** si l'appareil est géré, **réinitialiser** les mots de ​passe et **révoquer les sessions**.
3. En BYOD, l'entreprise **ne peut pas** effacer les données personnelles sans cadre écrit.

Voir le corrigé du TP `02c` ci-dessous. Si une console de gestion de flotte est disponible, une démonstration d'inscription d'un appareil et d'application d'une politique complète utilement la séance.

## TP – Terminaux mobiles (`02c`)

*Non testé en séance : TP sans installation, corrigé de la partie 1 vérifié par relecture du ​tableau.*

**Partie 1.**

| ID | Règles non respectées | Conforme ? |
|---|---|---|
| M01 | aucune | oui |
| M02 | R3 (Android 11 < 13) | non |
| M03 | aucune | oui |
| M04 | R1 (pas de code) | non |
| M05 | R3 (iOS 16 < 17) | non |
| M06 | R2 (non chiffré) et R4 (application hors magasin) | non |

2 appareils conformes sur 6 ; les 3 BYOD (M04, M05, M06) ont tous au moins un écart. Actions : M02 et M05 ​mettre à jour (ou remplacer si le modèle n'est plus pris en charge) ; M04 activer le code ; M06 activer le chiffrement et désinstaller l'application hors magasin. En BYOD, l'entreprise **exige** ces règles comme **condition d'accès** à la messagerie professionnelle, mais **ne peut pas** imposer de changements sur la partie personnelle ni lire les données personnelles : l'utilisateur est **invité** à se mettre en conformité et l'accès peut être suspendu à défaut.

**Partie 2.** Réponses personnelles : vérifier que la ​fiche indique le menu utilisé et ne contient aucune donnée personnelle.

**Partie 3.** Ticket : titre « Perte d'un téléphone personnel avec messagerie professionnelle », urgence **haute**, catégorie sécurité/mobile ; chronologie : (1) utilisatrice prévient le ​support ; (2) support ouvre le ticket prioritaire ; (3) réinitialisation du mot de passe de la messagerie et révocation des sessions ; (4) verrouillage ou effacement de la partie professionnelle si l'appareil est géré ; (5) utilisatrice tente de localiser et de verrouiller son appareil, puis déclare la perte à son ​opérateur ; (6) évaluation de la fuite de données. Le responsable de la protection des données est alerté si des **données personnelles** (clients, salariés) étaient accessibles sur l'appareil.

**Partie 4.** Exemples de règles : code obligatoire ; mises à jour installées ; applications du magasin officiel seulement ; déclaration immédiate de ​toute perte ; l'entreprise peut effacer **uniquement** la partie professionnelle et ne consulte pas les données personnelles.

## Pièges fréquents

- **Wiki sans règles de rédaction** : devient une décharge de pages non datées.
- **Procédure sans vérification ni dépannage.**
- **Messages de commit vagues** (« modif »).

## Bilan de compétences

Auto-évaluation ; B1.4, B1.5 et B1.6 proposées, à valider.
