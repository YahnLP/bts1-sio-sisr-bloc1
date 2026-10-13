# TP – Rédiger une procédure technique

*BTS SIO SISR 1re année – Bloc 1 – S12*

## Sujet

Rédiger une procédure complète d'installation d'un serveur DHCP sur Ubuntu Server 22.04.

**Contrainte :** Utiliser le modèle fourni en Annexe 2.

## Ressources Fournies

- Modèle de procédure vierge (Annexe 2)
- VM Ubuntu Server 22.04 (ou captures d'écran pré-faites si VM indisponible)
- Documentation officielle : `man isc-dhcp-server`

## Étapes à Documenter

Votre procédure doit couvrir :

1. Installation du paquet `isc-dhcp-server`
2. Configuration du fichier `/etc/dhcp/dhcpd.conf` avec un pool DHCP 192.168.10.100-200
3. Définition de l'interface réseau dans `/etc/default/isc-dhcp-server`
4. Démarrage et activation du service
5. Vérification des logs (`/var/log/syslog`)
6. Test avec un client DHCP

## Livrables

- Procédure complète au format PDF ou DOCX
- Minimum 3 captures d'écran annotées
- Section Troubleshooting avec au moins 2 erreurs courantes
- Historique des versions rempli

---

## Bilan de la séance

Remplis ce bilan **seul**, honnêtement : il sert à décider ce qu'il faut reprendre. Niveau : **Non maîtrisé**, **Maîtrise partielle**, **Bonne maîtrise** ou **Excellente maîtrise** (le vocabulaire des grilles nationales d'évaluation) ; **Non évalué** si tu n'as pas travaillé la compétence aujourd'hui.

| Compétence du référentiel | Ce que j'ai fait dans cette séance | Niveau |
|---|---|---|
| **B1.1** – Gérer le patrimoine informatique | | |
| **B1.2** – Répondre aux incidents et aux demandes d'assistance et d'évolution | | |
| **B1.6** – Organiser son développement professionnel | | |

> [!NOTE]
> Les codes sont ceux du [référentiel](../../ressources/referentiel.md) (l'arrêté numérote des activités : les codes « B… » sont un usage courant). Le choix des compétences pour cette séance est une proposition de l'enseignant, **à valider**.

**Je sais faire, sans aide :**

- [ ] Distinguer les grandes familles de licences logicielles ;
- [ ] Calculer un taux de conformité et proposer un plan de remédiation ;
- [ ] Expliquer le coût total de possession ;
- [ ] Rédiger une procédure technique structurée ;
- [ ] Capturer des écrans exploitables et versionner un document.

**Ce que je dois reprendre :** ______________________

**Ma question à poser à l'enseignant :** ______________________
