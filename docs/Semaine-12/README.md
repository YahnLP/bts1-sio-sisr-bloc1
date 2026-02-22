# 01 – Objectifs et ressources


---

## Informations Générales

| **Champ** | **Détail** |
|-----------|-----------|
| **Semaine** | S12 — Année 1 |
| **Bloc** | Bloc 2 — Administration des systèmes et des réseaux |
| **Durée totale** | 4 heures |
| **Public** | Apprentis BTS SIO SISR — douzième semaine |
| **Modalité** | Présentiel — salle TP (postes physiques ou VMs) |
| **Prérequis** | S2 (inventaire matériel), S11 (gestion actifs logiciels), notions Windows/Linux |

---

## Compétences RNCP Visées

| **Code** | **Intitulé de la compétence** | **Niveau visé** |
|----------|-------------------------------|-----------------|
| **B2.1** | Installer et configurer un service réseau pour une TPE ou une PME | Acquisition |
| **B2.2** | Installer et configurer des éléments d'infrastructure | Maîtrise |
| **B1.4** | Mettre en place et exploiter des outils de gestion de parc | Maîtrise |
| **B3.3** | Participer à la gestion et au suivi d'un projet | Acquisition |

> 📌 **S12 est une séance technique charnière** qui marque l'entrée réelle dans l'administration système du Bloc 2. Jusqu'ici, les apprenants ont inventorié, géré, documenté. À partir de S12, ils **construisent** : déployer 50 postes identiques en 2 heures plutôt qu'en 2 semaines est une compétence qui change radicalement la perception du métier SISR.

---

## Objectifs Pédagogiques

**Concepts de déploiement :**
- ✅ Distinguer **installation manuelle** vs **déploiement automatisé** d'un OS
- ✅ Expliquer le principe du **clonage de disque** (bit-à-bit)
- ✅ Décrire une **image système** et ses composantes (OS + pilotes + logiciels + config)
- ✅ Identifier les **cas d'usage** du déploiement d'images (parc homogène, disaster recovery, standardisation)
- ✅ Expliquer les notions de **Sysprep** et **généralisation** Windows
- ✅ Comparer les outils de clonage (Clonezilla, WDS/MDT, Fog Project)

**Pratique technique :**
- ✅ Créer une **machine de référence** (golden image) avec OS + logiciels
- ✅ Capturer une image système avec **Clonezilla**
- ✅ Déployer l'image capturée sur un nouveau poste
- ✅ Vérifier la **post-configuration** (SID, nom machine, activation)
- ✅ Documenter le processus dans une procédure technique (lien S11)
