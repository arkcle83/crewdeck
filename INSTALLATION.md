# 🔧 Guide d'Installation - CrewDeck

Instructions complètes pour installer et démarrer CrewDeck sur différentes plateformes.

## 📋 Prérequis

- **Navigateur moderne**: Chrome, Firefox, Edge, Safari (versions récentes)
- **Aucune dépendance backend** requise
- **Connexion Internet** (pour charger les CDN la première fois)

## 🚀 Installation Rapide (3 étapes)

### Étape 1: Télécharger le Projet

**Option A - Cloner via Git:**
```bash
git clone https://github.com/votre-utilisateur/crewdeck.git
cd crewdeck
```

**Option B - Télécharger le ZIP:**
1. Visitez le repo GitHub
2. Cliquez "Code" → "Download ZIP"
3. Extrayez le fichier
4. Ouvrez le dossier `CrewDeck`

### Étape 2: Ouvrir l'Application

**Méthode Simple (Double-clic):**
1. Localisez `index.html`
2. Double-cliquez dessus
3. Votre navigateur s'ouvre automatiquement ✅

**Méthode Serveur (Recommandée):**

Voir les instructions ci-dessous selon votre système.

### Étape 3: Charger les Données (Optionnel)

Pour commencer avec des données de démo:
1. Appuyez sur **F12** pour ouvrir la console
2. Tapez: `loadDemoData()`
3. Appuyez sur **Entrée**
4. La page se recharge avec des données 🎉

---

## 💻 Installation par Plateforme

### Windows

#### Méthode 1: Serveur Python (Simple)

**Python 3 (Recommandé):**
```powershell
# Ouvrir PowerShell dans le dossier CrewDeck
cd C:\chemin\vers\CrewDeck

# Lancer le serveur
python -m http.server 8000

# Puis ouvrir: http://localhost:8000
```

**Python 2 (Ancien):**
```powershell
python -m SimpleHTTPServer 8000
```

#### Méthode 2: Serveur Node.js

```powershell
# Installer http-server globally
npm install -g http-server

# Naviguer vers le dossier
cd C:\chemin\vers\CrewDeck

# Lancer le serveur
http-server

# Ouvrir: http://localhost:8080
```

#### Méthode 3: Live Server (VS Code)

1. Installez l'extension "Live Server" dans VS Code
2. Clic-droit sur `index.html`
3. Sélectionnez "Open with Live Server"
4. Le navigateur s'ouvre automatiquement ✅

#### Méthode 4: Double-clic Direct

1. Localisez `index.html`
2. Double-cliquez
3. S'ouvre dans le navigateur par défaut ✅

---

### macOS

#### Méthode 1: Serveur Python (Simple)

```bash
# Naviguer vers le dossier
cd /path/to/CrewDeck

# Avec Python 3
python3 -m http.server 8000

# Puis ouvrir http://localhost:8000 dans le navigateur
```

#### Méthode 2: Utiliser open (Plus rapide)

```bash
cd /path/to/CrewDeck

# Ouvrir index.html dans le navigateur par défaut
open index.html
```

#### Méthode 3: Serveur HTTP Node.js

```bash
# Installer http-server
npm install -g http-server

# Naviguer vers le dossier
cd /path/to/CrewDeck

# Lancer le serveur
http-server

# Ouvrir http://localhost:8080
```

#### Méthode 4: Live Server (VS Code)

1. Installez l'extension "Live Server"
2. Clic-droit sur `index.html`
3. "Open with Live Server"

---

### Linux

#### Méthode 1: Python HTTP Server

```bash
# Naviguer vers le dossier
cd ~/path/to/CrewDeck

# Avec Python 3
python3 -m http.server 8000

# Ouvrir http://localhost:8000
```

#### Méthode 2: Node.js HTTP Server

```bash
# Installer http-server si nécessaire
npm install -g http-server

# Naviguer vers le dossier
cd ~/path/to/CrewDeck

# Lancer le serveur
http-server -p 8000

# Ouvrir http://localhost:8000
```

#### Méthode 3: Serveur HTTP Simple (Python 2)

```bash
# Si vous utilisez Python 2 (rare maintenant)
cd ~/path/to/CrewDeck
python -m SimpleHTTPServer 8000
```

#### Méthode 4: Fichier Direct

```bash
# Ouvrir dans le navigateur par défaut
xdg-open index.html
```

---

## 🌐 Installation sur un Serveur Web

### Apache

1. Copiez le dossier `CrewDeck` dans `/var/www/html/`
2. Assurez-vous que Apache a les permissions de lecture
3. Visitez: `http://localhost/CrewDeck/`

```bash
sudo cp -r CrewDeck /var/www/html/
sudo chown -R www-data:www-data /var/www/html/CrewDeck
```

### Nginx

1. Copiez le dossier dans le répertoire web
2. Configurez le virtual host

```nginx
server {
    listen 80;
    server_name crewdeck.local;

    root /var/www/crewdeck;

    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

### GitHub Pages

1. Poussez le code sur une branche `gh-pages`
2. Activez GitHub Pages dans les paramètres
3. Accédez à: `https://username.github.io/crewdeck/`

```bash
git checkout -b gh-pages
git push origin gh-pages

# Activez GitHub Pages dans les paramètres du repo
```

---

## 🔒 Installation Sécurisée (HTTPS)

### Utiliser HTTPS Localement (Python)

```bash
# Créer un certificat auto-signé
openssl req -x509 -newkey rsa:4096 -nodes -out cert.pem -keyout key.pem -days 365

# Lancer le serveur HTTPS (Python 3.7+)
python3 -m http.server --certificate cert.pem --key key.pem 8443

# Ouvrir https://localhost:8443
```

### Utiliser Certbot (Serveur de Production)

```bash
# Installer Certbot
sudo apt-get install certbot python3-certbot-nginx

# Générer le certificat
sudo certbot certonly --standalone -d crewdeck.com

# Configurer Nginx avec le certificat
# (Voir configuration Nginx ci-dessus)
```

---

## 📦 Installation via Docker (Optionnel)

Créez un `Dockerfile`:

```dockerfile
FROM nginx:alpine

COPY . /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

Puis lancez:

```bash
# Construire l'image
docker build -t crewdeck .

# Lancer le container
docker run -d -p 8000:80 crewdeck

# Ouvrir http://localhost:8000
```

---

## ✅ Vérifier l'Installation

### Checklist Post-Installation

- [ ] L'application se charge sans erreurs
- [ ] Le logo créwDeck est visible
- [ ] La navigation fonctionne (4 onglets)
- [ ] Les boutons répondent aux clics
- [ ] Les formulaires s'ouvrent (+ Ajouter Pilote)
- [ ] Pas d'erreur console (F12 → Console)
- [ ] L'effet Vanta Waves est visible en arrière-plan

### Test Fonctionnel

1. **Ouvrir la console** (F12)
2. **Charger les données de démo:**
   ```javascript
   loadDemoData()
   ```
3. **Vérifier le dashboard** se remplit
4. **Cliquer sur les onglets** (Pilotes, Sessions, Analytics)
5. **Vérifier les graphiques** s'affichent

### Test de Performance

1. Ouvrir DevTools (F12)
2. Onglet "Performance"
3. Enregistrer une action simple (clic)
4. Vérifier les temps de réaction < 100ms

---

## 🔧 Configuration Avancée

### Modifier le Port

**Python:**
```bash
python3 -m http.server 9000  # Au lieu de 8000
```

**Node.js:**
```bash
http-server -p 9000
```

### Activer CORS

Pour les développeurs qui intègrent une API:

```python
# http.server avec CORS
python3 -c "import http.server, socketserver; \
handler = http.server.SimpleHTTPRequestHandler; \
handler.do_OPTIONS = lambda s: (s.send_response(200), s.send_header('Access-Control-Allow-Origin', '*')); \
httpd = socketserver.TCPServer(('', 8000), handler); \
print('Serveur sur http://localhost:8000'); \
httpd.serve_forever()"
```

### Compresser les Fichiers

Pour réduire la taille de transfert:

```bash
# Gzip les fichiers
gzip -9 index.html styles.css app.js
```

---

## 🐛 Dépannage d'Installation

### Erreur: "Port 8000 déjà utilisé"

```bash
# Trouver quel processus utilise le port
lsof -i :8000    # Linux/macOS
netstat -ano | findstr :8000  # Windows

# Utiliser un autre port
python3 -m http.server 8001
```

### Erreur: "Command not found: python3"

```bash
# Installer Python
# Windows: Télécharger depuis python.org
# macOS: brew install python3
# Linux: sudo apt-get install python3
```

### Erreur: "Permission denied"

```bash
# Donner les permissions
chmod -R 755 /chemin/to/CrewDeck
```

### La page ne se charge pas

1. Vérifiez que vous accédez à `index.html`
2. Vérifiez la console (F12) pour les erreurs
3. Vérifiez les fichiers existent: `styles.css`, `app.js`
4. Essayez un autre navigateur

### Les styles sont bizarres

1. Actualisez la page (Ctrl+Shift+R)
2. Videz le cache du navigateur
3. Vérifiez que `styles.css` est bien dans le dossier
4. Vérifiez la connexion Internet (CDN Tailwind)

### localStorage ne fonctionne pas

1. Vérifiez que vous n'êtes pas en mode privé/incognito
2. Vérifiez que localStorage est activé dans les paramètres du navigateur
3. Essayez dans un autre navigateur

---

## 🚀 Déploiement en Production

### Checklist Pré-Déploiement

- [ ] Minifier CSS et JS
- [ ] Configurer CORS si nécessaire
- [ ] Ajouter des headers de sécurité
- [ ] Tester tous les navigateurs cibles
- [ ] Vérifier la performance (PageSpeed)
- [ ] Configurer les redirects HTTPS

### Optimiser pour la Production

**Minifier les fichiers:**
```bash
# Utiliser un minificateur CSS/JS
# Exemple: terser pour JS, clean-css pour CSS

# Ou en ligne:
# https://www.minifycode.com/
```

**Ajouter des headers HTTP:**
```
Cache-Control: public, max-age=31536000
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
```

### Monitoring

- Mettez en place Google Analytics
- Monitorer les erreurs JavaScript
- Vérifier les performances régulièrement

---

## 🔗 Ressources Utiles

- **Python HTTP Server**: https://docs.python.org/3/library/http.server.html
- **Node.js HTTP Server**: https://www.npmjs.com/package/http-server
- **Docker Setup**: https://docs.docker.com/
- **Nginx Config**: https://nginx.org/en/docs/
- **Apache VirtualHost**: https://httpd.apache.org/docs/

---

## ✨ Installation Complétée !

Une fois installé, consultez:
- **GETTING_STARTED.md** pour les premières étapes
- **README.md** pour la documentation complète
- **demo-data.json** pour des données d'exemple

Bon pilotage ! 🏁⚡

---

**Besoin d'aide ?** Consultez la FAQ dans GETTING_STARTED.md ou ouvrez un issue sur GitHub.
