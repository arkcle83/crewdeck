# 🏁 CrewDeck - Démarrage Immédiat

**Bienvenue dans CrewDeck !** L'application ultime pour gérer les performances de votre équipe iRacing.

---

## ⚡ Démarrage en 30 Secondes

### 1️⃣ Ouvrir l'Application
```
Double-cliquez sur: index.html
```

### 2️⃣ Charger les Données de Démo (Optionnel)
```
Appuyez sur: F12 (ouvre la console)
Tapez: loadDemoData()
Appuyez sur: Entrée
```

### 3️⃣ Commencez ! 🎉
C'est prêt à l'emploi.

---

## 📚 Documentation

### 🚀 Nouveaux Utilisateurs
**Lisez**: [`GETTING_STARTED.md`](GETTING_STARTED.md)
- Guide pas à pas
- Tutoriel interactif
- FAQ et dépannage

### 🔧 Installation Avancée
**Lisez**: [`INSTALLATION.md`](INSTALLATION.md)
- Plusieurs méthodes d'installation
- Serveurs (Apache, Nginx, Docker)
- Déploiement en production

### 📖 Documentation Complète
**Lisez**: [`README.md`](README.md)
- Caractéristiques détaillées
- API JavaScript
- Compatibilité navigateurs
- Licences

### 🏗️ Architecture Technique
**Lisez**: [`PROJECT_STRUCTURE.md`](PROJECT_STRUCTURE.md)
- Structure des fichiers
- Architecture données
- Flux de données
- Extensibilité

---

## 🎮 Fonctionnalités Principales

### ✅ Gestion des Pilotes
- Ajouter/modifier/supprimer des pilotes
- Suivre le meilleur temps et la moyenne
- Historique complet des tours

### ✅ Sessions de Course
- Créer des sessions avec circuit et conditions
- Enregistrer les temps de tours (MM:SS.mmm)
- Analyse par session

### ✅ Analytics Avancées
- 📊 Distribution des temps
- 📈 Progression par pilote
- 🏆 Comparaison multi-pilotes
- 📉 Tendances de performance

### ✅ Interface Moderne
- Thème racing authentique (sombre)
- Animations fluides
- Design responsive (mobile, tablet, desktop)
- Effets visuels Vanta.js

---

## ⌨️ Raccourcis Clavier Essentiels

| Touche | Action |
|--------|--------|
| **D** | Dashboard |
| **P** | Pilotes |
| **S** | Sessions |
| **A** | Analytics |
| **N** | Ajouter un pilote |
| **T** | Nouvelle session |
| **E** | Exporter les données |
| **?** | Aide |

> **Astuce**: Les raccourcis ne fonctionnent que si vous n'êtes pas dans un champ de texte.

---

## 📊 Format des Temps

Utilisez ce format pour les temps de tours: **MM:SS.mmm**

Exemples:
- ✅ `1:22.450` (1 min 22,450 sec)
- ✅ `12:45.890` (12 min 45,890 sec)
- ✅ `0:58.123` (0 min 58,123 sec)

---

## 💾 Vos Données

### 🔒 Stockage Local
- Toutes les données restent sur **votre ordinateur**
- Stockées dans `localStorage` du navigateur
- Aucun serveur, aucune synchronisation
- Persiste entre les sessions

### 📤 Sauvegarder
```javascript
// Console: exporter les données
exportAllData()
```

### 📥 Restaurer
```javascript
// Console: voir les données stockées
showDataStats()
```

### 🧹 Nettoyer
```javascript
// Console: effacer tout (attention!)
clearAllData()
```

---

## 🎯 Cas d'Usage Courants

### Pour une Première Course
1. **Ajouter les pilotes** (Pilotes → + Ajouter)
2. **Créer une session** (Sessions → + Nouvelle)
3. **Enregistrer les temps** (Sessions → Détails)
4. **Analyser** (Analytics pour voir les tendances)

### Pour Améliorer les Performances
1. **Dashboard**: Voir qui est le plus rapide
2. **Analytics**: Identifier les tendances
3. **Sessions**: Comparer les différentes courses

### Pour Partager les Résultats
1. **Exporter** (E) → Fichier JSON
2. **Partager** le fichier avec l'équipe
3. **Importer** chez le coéquipier (console)

---

## 🚀 Premier Projet Recommandé

### Étape 1: Charger les Démos (5 min)
```javascript
loadDemoData()
```

### Étape 2: Explorer (10 min)
- Cliquez sur les onglets
- Naviguez avec les raccourcis clavier
- Regardez les graphiques

### Étape 3: Ajouter vos Données (5 min)
1. Onglet "Pilotes"
2. Cliquez "+ Ajouter Pilote"
3. Remplissez le formulaire
4. Créez une session et enregistrez des temps

### Étape 4: Analyser (5 min)
1. Onglet "Analytics"
2. Regardez comment vos données apparaissent
3. Exportez (E) pour conserver

---

## ❓ Questions Fréquentes

### Q: Comment démarrer sans données de démo?
**R**: L'app est vide par défaut. Cliquez "+ Ajouter Pilote" pour créer un pilote, puis "+ Nouvelle Session".

### Q: Où mes données sont-elles stockées?
**R**: Dans le `localStorage` de votre navigateur. Exportez-les pour les sauvegarder dans un fichier.

### Q: Puis-je accéder à mes données depuis un autre ordinateur?
**R**: Exportez le fichier JSON et importez-le sur l'autre ordinateur.

### Q: Comment supprimer une session?
**R**: Sessions → Trouvez la session → Cliquez "Supprimer"

### Q: Quel format pour les temps?
**R**: MM:SS.mmm (ex: 1:22.450)

### Q: Les graphiques ne s'affichent pas?
**R**: Assurez-vous d'avoir au moins 3 temps enregistrés. Recharchez la page (Ctrl+R).

### Q: Comment ajouter mon logo/branding?
**R**: Modifiez `index.html` (cherchez le logo 🏁) et `styles.css` (variables de couleur).

---

## 🔗 Liens Importants

- **📖 Guide Complet**: [`README.md`](README.md)
- **🚀 Installation**: [`INSTALLATION.md`](INSTALLATION.md)
- **📚 Tutoriel**: [`GETTING_STARTED.md`](GETTING_STARTED.md)
- **🏗️ Architecture**: [`PROJECT_STRUCTURE.md`](PROJECT_STRUCTURE.md)
- **⚙️ Configuration**: [`config.json`](config.json)

---

## 💡 Conseils Avancés

### Utiliser les Raccourcis
Les raccourcis clavier rendent l'utilisation **3x plus rapide**:
- `D` → Dashboard (vue d'ensemble)
- `P` → Ajouter rapidement des pilotes
- `S` → Tracker les sessions
- `A` → Analyser les données

### Exporter Régulièrement
```javascript
// Tous les vendredis, exporter vos données
exportAllData()
```

### Utiliser les Modales
- 🔲 Cliquez en dehors pour fermer
- 🔲 Ou cliquez le bouton ❌
- 🔲 Ou appuyez sur Échap

### Optimiser les Données
- Plus vous avez de tours, mieux les graphiques
- Au moins 3 tours par session pour les tendances
- Plusieurs sessions montrent les progressions

---

## 🎓 Prochaines Étapes

1. ✅ **Maintenant**: Lire ce fichier (vous le faites !)
2. 📚 **Ensuite**: Lire [`GETTING_STARTED.md`](GETTING_STARTED.md)
3. 🚀 **Puis**: Ajouter vos propres données
4. 📈 **Finalement**: Explorer les Analytics

---

## 🏁 Prêt à Commencer?

### Option A: Démarrage Immédiat
```
1. Double-cliquez index.html
2. Appuyez F12
3. Tapez: loadDemoData()
4. Appuyez Entrée
5. Explorez !
```

### Option B: Installation Complète
```
Lisez INSTALLATION.md pour les options serveur
(Recommandé pour une meilleure expérience)
```

---

## 📞 Support

### Avant d'Ouvrir un Issue:
1. Vérifiez [`GETTING_STARTED.md`](GETTING_STARTED.md) (FAQ)
2. Consultez la console (F12 → Console)
3. Lisez [`README.md`](README.md) (documentation complète)

### Vous Avez Trouvé un Bug?
1. Notez la version (début de ce fichier)
2. Décrivez les étapes pour reproduire
3. Partagez votre navigateur et votre OS
4. Ouvrez un issue GitHub

---

## 🎉 Vous Êtes Tous Prêts!

Bon pilotage et bonne chance pour dominer le classement ! 🏆

**CrewDeck** - *L'outils des champions de la course* ⚡🏁

---

**Version**: 1.0.0
**Dernière mise à jour**: 2024
**Licence**: MIT
**Créé pour**: iRacing pilots & teams
