# Corrigé – S02 : Inventaire d'un poste de travail

*Réservé à l'enseignant. Les valeurs dépendent du poste utilisé : le corrigé donne les attendus de **forme** et les réponses aux questions de réflexion.*

## Étape 0 – Identification

À contrôler : le **numéro de série** relevé sur l'étiquette doit correspondre à celui de `Get-CimInstance Win32_BIOS` (étape 1.2). Sinon : étiquette d'un autre composant, carte mère remplacée, ou machine virtuelle (numéro fictif : à signaler).

## Étape 1 – Collecte matérielle

| Information | Contrôle croisé |
|---|---|
| RAM | `msinfo32` (Go) et somme des `Capacity` de `Win32_PhysicalMemory` (octets ÷ 1 073 741 824) doivent concorder (à une barrette près si la RAM est partagée avec le GPU intégré). |
| CPU | Nom, nombre de cœurs et fréquence : `Win32_Processor`. La fréquence `MaxClockSpeed` est exprimée en MHz. |
| Disque | `Get-PhysicalDisk` donne le support (`SSD` ou `HDD`) et la taille réelle (≈ 931 Go pour un « 1 To »). Expliquer l'écart entre Go décimaux et Gio. |
| Réseau | `ipconfig /all` : l'adresse MAC est au format `00-1A-2B-…` sous Windows (tirets), alors que la fiche modèle utilise des deux-points. |
| BIOS | UEFI ou Legacy selon `msinfo32` ; la version doit être notée telle quelle. |

**Piège.** `wmic` est absent des versions récentes de Windows : un élève qui signale « commande introuvable » n'a pas commis d'erreur, c'est `Get-CimInstance` qui est attendu.

## Étape 2 – Inventaire logiciel

- Au moins 10 logiciels avec leur **version** et le **type de licence** (propriétaire, libre, gratuit, abonnement).
- `Get-Package` ne liste pas toujours tout : accepter le recoupement avec « Paramètres → Applications ».
- Mises à jour : `Get-HotFix` peut être vide sur certaines VM ; noter alors « aucune KB listée » plutôt que d'inventer.

## Étape 3 – Configuration réseau

Une adresse en 169.254.x.x signale l'échec du DHCP : à noter comme **observation**, pas à corriger dans cette séance.

## Étape 4 – Linux (option)

Valeurs attendues du même ordre de grandeur que sous Windows. `dmidecode` demande les droits administrateur. Sur une VM, le numéro de série est souvent fictif (« 0 » ou une chaîne de l'hyperviseur).

## Étape 5 – Fiche

Comparer avec l'annexe « exemple de fiche » : toutes les sections sont renseignées, chaque ligne est datée, le rédacteur est identifié. Une valeur non trouvée se note « non relevé » avec la raison.

## Questions de réflexion

| Q | Éléments de réponse |
|---|---|
| Q1 | Souvent le numéro de série, le type de licence ou la version exacte du BIOS. Ce qui compte : dire **où** l'élève a cherché. |
| Q2 | 200 postes : outil d'inventaire automatique (voir S05) ou script PowerShell exécuté à distance et exportant en CSV. Un élève qui évoque le script **et** la centralisation des résultats va au-delà. |
| Q3 | Logiciels non liés à l'activité : question de **licence**, de **sécurité** et de **conformité à la charte** ; recommander de les signaler plutôt que de les supprimer sans cadre. |
| Q4 | Non : logiciels, mises à jour, utilisateur affecté, adresse IP changent. Prévoir une **date de dernière mise à jour**, un propriétaire de la fiche et une revue périodique. |

## Pièges fréquents

- **Valeurs recopiées de l'annexe exemple** : vérifier par un détail propre au poste (numéro de série, nom).
- **Confusion Go / Gio** et Mo / Mio.
- **Fiche sans date** ou sans rédacteur.

## Bilan de compétences

Auto-évaluation ; B1.1 et B1.2 (amorcée) proposées, à valider.
