# Annexe – Scripts de sauvegarde automatique (Bash)

*BTS SIO SISR 1re année – Bloc 1 – S11*

## Script du TP : `sauvegarde-configs.sh`

C'est le script installé à l'étape 1 du [TP](02-tp.md). Il archive `/etc/apache2`, calcule l'empreinte, tient un journal et conserve les 14 dernières sauvegardes. Pour sauvegarder d'autres dossiers, modifie la liste `SOURCES`.

```bash
#!/bin/bash
# Sauvegarde des configurations (TP S11)
# Usage : sudo /usr/local/bin/sauvegarde-configs.sh
# Rôle  : archive les dossiers listés, calcule une empreinte, journalise,
#         conserve les 14 dernières sauvegardes.

set -u

SOURCES=("/etc/apache2")                 # dossiers à sauvegarder
DEST="/var/backups/configs"              # dossier des sauvegardes
CONSERVER=14                             # nombre de sauvegardes gardées
LOG="$DEST/sauvegarde.log"

mkdir -p "$DEST"
chmod 750 "$DEST"

DATE=$(date +%Y%m%d-%H%M%S)
ARCHIVE="configs-$DATE.tar.gz"

journal() { echo "$(date '+%F %T') $*" | tee -a "$LOG"; }

journal "Début de la sauvegarde ($ARCHIVE)"

# Archive : -C / pour stocker des chemins relatifs (etc/apache2/...)
dossiers=()
for s in "${SOURCES[@]}"; do dossiers+=("${s#/}"); done
if ! tar -czf "$DEST/$ARCHIVE" -C / "${dossiers[@]}" 2>>"$LOG"; then
    journal "ERREUR : la création de l'archive a échoué"
    exit 1
fi

# Empreinte (nom de fichier relatif, pour 'sha256sum -c' depuis le dossier)
( cd "$DEST" && sha256sum "$ARCHIVE" > "${ARCHIVE%.tar.gz}.sha256" )
chmod 640 "$DEST/$ARCHIVE" "$DEST/${ARCHIVE%.tar.gz}.sha256"

journal "Archive créée : $(du -h "$DEST/$ARCHIVE" | cut -f1)"

# Rotation : on garde les $CONSERVER plus récentes
cd "$DEST" || exit 1
ls -1t configs-*.tar.gz 2>/dev/null | tail -n +$((CONSERVER + 1)) | while read -r vieux; do
    rm -f "$vieux" "${vieux%.tar.gz}.sha256"
    journal "Ancienne sauvegarde supprimée : $vieux"
done

journal "Fin de la sauvegarde"
```

## Pour aller plus loin : sauvegarder des équipements réseau

Exemple de principe (équipements Cisco par SSH avec `expect`). **Non utilisé dans le TP** : il demande des équipements joignables et le paquet `expect`. Le mot de passe en clair n'est là que pour l'exemple : en production, on utilise une clé SSH ou un coffre de secrets.

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
    expect << EOF > "$FILENAME"
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
EOF
    
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
