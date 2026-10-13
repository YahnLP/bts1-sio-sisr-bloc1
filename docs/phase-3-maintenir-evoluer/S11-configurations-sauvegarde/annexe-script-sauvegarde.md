# Annexe – Script de sauvegarde automatique (exemple Bash)

*BTS SIO SISR 1re année – Bloc 1 – S11*

```bash
#!/bin/bash
# ═══════════════════════════════════════════════════════════════════
# Script : backup_configs.sh
# Auteur : [Votre nom]
# Date   : 2024-11-15
# Rôle   : Sauvegarde automatique des configurations réseau
# Usage  : ./backup_configs.sh
# Cron   : 0 2 * * * /backup/scripts/backup_configs.sh (tous les jours 2h)
# ═══════════════════════════════════════════════════════════════════

# ─── Configuration ───
BACKUP_DIR="/backup/configs"
DATE=$(date +%Y%m%d_%H%M%S)
LOG_FILE="$BACKUP_DIR/backup.log"

# Liste des équipements à sauvegarder (IP + nom)
declare -A EQUIPEMENTS=(
    ["192.168.1.1"]="Switch-Core1"
    ["192.168.1.2"]="Switch-Distrib-RH"
    ["192.168.1.254"]="Routeur-Principal"
)

# Identifiants (À SÉCURISER — utiliser vault ou clé SSH)
USERNAME="admin"
PASSWORD="password"  # ⚠️ NE PAS stocker en clair en production

# ─── Fonction de sauvegarde ───
backup_device() {
    local IP=$1
    local NAME=$2
    local FILENAME="${BACKUP_DIR}/${NAME}/config_${NAME}_${DATE}.txt"
    
    echo "[$(date)] Sauvegarde de ${NAME} (${IP})..." | tee -a "$LOG_FILE"
    
    # Créer le dossier si inexistant
    mkdir -p "${BACKUP_DIR}/${NAME}"
    
    # Méthode 1 : TFTP (si le switch supporte)
    # (nécessite un serveur TFTP configuré)
    
    # Méthode 2 : SSH avec expect (exemple Cisco)
    expect << EOF
        spawn ssh ${USERNAME}@${IP}
        expect "Password:"
        send "${PASSWORD}\r"
        expect "#"
        send "terminal length 0\r"
        expect "#"
        send "show running-config\r"
        expect "#"
        send "exit\r"
        expect eof
EOF > "$FILENAME"
    
    # Vérifier que le fichier a été créé
    if [ -f "$FILENAME" ]; then
        echo "[$(date)] ✅ ${NAME} sauvegardé : ${FILENAME}" | tee -a "$LOG_FILE"
    else
        echo "[$(date)] ❌ Erreur sauvegarde ${NAME}" | tee -a "$LOG_FILE"
    fi
}

# ─── Boucle sur tous les équipements ───
echo "═══════════════════════════════════════════════════" | tee -a "$LOG_FILE"
echo "Début de sauvegarde automatique — ${DATE}" | tee -a "$LOG_FILE"
echo "═══════════════════════════════════════════════════" | tee -a "$LOG_FILE"

for IP in "${!EQUIPEMENTS[@]}"; do
    backup_device "$IP" "${EQUIPEMENTS[$IP]}"
done

# ─── Nettoyage (garder seulement les 30 dernières sauvegardes) ───
find "$BACKUP_DIR" -name "config_*.txt" -mtime +30 -delete

echo "[$(date)] Nettoyage effectué (configs > 30 jours supprimées)" | tee -a "$LOG_FILE"
echo "═══════════════════════════════════════════════════" | tee -a "$LOG_FILE"
```
