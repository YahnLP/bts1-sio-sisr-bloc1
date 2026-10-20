# S15 – Présence en ligne : site WordPress, HTTPS et base de données

| Élément | Détail |
|---|---|
| **Niveau** | BTS SIO option SISR, 1re année – bloc 1 |
| **Séance** | S15 (séance 15 sur 19) – Phase 3 |
| **Durée** | 4 heures |
| **Prérequis** | S13 du bloc 2 conseillé (LAMP, SSH) ; sinon suivre le TP pas à pas. |
| **Matériel** | VM Debian ou Ubuntu avec accès Internet, poste client |
| **Compétences travaillées** | B1.3 · B1.5 · B1.2 (voir [le référentiel](../../ressources/referentiel.md)) |

> [!NOTE]
> **Question qui guide la séance :** *« L'organisation veut un site web : quelles briques, comment le sécuriser, et où sont stockées ses données ? »*

## Objectifs

À la fin de la séance, l'étudiant est capable de :

1. **Justifier** la présence en ligne d'une organisation et **choisir** un type de site ;
2. **Décrire** l'architecture LAMP et le rôle d'un CMS ;
3. **Installer** WordPress sur une pile LAMP ;
4. **Activer** HTTPS avec un certificat auto-signé et **expliquer** la différence avec un certificat public ;
5. **Manipuler** une base de données (créer une base, un utilisateur, interroger) ;
6. **Citer** les bases du référencement.

## Contenu de la séance

| Document | Rôle |
|---|---|
| [Cours – Présence en ligne, CMS et pile LAMP](01-cours.md) | Cours |
| [Cours – HTTPS, certificats et référencement](01b-cours-https-seo.md) | Cours (suite) |
| [Cours – Les bases de données : SGBD et premières requêtes SQL](01c-cours-sgbd.md) | Cours complémentaire |
| [TP – Installer WordPress sur une pile LAMP](02-tp.md) | TP |
| [TP – Activer HTTPS avec un certificat auto-signé](02b-tp-https.md) | TP (suite) |
| [TP – Créer une base, un utilisateur et manipuler des données](02c-tp-sgbd.md) | TP |
| [Aide-mémoire – Site web, HTTPS et base de données](03-aide-memoire.md) | Aide-mémoire |
| [Annexe – Checklist de sécurité d'un site WordPress](annexe-checklist-securite.md) | Annexe |
| [Annexe – Dépannage de WordPress](annexe-depannage-wordpress.md) | Annexe |
| [Annexe – TP facultatif : référencement avec Yoast SEO](annexe-tp-seo.md) | Annexe |

## Déroulé conseillé (4 h)

| Durée | Activité | Format |
|---|---|---|
| 0 h 00 – 0 h 15 | **Accroche** : le site de l'organisation est « en panne » | Oral |
| 0 h 15 – 1 h 00 | **Cours** : présence en ligne, CMS, LAMP, HTTPS, SGBD | Cours et questions |
| 1 h 00 – 3 h 30 | **TP** : WordPress, HTTPS et base de données | Binôme |
| 3 h 30 – 4 h 00 | **Bilan de compétences** | Individuel |

## Retour en entreprise

Si ta situation le permet : **observer** comment ton entreprise traite le sujet de la séance, **documenter** en une demi-page l'écart avec le TP, ou **réaliser** une partie après accord de ton tuteur. Voir [Transfert en entreprise](../../ressources/transfert-entreprise.md). Le travail réalisé peut alimenter une [fiche de réalisation](../../ressources/fiche-realisation-professionnelle.md).

## Évaluation

- Compte rendu avec captures d'écran datées, schéma et explications, nommé `RENDU-B1-S15-NOM.pdf`.
- Bilan de compétences rempli à la fin de la séance (individuel).

<details markdown="1">
<summary>Notes pour l'enseignant</summary>

- **Compétences :** codes relus sur le référentiel (page [Référentiel](../../ressources/referentiel.md)) ; le choix des compétences pour cette séance est une proposition à valider.
- Séance dense : WordPress (ancienne S14), HTTPS (ancienne S15) et SGBD (ajout) ; le TP SEO d'origine est conservé en annexe facultative.
- L'ajout du SGBD répond à l'annexe II.E du référentiel : à valider par l'enseignant.

</details>
