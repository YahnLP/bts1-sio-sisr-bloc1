# Corrigé – S12 : Licences et procédures

*Réservé à l'enseignant. La syntaxe de la configuration DHCP de ​référence a été **testée** (`dhcpd -t`). Les messages d'erreur d'exploitation cités pour la section « troubleshooting » sont des erreurs courantes **non rejouées** ici.*

## Partie A – Audit des licences

### Taux de conformité (tableau du TP)

| Logiciel | Statut | Compté comme commercial ? | Conforme ? |
|---|---|---|---|
| Microsoft Office Standard 2021 | 85 installations, 78 ​licences : −7 | Oui | Non |
| Adobe Acrobat Reader DC | Gratuit | Non | (hors calcul) |
| WinRAR | 90 installations, 0 licence | Oui | Non |
| AutoCAD 2024 | 5 / 5 | Oui | Oui |
| 7-Zip | Libre | Non | (hors calcul) |

- ​Logiciels commerciaux : **3**. Conformes : **1** (AutoCAD).
- **Taux de conformité = 1 / 3 ≈ 33 %.**
- Si l'élève compte les cinq logiciels, il obtient 3 / 5 = 60 % : **réponse à reprendre** (un logiciel gratuit ou libre n'a pas de licence à acheter, il n'entre donc pas dans le calcul).

### Remédiation

| ​Logiciel | Écart | Options à comparer | Réponse du TP |
|---|---|---|---|
| Office | −7 | Désinstaller sur les postes où il n'est pas utilisé, **réaffecter** des licences inutilisées, **acheter** les manquantes | 7 licences |
| WinRAR | −90 | Migrer vers 7-Zip (gratuit) ou acheter ; dans les deux cas, **traiter** les 90 installations | 7-Zip |

**Coût de l'exemple** : 7 × 300 € = **2 100 €**. Le prix unitaire (300 €) est une **valeur d'exemple du TP**, pas un prix relevé : à remplacer par un devis dans une ​réalisation.

**À faire dire** : il faut aussi chiffrer le **temps de déploiement** de la migration (90 postes) et la **communication** aux utilisateurs.

## Partie B – Procédure DHCP

### Éléments de référence (Ubuntu 22.04)

Fichier `/etc/dhcp/dhcpd.conf` (**syntaxe testée** avec `dhcpd -t`) :

```text
default-lease-time 600;
max-lease-time 7200;
authoritative;
subnet 192.168.10.0 netmask 255.255.255.0 {
  range 192.168.10.100 192.168.10.200;
  option routers 192.168.10.1;
  option domain-name-servers 192.168.10.10;
  option domain-name "siosarl.local";
}
```

| Point | Attendu |
|---|---|
| Interface | Dans `/etc/default/isc-dhcp-server`, `INTERFACESv4="<nom de l'interface>"` (par exemple `ens33`) |
| Prérequis | La machine a une adresse **fixe dans le sous-réseau servi** (192.168.10.x) |
| Démarrage | `systemctl enable --now isc-dhcp-server`, puis `systemctl status isc-dhcp-server` |
| Vérification | `journalctl -u isc-dhcp-server` ou `/var/log/syslog` : ​messages `DHCPDISCOVER`, `DHCPOFFER`, `DHCPREQUEST`, `DHCPACK` |
| Test client | Client Linux : `sudo dhclient -v <interface>` ; Windows : `ipconfig /renew` ; l'adresse obtenue est dans 192.168.10.100–200 |

### Troubleshooting (au moins deux erreurs)

| Symptôme | Cause probable |
|---|---|
| Service en échec au démarrage | Erreur de syntaxe : lancer `dhcpd -t -cf /etc/dhcp/dhcpd.conf` |
| ​Message « No subnet declaration for … » | L'interface du serveur n'a pas d'adresse dans le sous-réseau déclaré |
| Message « Not configured to listen on any interfaces! » | `INTERFACESv4` vide ou nom d'interface erroné |
| Aucune offre ​reçue côté client | Pare-feu, mauvais VLAN, deuxième serveur DHCP (conflit) |

**À signaler** : le logiciel `isc-dhcp-server` est arrivé en fin de vie chez son éditeur (2022) ; son successeur est **Kea**. Il reste le serveur utilisé dans le TP.

### Grille de relecture de la procédure

| Critère | Attendu |
|---|---|
| Objectif et prérequis clairs | Oui |
| Étapes **numérotées**, une action par étape | Oui |
| ​Chaque commande suivie de son **résultat attendu** | Oui |
| 3 captures annotées au minimum | Oui |
| Dépannage | 2 erreurs avec cause et solution |
| Historique des versions rempli | Oui |
| Test par un tiers | Un camarade ​réussit **sans aide** |

## Pièges fréquents

- **Procédure qui décrit l'outil**, pas la démarche pour réussir.
- **Captures illisibles** ou sans annotation.
- **Plage DHCP qui recouvre des adresses fixes** (serveurs, imprimantes).
- **Mot de passe réel** visible sur une capture.

## Bilan de compétences

Auto-évaluation ; B1.1, B1.2 et B1.6 proposées, à valider.
