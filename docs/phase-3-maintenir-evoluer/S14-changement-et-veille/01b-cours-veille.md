# Cours – La veille technologique

*BTS SIO SISR 1re année – Bloc 1 – S14*

## 1. Pourquoi la Veille est Obligatoire

### 1.1 L'Obsolescence des Compétences IT

```
   CYCLE DE VIE D'UNE TECHNOLOGIE IT
   ─────────────────────────────────────────────────────────────

   Année 0   → Technologie émergente
   Année 2   → Adoption croissante (vous l'apprenez)
   Année 5   → Technologie mature (vous la maîtrisez)
   Année 8   → Début du déclin
   Année 12  → Legacy (maintenance uniquement)
   Année 15+ → Obsolète

   Exemple : Windows Server 2008
   • 2008 : Lancement
   • 2012 : Très répandu
   • 2020 : Fin de support Microsoft
   • 2024 : Obsolète — vulnérabilités non patchées
```

**Le problème :** Si vous ne vous mettez pas à jour, vous devenez obsolète avec la technologie.

**La solution :** Veille technologique continue = apprentissage permanent.

### 1.2 Les Chiffres

| **Secteur IT** | **Obsolescence** |
|---|---|
| Langages de programmation | 5-7 ans |
| OS serveur | 8-10 ans |
| Équipements réseau | 5-7 ans |
| Protocoles réseau | 10-15 ans |

> [!TIP]
> Sans veille, tes compétences techniques deviennent vite **périmées** : les outils, les versions et les failles évoluent en permanence.

## 2. Les Sources de Veille

### 2.1 Typologie des Sources

| **Type** | **Fiabilité** | **Mise à jour** | **Exemple** |
|---|---|---|---|
| **Documentation officielle** |  | Lente | Microsoft Docs, Cisco.com |
| **Blogs éditeurs** |  | Rapide | Blog VMware, Red Hat |
| **Communautés** |  | Très rapide | Stack Overflow, Reddit |
| **Presse spécialisée** |  | Quotidienne | ZDNet, ITespresso |

### 2.2 Sources par Domaine

**SYSTÈMES WINDOWS :**
- Documentation : https://learn.microsoft.com
- Blog : https://techcommunity.microsoft.com
- Communauté : r/sysadmin (Reddit)

**SYSTÈMES LINUX :**
- Documentation : https://www.kernel.org
- Blogs : Red Hat Developer
- Communauté : r/linuxadmin

**RÉSEAUX :**
- Documentation : Cisco Learning Network
- Blogs : Packet Pushers
- Communauté : r/networking

**SÉCURITÉ :**
- Alertes : CERT-FR, ANSSI, CVE Database
- Blogs : Krebs on Security
- Communauté : r/netsec

### 2.3 Détecter les Sources Fiables

```
   ✅ SOURCE FIABLE
   ──────────────────────────────────────────────────────────────
   ✅ Auteur identifié
   ✅ Sources citées
   ✅ Date récente (< 1 an)
   ✅ Pas de sensationnalisme
   ✅ Cohérence technique

   ❌ SOURCE NON FIABLE
   ──────────────────────────────────────────────────────────────
   ❌ Auteur anonyme
   ❌ Clickbait ("Ce hack CHOQUANT...")
   ❌ Aucune source
   ❌ Date ancienne
   ❌ Erreurs techniques
```

## 3. Outils de Veille

### 3.1 Agrégateur RSS — Feedly

**RSS** permet de s'abonner aux mises à jour d'un site.

**Feedly** centralise tous vos flux :

```
   AVANTAGES
   ──────────────────────────────────────────────────────────────
   ✅ Gratuit
   ✅ Centralise 100+ sources
   ✅ Lecture rapide (5 min)
   ✅ Sauvegarde articles
   ✅ Catégorisation par thème

   CONFIGURATION
   ──────────────────────────────────────────────────────────────
   Catégories :
   ├── Systèmes (Windows, Linux, virtualisation)
   ├── Réseaux (Cisco, protocoles)
   ├── Sécurité (CVE, ANSSI)
   └── Cloud (Azure, AWS)

   20-30 sources recommandées
```

**Tutoriel Feedly :**
1. Créer compte sur https://feedly.com
2. Cliquer "+ Add Content"
3. Rechercher "Microsoft Tech Community" → Ajouter
4. Créer catégorie "Systèmes"

### 3.2 Alertes Google

**Google Alerts** envoie email quand un mot-clé apparaît.

```
   ALERTES RECOMMANDÉES
   ──────────────────────────────────────────────────────────────
   1. "Windows Server 2022" + "nouvelle fonctionnalité"
   2. "CVE" + "critique" + "Windows"
   3. "Cisco" + "vulnérabilité"
   4. "ANSSI"
   5. [Ville] + "offre emploi" + "technicien réseau"

   Fréquence : digest quotidien
```

**Créer une alerte :**
1. https://www.google.com/alerts
2. Saisir terme
3. Fréquence : quotidien
4. Créer l'alerte

### 3.3 Réseaux Sociaux Techniques

| **Plateforme** | **Usage** | **À suivre** |
|---|---|---|
| **LinkedIn** | Suivre experts et entreprises | Microsoft, Cisco |
| **Twitter/X** | Alertes temps réel | #infosec, #sysadmin |
| **Reddit** | Discussions techniques | r/sysadmin, r/networking |
| **YouTube** | Tutoriels | NetworkChuck |

## 4. Méthode de Veille

### 4.1 Routine 30 Minutes / Semaine

```
   LUNDI MATIN — 30 MINUTES
   ──────────────────────────────────────────────────────────────

   10 MIN — Feedly (scan titres)
   10 MIN — Lecture approfondie (2-3 articles)
   5 MIN  — Alertes Google
   5 MIN  — Réseaux sociaux

   TOTAL : 30 min → Compétence à jour
```

### 4.2 Documentation

```
   CARNET DE VEILLE
   ──────────────────────────────────────────────────────────────
   Outil : OneNote, Notion, Markdown

   Structure :
   ├── 2024
   │   ├── Novembre
   │   │   ├── Semaine 46
   │   │   │   ├── Windows Server 2025 Preview
   │   │   │   ├── CVE-2024-XXXXX critique
   │   │   ├── Semaine 47

   Par entrée :
   ├── Titre
   ├── Date
   ├── Source (URL)
   ├── Résumé
   ├── Pertinence
   └── Action
```

---
