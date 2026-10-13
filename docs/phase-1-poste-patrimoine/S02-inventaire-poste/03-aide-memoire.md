# Aide-mémoire – Inventaire d'un poste

*BTS SIO SISR 1re année – Bloc 1 – S02*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

## Collecter les informations

| Information | Windows (PowerShell) | Linux |
|---|---|---|
| Système | `Get-ComputerInfo | Select OsName, OsVersion` | `hostnamectl` |
| Processeur | `Get-CimInstance Win32_Processor` | `lscpu` |
| Mémoire | `Get-CimInstance Win32_PhysicalMemory` | `free -h` |
| Disques | `Get-PhysicalDisk` | `lsblk` |
| N° de série | `Get-CimInstance Win32_BIOS` | `sudo dmidecode -s system-serial-number` |
| Réseau | `ipconfig /all` | `ip -br a` |
| Logiciels | `Get-Package` | `dpkg -l` |

`msinfo32` donne une vue graphique du système sous Windows.

## Une bonne fiche technique

Identification (nom, n° de série) · localisation et affectation · composants · système et mises à jour · logiciels · réseau · sécurité · **historique des interventions** · date de la dernière mise à jour de la fiche.