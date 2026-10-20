# Cours – La veille technologique

*BTS SIO SISR 1re année – Bloc 1 – S14*

## 1. Pourquoi la Veille est Obligatoire

### 1.1 L'Obsolescence des Compétences IT

<figure class="graphe diagramme"><svg viewBox="0 0 780 200" style="max-width:780px" role="img" aria-label="Cycle de vie d&#x27;une technologie informatique, de l&#x27;émergence à l&#x27;obsolescence" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="40" width="116" height="70" rx="8" class="dg-box"/>
<text x="66.0" y="71.0" text-anchor="middle" class="dg-t">Année 0</text>
<text x="66.0" y="89.0" text-anchor="middle" class="dg-s">Émergente</text>
<line x1="124" y1="75" x2="127.0" y2="75.0" class="dg-line"/>
<polygon points="136,75 127.0,70.0 127.0,80.0" class="dg-ah"/>
<rect x="136" y="40" width="116" height="70" rx="8" class="dg-box"/>
<text x="194.0" y="71.0" text-anchor="middle" class="dg-t">Année 2</text>
<text x="194.0" y="89.0" text-anchor="middle" class="dg-s">Adoption croissante</text>
<line x1="252" y1="75" x2="255.0" y2="75.0" class="dg-line"/>
<polygon points="264,75 255.0,70.0 255.0,80.0" class="dg-ah"/>
<rect x="264" y="40" width="116" height="70" rx="8" class="dg-ok"/>
<text x="322.0" y="71.0" text-anchor="middle" class="dg-t">Année 5</text>
<text x="322.0" y="89.0" text-anchor="middle" class="dg-s">Mature</text>
<line x1="380" y1="75" x2="383.0" y2="75.0" class="dg-line"/>
<polygon points="392,75 383.0,70.0 383.0,80.0" class="dg-ah"/>
<rect x="392" y="40" width="116" height="70" rx="8" class="dg-warn"/>
<text x="450.0" y="71.0" text-anchor="middle" class="dg-t">Année 8</text>
<text x="450.0" y="89.0" text-anchor="middle" class="dg-s">Début du déclin</text>
<line x1="508" y1="75" x2="511.0" y2="75.0" class="dg-line"/>
<polygon points="520,75 511.0,70.0 511.0,80.0" class="dg-ah"/>
<rect x="520" y="40" width="116" height="70" rx="8" class="dg-warn"/>
<text x="578.0" y="71.0" text-anchor="middle" class="dg-t">Année 12</text>
<text x="578.0" y="89.0" text-anchor="middle" class="dg-s">Legacy</text>
<line x1="636" y1="75" x2="639.0" y2="75.0" class="dg-line"/>
<polygon points="648,75 639.0,70.0 639.0,80.0" class="dg-ah"/>
<rect x="648" y="40" width="116" height="70" rx="8" class="dg-bad"/>
<text x="706.0" y="71.0" text-anchor="middle" class="dg-t">Année 15+</text>
<text x="706.0" y="89.0" text-anchor="middle" class="dg-s">Obsolète</text>
<text x="380" y="150" text-anchor="middle" class="dg-i">Exemple Windows Server 2008 : 2008 lancement, 2012 très répandu, 2020 fin de support, 2024 obsolète</text>
</svg>
</figure>

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
   OK : SOURCE FIABLE
   ──────────────────────────────────────────────────────────────
   OK : Auteur identifié
   OK : Sources citées
   OK : Date récente (< 1 an)
   OK : Pas de sensationnalisme
   OK : Cohérence technique

   KO : SOURCE NON FIABLE
   ──────────────────────────────────────────────────────────────
   KO : Auteur anonyme
   KO : Clickbait ("Ce hack CHOQUANT...")
   KO : Aucune source
   KO : Date ancienne
   KO : Erreurs techniques
```

## 3. Outils de Veille

### 3.1 Agrégateur RSS — Feedly

**RSS** permet de s'abonner aux mises à jour d'un site.

**Feedly** centralise tous vos flux :

```
   AVANTAGES
   ──────────────────────────────────────────────────────────────
   OK : Gratuit
   OK : Centralise 100+ sources
   OK : Lecture rapide (5 min)
   OK : Sauvegarde articles
   OK : Catégorisation par thème

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
