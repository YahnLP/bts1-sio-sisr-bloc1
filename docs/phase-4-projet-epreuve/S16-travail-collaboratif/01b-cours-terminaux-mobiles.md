# Cours – Les terminaux mobiles en entreprise

*BTS SIO SISR 1re année – Bloc 1 – S16*

> [!NOTE] Ce que tu dois savoir déjà
> - **Prérequis :** ticket, inventaire de parc, profils d'utilisateurs (S03, S05, S06).
> - **Expliqués dans ce cours :** terminal mobile, BYOD, gestion de flotte (MDM), politique de sécurité, effacement à distance, charte d'usage.

## À la fin de ce cours, tu sauras

- [ ] dire ce qu'est un **terminal mobile** et en quoi sa gestion diffère de celle d'un poste fixe ;
- [ ] distinguer **BYOD**, **appareil fourni** et **appareil fourni à usage mixte** ;
- [ ] décrire ce que fait une solution de **gestion de flotte mobile** ;
- [ ] citer les **règles de sécurité** minimales d'un téléphone professionnel ;
- [ ] décider quoi faire en cas de **perte ou de vol**.

---

## 1. Pourquoi c'est un sujet pour le support ?

Un téléphone ou une tablette professionnelle **contient** la messagerie, les contacts, parfois des documents de l'entreprise, et il **sort** de l'entreprise. Pour le technicien support, cela ajoute :

- des **inventaires** à tenir (modèle, numéro de série, utilisateur, version du système) ;
- des **demandes** nouvelles (« mon téléphone n'a plus la messagerie ») ;
- des **risques** nouveaux : **perte**, **vol**, applications non maîtrisées, réseaux publics.

## 2. Qui possède l'appareil ?

| Modèle | Définition | Avantage | Point d'attention |
|---|---|---|---|
| **Appareil fourni** | L'organisation achète et gère l'appareil, usage professionnel | Contrôle complet | Coût, deux téléphones à porter |
| **Appareil fourni à usage mixte** | L'organisation le fournit, l'usage personnel est toléré | Un seul appareil pour l'utilisateur | Séparer le pro et le perso, définir les règles |
| **BYOD** (*bring your own device*) | L'utilisateur utilise **son** appareil personnel | Peu coûteux | Moins de contrôle, **vie privée** à respecter, matériel hétérogène |

> [!WARNING]
> En BYOD, l'organisation **n'a pas le droit** de lire les données personnelles de l'utilisateur ni de tout effacer sans cadre clair. Les règles se définissent **par écrit** (charte, consentement) et avec le responsable de la protection des données.

## 3. La gestion de flotte mobile (MDM)

Une solution de **MDM** (*mobile device management*) permet de **gérer des appareils à distance** depuis une console.

<figure class="graphe diagramme">
<svg viewBox="0.00 0.00 587.60 173.60" style="max-width:784px" role="img" aria-label="Schéma" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g class="graph" transform="scale(1 1) rotate(0) translate(10.8 162.8)">
<g class="node n&#45;rect">
<path fill="none" stroke="black" stroke-width="1.8" d="M213,-80C213,-80 12,-80 12,-80 6,-80 0,-74 0,-68 0,-68 0,-55 0,-55 0,-49 6,-43 12,-43 12,-43 213,-43 213,-43 219,-43 225,-49 225,-55 225,-55 225,-68 225,-68 225,-74 219,-80 213,-80"/>
<text text-anchor="start" x="19" y="-58" font-family="Helvetica,sans-Serif" font-size="15.00">Console d&#39;administration</text>
</g>
<g class="node n&#45;rect">
<path fill="none" stroke="black" stroke-width="1.8" d="M554,-152C554,-152 449,-152 449,-152 443,-152 437,-146 437,-140 437,-140 437,-127 437,-127 437,-121 443,-115 449,-115 449,-115 554,-115 554,-115 560,-115 566,-121 566,-127 566,-127 566,-140 566,-140 566,-146 560,-152 554,-152"/>
<text text-anchor="start" x="456" y="-130" font-family="Helvetica,sans-Serif" font-size="15.00">Téléphone 1</text>
</g>
<g class="edge">
<path fill="none" stroke="black" stroke-width="1.8" d="M149.08,-80.1C176.85,-93.64 216.82,-111.03 254,-119.5 311.44,-132.59 378.26,-135.66 427.82,-135.7"/>
<polygon fill="black" stroke="black" stroke-width="1.8" points="427.88,-138.85 436.87,-135.67 427.86,-132.55 427.88,-138.85"/>
<text text-anchor="start" x="254" y="-138.1" font-family="Helvetica,sans-Serif" font-size="13.00">politiques, applications</text>
</g>
<g class="node n&#45;rect">
<path fill="none" stroke="black" stroke-width="1.8" d="M546,-37C546,-37 457,-37 457,-37 451,-37 445,-31 445,-25 445,-25 445,-12 445,-12 445,-6 451,0 457,0 457,0 546,0 546,0 552,0 558,-6 558,-12 558,-12 558,-25 558,-25 558,-31 552,-37 546,-37"/>
<text text-anchor="start" x="464" y="-15" font-family="Helvetica,sans-Serif" font-size="15.00">Tablette 2</text>
</g>
<g class="edge">
<path fill="none" stroke="black" stroke-width="1.8" d="M176.97,-43C248.29,-30.38 363.46,-17.54 435.42,-14.17"/>
<polygon fill="black" stroke="black" stroke-width="1.8" points="435.99,-17.3 444.85,-13.78 435.72,-11.01 435.99,-17.3"/>
</g>
<g class="edge">
<path fill="none" stroke="black" stroke-width="1.8" d="M454.5,-114.93C439.83,-109.6 423.41,-104.23 408,-100.5 351.72,-86.9 288.18,-77.72 234.55,-71.71"/>
<polygon fill="black" stroke="black" stroke-width="1.8" points="234.64,-68.55 225.35,-70.7 233.95,-74.82 234.64,-68.55"/>
<text text-anchor="start" x="276.5" y="-104.1" font-family="Helvetica,sans-Serif" font-size="13.00">état, conformité</text>
</g>
<g class="edge">
<path fill="none" stroke="black" stroke-width="1.8" d="M444.86,-35.59C390.17,-45.73 304.9,-56.24 234.56,-62.07"/>
<polygon fill="black" stroke="black" stroke-width="1.8" points="233.89,-58.97 225.18,-62.83 234.4,-65.25 233.89,-58.97"/>
</g>
</g>
</svg>
</figure>

| Fonction | Ce que cela permet |
|---|---|
| **Inscription** | Enrôler l'appareil : il appartient désormais à la flotte |
| **Politiques** | Imposer un code de verrouillage, le **chiffrement**, une version minimale du système |
| **Applications** | Installer, mettre à jour ou interdire des applications |
| **Inventaire** | Modèle, version, applications installées, dernier contact |
| **Conformité** | Repérer et isoler un appareil qui ne respecte plus la politique |
| **Perte ou vol** | **Verrouiller**, **localiser**, **effacer à distance** (tout ou seulement la partie professionnelle) |

## 4. Les règles de sécurité de base

| Règle | Pourquoi |
|---|---|
| Code de verrouillage et verrouillage automatique | Un appareil perdu ne doit pas s'ouvrir |
| **Chiffrement** du stockage | Les données restent illisibles sans le code |
| Mises à jour du système et des applications | Corriger les failles connues |
| Applications issues de **sources officielles** seulement | Limiter les logiciels malveillants |
| **Séparation** pro et perso | Protéger les données de l'entreprise comme la vie privée |
| Prudence avec les **réseaux Wi-Fi publics** | Les échanges peuvent être observés |

## 5. Si l'appareil est perdu ou volé

Ordre des actions (à adapter à la procédure de l'organisation) :

1. **Déclarer** immédiatement : ouvrir un **ticket prioritaire** (le délai compte).
2. **Verrouiller** l'appareil à distance et **tenter de le localiser**.
3. **Changer** les mots de passe des comptes de l'utilisateur (messagerie en premier).
4. **Effacer à distance** si l'appareil ne revient pas, selon la procédure.
5. **Évaluer** s'il y a eu **fuite de données personnelles** : si oui, alerter le responsable de la protection des données (la notification est une obligation légale).
6. **Documenter** l'incident (ticket, chronologie) et **remplacer** l'appareil.

**Je vérifie.** Un apprenti perd son téléphone personnel, qui reçoit sa messagerie professionnelle. Que fait-il en premier, et que peut faire l'entreprise ?

<details markdown="1">
<summary>Voir la réponse</summary>

Il **prévient tout de suite** le support (ticket prioritaire) : plus le délai est court, plus le risque baisse. L'entreprise peut **verrouiller** ou **effacer la partie professionnelle** (si l'appareil est géré), **réinitialiser** les mots de passe de la messagerie et **révoquer les sessions** ouvertes.

</details>

## 6. Une charte pour cadrer les usages

La **charte d'usage** (ou politique d'utilisation) est un document **signé** qui indique : ce qui est autorisé, ce qui est interdit, ce que l'organisation peut contrôler, ce que l'utilisateur doit faire en cas de perte. Elle protège **les deux côtés**.

## À retenir

- Un terminal mobile est un **poste de travail qui sort de l'entreprise** : inventaire, politique et procédure de perte sont indispensables.
- **BYOD** impose de respecter la **vie privée** de l'utilisateur.
- Un **MDM** impose des **politiques**, **installe** des applications et permet **verrouillage et effacement à distance**.
- **Perte ou vol** : ticket prioritaire, verrouillage, changement de mots de passe, évaluation de la fuite éventuelle de données.

> [!NOTE]
> Ce cours est une **introduction**. Pour une démonstration, si une console de gestion de flotte est disponible dans la salle, l'enseignant peut montrer l'inscription d'un appareil et l'application d'une politique.
