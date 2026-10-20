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

## Partie C – Conformité du site de SimIO SARL

*Les mentions légales sont rédigées avec des champs ​fictifs. Le contenu légal exact est à vérifier sur une source officielle avant de l'appliquer à un site réel.*

| N° | Écart | Risque | Correction attendue |
|---|---|---|---|
| 1 | Pas de mentions légales : seul « © 2026 SimIO » en pied de page | Éditeur et hébergeur non identifiés ; non-conformité à l'obligation d'identification | Ajouter une page « Mentions ​légales » liée dans le pied de page de toutes les pages |
| 2 | Photo copiée depuis un moteur de recherche, sans source | Atteinte au droit d'auteur, risque de réclamation | Retirer la photo, ou utiliser une photo propre ou sous licence adaptée, avec la source notée |
| 3 | Liens « cliquez ici » | Lecture difficile, ​mauvaise accessibilité | Libellé explicite : « Télécharger la procédure d'installation (PDF) » |
| 4 | Gris #AAAAAA sur blanc, contraste de 2,32 : 1 | Texte illisible pour certains visiteurs, inférieur au seuil de 4,5 : 1 | Utiliser une couleur plus foncée |
| 5 | ​Formulaire sans information sur l'usage des données | Défaut d'information des personnes (RGPD) | Ajouter une mention d'information et un lien vers la politique de confidentialité |
| 6 | Nom de fichier avec espaces, accents et parenthèses | ​Liens cassés, désordre des versions | `procedure-dhcp-v1.pdf` (minuscules, tirets, version) |
| 7 | Images sans texte alternatif | Contenu inaccessible aux lecteurs d'écran | ​Ajouter un texte alternatif décrivant l'image utile |

**Choix de couleur (question 2) :** #595959 (7,00 : 1) reste dans les gris tout en étant nettement conforme. #767676 (4,54 : 1) est conforme mais à la limite : la marge est faible. L'étudiant doit justifier par le rapport de contraste.

**Mentions légales (question 3) :** attendues si tous les champs du modèle sont renseignés (éditeur, ​siège, contact, immatriculation, directeur de la publication, hébergeur, lien vers la politique de confidentialité). Vérifier qu'aucun numéro réel n'est utilisé.

**Réflexion (question 4) :** un moteur de recherche indexe des images sans les libérer de droits ; la licence reste celle de l'auteur. On remplace par une photo ​réalisée par l'entreprise, une image libre dont on respecte les conditions, ou une illustration créée par l'équipe.

**Pièges fréquents :** confondre mentions légales et CGU ; croire qu'une image sans mention de droits est libre ; corriger la couleur sans recalculer le contraste.

## Pièges fréquents

- **Procédure qui décrit l'outil**, pas la démarche pour réussir.
- **Captures illisibles** ou sans annotation.
- **Plage DHCP qui recouvre des adresses fixes** (serveurs, imprimantes).
- **Mot de passe réel** visible sur une capture.

## Bilan de compétences

Auto-évaluation ; B1.1, B1.2 et B1.6 proposées, à valider.
