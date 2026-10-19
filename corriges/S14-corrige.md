# Corrigé – S14 : Changement et veille

*Réservé à l'enseignant. Les commandes Cisco sont des commandes IOS usuelles, **non rejouées** ici (pas de simulateur). La partie veille dépend de services externes.*

## Partie A – RFC : ajout du VLAN 20 (Marketing)

### Exemple de réponse (8 sections)

| Section | Contenu attendu |
|---|---|
| 1. Identification | Numéro, titre « Création du VLAN 20 Marketing », demandeur, date, type (standard ou normal), priorité |
| 2. Description | Créer le VLAN 20, y affecter les ports 10 à 15 du commutateur principal, créer l'étendue DHCP 192.168.20.100 – 192.168.20.200 |
| 3. Justification | Séparer le trafic Marketing du réseau général : sécurité (moins de diffusion), organisation, performance |
| 4. Impact et risque | Ports 10 à 15 déconnectés du VLAN actuel pendant l'opération ; coupure brève pour les postes concernés ; **risque** : mauvais ports affectés, absence de passerelle pour le VLAN 20, conflit avec un serveur DHCP existant |
| 5. Plan d'implémentation | 1. Sauvegarder la configuration. 2. Créer le VLAN 20 et le nommer. 3. Affecter les ports 10 à 15. 4. Créer l'étendue DHCP. 5. Vérifier la passerelle du VLAN 20. 6. Tester avec un poste. 7. Enregistrer la configuration. |
| 6. Plan de rollback | Remettre les ports dans le VLAN d'origine ; restaurer la sauvegarde de configuration ; **ne pas enregistrer** avant validation (un `reload` rétablit l'état précédent) |
| 7. Communication | Prévenir le service Marketing et la direction **avant** (date, durée de la coupure), informer à la fin |
| 8. Validation | Tests concrets : un poste du VLAN 20 obtient une adresse dans la plage, atteint sa passerelle, les autres VLAN fonctionnent ; **signature du demandeur** |

### Commandes de référence (IOS)

```text
vlan 20
 name MARKETING
exit
interface range fastEthernet 0/10 - 15
 switchport mode access
 switchport access vlan 20
exit
```

Adapter le nom des ports au modèle (sur certains 2960, `gigabitEthernet`). Vérification : `show vlan brief`.

Rollback : `interface range … ; switchport access vlan 1` (ou le VLAN d'origine), puis `no vlan 20`.

### Ce que le scénario ne dit pas

Le scénario **ne précise pas** la **passerelle** du VLAN 20 ni la façon dont le DHCP est joint (serveur dans le VLAN, ou relais `ip helper-address` sur le routeur). Une bonne RFC le **repère** et pose la question ; c'est un critère de la ligne « analyse de risque ». Une RFC qui crée l'étendue DHCP sans passerelle donne des postes qui ont une adresse mais pas de route.

### Barème indicatif (16 points)

| Critère | Points | Repères |
|---|---|---|
| RFC complète | /5 | Les 8 sections, renseignées |
| Description technique précise | /3 | VLAN, ports, plage DHCP exacts |
| Plan de rollback réaliste | /3 | Étapes concrètes, **déclencheur** du retour arrière |
| Analyse de risque | /3 | Au moins 3 risques et leurs parades |
| Communication | /2 | Qui, quand, par quel moyen |

## Partie B – Veille technologique

### Grille de relecture

| Critère | Attendu |
|---|---|
| Sources | 10 sources dans 5 catégories, **vérifiées** (le flux existe et est récent) |
| Alertes | 5 alertes avec des mots-clés précis |
| Lecture | 3 articles retenus avec **pertinence argumentée** (pour quoi faire ?) |
| Routine | Jour, heure, durée, outils, **où l'on note** |

### Points d'attention

- **Vérifier la liste des sources avant la séance** : certains services changent d'adresse ou disparaissent.
- Les outils proposés sont des **services externes** (compte personnel, données traitées hors du pays possible). Prévoir une **alternative sans compte** pour un élève qui refuse (lecteur de flux libre installé en local).
- Une veille sans **trace** (notes, fiches) n'est pas une preuve : relier à la compétence B1.6 et au portfolio.

## Pièges fréquents

- **RFC rédigée comme un tutoriel** (commandes sans justification ni rollback).
- **Rollback qui se limite à « annuler »**.
- **Veille de dix flux jamais lus** : privilégier peu de sources lues régulièrement.

## Bilan de compétences

Auto-évaluation ; B1.2, B1.4 et B1.6 proposées, à valider.
