# Corrigé – S11 : Configurations, sauvegarde et versionnement

*Réservé à l'enseignant. **Testé** : tout le déroulé (sauvegarde, vérification d'empreinte, Git, modification, panne, retour arrière, restauration) a été rejoué sur **Ubuntu 24.04** avec Apache 2.4.58. Le TP vise Debian : les résultats sont identiques, seuls la chaîne `Server:` et le nombre de fichiers changent légèrement.*

## Problème corrigé dans cette PR

L'annexe « script de sauvegarde » ne contenait **pas** le script attendu par le TP : elle proposait un script d'équipements Cisco (`backup_configs.sh`, avec `expect`) alors que le TP installe `sauvegarde-configs.sh` (archive `.tar.gz`, empreinte `.sha256`, journal `sauvegarde.log`). Le script Cisco avait aussi une redirection mal placée (`EOF > "$FILENAME"`). L'annexe donne maintenant :

1. le **script du TP**, testé ;
2. l'exemple Cisco conservé « pour aller plus loin », avec la redirection corrigée (non testé : demande des équipements joignables).

## Étape 0 – Préparation

`systemctl is-active apache2` doit répondre `active`. `curl -sI` : `Server: Apache/2.4.x (Debian)` sur Debian 12 (`Ubuntu` sur Ubuntu).

## Étape 1 – Sauvegarde et vérification

| Contrôle | Attendu |
|---|---|
| Fichiers créés | `configs-AAAAMMJJ-HHMMSS.tar.gz`, `configs-….sha256`, `sauvegarde.log` dans `/var/backups/configs` |
| `sha256sum -c` | `configs-….tar.gz: OK` |
| Contenu de l'archive | Chemins **relatifs** (`etc/apache2/…`), environ 150 à 200 entrées (194 sur notre test) |
| Taille | Quelques dizaines de Ko (34 Ko sur notre test) |

**Pièges.**

- Lancer `sha256sum -c` **hors** du dossier des sauvegardes : « fichier introuvable » (le fichier d'empreinte contient un nom relatif).
- Script non exécutable (`chmod 750` oublié) : `Permission denied`.
- Oubli de `sudo` : le dossier `/var/backups` n'est pas accessible en écriture.

## Étape 2 – Baseline Git

`git log --oneline` doit afficher un seul commit « Baseline ». Piège : `git commit` sans identité configurée (`Please tell me who you are`).

## Étape 3 – Modification

| Contrôle | Attendu |
|---|---|
| `git diff` | `-ServerTokens OS` et `+ServerTokens Prod` (sur Debian, la valeur d'origine est `OS`) |
| `apache2ctl configtest` | `Syntax OK` |
| `curl -sI … \| grep Server` | `Server: Apache` (sans version) |
| `git log --oneline` | Deux commits, le second avec un message qui dit **pourquoi** |

## Étape 4 – Panne et retour arrière

- Après `ServerTokensss Prod`, `configtest` répond : `Invalid command 'ServerTokensss', perhaps misspelled…` (testé).
- Après la restauration par `rsync --delete`, `diff -r` répond « identique » et `Server: Apache` s'affiche de nouveau (testé).
- **À faire dire** : on revient à la dernière version **saine versionnée**, on ne « défait pas à la main ».
- Piège : lancer `systemctl restart` au lieu de `reload` **avant** `configtest` : le service ne redémarre plus.

## Étape 5 – Planification et restauration d'essai

- Ligne `cron` : `30 2 * * * /usr/local/bin/sauvegarde-configs.sh`.
- Restauration d'essai : `diff -r /tmp/restauration/etc/apache2 /etc/apache2` ne doit rien afficher (testé : « restauration identique »).
- **À faire dire** : la tâche planifiée n'est jamais « prouvée » tant qu'elle n'a pas tourné **seule** une fois (relire le journal le lendemain).

## Étape 6 – Journal des modifications

Une ligne par modification : version, date, auteur, **raison**, référence du ticket. Refuser « modif Apache ».

## Partie facultative – Cisco

| Constat | Explication |
|---|---|
| Nom de machine différent entre `running-config` et `startup-config` | La modification est en mémoire vive tant que `copy running-config startup-config` n'a pas été faite |
| Après `reload` sans enregistrement | L'ancien nom revient |

## Bilan de compétences

Auto-évaluation ; B1.1, B1.5 et B1.2 proposées, à valider.
