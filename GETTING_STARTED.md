# 🚀 Guide de Démarrage - CrewDeck

Bienvenue dans **CrewDeck** ! Ce guide vous aidera à démarrer rapidement avec l'application.

## 📋 Table des Matières

1. [Installation Rapide](#-installation-rapide)
2. [Charger les Données de Démo](#-charger-les-données-de-démo)
3. [Votre Première Session](#-votre-première-session)
4. [Interface Principale](#-interface-principale)
5. [Conseils et Astuces](#-conseils-et-astuces)

---

## 🔧 Installation Rapide

### Méthode 1: Ouvrir directement le fichier (Simple)

1. Téléchargez ou clonez le projet CrewDeck
2. Ouvrez le fichier `index.html` dans votre navigateur
3. C'est prêt ! ✅

### Méthode 2: Serveur Local (Recommandé)

Si vous avez Python installé:

```bash
# Windows
python -m http.server 8000

# macOS/Linux
python3 -m http.server 8000
```

Puis ouvrez votre navigateur à: **http://localhost:8000**

### Méthode 3: Serveur Live (VS Code)

1. Installez l'extension "Live Server" dans VS Code
2. Clic-droit sur `index.html` → "Open with Live Server"
3. Le navigateur s'ouvre automatiquement

---

## 📊 Charger les Données de Démo

La façon la plus facile de voir CrewDeck en action est de charger les données de démonstration.

### Option A: Via la Console (Recommandé)

1. Ouvrez le navigateur et accédez à `index.html`
2. Appuyez sur **F12** ou **Ctrl+Shift+I** pour ouvrir la console développeur
3. Sélectionnez l'onglet **Console**
4. Copiez-collez cette commande:

```javascript
loadDemoData()
```

5. Appuyez sur **Entrée**
6. La page se recharge automatiquement avec les données de démo ! 🎉

### Option B: Charger le script demo-loader

Ajoutez cette ligne dans le `<head>` de votre `index.html`:

```html
<script src="demo-loader.js"></script>
```

Puis ouvrez la console et tapez `loadDemoData()`

### Données Incluses dans la Démo

- **4 Pilotes**: Max Verstappen, Charles Leclerc, Lewis Hamilton, Lando Norris
- **3 Sessions**: Practice, Qualifying, Endurance
- **28 Tours** enregistrés avec des temps réalistes
- **Charts et Analytics** pré-remplis

---

## 🎯 Votre Première Session

Maintenant que vous avez chargé les données de démo, explorons l'app !

### Étape 1: Visualiser le Dashboard

1. Vous êtes déjà au Dashboard
2. Vous pouvez voir:
   - 📊 Statistiques rapides (nombre de pilotes, sessions, meilleur temps)
   - 🏁 Classement des pilotes
   - 📈 Tendance des performances
   - ⏱️ Sessions récentes

### Étape 2: Explorer les Pilotes

1. Cliquez sur **"Pilotes"** dans la navigation ou appuyez sur **P**
2. Vous verrez les 4 pilotes de démo avec:
   - Leur numéro de course
   - Leur équipe et véhicule
   - Leurs meilleurs temps
   - Nombre de tours complétés

3. Cliquez sur **"Modifier"** ou **"Supprimer"** pour gérer les pilotes

### Étape 3: Gérer les Sessions

1. Cliquez sur **"Sessions"** ou appuyez sur **S**
2. Vous verrez les 3 sessions avec:
   - Nom et circuit
   - Liste des pilotes participants
   - Meilleurs temps par pilote

3. Cliquez sur **"Détails"** pour voir les temps de tours individuels

### Étape 4: Analyser les Données

1. Cliquez sur **"Analytics"** ou appuyez sur **A**
2. Découvrez 3 graphiques:
   - **Distribution**: Histogramme des temps de tours
   - **Progression**: Amélioration par pilote au fil des tours
   - **Comparaison**: Benchmark entre tous les pilotes

---

## 🎨 Interface Principale

### Navigation Supérieure
```
┌─────────────────────────────────────────┐
│ ⚡ CrewDeck │ Dashboard │ Pilotes │ ...│
└─────────────────────────────────────────┘
```

- **Logo**: Clique pour revenir au dashboard
- **Navigation**: Onglets pour changer de vue
- **Icône ⚙️**: Ouvre l'aide des raccourcis clavier

### Zones Principales

#### Dashboard
- **Quick Stats**: 4 cartes avec KPIs
- **Classement**: Top 5 pilotes
- **Tendance**: Graphique de performance
- **Sessions Récentes**: Historique

#### Pilotes
- **Grille de Pilotes**: Cartes individuelles pour chaque pilote
- **Bouton + Ajouter**: Créer un nouveau pilote
- **Actions**: Modifier ou supprimer depuis chaque carte

#### Sessions
- **Liste des Sessions**: Avec détails complets
- **Bouton + Nouvelle Session**: Créer une nouvelle session
- **Détails**: Voir les temps de tours

#### Analytics
- **3 Graphiques**: Distribution, progression, comparaison
- **Données Interactives**: Survolez pour voir les détails
- **Export**: Sauvegardez vos données

---

## 💡 Conseils et Astuces

### ⌨️ Raccourcis Clavier

Pour utiliser les raccourcis, assurez-vous que le curseur n'est pas dans un champ de texte.

| Touche | Action |
|--------|--------|
| **D** | Dashboard |
| **P** | Pilotes |
| **S** | Sessions |
| **A** | Analytics |
| **N** | Ajouter un pilote (depuis Pilotes) |
| **T** | Nouvelle session (depuis Sessions) |
| **E** | Exporter les données |
| **?** | Aide des raccourcis |

### 📝 Format des Temps de Tours

Quand vous entrez un temps, utilisez ce format: **MM:SS.mmm**

Exemples valides:
- `1:22.450` ✅ (1 min 22,450 sec)
- `12:45.890` ✅ (12 min 45,890 sec)
- `0:58.123` ✅ (0 min 58,123 sec)

Exemples invalides:
- `1:22:450` ❌ (mauvais séparateur)
- `122.450` ❌ (format incomplet)
- `1:22` ❌ (millisecondes manquantes)

### 💾 Sauvegarde des Données

CrewDeck sauvegarde automatiquement tous vos changements dans `localStorage` du navigateur.

**Important**: Les données sont stockées **localement** dans votre navigateur.

- ✅ Persiste entre les sessions
- ✅ Fonctionne hors ligne
- ⚠️ Effacer les données du navigateur = perte des données

### 📊 Tips pour les Analytics

1. **Ajoutez plus de tours**: Les graphiques s'améliorent avec plus de données
2. **Plusieurs sessions**: Comparez les performances inter-sessions
3. **Équipes vs Individuels**: Créez des pilotes par équipe pour analyser les comparaisons
4. **Export régulier**: Exportez vos données avant de nettoyer

### 🎮 Gestion des Pilotes

**Ajouter un pilote:**
1. Cliquez sur "+ Ajouter Pilote"
2. Remplissez le formulaire
3. Cliquez "Enregistrer"

**Modifier un pilote:**
1. Allez dans l'onglet Pilotes
2. Cliquez "Modifier" sur une carte
3. Changez les informations
4. Cliquez "Enregistrer"

**Enregistrer un temps:**
1. Créez une session (onglet Sessions)
2. Allez dans "Détails" de la session
3. Sélectionnez un pilote
4. Entrez le temps (MM:SS.mmm)
5. Cliquez "Ajouter Tour"

### 🔄 Exporter et Sauvegarder

**Exporter les données:**
1. Appuyez sur **E** ou allez dans settings
2. Un fichier JSON est téléchargé
3. Conservez ce fichier pour la sauvegarde

**Importer des données:**
1. Ouvrez la console (F12)
2. Tapez: `importData(fileInput)` (via un input file)
3. Les données sont restaurées

---

## 🐛 Dépannage Rapide

### Les données ne se sauvegardent pas
- ✅ Vérifiez que localStorage est activé
- ✅ Essayez un autre navigateur
- ✅ Exécutez: `showDataStats()` dans la console

### Les graphiques sont vides
- ✅ Assurez-vous d'avoir au moins 3 tours enregistrés
- ✅ Recharchez la page (Ctrl+R)
- ✅ Essayez `loadDemoData()` pour les données de test

### L'application est lente
- ✅ Réduisez le nombre de sessions (>100 peut ralentir)
- ✅ Fermez les autres onglets
- ✅ Videz le cache du navigateur

---

## 📚 Ressources Supplémentaires

- **README.md**: Documentation complète
- **demo-loader.js**: Utilitaires pour les données
- **config.json**: Configuration de l'application
- **demo-data.json**: Exemple de données structurées

---

## 🎓 Prochaines Étapes

Une fois à l'aise avec CrewDeck:

1. ➕ **Ajouter vos pilotes**: Créez vos propres entrées
2. 🏁 **Créer des sessions**: Enregistrez vos courses réelles
3. ⏱️ **Tracker les temps**: Améliorez continuellement
4. 📈 **Analyser les tendances**: Utilisez les analytics
5. 📤 **Exporter les données**: Sauvegardez régulièrement

---

## 💬 Questions Fréquemment Posées

**Q: Puis-je utiliser CrewDeck hors ligne?**
R: Oui ! Une fois chargée, l'app fonctionne complètement hors ligne.

**Q: Où sont stockées mes données?**
R: Dans `localStorage` de votre navigateur. Exportez-les régulièrement !

**Q: Puis-je partager mes données?**
R: Oui, exportez en JSON et partagez le fichier. Quelqu'un d'autre peut l'importer.

**Q: Comment supprimer une session?**
R: Allez à Sessions, trouvez la session, cliquez "Supprimer".

**Q: Puis-je avoir plusieurs équipes?**
R: Oui ! Créez des pilotes avec le nom de l'équipe dans la description.

---

## 🚀 Vous Êtes Prêt !

Vous avez maintenant tout ce qu'il faut pour utiliser CrewDeck !

Bon pilotage ! 🏁⚡

Pour une aide supplémentaire, consultez le **README.md** ou ouvrez la console du navigateur.
