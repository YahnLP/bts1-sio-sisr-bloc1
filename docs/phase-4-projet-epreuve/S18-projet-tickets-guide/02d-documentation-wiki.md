# TP – Documenter le projet dans le wiki

*BTS SIO SISR 1re année – Bloc 1 – S18*

## Objectif

Documenter le projet de support (S17) dans le wiki d'équipe créé en S16.

## Pages à Créer

### 1. Page « Projet de support — Architecture globale »

```wiki
====== Projet de support — Infrastructure SimIO SARL ======

**Date de réalisation :** (à compléter : date de la séance)
**Équipe :** [Noms des membres]

===== Architecture Générale =====

[Insérer schéma réseau]

===== Composants Déployés =====

^ Composant ^ Serveur ^ IP ^ Rôle ^
| Active Directory | SRV-DC01 | 192.168.10.20 | Contrôleur de domaine |
| GLPI | SRV-GLPI | 192.168.10.30 | Gestion parc + Helpdesk |
| OCS Inventory | SRV-GLPI | 192.168.10.30 | Inventaire automatique |
| Serveur Fichiers | SRV-FILES | 192.168.10.40 | Partages réseau |

===== Documentation Technique =====

  * [[projet_1:installation_glpi|Installation GLPI + OCS]]
  * [[projet_1:catalogue_services|Catalogue de Services]]
  * [[projet_1:incidents_resolus|Incidents Résolus]]
```

### 2. Page "Installation GLPI + OCS"

```wiki
====== Procédure : Installation GLPI + OCS Inventory ======

**Auteur :** [Nom]
**Date :** AAAA-MM-JJ
**Version :** 1.0

===== Prérequis =====

  * Ubuntu Server 22.04
  * LAMP installé (Apache, MySQL, PHP 8.1+)
  * Accès sudo

===== Installation GLPI =====

==== 1. Télécharger GLPI ====

<code bash>
cd /tmp
wget https://github.com/glpi-project/glpi/releases/download/10.0.12/glpi-10.0.12.tgz
tar -xzf glpi-10.0.12.tgz
sudo mv glpi /var/www/
</code>

[Suite de la procédure...]

===== Installation OCS Inventory =====

[Procédure détaillée...]

===== Synchronisation OCS → GLPI =====

[Procédure détaillée...]
```

### 3. Page "Incidents Résolus"

```wiki
====== Base d'Incidents Résolus — projet de support ======

===== Incident #1 : Accès Serveur Refusé =====

**Date :** AAAA-MM-JJ
**Utilisateur :** Julie Dupont (Comptabilité)
**Symptôme :** Accès refusé au dossier \\SRV-FILES\Comptabilite

**Diagnostic :**
Droits NTFS du groupe Comptabilite supprimés.

**Résolution :**
Ajout du groupe Comptabilite avec droits "Modification".

**Temps de résolution :** 15 minutes

===== Incident #2 : Application GestCom =====

[Idem pour les 2 autres incidents...]
```

## Bilan de la séance

Remplis ce bilan **seul**, honnêtement : il sert à décider ce qu'il faut reprendre. Niveau : **Non maîtrisé**, **Maîtrise partielle**, **Bonne maîtrise** ou **Excellente maîtrise** (le vocabulaire des grilles nationales d'évaluation) ; **Non évalué** si tu n'as pas travaillé la compétence aujourd'hui.

| Compétence du référentiel | Ce que j'ai fait dans cette séance | Niveau |
|---|---|---|
| **B1.2** – Répondre aux incidents et aux demandes d'assistance et d'évolution | | |
| **B1.4** – Travailler en mode projet | | |
| **B1.5** – Mettre à disposition des utilisateurs un service informatique | | |
| **B1.6** – Organiser son développement professionnel | | |

> [!NOTE]
> Les codes sont ceux du [référentiel](../../ressources/referentiel.md) (l'arrêté numérote des activités : les codes « B… » sont un usage courant).

**Je sais faire, sans aide :**

- [ ] Résoudre trois tickets réalistes de bout en bout ;
- [ ] Rédiger un guide utilisateur avec tutoriels et FAQ ;
- [ ] Documenter le projet dans le wiki (architecture, installation, incidents) ;
- [ ] Présenter le projet en quelques minutes ;
- [ ] Rédiger une fiche de réalisation pour le portfolio.

**Ce que je dois reprendre :** ______________________

**Ma question à poser à l'enseignant :** ______________________
