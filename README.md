# 🏁 CrewDeck - iRacing Session Manager

Une application web moderne et intuitive pour gérer les performances d'une équipe de pilotes iRacing avec des visualisations de données en temps réel.

## ✨ Caractéristiques Principales

### 🎯 Gestion des Pilotes
- ➕ Ajouter/modifier/supprimer des pilotes
- 📊 Suivre le meilleur temps et la moyenne pour chaque pilote
- 🏁 Numéro de course, équipe et véhicule configurable
- 🎨 Interface moderne avec cartes animées

### ⏱️ Sessions de Course
- 📅 Créer des sessions avec date, circuit et conditions météo
- 👥 Associer plusieurs pilotes par session
- 📝 Enregistrer les temps de tours individuels au format MM:SS.mmm
- 🔄 Modifier/supprimer des sessions

### 📈 Analytics Avancées
- **Distribution des Temps**: Histogramme des temps de tours
- **Progression**: Suivi de l'amélioration par pilote au fil des tours
- **Comparaison**: Classement visuel des pilotes
- **Tendances**: Graphiques de performance en temps réel

### 🎮 Interface Utilisateur
- **Thème Racing Authentique**: Sombre avec touches cyan et bleues vibrantes
- **Dashboard Intuitif**: Statistiques en temps réel et classement
- **Animations Fluides**: Transitions et effets visuels professionnels
- **Design Responsif**: Mobile, tablet et desktop optimisés

### 🔌 Fonctionnalités Avancées
- **Vanta.js Integration**: Arrière-plan animé avec effet waves
- **ECharts Visualizations**: Graphiques interactifs et précis
- **LocalStorage Persistence**: Sauvegarde automatique des données
- **Keyboard Shortcuts**: Raccourcis clavier pour utilisateurs avancés
- **Export de Données**: Exporter tous les données en JSON

## 🚀 Démarrage Rapide

### Prérequis
- Navigateur moderne (Chrome, Firefox, Edge, Safari)
- Aucune dépendance backend

### Installation
1. Clonez ou téléchargez le projet
2. Ouvrez `index.html` dans votre navigateur
3. C'est prêt ! 🎉

```bash
# Ou utilisez un serveur local (Python 3)
python -m http.server 8000
# Puis visitez http://localhost:8000
```

## ⌨️ Raccourcis Clavier

| Raccourci | Action |
|-----------|--------|
| **D** | Aller au Dashboard |
| **P** | Aller aux Pilotes |
| **S** | Aller aux Sessions |
| **A** | Aller aux Analytics |
| **N** | Ajouter un pilote (depuis Pilotes) |
| **T** | Créer une session (depuis Sessions) |
| **E** | Exporter les données |
| **?** | Afficher l'aide des raccourcis |

## 📊 Structure des Données

### Pilote (Driver)
```javascript
{
  id: "driver_1234567890",
  name: "John Smith",
  number: 1,
  team: "Team Alpha",
  car: "Porsche 911",
  bestLapTime: 85234,        // en millisecondes
  avgLapTime: 86451,
  lapTimes: [
    {
      sessionId: "session_xyz",
      time: 85234,
      timeString: "1:25.234",
      timestamp: "2024-01-15T10:30:00Z"
    }
  ],
  createdAt: "2024-01-15T10:00:00Z"
}
```

### Session
```javascript
{
  id: "session_1234567890",
  name: "Practice Session 1",
  track: "Monza",
  date: "2024-01-15",
  weather: "sunny",
  drivers: ["driver_1", "driver_2"],
  createdAt: "2024-01-15T10:00:00Z"
}
```

## 🎨 Thème et Couleurs

### Palette Racing
```css
--primary: #06b6d4;     /* Cyan vibrant */
--secondary: #3b82f6;   /* Bleu électrique */
--accent: #f59e0b;      /* Ambre pour highlights */
--danger: #ef4444;      /* Rouge alerte */
--success: #10b981;     /* Vert de succès */

--bg-primary: #0f172a;  /* Noir racing */
--bg-secondary: #1e293b;
--bg-tertiary: #334155;
--text-primary: #f1f5f9;
--text-secondary: #cbd5e1;
```

### Effets Visuels
- Gradients subtils sur les cartes
- Backdrop blur sur les éléments flottants
- Ombres élevées pour la profondeur
- Animations de 0.3s pour les interactions
- Vanta Waves en arrière-plan (interactif)

## 📱 Responsive Design

- **Mobile (< 768px)**: Disposition en colonne unique
- **Tablet (768px - 1024px)**: Grille 2 colonnes
- **Desktop (> 1024px)**: Grille 3-4 colonnes
- **Touch targets**: Minimum 44x44px pour mobile

## 💾 Stockage Local

Toutes les données sont stockées dans `localStorage`:
- `crewdeck_drivers`: Tableau des pilotes
- `crewdeck_sessions`: Tableau des sessions

Pour effacer les données:
```javascript
localStorage.removeItem('crewdeck_drivers');
localStorage.removeItem('crewdeck_sessions');
```

## 🔧 Technologies Utilisées

- **HTML5/CSS3**: Structure et styling semantique
- **Tailwind CSS**: Utility-first framework
- **JavaScript (Vanilla)**: Logique application
- **ECharts 5**: Visualisations de données
- **Vanta.js**: Effets visuels 3D
- **Three.js**: Moteur 3D pour Vanta

## 📈 Métriques Clés

L'application suit automatiquement:
- **Meilleur temps de tour** (best lap time)
- **Temps moyen** (average lap time)
- **Nombre de tours** complétés
- **Progression** tour après tour
- **Distribution** des temps

## 🎯 Cas d'Usage

### Pour les Équipes de Course
- Analyser les performances en temps réel
- Identifier les pilotes les plus rapides
- Comparer les progressions
- Exporter les résultats

### Pour les Entraînements
- Suivre l'amélioration session après session
- Détecter les tendances de performance
- Gérer les temps limites
- Visualiser les progressions

## 🔐 Confidentialité

- ✅ Aucune donnée envoyée à un serveur
- ✅ Stockage local uniquement
- ✅ Données persistantes entre sessions
- ✅ Contrôle complet des données utilisateur

## 🐛 Dépannage

### Les données ne persistent pas
1. Vérifiez que localStorage est activé dans le navigateur
2. Essayez en mode normal (pas incognito)
3. Vérifiez l'espace disque disponible

### Les graphiques ne s'affichent pas
1. Rafraîchissez la page (Ctrl+R ou F5)
2. Attendez que les données se chargent
3. Assurez-vous d'avoir des temps de tours enregistrés

### Problèmes de performance
1. Réduisez le nombre de tours par pilote
2. Limitez le nombre de sessions
3. Fermez les autres onglets

## 🚀 Améliorations Futures

- 📡 Synchronisation cloud multi-appareils
- 🌍 Support multilingue
- 📄 Export PDF des rapports
- 🎥 Importation de données depuis iRacing API
- 🏆 Système de trophées et badges
- 🔔 Notifications en temps réel
- 📅 Calendrier de courses
- 👥 Partage de sessions d'équipe

## 📝 Format des Temps

Les temps doivent être entrés au format: **MM:SS.mmm**

Exemples valides:
- `1:25.234` → 1 minute 25.234 secondes
- `12:45.890` → 12 minutes 45.890 secondes
- `0:58.123` → 0 minute 58.123 secondes

## 🎓 API JavaScript

### Initialiser l'app
```javascript
app = new CrewDeckApp();
```

### Ajouter un pilote
```javascript
const driverId = 'driver_' + Date.now();
app.drivers.push({
  id: driverId,
  name: "John Doe",
  number: 1,
  team: "Team A",
  car: "Ferrari 488"
});
app.saveToStorage();
app.renderDrivers();
```

### Ajouter un temps de tour
```javascript
app.addLapTime(sessionId, driverId, "1:25.234");
```

### Exporter les données
```javascript
app.exportData();
```

## 📱 Compatibilité Navigateurs

| Navigateur | Support |
|-----------|---------|
| Chrome 90+ | ✅ Complet |
| Firefox 88+ | ✅ Complet |
| Safari 14+ | ✅ Complet |
| Edge 90+ | ✅ Complet |
| Mobile Chrome | ✅ Complet |
| Mobile Safari | ✅ Complet |

## 📄 Licences

- ECharts: Apache 2.0
- Vanta.js: MIT
- Three.js: MIT
- Tailwind CSS: MIT

## 🤝 Contribution

Les contributions sont bienvenues ! Pour contribuer:
1. Clonez le projet
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos modifications (`git commit -m 'Add AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 💬 Support

Pour des questions ou des problèmes:
1. Consultez la section [Dépannage](#-dépannage)
2. Vérifiez la console du navigateur (F12)
3. Signalez un issue avec les détails

## 🏁 Conclusion

CrewDeck est l'outil parfait pour tout pilote iRacing sérieux qui souhaite améliorer ses performances d'équipe. Avec des visualisations modernes, une interface intuitive et un suivi des données complète, vous avez tous les outils pour devenir champions ! 🏆

---

**Fait avec ⚡ pour les pilotes passionnés**

Créé en 2024 • Optimisé pour iRacing • Racing First 🏁
