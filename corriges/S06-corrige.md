# Corrigé – S06 : GLPI et gestion des tickets

*Réservé à l'enseignant. **Non testé** : l'instance GLPI de la salle n'est pas disponible dans l'environnement de rédaction. Les menus peuvent varier ​selon la version de GLPI.*

## Préparer l'instance

Le TP suppose :

- des comptes `technicien_[prénom]` et un compte de démonstration pour chaque élève ;
- les ordinateurs importés d'OCS (voir S05) ;
- les catégories de tickets, dont « Accès et Comptes → Droits insuffisants » ;
- un groupe « Techniciens N2 Système » (sinon, escalader vers un autre ​technicien) ;
- les utilisateurs fictifs Sylvie Mercier et Karim Benali.

Le mot de passe `Glpi2024!` du TP est celui du **laboratoire** ; le TP demande de le changer à la première connexion. Vérifier que les élèves le font.

## Partie A – Prise en main

Le nombre d'ordinateurs importés dépend de l'instance : l'élève doit **donner le chiffre lu** à l'écran. Contrôler la cohérence avec la liste filtrée.

## Partie B – Les quatre scénarios

### Ticket 1 – Création et affectation

| Champ | Attendu |
|---|---|
| Type | Incident |
| ​Titre | « Imprimante réseau hors ligne – Comptabilité – S. Mercier – avant 11 h » |
| Catégorie | Matériel > Impression (ou la plus proche de l'instance) |
| Description | Symptôme (« Hors ligne » dans Windows), depuis ce matin, actions tentées (redémarrage de l'imprimante et du PC), échéance 11 h |
| Urgence / Impact | Urgence **haute** (échéance), ​impact **faible** (un utilisateur) → priorité calculée **moyenne** ou **haute** selon la matrice paramétrée |

**À faire remarquer** : la priorité est **calculée** à partir de l'urgence et de l'impact ; l'élève ne la saisit pas.

L'onglet *Éléments* doit être rempli avec **l'imprimante ou le poste concerné** (lien avec le parc).

### Ticket 2 – Suivi et escalade

| Étape | Attendu |
|---|---|
| Suivi public | Écrit pour l'**utilisateur** : ce qui a été vérifié, pourquoi on escalade, sans jargon |
| Suivi ​interne | Écrit pour les **collègues** : constats techniques, hypothèse (serveur d'impression) |
| Délai SLA | Selon l'instance : peut être vide si aucun SLA n'est configuré. Dans ce cas, noter « non configuré » et ouvrir la discussion |

Piège : un suivi ​interne rédigé comme un message à l'utilisateur, ou l'inverse. Exiger la distinction (voir Q3).

### Ticket 3 – Demande de service

| Champ | Attendu |
|---|---|
| Type | Demande de service |
| Titre | « Accès au ​dossier partagé Marketing – K. Benali (nouvel arrivant) » |
| Description | Reformulation : nouvel arrivant, accès refusé, groupe à vérifier |
| Étapes simulées | Compte AD actif → appartenance à `GRP_MARKETING` → ajout au groupe → droits NTFS du ​dossier |
| Solution (3 à 5 lignes) | Compte vérifié ; utilisateur ajouté au groupe ; droits NTFS confirmés ; reconnexion de session ​demandée pour appliquer le nouveau groupe |

**Point technique à faire dire.** Un utilisateur ajouté à un groupe doit **ouvrir une nouvelle session** pour que ses droits soient pris en compte.

**Point de gestion.** L'ajout au groupe d'un nouvel arrivant se fait normalement **avec l'accord du responsable** (ici le manager) : l'élève qui le mentionne montre qu'il a compris la dimension d'autorisation.

### Ticket 4 – Clôture et statistiques

- Le MTTR est la différence ​entre **l'ouverture** et la **résolution** (et non la clôture, qui dépend de la confirmation de l'utilisateur). Dans le TP, la clôture est employée ; accepter les deux si l'élève précise lequel il utilise.
- Les statistiques dépendent de l'instance. Exiger des **chiffres lus**, pas estimés.

## Questions de réflexion

| Q | Éléments de réponse |
|---|---|
| Q1 | Avantages : numérotation et horodatage automatiques, historique complet, lien avec le parc, statuts et recherche, ​statistiques, règles d'escalade. |
| Q2 | GLPI peut **clore automatiquement** un ticket résolu après un délai paramétrable (action automatique ou règle de fermeture automatique). À présenter comme un réglage de l'administrateur. |
| Q3 | Un suivi **interne** contient du ​diagnostic ou des remarques que l'utilisateur n'a pas à lire ; un suivi **public** informe l'utilisateur. Mélanger expose des informations internes ou noie l'utilisateur. |
| Q4 | Exemples : **réinitialisation en libre-service**, **gestionnaire de mots de passe**, durée de validité ​raisonnée, **documentation** et fiche KB, formation courte des utilisateurs. |

## Pièges fréquents

- **Ticket sans demandeur** ou rattaché au mauvais utilisateur.
- **Priorité forcée** à la main alors qu'elle est calculée.
- **Escalade sans suivi** de motif.
- **Statistiques lues sur l'instance entière** au lieu du filtre personnel demandé.

## Bilan de compétences

Auto-évaluation ; B1.2, B1.1 et B1.5 proposées, à valider.
