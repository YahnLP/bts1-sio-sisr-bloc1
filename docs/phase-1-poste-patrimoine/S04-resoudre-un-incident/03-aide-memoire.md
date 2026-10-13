# Aide-mémoire – Résoudre un incident

*BTS SIO SISR 1re année – Bloc 1 – S04*

> Un mot ou un sigle inconnu ? Passe la souris dessus, ou ouvre le [glossaire](../../ressources/glossaire.md).

## Cycle de vie

Signalement → enregistrement → qualification → diagnostic → résolution → validation par l'utilisateur → clôture.

## Cinq questions

1. Que voit l'utilisateur **exactement** ?
2. **Depuis quand** ? Qu'est-ce qui a changé ?
3. **Qui d'autre** est touché ?
4. Peut-on le **reproduire** ?
5. Quelle est **la couche la plus basse** à vérifier d'abord (câble, alimentation, réseau, droits, application) ?

## Commandes Windows utiles

| Besoin | Commande |
|---|---|
| Réseau du poste | `ipconfig /all`, `ping` |
| Droits d'un dossier | `icacls C:\\chemin` |
| Imprimantes | `Get-Printer` (PowerShell) |
| Redémarrer l'impression | `Restart-Service Spooler` |
| Processus gourmands | `Get-Process | Sort-Object CPU -Descending | Select -First 10` |
| Espace disque | `Get-Volume` |

**Fiche de base de connaissances :** symptôme · cause · solution · vérification · auteur et date.