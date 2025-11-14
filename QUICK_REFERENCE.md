# ⚡ CrewDeck - Référence Rapide

## 🚀 Démarrage Ultra-Rapide

### Étape 1: Ouvrir
```
Double-cliquez: index.html
```

### Étape 2: Charger Démo (optionnel)
```javascript
// Dans la console (F12)
loadDemoData()
```

### Étape 3: Utiliser
- **D** = Dashboard
- **P** = Pilotes
- **S** = Sessions
- **A** = Analytics

---

## 📖 Fichiers Importants

| Fichier | Utilité | Taille |
|---------|---------|--------|
| `index.html` | Application principale | 14 KB |
| `styles.css` | Thème & styling | 13 KB |
| `app.js` | Logique & fonctionnalités | 33 KB |
| `START_HERE.md` | Commencer (30 sec) | 7 KB |
| `GETTING_STARTED.md` | Tutoriel complet | 9 KB |
| `README.md` | Documentation pro | 8 KB |
| `INSTALLATION.md` | Guide d'installation | 9 KB |

---

## 🎮 Raccourcis Clavier

```
D = Dashboard      P = Pilotes         S = Sessions        A = Analytics
N = Add Pilot      T = New Session     E = Export Data     ? = Help
```

---

## 🛠️ Console Commands

```javascript
// Charger données de démo
loadDemoData()

// Afficher statistiques
showDataStats()

// Exporter les données
exportAllData()

// Vider tout (attention!)
clearAllData()

// Importer depuis fichier
importData(fileInput)
```

---

## 📊 Format des Données

### Temps de Tours
```
MM:SS.mmm
1:22.450   ✅ Correct
12:45.890  ✅ Correct
0:58.123   ✅ Correct
122.450    ❌ Invalide
```

### Numéro Pilote
```
1-99      ✅ Correct
100       ❌ Trop grand
0         ❌ Trop petit
```

---

## 🎨 Couleurs du Thème

```css
Primary:    #06b6d4 (Cyan)
Secondary:  #3b82f6 (Blue)
Accent:     #f59e0b (Amber)
Danger:     #ef4444 (Red)
Success:    #10b981 (Green)
```

---

## 📱 Responsive Breakpoints

```css
Mobile:    < 768px
Tablet:    768px - 1024px
Desktop:   > 1024px
```

---

## 🔐 localStorage Keys

```javascript
'crewdeck_drivers'    // Array des pilotes
'crewdeck_sessions'   // Array des sessions
```

---

## 📊 Structure Pilote

```javascript
{
  id: "driver_123",
  name: "John Doe",
  number: 1,
  team: "Team A",
  car: "Porsche 911",
  bestLapTime: 82450,        // ms
  avgLapTime: 83120,         // ms
  lapTimes: [                // Array
    {
      sessionId: "session_123",
      time: 82450,           // ms
      timeString: "1:22.450",
      timestamp: "2024-01-15T10:00:00Z"
    }
  ],
  createdAt: "2024-01-15T09:00:00Z"
}
```

---

## 📊 Structure Session

```javascript
{
  id: "session_123",
  name: "Practice",
  track: "Monza",
  date: "2024-01-15",
  weather: "sunny",          // sunny|cloudy|rainy|night
  drivers: ["driver_1", "driver_2"],
  createdAt: "2024-01-15T09:00:00Z"
}
```

---

## 🔍 JSON Export Format

```json
{
  "drivers": [...],
  "sessions": [...],
  "exportedAt": "2024-01-15T10:00:00Z"
}
```

---

## 🌐 Installation Serveur

### Python 3
```bash
python3 -m http.server 8000
# Puis: http://localhost:8000
```

### Node.js
```bash
npm install -g http-server
http-server
# Puis: http://localhost:8080
```

### VS Code
```
Live Server extension → Right click index.html → Open with Live Server
```

---

## 🐛 Dépannage Rapide

### Données ne persistent pas
- Vérifiez localStorage activé
- Essayez mode normal (pas incognito)
- Testez dans autre navigateur

### Graphiques vides
- Ajoutez au moins 3 temps
- Recharchez (Ctrl+R)
- Testez loadDemoData()

### App lente
- Réduisez le nombre de sessions
- Fermez les autres onglets
- Videz le cache (Ctrl+Shift+Delete)

---

## 📚 Guide Rapide par Vue

### Dashboard
- Stats: 4 KPI principales
- Leaderboard: Top 5 pilotes
- Trend: Graphique performances
- Sessions: Dernières 5

### Pilotes
- Grid: Cartes avec infos
- + Ajouter: Nouveau pilote
- Modifier/Supprimer: Actions

### Sessions
- Liste: Avec détails
- + Nouvelle: Créer session
- Détails: Voir temps tours

### Analytics
- Distribution: Histogramme
- Progression: Line chart
- Comparaison: Bar chart

---

## ⌚ Unités de Temps

```
Stockage:   Millisecondes (ms)
Affichage:  MM:SS.mmm
Entrée:     MM:SS.mmm
Calcul:     Millisecondes
```

---

## 🔄 Flux Principal

```
Utilisateur
  ↓
Event Listener
  ↓
Traiter Données
  ↓
localStorage (Save)
  ↓
Afficher (Render)
  ↓
Interface Mise à Jour
```

---

## 📈 Graphiques Disponibles

1. **Trend** (Dashboard)
   - Type: Bar
   - Données: Best lap time par pilote

2. **Distribution** (Analytics)
   - Type: Histogram
   - Données: Répartition des temps

3. **Progression** (Analytics)
   - Type: Line
   - Données: Amélioration par tour

4. **Comparaison** (Analytics)
   - Type: Horizontal Bar
   - Données: Classement multi-pilotes

---

## 🔐 Valeurs par Défaut

```javascript
Max Pilotes/Équipe:   4
Max Sessions:         100
Format Temps:         MM:SS.mmm
Format Date:          YYYY-MM-DD
Language:             Français
Thème:                Dark Mode
Port Serveur:         8000 ou 8080
```

---

## 🚀 Extensions Possibles

```javascript
// Ajouter API
async function fetchData() { }

// Synchronisation Cloud
function syncToCloud() { }

// Push Notifications
function notifyUser() { }

// Export PDF
function exportPDF() { }

// Importation iRacing
function importFromiRacing() { }
```

---

## 📞 Support Rapide

**Erreur Console?** → F12 → Console → Copiez le message → GitHub Issues

**Données perdues?** → `showDataStats()` → Vérifiez localStorage

**Besoin d'aide?** → Consultez `GETTING_STARTED.md` (FAQ section)

---

## ✅ Checklist Pré-Production

- [ ] Testez tous les raccourcis clavier
- [ ] Ajoutez quelques pilotes
- [ ] Créez une session
- [ ] Enregistrez des temps
- [ ] Consultez les graphiques
- [ ] Exportez les données
- [ ] Testez sur mobile
- [ ] Vérifiez offline mode
- [ ] Lisez la documentation
- [ ] Amusez-vous! 🎉

---

## 🎯 KPI Clés

- **Pilotes Actifs**: Nombre de pilotes avec des temps
- **Sessions**: Nombre total de courses
- **Meilleur Temps**: Fastest lap time overall
- **Temps Moyen**: Mean lap time globally
- **Tours Enregistrés**: Total lap times recorded

---

## 📊 Statistiques Calculs

```javascript
// Meilleur temps
Math.min(...lapTimes)

// Temps moyen
lapTimes.reduce((a,b) => a+b, 0) / lapTimes.length

// Delta (écart)
bestTime - currentTime

// Progression
previousTime - currentTime
```

---

## 🎨 Customisation CSS

```css
/* Changer couleur primaire */
:root {
    --primary: #NEW_COLOR;
}

/* Changer background */
body {
    background-color: #NEW_COLOR;
}

/* Ajouter police custom */
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT');
body { font-family: 'YOUR_FONT'; }
```

---

## 🔗 Liens Rapides

- **Code Source**: Voir `app.js`
- **Styles**: Voir `styles.css`
- **Configuration**: Voir `config.json`
- **Données Demo**: Voir `demo-data.json`
- **API**: Voir commentaires dans `app.js`

---

## 🏆 Meilleure Pratique

1. **Exportez régulièrement** (E key)
2. **Sauvegardez les fichiers** (JSON backup)
3. **Utilisez les raccourcis** (Plus rapide)
4. **Nettoyez les vieilles données** (Performance)
5. **Testez sur mobile** (Responsive OK?)

---

## 🎓 Vous Êtes Prêt!

Commencez par:
1. Ouvrir `index.html`
2. Lire `START_HERE.md`
3. Charger `loadDemoData()`
4. Explorer l'interface
5. Ajouter vos propres données

**Bon pilotage!** 🏁⚡

---

*Créé pour les pilotes iRacing passionnés*
*Version 1.0.0 - Production Ready*
