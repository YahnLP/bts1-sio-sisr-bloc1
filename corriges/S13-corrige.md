# Corrigé – S13 : Images système

*Réservé à l'enseignant. **Non testé** : Windows, Sysprep et Clonezilla ne sont pas disponibles dans l'environnement de rédaction. Ce corrigé donne les attendus et signale des points d'attention relevés à la relecture.*

## Phase 1 – Machine de référence

| Point | Attendu |
|---|---|
| Logiciels | 7-Zip, VLC, Firefox, Adobe Reader présents |
| Nettoyage | Fichiers temporaires et corbeille vidés |
| Sysprep | Lancé en **administrateur**, `/generalize /oobe /shutdown`, la machine s'éteint |

**Points d'attention.**

- Dans les blocs `cmd` du TP, les lignes commençant par `#` sont des **commentaires de lecture** : en `cmd`, elles provoquent une erreur si on les recopie (le commentaire `cmd` est `REM` ou `::`). Prévenir les élèves.
- Sysprep peut **échouer** s'il reste des applications Store provisionnées incohérentes (Windows 11) : lire `C:\Windows\System32\Sysprep\Panther\setupact.log` ; voir l'annexe de la séance.
- La machine de référence **ne doit pas redémarrer sur Windows** après Sysprep : sinon l'image n'est plus « généralisée » et il faut refaire l'opération.

## Phase 2 – Capture

| Étape | Attendu |
|---|---|
| Mode | `device-image` → `local_dev` → `Beginner` → `savedisk` |
| Nom de l'image | Daté et descriptif (par exemple `2024-11-20-Win11-Office-img`) |
| Dossier de sortie | `/home/partimag/<nom>/` avec les fichiers de table de partitions et les fichiers de partition compressés |
| Vérification de l'image | Le TP saute la vérification pour gagner du temps ; **en production, on vérifie l'image** (on ne découvre pas à la restauration qu'elle est illisible) |

## Phase 3 – Déploiement

- Le disque de la machine cible doit être **au moins aussi grand** que le disque source (sinon l'opération est refusée).
- L'étape `restoredisk` **efface** le disque cible : l'élève doit pouvoir dire pourquoi la confirmation est demandée deux fois.

## Phase 4 – Validation

| Contrôle | Attendu |
|---|---|
| OOBE | L'assistant de première configuration s'affiche (preuve que Sysprep a généralisé) |
| `whoami /user` | SID de la forme `S-1-5-21-…-1001` |
| Tests | Logiciels, fond d'écran et raccourci présents ; réseau fonctionnel |
| Activation | Dépend de la licence : noter l'état tel quel, sans conclure à une erreur |

**Nuance sur le SID.** Le TP présente la comparaison des SID comme preuve de bonne généralisation. À savoir : depuis 2009, l'éditeur du système indique qu'un **SID de machine dupliqué n'est pas un problème technique** dans la plupart des cas ; la généralisation par Sysprep reste cependant la **méthode prise en charge** pour déployer une image (nom, pilotes, activation, première configuration). Faire dire : on utilise Sysprep parce que c'est la procédure **supportée**, pas uniquement pour le SID.

## Tableau de comparaison

| Élément | VM 1 | VM 2 | Identique ? |
|---|---|---|---|
| Nom de machine | Nom d'origine | `PC-CLONE-01` | Non (normal) |
| SID | Différent | Différent | Non (normal) |
| Logiciels, fond d'écran | Présents | Présents | Oui |
| Espace disque utilisé | Quelques dizaines de Go | Même ordre de grandeur | Oui |

Comme la VM 1 est généralisée, elle **ne peut plus être démarrée telle quelle** sans repasser par l'OOBE : si l'élève veut comparer le SID, il doit l'avoir noté **avant** Sysprep.

## Phase 5 – Procédure de déploiement

Utiliser la grille de relecture de S12 : objectif, prérequis, étapes avec captures, dépannage (annexe), références.

## Pièges fréquents

- **Sysprep oublié** : le clone démarre sans OOBE, avec les noms et paramètres de la référence.
- **Mauvais disque sélectionné** à la restauration : perte de données sur la clé ou le disque source.
- **Image sur clé USB pleine** ou de taille insuffisante.
- **ISO de Clonezilla non retirée** : la VM redémarre en boucle sur Clonezilla.

## Bilan de compétences

Auto-évaluation ; B1.1, B1.5 et B1.2 proposées, à valider.
