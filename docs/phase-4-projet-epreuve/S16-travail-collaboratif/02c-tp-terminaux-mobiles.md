# TP – Gérer des terminaux mobiles (sans installation)

*BTS SIO SISR 1re année – Bloc 1 – S16*

## Objectif

Appliquer le [cours sur les terminaux mobiles](01b-cours-terminaux-mobiles.md) à une situation concrète : **contrôler la conformité d'une flotte**, **auditer un appareil**, **traiter une perte** et **cadrer les usages** par écrit. Ce TP ne demande **aucune installation** : il se fait avec un tableau, un téléphone et un traitement de texte. Durée indicative : **45 minutes** (peut être fait en travail personnel).

> [!NOTE]
> Il n'y a pas de console de gestion de flotte (MDM) dans ce TP. Si l'enseignant en dispose, il peut la montrer après la partie 1 : inscription d'un appareil, application d'une politique, verrouillage à distance.

## Situation

L'entreprise **Atelier Delmas** (25 salariés) a 12 téléphones fournis (usage mixte) et plusieurs salariés qui lisent leur messagerie professionnelle sur leur téléphone personnel (BYOD). Le dirigeant te demande de vérifier que les appareils respectent la **politique minimale** suivante :

| Règle | Exigence |
|---|---|
| R1 | Code de verrouillage activé |
| R2 | Stockage chiffré |
| R3 | Système à jour : **Android 13** ou plus, **iOS / iPadOS 17** ou plus |
| R4 | Aucune application installée hors du magasin officiel |

## Partie 1 – Contrôler la conformité (15 min)

Voici un extrait de l'inventaire.

| ID | Modèle | Système | Code | Chiffrement | Appli hors magasin officiel | Propriétaire |
|---|---|---|---|---|---|---|
| M01 | Smartphone A | Android 14 | oui | oui | non | fourni |
| M02 | Smartphone B | Android 11 | oui | oui | non | fourni |
| M03 | Tablette C | iPadOS 17 | oui | oui | non | fourni |
| M04 | Smartphone D | Android 14 | non | oui | non | BYOD |
| M05 | Smartphone E | iOS 16 | oui | oui | non | BYOD |
| M06 | Smartphone F | Android 13 | oui | non | oui | BYOD |

1. Recopie le tableau en ajoutant une colonne « Règles non respectées » (R1 à R4) et une colonne « Conforme ? ».
2. Combien d'appareils sont conformes ? Combien de BYOD sont concernés par un écart ?
3. Propose, pour chaque écart, l'action à demander à l'utilisateur. Pour un appareil **BYOD**, que peut-on **exiger** et que doit-on **demander** (voir le cours, § 2) ?

## Partie 2 – Auditer un appareil (15 min)

Sur **ton propre téléphone** (ou un appareil de la salle), vérifie les règles R1 à R4. Les noms des menus varient selon le système et la version : cherche dans les réglages « sécurité », « verrouillage » et « mise à jour ».

1. Complète la fiche d'audit ci-dessous **sans noter d'information personnelle** (ni numéro, ni compte, ni code).

   | Contrôle | Où le vérifier (menu utilisé) | Résultat |
   |---|---|---|
   | Code de verrouillage et verrouillage automatique | | |
   | Chiffrement du stockage | | |
   | Version du système et mises à jour en attente | | |
   | Origine des applications (magasin officiel seulement) | | |
   | Localiser / verrouiller à distance activé | | |

2. Si un contrôle est négatif sur ton appareil, indique la correction. N'applique rien sur un appareil qui ne t'appartient pas.

## Partie 3 – Traiter une perte (10 min)

Une commerciale, Mme Roux, prévient le support : « J'ai perdu mon téléphone personnel dans le train. Ma messagerie professionnelle y est configurée. »

1. Rédige le **ticket** (titre, description, urgence, catégorie, premières actions) comme dans la séance S03.
2. Écris les actions dans l'ordre, avec **qui** les fait (utilisateur, support, responsable).
3. Dans quel cas faut-il aussi alerter le responsable de la protection des données ?

## Partie 4 – Cadrer par écrit (5 min)

Rédige un **extrait de charte BYOD** de cinq règles maximum (une phrase chacune) : ce qui est exigé de l'utilisateur, ce que l'entreprise peut faire (par exemple effacer la partie professionnelle), ce qu'elle ne fait pas (lire les données personnelles).

## Livrable

Une page : tableau complété (partie 1), fiche d'audit (partie 2), ticket et chronologie (partie 3), extrait de charte (partie 4). Nom du fichier : `RENDU-B1-S16-MOBILES-NOM.pdf`.
