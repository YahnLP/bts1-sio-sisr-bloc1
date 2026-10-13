# Aide-mémoire – Configurations et sauvegarde

*BTS SIO SISR 1re année – Bloc 1 – S11*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

## Vocabulaire

**CI** (élément de configuration) · **CMDB** (base des CI et de leurs relations) · **baseline** (état de référence) · **rollback** (retour arrière).

## Commandes

| Besoin | Commande |
|---|---|
| Archiver | `sudo tar -czf conf.tar.gz /etc/apache2` |
| Lister une archive | `tar -tzf conf.tar.gz` |
| Empreinte | `sha256sum conf.tar.gz > conf.tar.gz.sha256` puis `sha256sum -c` |
| Tester Apache | `sudo apache2ctl configtest` |
| Versionner | `git init` · `git add .` · `git commit -m "…"` |
| Comparer | `git diff` · `diff -r dossierA dossierB` |
| Historique | `git log --oneline` |

## Cisco

`show running-config` (mémoire vive) · `show startup-config` (conservée) · `copy running-config startup-config` pour enregistrer.

**Toujours :** sauvegarder avant, tester après, **tester la restauration**.