# Aide-mémoire – Images système

*BTS SIO SISR 1re année – Bloc 1 – S13*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

## Clonage

| Notion | Sens |
|---|---|
| Machine de référence | Poste propre et configuré, base de l'image |
| Sysprep | Prépare Windows à être cloné (supprime l'identité propre à la machine) |
| Image | Copie compressée du disque, restaurable sur d'autres machines |
| SID / identité | Doit être **unique** par machine |

```text
C:\Windows\System32\Sysprep\sysprep.exe /generalize /oobe /shutdown
```

**Ordre :** installer → personnaliser → nettoyer → Sysprep → capturer → déployer → vérifier (nom, identité, tests).