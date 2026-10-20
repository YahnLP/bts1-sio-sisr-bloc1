# Corrigé – S07 : Mise à disposition, SLA et procès-verbal

*Réservé à l'enseignant. Calculs vérifiés par un script (voir ci-dessous).*

## Module 1 – Calculs de disponibilité

### Exercice 1.1

| Question | Calcul | Résultat |
|---|---|---|
| Indisponibilité ​totale | 2 h 30 + 45 min + 6 h + 1 h 15 | **10 h 30** (630 min) |
| Temps de l'année | 366 × 24 | **8 784 h** |
| Disponibilité | 1 − 10,5 / 8 784 | **≈ 99,88 %** |
| SLA de 99,5 % respecté ? | 99,88 % ≥ 99,5 % | **Oui** |

Remarque : la **mise à jour planifiée de 45 minutes** est comptée dans le calcul du TP ; selon le contrat, elle peut être exclue de l'indisponibilité (voir exercice 1.3).

### Exercice 1.2 (avec 1 an = 8 760 h et 1 mois = 730 h)

| SLA | Indisponibilité max par an | Indisponibilité max par mois |
|---|---|---|
| 99 % | **87 h 36 min** (87,6 h) | **7 h 18 min** (438 min) |
| 99,5 % | **43 h 48 min** | **3 h 39 min** (219 min) |
| 99,9 % | **8 h 45 min 36 s** (≈ 8 h 46) | **43 min 48 s** |
| 99,99 % | **52 min 34 s** | **4 min 23 s** (4,38 min) |

Le tableau de l'annexe ​donne 4 min 22 s pour 99,99 % par mois : c'est un arrondi par troncature (4,38 min = 4 min 22,8 s). Accepter les deux.

### Exercice 1.3 (octobre : 744 h = 44 640 min)

| Service | Indispo. totale | Dont planifiée | Disponibilité réelle | SLA | Respecté ? |
|---|---|---|---|---|---|
| Messagerie | 135 min | 30 min | **99,70 %** (hors planifié : 99,77 %) | 99,9 % | **Non** (dans les deux lectures) |
| Partage de fichiers | 300 min | 60 min | **99,33 %** (hors planifié : 99,46 %) | 99,5 % | **Non** (dans les deux ​lectures) |
| Intranet | 45 min | 0 | **99,90 %** | 99,5 % | **Oui** |
| VPN | 750 min | 120 min | **98,32 %** (hors planifié : 98,59 %) | 99 % | **Non** (dans les deux lectures) |

**Question sur le VPN.** Hors maintenance : (750 − 120) = 630 min d'indisponibilité non planifiée, soit 1 − 630 / 44 640 ≈ **98,59 %**. Le SLA de 99 % **n'est pas respecté** même en excluant la maintenance. À faire dire : la **définition** de ce qui compte comme indisponibilité doit être écrite dans le SLA, sinon chacun calcule à sa façon.

## Module 2 – Rédiger un SLA (exemple de réponse)

| Section | Exemple d'attendu |
|---|---|
| 1. Parties | Prestataire : DSI ; bénéficiaire : les employés de SimIO SARL (représentés par la direction) |
| 2. ​Service couvert | Stockage et partage de fichiers sur le serveur, accès depuis le réseau de l'entreprise |
| 3. Exclu | Fichiers hébergés sur les postes ; services externes (messagerie) ; restauration de versions de plus de la durée de rétention |
| 4. Plage horaire | Lundi au vendredi, 7 h 30 à 19 h (plage d'utilisation) ; ​support de 8 h à 18 h |
| 5. Disponibilité | 99,5 % ou 99,9 % **sur la plage horaire** (justifier : le dimanche sert à la maintenance) |
| 6. Maintenance | Dimanche 22 h – 6 h ; préavis d'au moins 48 h ouvrées |
| 7 à 9. Délais P1, P2, P3 | Exemple : P1 prise en charge < 30 min, résolution < 4 h ; P2 < 1 h, < 8 h ; P3 < 4 h, < 3 jours ​ouvrés (**dans les heures de support**) |
| 10. RPO | 24 h (sauvegarde nocturne à 23 h) |
| 11. RTO | 4 h pour un incident majeur |
| 12. KPI | Disponibilité mensuelle, nombre de tickets, MTTR, respect des délais par priorité |
| 13. Rapport | Chaque mois, le premier jour ouvré, par le responsable DSI |
| 14. Exclusions | ​Force majeure, mauvaise utilisation, maintenance planifiée, pannes de services tiers |

**Cohérence à vérifier** :

- les délais de support sont comptés dans les **heures de travail de l'équipe** (8 h à 18 h), alors que le ​service est utilisé jusqu'à 19 h : l'élève qui le remarque a compris que **la plage du service et celle du support diffèrent** ;
- un RPO de 24 h découle d'une sauvegarde **quotidienne** : un RPO plus court impose une sauvegarde plus fréquente ;
- on **ne promet pas** ce qu'on ne peut pas mesurer (KPI mesurables).

### Question de réflexion (RTO de 4 h)

Éléments possibles : **sauvegarde testée** et accessible hors du serveur principal, **matériel ou machine virtuelle de ​remplacement** prêt, **procédure de restauration** écrite et répétée, **astreinte** ou disponibilité des techniciens, éventuellement **second serveur** (réplication ou grappe). Deux éléments justifiés suffisent.

## Module 3 – PV et communication

### PV de mise en service

| Test | Résultat attendu |
|---|---|
| 1 – accès depuis un poste du VLAN RH | Accès réussi |
| 2 – accès sans droits | **Refusé** (c'est la réussite du test) |
| 3 – sauvegarde nocturne | ​Sauvegarde exécutée à 23 h, journal consulté |
| 4 – restauration d'un fichier | Fichier restauré et lisible, intégrité vérifiée |
| 5 – poste hors domaine | **Refusé** ou authentification demandée, selon la politique |

Le PV mentionne les **anomalies** (même nulles : « aucune »), la **version du SLA** et les **signatures**. Un PV où tous les tests sont « OK » sans date ni preuve n'a pas de valeur.

### Communication aux utilisateurs

Attendus : objet explicite (« ​Nouveau dossier partagé : ce qui change pour vous le [date] »), bénéfice clair, procédure en 2 ou 3 étapes, **horaires** du service, **contact** du support, aucun sigle non expliqué. Longueur : moins de 15 lignes.

## Vérification des calculs

Les ​valeurs ci-dessus ont été recalculées avec la formule *disponibilité = 1 − indisponibilité / durée totale*, avec 8 760 h par an et 730 h par mois pour l'exercice 1.2.

## Pièges fréquents

- **Confusion** entre pourcentage d'indisponibilité et de disponibilité.
- **Mélange minutes / heures** dans les calculs.
- **SLA qui promet 100 %** ou n'indique pas la plage horaire.
- **Délais de support ​exprimés sans l'unité** (heures ouvrées ou calendaires).

## Bilan de compétences

Auto-évaluation ; B1.5, B1.2 et B1.4 proposées, à valider.
