# Africa Services RDC — site web

Site statique (HTML / CSS / JS, sans build) d'Africa Services RDC (AFSRDC).
*Restaurer les vies et transformer les communautés — Restoring Lives and Transforming Communities.*

## Aperçu local

```bash
python -m http.server 8765
```

Puis ouvrir http://127.0.0.1:8765

## Structure

| Fichier | Rôle |
|---|---|
| `index.html` | Accueil |
| `a-propos.html` | Vision, mission, objectifs, valeurs, approche |
| `ce-que-nous-faisons.html` | Les 5 domaines d'intervention |
| `projets.html` | Projets (filtres) + carte des zones |
| `actualites.html` | Actualités et témoignages |
| `publications.html` | Rapports, études, plaidoyer, guides |
| `contact.html` | Coordonnées, formulaire, carte, FAQ |
| `faire-un-don.html` | Don ponctuel / mensuel |
| `s-impliquer.html` | Get Involved |
| `credits.html` | Crédits et licences des photos |
| `assets/css/style.css` | Système de design (couleurs, typographie, composants) |
| `assets/js/main.js` | En-tête, menu, pied de page, animations, formulaires, don |
| `assets/js/map.js` | Carte des zones d'intervention (Leaflet) |
| `assets/img/` | Photos (+ `credits.json`) |

## À personnaliser

- **Coordonnées** (téléphone, e-mail, adresse, réseaux) : objet `ORG` en haut de `assets/js/main.js`, ainsi que `contact.html` et `faire-un-don.html`.
- **Zones de la carte** : liste `ZONES` dans `assets/js/map.js`.
- **Formulaires** : ajouter `data-endpoint="https://formspree.io/f/VOTRE_ID"` sur les balises `<form data-validate>`.
- **Paiement** : brancher la solution choisie sur le bouton `[data-total]` de `faire-un-don.html`.
- **Contenus d'exemple** : chiffres, projets, actualités, témoignages et publications sont fictifs.

## Déploiement GitHub Pages

1. Créer un dépôt sur GitHub, puis :
   ```bash
   git remote add origin https://github.com/<compte>/<depot>.git
   git push -u origin main
   ```
2. Sur GitHub : **Settings → Pages → Source : Deploy from a branch → `main` / `(root)`**.

## Photos

Photos d'illustration issues de Wikimedia Commons, sous licences libres (CC BY, CC BY-SA, CC0) : voir `credits.html`.
