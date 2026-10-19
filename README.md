# Bloc 1 · Support – BTS SIO 1re année

Cours, TP et aide-mémoire du **bloc 1 (support et mise à disposition de services informatiques)** du BTS SIO option SISR, 1re année : **19 séances de 4 h** pour 19 semaines d'alternance réparties sur l'année. Auteur : Yahn LE PRETTRE - Formateur – licence CC BY-NC-SA 4.0. Utilisation dans une formation payante ou financée (CFA, OPCO) : accord préalable de l'auteur, voir `docs/ressources/licences.md`.

**Site (GitHub Pages) :** <https://yahnlp.github.io/bts1-sio-sisr-bloc1/>

## Contenu

| Dossier | Contenu |
|---|---|
| [`docs/phase-1-poste-patrimoine`](docs/phase-1-poste-patrimoine/README.md) | S01 à S05 : métier et portfolio, inventaire, ITIL et tickets, incidents, OCS Inventory |
| [`docs/phase-2-support-services`](docs/phase-2-support-services/README.md) | S06 à S10 : GLPI, SLA et mise à disposition, relation utilisateur, catalogue de services, fiche de réalisation |
| [`docs/phase-3-maintenir-evoluer`](docs/phase-3-maintenir-evoluer/README.md) | S11 à S15 : configurations et sauvegardes, licences et procédures, images système, changement et veille, présence en ligne |
| [`docs/phase-4-projet-epreuve`](docs/phase-4-projet-epreuve/README.md) | S16 à S19 : travail collaboratif, projet de support, épreuve blanche E5 |
| [`docs/ressources`](docs/ressources/README.md) | Référentiel, épreuve E5, fiche de réalisation, outils, glossaire, licences |
| [`corriges`](corriges/) | Corrigés **réservés à l'enseignant** (non publiés sur le site, mais visibles dans ce dépôt) |
| [`tools`](tools/CONVENTIONS.md) | Conventions de rédaction du site |

## Principe pédagogique

Anticiper → manipuler → comprendre → vérifier → faire le bilan de ses compétences. Chaque TP demande ce que l'on **anticipe** avant de manipuler, explique chaque commande (« Je comprends »), pose des questions « pourquoi » et se termine par un **bilan de compétences** rattaché au référentiel du BTS. Les preuves sont gardées dans le **portfolio**.

## Cadre d'examen

Toutes les épreuves sont **ponctuelles** (pas de contrôle en cours de formation). Ce bloc prépare l'épreuve **E5** (support et mise à disposition de services informatiques : oral de 40 minutes sur dossier numérique). Voir [`docs/ressources/epreuve-e5.md`](docs/ressources/epreuve-e5.md).

## Travailler en local

```bash
pip install -r requirements.txt
mkdocs serve        # http://127.0.0.1:8000
mkdocs build --strict
```

## Licence

Contenus : **CC BY-NC-SA 4.0**. Détail : [`docs/ressources/licences.md`](docs/ressources/licences.md).
