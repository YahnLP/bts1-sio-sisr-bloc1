# Annexe – Checklist de sécurité d'un site WordPress

*BTS SIO SISR 1re année – Bloc 1 – S15*

| **Mesure** | **Procédure** | **✓** |
|---|---|---|
| **MDP admin fort** | 12+ caractères | ☐ |
| **Utilisateur != "admin"** | Créer nouvel admin, supprimer "admin" | ☐ |
| **Désactiver éditeur** | `DISALLOW_FILE_EDIT` dans wp-config.php | ☐ |
| **Supprimer thèmes/plugins inutilisés** | Apparence/Extensions → Supprimer | ☐ |
| **Mises à jour** | Tableau de bord → Mises à jour | ☐ |
| **Wordfence** | Extensions → Ajouter → Wordfence | ☐ |
| **Limiter tentatives connexion** | Plugin : Limit Login Attempts | ☐ |
| **Sauvegardes auto** | Plugin : UpdraftPlus | ☐ |
| **HTTPS** | Let's Encrypt (certbot) | ☐ |
| **Cacher version WP** | `remove_action('wp_head', 'wp_generator')` | ☐ |
