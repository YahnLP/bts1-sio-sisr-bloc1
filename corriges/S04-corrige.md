# Corrigé – S04 : Résoudre un incident

*Réservé à l'enseignant. Les trois incidents sont **simulés** : le TP ne fournit pas de panne ​précise. Ce document propose, pour chaque incident, une panne à reproduire, la démarche attendue et des éléments de fiche. **Ces causes sont des propositions : à adapter à l'environnement de la salle.***

## Préparer les pannes (proposition)

| Incident | Panne à reproduire | Comment |
|---|---|---|
| 1 – ​Imprimante | Imprimante **hors ligne** (ou file d'attente bloquée) | Mettre l'imprimante virtuelle sur « Utiliser l'imprimante hors connexion », ou suspendre le service **Spouleur d'impression** après avoir envoyé un travail |
| 2 – Accès refusé | **Droits NTFS** manquants pour le groupe de l'utilisateur sur le dossier RH | Retirer GRP_RH de l'onglet Sécurité du ​dossier ; vérifier d'abord que le partage donne le droit Modification |
| 3 – Poste lent | Processus **consommateur de ressources** (CPU ou disque) et/ou **programmes de démarrage** nombreux | Lancer un script de charge (par exemple une boucle de calcul) en tâche de démarrage ; vérifier l'espace disque |

Tester ​chaque panne **avant** la séance sur le poste de l'élève : une panne mal reproduite coûte 30 minutes.

## Incident 1 – Imprimante

### Démarche attendue (du physique vers l'application)

1. Couche physique : alimentation, voyants, bourrage, câble ou réseau.
2. Système : statut **hors ligne** ? file d'attente ? imprimante par défaut ?
3. ​Pilote et port : pilote correct, port TCP/IP avec la bonne adresse (ping).

### Éléments de ticket

| Champ | Attendu |
|---|---|
| Titre | « Impression impossible – Comptabilité – M. Durand – avant 14 h » |
| Impact | Relevés à imprimer pour une réunion avec le commissaire aux comptes |
| ​Priorité | P2 ou P3 (impact limité à un utilisateur, échéance proche) |
| Niveau | N1 |

### Commandes utiles

```powershell
Get-Printer | Select-Object Name, PrinterStatus, PortName
Get-PrintJob -PrinterName "NomImprimante"
Restart-Service Spooler
Test-NetConnection -ComputerName 192.168.0.50 -Port 9100
```

### Fiche KB (exemple)

| Section | Contenu |
|---|---|
| Titre | « L'impression n'aboutit pas : imprimante hors ligne ou file bloquée » |
| Symptômes | Document envoyé, aucune sortie, travail qui disparaît |
| Cause principale | Imprimante passée en mode hors ​connexion, ou file d'attente bloquée |
| Solution | 1. Vérifier le voyant et le câble. 2. Décocher « Utiliser l'imprimante hors connexion ». 3. Redémarrer le service Spouleur et vider la file. |
| Vérification | Page de test ​imprimée |
| Escalade si | Le ping échoue (problème réseau) ou si le pilote doit être déployé |

## Incident 2 – Accès refusé

### Démarche attendue

Connectivité (ping, autres partages) → authentification (compte actif, non verrouillé, mot de passe) → droits de partage → droits NTFS. La **cause** dans la panne ​proposée est un droit NTFS manquant.

### À faire dire

- **Les deux jeux de droits se combinent** : c'est le plus restrictif qui s'applique.
- On donne les droits à un **groupe** (GRP_RH), pas à un utilisateur isolé.
- Les **permissions effectives** de l'onglet Sécurité montrent le ​résultat réel.
- On ne règle pas le problème en donnant « Contrôle total à tout le monde ».

### Question de réflexion

Voir la correction du TP (partage en Modification, NTFS en Lecture → Lecture s'applique).

### Fiche KB (exemple)

| Section | Contenu |
|---|---|
| ​Titre | « Accès refusé à un dossier partagé alors que le partage est correct » |
| Cause principale | Droits NTFS insuffisants pour le groupe de l'utilisateur |
| Solution | 1. Propriétés → Sécurité du dossier. 2. Ajouter le ​groupe avec le droit voulu. 3. Vérifier les permissions effectives. |
| Escalade si | Un refus explicite (Deny) existe, ou si l'héritage est rompu |

## Incident 3 – Poste lent

### Démarche attendue

Gestionnaire des tâches (CPU, RAM, disque) → processus responsable → ​services et démarrage → espace disque.

### Valeurs de référence du TP

CPU < 80 % au repos, RAM < 85 %, mémoire disponible > 500 Mo, activité disque < 80 %. Le **retour à la normale après redémarrage** puis la dégradation en quelques minutes ​oriente vers un processus lancé au **démarrage** ou une tâche planifiée.

### Recommandations à Julien (exemples)

1. Limiter les programmes lancés au démarrage.
2. Garder de l'espace libre sur le disque (supérieur à 10 %) et vider les fichiers temporaires.
3. Signaler tôt une lenteur plutôt que d'attendre une réunion importante.

### Fiche KB (exemple)

| Section | ​Contenu |
|---|---|
| Titre | « Poste lent après démarrage : processus consommateur » |
| Solution | 1. Ouvrir le Gestionnaire des tâches. 2. Identifier le ​processus. 3. Désactiver son lancement au démarrage ou le désinstaller (après avis). |
| Vérification | CPU et RAM revenus sous les seuils après 15 minutes |
| Escalade si | Le processus est inconnu (risque de logiciel malveillant) |

## Bilan des trois incidents

| Incident | MTTR raisonnable pour un élève | Niveau |
|---|---|---|
| Imprimante | 10 à 20 min | N1 |
| Accès dossier | 20 à 40 min | N1/N2 |
| ​Poste lent | 20 à 40 min | N1 |

Ces durées sont des **ordres de grandeur d'observation**, pas des normes.

## Pièges fréquents

- **Plusieurs actions à la fois** : on ne sait plus laquelle a fonctionné. Refuser.
- **Redémarrer dès le début** : perd l'état utile au diagnostic.
- **Droits donnés à l'utilisateur** plutôt qu'au groupe.
- **Fiche KB trop vague** (« ​redémarrer ») : exiger des symptômes précis et des étapes testables.

## Bilan de compétences

Auto-évaluation ; B1.2, B1.1 et B1.5 (amorcée) proposées, à valider.
