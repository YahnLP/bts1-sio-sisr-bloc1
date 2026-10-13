# Annexe – Dépannage de Clonezilla

*BTS SIO SISR 1re année – Bloc 1 – S13*

## Erreur 1 — "No valid image found"

**Symptôme :** Lors de la restauration, Clonezilla ne trouve pas l'image capturée.

**Causes possibles :**
1. Mauvais périphérique sélectionné (mauvaise clé USB ou partition)
2. Image corrompue ou incomplète
3. Nom d'image avec caractères spéciaux

**Solutions :**
1. Vérifier que le bon périphérique est monté (même clé USB que pour la capture)
2. Lister les images disponibles manuellement :
   ```bash
   ls /home/partimag/
   ```
3. Si l'image est corrompue, refaire la capture

## Erreur 2 — "Target disk is too small"

**Symptôme :** Le disque cible est plus petit que le disque source.

**Causes :**
- Disque cible de 120 Go, image capturée depuis un disque de 500 Go

**Solutions :**
1. Utiliser un disque cible au moins aussi grand que le disque source
2. Avant la capture, réduire la partition source pour qu'elle tienne sur le disque cible :
   - Windows : Gestion des disques → Réduire le volume
   - Clonezilla : Utiliser "saveparts" (partition) au lieu de "savedisk" (disque entier)

## Erreur 3 — Après déploiement, Windows affiche "Preparing Automatic Repair"

**Symptôme :** Windows ne démarre pas normalement après déploiement.

**Causes possibles :**
1. Sysprep mal exécuté ou non exécuté
2. Corruption de l'image lors du transfert

**Solutions :**
1. Refaire la capture en s'assurant que Sysprep a bien été exécuté avec `/generalize /oobe`
2. Vérifier l'intégrité de l'image après capture (option `-sck` dans Clonezilla)

## Erreur 4 — Les deux clones ont le même SID

**Symptôme :** `whoami /user` affiche le même SID sur deux machines différentes.

**Cause :** Sysprep n'a pas été exécuté avant la capture.

**Solution :**
1. Recréer la machine de référence proprement
2. **Exécuter Sysprep AVANT de capturer l'image**
3. Redéployer l'image
