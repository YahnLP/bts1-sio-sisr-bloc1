# Cours – Mise à disposition, disponibilité et SLA

*BTS SIO SISR 1re année – Bloc 1 – S07*

> [!NOTE] Ce que tu dois savoir déjà
> - **Prérequis :** S03 (SLA), S06.
> - **À garder en tête :** lis le cours **avant** le TP ; la section « À retenir » en fin de cours résume l'essentiel.

## À la fin de ce cours, tu sauras

- [ ] **Décrire** les cinq étapes de la mise à disposition d'un service ;
- [ ] **Calculer** une disponibilité et en **déduire** un temps d'arrêt admissible ;
- [ ] **Expliquer** RTO et RPO ;
- [ ] **Rédiger** un SLA et un procès-verbal de mise en service ;
- [ ] **Rédiger** un message de communication aux utilisateurs.

---


## 1. Mettre à Disposition un Service IT

### 1.1 Les 5 Étapes de la Mise à Disposition

Mettre un service à disposition des utilisateurs est un **processus en 5 étapes**. Chaque étape produit un livrable documentaire.

```
  ①  ANALYSE DU BESOIN
  ───────────────────────────────────────────────────
  Comprendre ce que les utilisateurs ont besoin de faire
  (pas seulement ce qu'ils demandent).

  Livrables : cahier des charges, expression de besoins
  Questions clés :
    - Combien d'utilisateurs utiliseront ce service ?
    - Quand ont-ils besoin d'y accéder ? (horaires, mobilité)
    - Quelles données traitera ce service ? (sensibilité RGPD)
    - Quel niveau de disponibilité est requis ?
    - Quel est le délai de mise en place ?

  ───────────────────────────────────────────────────
  ②  INSTALLATION ET TESTS
  ───────────────────────────────────────────────────
  Déployer le service dans un environnement de test,
  puis en production après validation.

  Livrables : plan de tests, PV de recette (résultats des tests)
  Bonnes pratiques :
    - Tester AVANT la mise en production
    - Tester les cas normaux ET les cas limites
    - Tester la restauration (pas seulement la sauvegarde)
    - Faire valider les tests par quelqu'un d'autre que celui
      qui a installé le service

  ───────────────────────────────────────────────────
  ③  DOCUMENTATION TECHNIQUE
  ───────────────────────────────────────────────────
  Documenter le service pour permettre sa maintenance
  par n'importe quel technicien de l'équipe.

  Livrables : DAT (Dossier d'Architecture Technique),
              procédures d'exploitation, guide de dépannage
  Contenu minimal :
    - Architecture (schéma + description)
    - Configuration (paramètres, fichiers de conf)
    - Procédures : démarrage, arrêt, sauvegarde, restauration
    - Contacts (responsable technique, fournisseur, support N2)

  ───────────────────────────────────────────────────
  ④  COMMUNICATION AUX UTILISATEURS
  ───────────────────────────────────────────────────
  Informer les utilisateurs de l'existence du service,
  de comment y accéder et de comment obtenir du support.

  Livrables : email/note d'information, guide utilisateur,
              entrée dans la base de connaissances GLPI
  Contenu obligatoire :
    - Quoi : nom et description du service en termes métier
    - Pourquoi : bénéfice pour l'utilisateur
    - Comment accéder : procédure simple, pas de jargon
    - Qui contacter en cas de problème
    - Date de disponibilité

  ───────────────────────────────────────────────────
  ⑤  VALIDATION ET SUIVI (PV de Mise en Service)
  ───────────────────────────────────────────────────
  Formaliser la mise en production et définir
  les indicateurs de suivi.

  Livrables : PV de mise en service signé,
              SLA défini, supervision configurée
  Ce qui est validé :
    - Tests de recette passés avec succès
    - Documentation disponible et à jour
    - Utilisateurs informés
    - Supervision active (alertes configurées)
    - SLA formalisé et accepté par les parties
```

### 1.2 Le PV de Mise en Service

Le **Procès-Verbal de Mise en Service** (ou **PV de recette**) est le document qui formalise qu'un service est prêt à être utilisé en production. C'est la signature qui marque le passage de "en test" à "en production".

Il contient systématiquement :

| **Section** | **Contenu** |
|---|---|
| **Identification** | Nom du service, version, date, technicien responsable |
| **Périmètre** | Ce qui est mis en service (et ce qui ne l'est pas encore) |
| **Tests réalisés** | Liste des tests avec résultat attendu / résultat obtenu |
| **Anomalies constatées** | Problèmes identifiés (même mineurs) avec leur statut |
| **Conditions de mise en service** | Réserves éventuelles (ex : "sous réserve de la sauvegarde quotidienne") |
| **Validation** | Signature du technicien + du responsable DSI (+ client si externe) |
| **SLA applicable** | Référence au SLA en vigueur pour ce service |

> [!NOTE]
> **Lien avec l'E5 :** Le jury E5 peut demander "comment avez-vous validé que votre service était prêt à être mis en production ?" Un PV de mise en service est la réponse professionnelle à cette question.

### 1.3 Communication Utilisateur — Bonnes Pratiques

La communication aux utilisateurs est souvent négligée par les techniciens. Pourtant, un service inconnu ou mal expliqué n'est pas utilisé — et un service pas utilisé n'a aucune valeur.

**Les 5 erreurs courantes dans une communication IT :**

| **Erreur** | **Exemple** | **Bonne pratique** |
|---|---|---|
| **Jargon technique** | "Le serveur SFTP est accessible sur le port 22" | "Vos fichiers sont maintenant accessibles depuis n'importe où" |
| **Oublier le bénéfice** | "Un partage réseau a été créé" | "Fini les clés USB : vos fichiers sont maintenant partagés et sauvegardés automatiquement" |
| **Procédure trop complexe** | 2 pages de configuration | 3 étapes illustrées |
| **Pas de contact support** | — | "En cas de problème : ticket GLPI, catégorie Réseau > Partage de fichiers" |
| **Pas de date** | "Disponible prochainement" | "Disponible à partir du lundi 15 mars à 8h" |

## 2. Qualité de Service

### 2.1 La Disponibilité

La **disponibilité** d'un service IT est le pourcentage de temps pendant lequel ce service est accessible et fonctionnel. C'est l'indicateur de qualité de service le plus fondamental.

```
   Disponibilité (%) =  Temps de fonctionnement  × 100
                        ──────────────────────────────
                         Temps total de la période
```

**Les "nines" — Référence universelle en DSI :**

| **Disponibilité** | **Indisponibilité / an** | **Indisponibilité / mois** | **Usage typique** |
|---|---|---|---|
| **90%** ("one nine") | 36 jours 12h | 73 heures | Service non critique |
| **99%** ("two nines") | 3 jours 15h | 7h 18 min | Service standard |
| **99,5%** | 1 jour 19h | 3h 39 min | SLA PME typique |
| **99,9%** ("three nines") | 8h 45 min | 43 min | Service professionnel |
| **99,99%** ("four nines") | 52 min | 4 min 22s | Service critique (banque, santé) |
| **99,999%** ("five nines") | 5 min 15s | 26s | Téléphonie, bloc opératoire |

> [!TIP]
> **Le déclic pédagogique :** "99% de disponibilité ça semble très bien... jusqu'à ce qu'on calcule que ça représente 3 jours et demi de panne par an (tableau ci-dessus). Si votre service de messagerie est en panne 3 jours et demi, que se passe-t-il dans l'entreprise ?"

### 2.2 Calcul de Disponibilité — Formules

**Formule de base :**
```
   Disponibilité = (Temps total - Temps d'indisponibilité) / Temps total × 100

   Exemple :
   Service disponible 8 715 heures sur 8 760 heures (1 an)
   → Disponibilité = 8 715 / 8 760 × 100 = 99,49%
   → Indisponibilité = 8 760 - 8 715 = 45 heures dans l'année
```

**Indisponibilité tolérable selon un SLA :**
```
   Indisponibilité max = Temps total × (1 - Disponibilité contractuelle)

   Exemple : SLA 99,9% sur 1 an (8 760 heures)
   → Indisponibilité max = 8 760 × (1 - 0,999) = 8,76 heures/an
   → Soit environ 8 heures 45 minutes de panne autorisées sur l'année
```

**Disponibilité sur une période personnalisée :**
```
   Heures disponibles dans 1 an  = 365 × 24 = 8 760 h
   Heures disponibles en 1 mois  = 730 h (moyenne)
   Heures disponibles en 1 semaine = 168 h

   Disponibilité 99,9% mensuelle :
   → 730 × (1 - 0,999) = 0,73 heure = 43 minutes 48 secondes
```

### 2.3 Disponibilité Planifiée vs Non Planifiée

Toute indisponibilité n'est pas équivalente. Une DSI mature distingue deux types :

| **Type** | **Définition** | **Exemple** | **Comptabilisé dans le SLA ?** |
|---|---|---|---|
| **Maintenance planifiée** | Interruption programmée, annoncée à l'avance | Mise à jour Windows, sauvegarde hebdomadaire | Souvent **exclu** du SLA |
| **Indisponibilité non planifiée** | Panne ou interruption imprévue | Disque dur défaillant, panne réseau | Toujours **inclus** dans le SLA |

> [!NOTE]
> **Pourquoi cette distinction est-elle cruciale ?** Un SLA à 99,9% qui exclut les maintenances planifiées (30 minutes/semaine = 26h/an) est très différent d'un SLA à 99,9% sur le temps total. La **plage horaire** et les **exclusions** d'un SLA sont aussi importantes que le pourcentage lui-même.

### 2.4 Le SLA Complet — Toutes les Composantes

En S03, vous avez vu les composantes de base d'un SLA. Ici, voici le SLA complet tel qu'il est rédigé en contexte professionnel :

```
╔══════════════════════════════════════════════════════════════════╗
║              SERVICE LEVEL AGREEMENT — STRUCTURE COMPLÈTE        ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  1. PARTIES ET OBJET                                             ║
║     Prestataire de service (DSI), client (département/entité)   ║
║     Service concerné, durée du SLA, conditions de révision      ║
║                                                                  ║
║  2. DESCRIPTION DU SERVICE                                       ║
║     Ce que le service fait (en termes métier, pas technique)    ║
║     Ce qu'il ne fait PAS (périmètre explicite)                   ║
║     Conditions d'utilisation nominale                            ║
║                                                                  ║
║  3. DISPONIBILITÉ                                                ║
║     Taux de disponibilité contractuel (ex : 99,5%)              ║
║     Plage horaire couverte (ex : lundi-vendredi 8h-19h)         ║
║     Maintenance planifiée : fenêtre et préavis                   ║
║     Méthode de calcul et de mesure                               ║
║                                                                  ║
║  4. DÉLAIS DE SUPPORT                                            ║
║     Priorité P1 : prise en charge < 15 min, résolution < 4h     ║
║     Priorité P2 : prise en charge < 1h, résolution < 8h         ║
║     Priorité P3 : prise en charge < 4h, résolution < 24h        ║
║     Priorité P4 : résolution < 5 jours ouvrés                   ║
║                                                                  ║
║  5. CONTINUITÉ ET REPRISE (RTO / RPO)                           ║
║     RTO : délai maximum de reprise après incident majeur        ║
║     RPO : perte de données maximale acceptable                  ║
║                                                                  ║
║  6. EXCLUSIONS ET LIMITATIONS                                    ║
║     Cas non couverts (erreur utilisateur, cas de force majeure) ║
║     Conditions d'annulation du SLA                              ║
║                                                                  ║
║  7. INDICATEURS ET REPORTING                                     ║
║     KPIs mesurés, fréquence des rapports, responsable           ║
║                                                                  ║
║  8. PÉNALITÉS ET COMPENSATIONS                                   ║
║     Conséquences en cas de non-respect (réduction facture,      ║
║     crédits de service...)                                       ║
║                                                                  ║
║  9. RÉVISION ET RÉSILIATION                                      ║
║     Fréquence de révision du SLA, conditions de résiliation     ║
╚══════════════════════════════════════════════════════════════════╝
```

### 2.5 RTO et RPO — Continuité de Service

Ces deux indicateurs définissent les **objectifs de reprise** après un incident majeur (panne grave, sinistre, cyberattaque) :

<figure class="graphe diagramme"><svg viewBox="0 0 760 230" style="max-width:760px" role="img" aria-label="RPO et RTO sur la ligne de temps d&#x27;un incident majeur" xmlns="http://www.w3.org/2000/svg">
<line x1="40" y1="50" x2="720" y2="50" class="dg-line"/>
<circle cx="120" cy="50" r="7" class="dg-dark"/>
<text x="120" y="32" text-anchor="middle" class="dg-s">Dernière sauvegarde propre</text>
<circle cx="340" cy="50" r="7" class="dg-dark"/>
<text x="340" y="32" text-anchor="middle" class="dg-s">Incident survient</text>
<circle cx="560" cy="50" r="7" class="dg-dark"/>
<text x="560" y="32" text-anchor="middle" class="dg-s">Reprise du service</text>
<circle cx="700" cy="50" r="7" class="dg-dark"/>
<text x="700" y="32" text-anchor="middle" class="dg-s">Retour à la normale</text>
<rect x="120" y="72" width="220" height="30" rx="6" class="dg-warn"/>
<text x="230" y="92" text-anchor="middle" class="dg-t">RPO</text>
<rect x="340" y="72" width="220" height="30" rx="6" class="dg-bad"/>
<text x="450" y="92" text-anchor="middle" class="dg-t">RTO</text>
<text x="230" y="126" text-anchor="middle" class="dg-s">perte de données acceptable</text>
<text x="230" y="143" text-anchor="middle" class="dg-i">« Jusqu&#x27;où remonter dans le temps ? »</text>
<text x="230" y="160" text-anchor="middle" class="dg-s">Ex. RPO 4 h : sauvegarde au moins</text>
<text x="230" y="177" text-anchor="middle" class="dg-s">toutes les 4 h</text>
<text x="450" y="126" text-anchor="middle" class="dg-s">durée d&#x27;arrêt acceptable</text>
<text x="450" y="143" text-anchor="middle" class="dg-i">« En combien de temps rétablir ? »</text>
<text x="450" y="160" text-anchor="middle" class="dg-s">Ex. RTO 2 h : serveur de secours,</text>
<text x="450" y="177" text-anchor="middle" class="dg-s">procédure de bascule</text>
</svg>
</figure>

- **RPO (Recovery Point Objective)** : perte de données maximale acceptable. Exemple : RPO = 4 h, on accepte de perdre au plus 4 h de données, donc une sauvegarde toutes les 4 h au minimum.
- **RTO (Recovery Time Objective)** : durée maximale acceptable pour reprendre le service. Exemple : RTO = 2 h, le service doit être restauré en moins de 2 h, ce qui demande un serveur de secours et des procédures de bascule.

**Les RTO/RPO varient selon la criticité du service :**

| **Type de service** | **RTO typique** | **RPO typique** |
|---|---|---|
| Service critique (messagerie, ERP) | < 2 heures | < 1 heure |
| Service important (partage de fichiers) | < 8 heures | < 4 heures |
| Service standard (intranet) | < 24 heures | < 24 heures |
| Service non critique (outil interne) | < 72 heures | < 24 heures |

> [!TIP]
> **Relation RTO/RPO avec la sauvegarde :** Un RPO de 4h impose une sauvegarde au moins toutes les 4h. Un RTO de 2h impose de disposer d'un environnement de secours capable de prendre le relais en moins de 2h. Ces exigences ont un **coût** direct — c'est pourquoi chaque service n'a pas les mêmes objectifs.

### 2.6 Supervision et Alertes — Mesurer la Disponibilité

Un SLA ne peut pas être tenu sans **supervision** : il faut mesurer la disponibilité réelle pour la comparer à la disponibilité contractuelle.

```
   OUTILS DE SUPERVISION (aperçu — hors programme de ce site, à voir en entreprise)
   ─────────────────────────────────────────────────
   Nagios / Centreon     → Supervision infrastructure (ping, ports, services)
   Zabbix                → Supervision avancée (métriques, graphiques, alertes)
   PRTG                  → Supervision réseau et système (Windows/Linux)
   Uptime Robot          → Supervision web simple (gratuit, SaaS)
   Windows SNMP / WMI    → Intégré Windows Server pour la supervision locale

   Ce que la supervision mesure pour calculer la disponibilité :
   ├── Le service répond-il ? (ping, port TCP ouvert, HTTP 200)
   ├── Depuis quand est-il injoignable ? (horodatage de la panne)
   ├── Durée totale d'indisponibilité sur la période
   └── → Calcul automatique du taux de disponibilité réel
```

## À retenir

- Un **SLA** fixe des engagements mesurables (disponibilité, délais de prise en charge et de résolution).
- **Disponibilité = temps de fonctionnement ÷ temps total**, et se compare avec le tableau des « neuf ».
- On distingue ce qui est **inclus** ou **exclu** du calcul (maintenances planifiées).
- Un service est **mis à disposition** avec un **procès-verbal** et un message clair aux utilisateurs.

## Je vérifie mes acquis

- [ ] Je décris les 5 étapes de mise à disposition d'un service
- [ ] J'explique la différence entre "installer" et "mettre à disposition"
- [ ] Je calcule un taux de disponibilité à partir d'un temps d'indisponibilité
- [ ] Je convertis un % de disponibilité en heures de panne annuelles
- [ ] Je distingue maintenance planifiée et indisponibilité non planifiée
- [ ] J'explique RTO et RPO avec un exemple concret
- [ ] Je rédige les sections essentielles d'un SLA
- [ ] Je rédige une communication utilisateur pour un nouveau service
