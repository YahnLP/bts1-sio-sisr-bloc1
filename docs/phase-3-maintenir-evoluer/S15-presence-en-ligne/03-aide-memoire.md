# Aide-mémoire – Site web, HTTPS et base de données

*BTS SIO SISR 1re année – Bloc 1 – S15*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

## Pile LAMP

Linux · Apache · MariaDB (ou MySQL) · PHP.

| Besoin | Commande |
|---|---|
| Tester Apache | `sudo apache2ctl configtest` |
| Activer SSL | `sudo a2enmod ssl` · `sudo a2ensite site-ssl` |
| Recharger | `sudo systemctl reload apache2` |
| Certificat auto-signé | `sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout site.key -out site.crt` |
| Base | `CREATE DATABASE`, `CREATE USER`, `GRANT` |
| Export | `mysqldump base > base.sql` |

- Le site = **fichiers + base** : on sauvegarde **les deux**.
- **Un compte par application**, droits minimaux.
- Certificat **auto-signé** : adapté au TP, **pas** à un site public (le navigateur le refuse).