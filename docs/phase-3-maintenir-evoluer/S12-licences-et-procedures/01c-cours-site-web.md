# Cours – Conformité d'un site web : mentions légales, contenus, charte graphique

*BTS SIO SISR 1re année – Bloc 1 – S12*

> [!NOTE] Ce que tu dois savoir déjà
> - **Prérequis :** S02, S05, S06 et le site WordPress vu en S15 (ou son principe).
> - **Fond juridique :** la responsabilité de l'éditeur et de l'hébergeur, le droit d'auteur et les données personnelles sont approfondis dans la CEJM (S12, S14, S16, S17). Ici, on regarde ce que **le technicien vérifie et met en place** sur un site.

## À la fin de ce cours, tu sauras

- [ ] **Lister** les mentions légales d'un site professionnel et **vérifier** qu'elles sont accessibles ;
- [ ] **Distinguer** mentions légales, conditions générales d'utilisation (CGU), conditions générales de vente (CGV) et politique de confidentialité ;
- [ ] **Décider** si on peut utiliser un contenu externe (image, texte, police) sur le site ;
- [ ] **Décrire** une charte graphique et **contrôler** le contraste d'un texte ;
- [ ] **Appliquer** des conventions d'écriture électronique simples.

---

## 1. Les mentions légales

Un site professionnel doit permettre d'**identifier** celui qui l'édite et celui qui l'héberge. Cette obligation vient de la loi pour la confiance dans l'économie numérique (LCEN, 2004) ; le détail exact des mentions et des sanctions est **à vérifier** sur Légifrance ou sur le site de la CNIL avant d'être rédigé pour un client.

| **Mention** | **Contenu typique** |
|---|---|
| **Éditeur** | Dénomination, forme juridique, adresse du siège, téléphone ou courriel, capital, numéro d'immatriculation, numéro de TVA le cas échéant |
| **Directeur de la publication** | Nom de la personne responsable du contenu |
| **Hébergeur** | Dénomination, adresse et téléphone de l'hébergeur |
| **Données personnelles** | Lien vers la politique de confidentialité et moyen d'exercer ses droits (voir la CEJM, S14) |

Les mentions doivent être **accessibles** depuis toutes les pages : le plus souvent un lien dans le pied de page.

| **Document** | **Qui le fixe ?** | **À quoi sert-il ?** |
|---|---|---|
| **Mentions légales** | La loi (contenu imposé) | Identifier l'éditeur et l'hébergeur |
| **CGU** (conditions générales d'utilisation) | L'éditeur | Fixer les règles d'usage du site par les visiteurs |
| **CGV** (conditions générales de vente) | L'éditeur | Encadrer les ventes en ligne |
| **Politique de confidentialité** | Le responsable du traitement (RGPD) | Informer sur les données collectées et les droits |

## 2. Éditeur et hébergeur : qui répond de quoi ?

- L'**éditeur** répond des contenus qu'il publie.
- L'**hébergeur** a une responsabilité **limitée** : il n'est pas tenu de surveiller les contenus, mais il doit retirer promptement un contenu manifestement illicite qui lui est signalé.
- Le technicien vérifie que l'éditeur et l'hébergeur sont **identifiés** sur le site et que le moyen de **signaler** un contenu est prévu.

## 3. Utiliser un contenu externe : puis-je ?

Par défaut, une image, un texte, une photo ou une police sont **protégés** : il faut une autorisation. Les cas courants :

| **Situation** | **Décision** |
|---|---|
| Image trouvée par un moteur de recherche, sans licence indiquée | Non, sauf accord écrit de l'auteur |
| Image sous licence libre (par exemple Creative Commons) | Oui, **en respectant les conditions** de la licence |
| Courte citation d'un texte avec le nom de l'auteur et la source | Oui, dans le cadre du droit de citation, sans reproduire l'œuvre entière |
| Photo où des personnes sont reconnaissables | Accord de la personne (droit à l'image) |
| Police ou icône installée avec une licence qui interdit l'usage web | Non |

**Les options des licences Creative Commons**

| **Option** | **Signification** |
|---|---|
| BY | Citer l'auteur |
| SA | Partager dans les mêmes conditions |
| NC | Pas d'usage commercial |
| ND | Pas de modification |

Un site d'organisation est souvent un usage **commercial** : une image NC y est interdite. On note la **source** et la **licence** de chaque contenu dans un tableau de suivi.

## 4. La charte graphique

La **charte graphique** fixe l'identité visuelle de l'organisation pour que ses supports restent cohérents.

| **Élément** | **Ce que la charte précise** |
|---|---|
| Logo | Versions, zone de protection, tailles minimales, usages interdits |
| Couleurs | Palette avec les codes (par exemple en hexadécimal) |
| Typographie | Polices des titres et du texte, tailles |
| Images | Style des illustrations et des photos |
| Mise en page | Marges, grille, boutons |

Sur un site, la charte se traduit dans le **thème** (couleurs, polices, logo) : le technicien la respecte et ne change pas ces réglages à sa guise.

**Lisibilité et accessibilité.** Un texte doit être assez contrasté avec son fond. Le critère courant (niveau AA des règles d'accessibilité WCAG) demande un rapport de contraste d'au moins **4,5 pour 1** pour un texte normal. Le référentiel français d'accessibilité est le RGAA, obligatoire pour certains organismes.

| **Texte / fond** | **Rapport de contraste** | **Conforme (4,5 : 1) ?** |
|---|---|---|
| Gris #AAAAAA sur blanc | 2,32 : 1 | Non |
| Gris #767676 sur blanc | 4,54 : 1 | Oui (limite) |
| Gris #595959 sur blanc | 7,00 : 1 | Oui |

## 5. Les conventions d'écriture électronique

On lit à l'écran vite et par balayage : on écrit en conséquence.

- **Un seul titre principal** par page, puis des titres de niveaux hiérarchisés.
- **Paragraphes courts**, listes à puces pour les énumérations.
- **Liens explicites** : « Télécharger la procédure d'installation (PDF) » et non « cliquez ici ».
- **Texte alternatif** décrivant chaque image utile.
- **Noms de fichiers** en minuscules, sans espace ni accent, avec des tirets : `procedure-dhcp-v1.pdf`.
- **Typographie française** : espace avant `;` `:` `?` `!`, guillemets « ».
- **Version et date** sur chaque document.

## À retenir

- Un site professionnel doit **identifier son éditeur et son hébergeur** : mentions légales accessibles depuis toutes les pages.
- Mentions légales, CGU, CGV et politique de confidentialité sont **quatre documents différents**.
- Un contenu externe n'est utilisable qu'avec **autorisation** ou **licence adaptée** ; on note la source et la licence.
- La **charte graphique** garantit la cohérence ; un texte doit atteindre un contraste d'au moins **4,5 : 1**.
- On écrit pour l'écran : titres, listes, liens explicites, texte alternatif, noms de fichiers propres.

## Je vérifie mes acquis

- [ ] Je cite quatre mentions légales d'un site professionnel
- [ ] Je distingue mentions légales, CGU, CGV et politique de confidentialité
- [ ] Je décide si je peux utiliser une image trouvée en ligne
- [ ] Je lis les options d'une licence Creative Commons
- [ ] Je décris les éléments d'une charte graphique
- [ ] Je vérifie le contraste d'un texte
- [ ] J'applique cinq conventions d'écriture électronique

---
