// ==================== DATA MANAGEMENT ====================
class CrewDeckApp {
    constructor() {
        this.drivers = [];
        this.sessions = [];
        this.currentSession = null;
        this.currentView = 'dashboard';
        this.charts = {};

        this.init();
    }

    init() {
        this.loadFromStorage();
        this.setupEventListeners();
        this.initVanta();
        this.renderDashboard();
        this.setupKeyboardShortcuts();
    }

    // ==================== STORAGE ====================
    loadFromStorage() {
        const storedDrivers = localStorage.getItem('crewdeck_drivers');
        const storedSessions = localStorage.getItem('crewdeck_sessions');

        this.drivers = storedDrivers ? JSON.parse(storedDrivers) : [];
        this.sessions = storedSessions ? JSON.parse(storedSessions) : [];
    }

    saveToStorage() {
        localStorage.setItem('crewdeck_drivers', JSON.stringify(this.drivers));
        localStorage.setItem('crewdeck_sessions', JSON.stringify(this.sessions));
    }

    exportData() {
        const data = {
            drivers: this.drivers,
            sessions: this.sessions,
            exportedAt: new Date().toISOString()
        };

        const dataStr = JSON.stringify(data, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `crewdeck-export-${Date.now()}.json`;
        link.click();
        URL.revokeObjectURL(url);
    }

    // ==================== EVENT LISTENERS ====================
    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', () => this.switchView(btn.dataset.view));
        });

        // Modal close buttons
        document.querySelectorAll('.close-modal').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const modal = e.target.closest('.modal');
                this.closeModal(modal);
            });
        });

        // Modal overlay click
        document.getElementById('modal-overlay').addEventListener('click', (e) => {
            if (e.target.id === 'modal-overlay') {
                document.querySelectorAll('.modal:not(.hidden)').forEach(modal => {
                    this.closeModal(modal);
                });
            }
        });

        // Driver form
        document.getElementById('driver-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addDriver();
        });

        // Session form
        document.getElementById('session-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addSession();
        });

        // Add driver button
        document.getElementById('add-driver-btn').addEventListener('click', () => {
            this.openDriverModal();
        });

        // New session button
        document.getElementById('new-session-btn').addEventListener('click', () => {
            this.openSessionModal();
        });

        // Settings
        document.getElementById('settings-btn').addEventListener('click', () => {
            this.openShortcutsModal();
        });
    }

    // ==================== MODAL MANAGEMENT ====================
    openModal(modalId) {
        const modal = document.getElementById(modalId);
        const overlay = document.getElementById('modal-overlay');
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }

    closeModal(modal) {
        modal.classList.add('hidden');
        const overlay = document.getElementById('modal-overlay');
        const anyOpen = document.querySelectorAll('.modal:not(.hidden)').length;
        if (anyOpen === 0) {
            overlay.classList.add('hidden');
        }
    }

    openDriverModal(driverId = null) {
        const modal = document.getElementById('driver-modal');
        const title = document.getElementById('driver-modal-title');
        const form = document.getElementById('driver-form');

        form.dataset.driverId = driverId || '';

        if (driverId) {
            const driver = this.drivers.find(d => d.id === driverId);
            title.textContent = 'Modifier Pilote';
            document.getElementById('driver-name').value = driver.name;
            document.getElementById('driver-number').value = driver.number;
            document.getElementById('driver-team').value = driver.team || '';
            document.getElementById('driver-car').value = driver.car || '';
        } else {
            title.textContent = 'Ajouter Pilote';
            form.reset();
        }

        this.openModal('driver-modal');
    }

    openSessionModal(sessionId = null) {
        const modal = document.getElementById('session-modal');
        const title = document.getElementById('session-modal-title');
        const form = document.getElementById('session-form');

        form.dataset.sessionId = sessionId || '';

        if (sessionId) {
            const session = this.sessions.find(s => s.id === sessionId);
            title.textContent = 'Modifier Session';
            document.getElementById('session-name').value = session.name;
            document.getElementById('session-track').value = session.track;
            document.getElementById('session-date').value = session.date;
            document.getElementById('session-weather').value = session.weather;
        } else {
            title.textContent = 'Nouvelle Session';
            form.reset();
            document.getElementById('session-date').valueAsDate = new Date();
        }

        this.openModal('session-modal');
    }

    openShortcutsModal() {
        this.openModal('shortcuts-modal');
    }

    // ==================== DRIVER MANAGEMENT ====================
    addDriver() {
        const form = document.getElementById('driver-form');
        const driverId = form.dataset.driverId;

        const driverData = {
            name: document.getElementById('driver-name').value,
            number: parseInt(document.getElementById('driver-number').value),
            team: document.getElementById('driver-team').value,
            car: document.getElementById('driver-car').value,
            bestLapTime: null,
            avgLapTime: null,
            lapTimes: [],
            createdAt: new Date().toISOString()
        };

        if (driverId) {
            const index = this.drivers.findIndex(d => d.id === driverId);
            this.drivers[index] = { ...this.drivers[index], ...driverData };
        } else {
            driverData.id = 'driver_' + Date.now();
            this.drivers.push(driverData);
        }

        this.saveToStorage();
        this.closeModal(document.getElementById('driver-modal'));
        this.renderDrivers();
        this.renderDashboard();
    }

    deleteDriver(driverId) {
        if (confirm('Êtes-vous sûr de vouloir supprimer ce pilote ?')) {
            this.drivers = this.drivers.filter(d => d.id !== driverId);
            this.saveToStorage();
            this.renderDrivers();
            this.renderDashboard();
        }
    }

    // ==================== SESSION MANAGEMENT ====================
    addSession() {
        const form = document.getElementById('session-form');
        const sessionId = form.dataset.sessionId;

        const sessionData = {
            name: document.getElementById('session-name').value,
            track: document.getElementById('session-track').value,
            date: document.getElementById('session-date').value,
            weather: document.getElementById('session-weather').value,
            drivers: [],
            createdAt: new Date().toISOString()
        };

        if (sessionId) {
            const index = this.sessions.findIndex(s => s.id === sessionId);
            this.sessions[index] = { ...this.sessions[index], ...sessionData };
        } else {
            sessionData.id = 'session_' + Date.now();
            this.sessions.push(sessionData);
        }

        this.saveToStorage();
        this.closeModal(document.getElementById('session-modal'));
        this.renderSessions();
        this.renderDashboard();
    }

    deleteSession(sessionId) {
        if (confirm('Êtes-vous sûr de vouloir supprimer cette session ?')) {
            this.sessions = this.sessions.filter(s => s.id !== sessionId);
            this.saveToStorage();
            this.renderSessions();
            this.renderDashboard();
        }
    }

    openSessionDetails(sessionId) {
        const session = this.sessions.find(s => s.id === sessionId);
        if (!session) return;

        this.currentSession = session;
        this.openLapTimesModal(sessionId);
    }

    // ==================== LAP TIME MANAGEMENT ====================
    openLapTimesModal(sessionId) {
        const session = this.sessions.find(s => s.id === sessionId);
        if (!session) return;

        const modal = document.getElementById('lap-times-modal');
        const title = document.getElementById('lap-times-title');
        const content = document.getElementById('lap-times-content');

        title.textContent = `Temps de Tours - ${session.name}`;
        content.innerHTML = '';

        const driverSelect = document.createElement('select');
        driverSelect.className = 'form-input mb-4';
        driverSelect.innerHTML = '<option value="">Sélectionner un pilote...</option>' +
            this.drivers.map(d => `<option value="${d.id}">${d.name} #${d.number}</option>`).join('');

        let selectedDriverId = '';
        driverSelect.addEventListener('change', (e) => {
            selectedDriverId = e.target.value;
            this.renderLaptimes(session, selectedDriverId);
        });

        const wrapper = document.createElement('div');
        wrapper.appendChild(driverSelect);
        content.appendChild(wrapper);

        document.getElementById('add-lap-btn').onclick = () => {
            const timeInput = document.getElementById('new-lap-time');
            if (selectedDriverId && timeInput.value) {
                this.addLapTime(sessionId, selectedDriverId, timeInput.value);
                timeInput.value = '';
                this.renderLaptimes(session, selectedDriverId);
            } else {
                alert('Veuillez sélectionner un pilote et entrer un temps');
            }
        };

        this.openModal('lap-times-modal');
    }

    addLapTime(sessionId, driverId, timeString) {
        const driver = this.drivers.find(d => d.id === driverId);
        if (!driver) return;

        const lapTime = this.parseTime(timeString);
        if (lapTime === null) {
            alert('Format invalide. Utilisez MM:SS.mmm');
            return;
        }

        driver.lapTimes.push({
            sessionId,
            time: lapTime,
            timeString: this.formatTime(lapTime),
            timestamp: new Date().toISOString()
        });

        this.updateDriverStats(driver);
        this.saveToStorage();
    }

    renderLaptimes(session, driverId) {
        const content = document.getElementById('lap-times-content');
        const driverLaptimes = content.querySelector('select') ?
            content.querySelector('select').parentElement.nextSibling : null;

        if (driverLaptimes) {
            driverLaptimes.remove();
        }

        if (!driverId) return;

        const driver = this.drivers.find(d => d.id === driverId);
        const laptimes = driver.lapTimes.filter(lt => lt.sessionId === session.id);

        const wrapper = document.createElement('div');
        wrapper.className = 'space-y-2 mt-4';

        if (laptimes.length === 0) {
            wrapper.innerHTML = '<div class="text-slate-400 text-sm">Aucun temps enregistré</div>';
        } else {
            laptimes.forEach((laptime, index) => {
                const item = document.createElement('div');
                item.className = 'laptime-item';

                const delta = index > 0 ? (laptimes[0].time - laptime.time) : 0;
                const deltaClass = delta > 0 ? 'negative' : (delta < 0 ? 'positive' : '');
                const deltaText = delta !== 0 ? `${delta > 0 ? '+' : ''}${this.formatTime(Math.abs(delta))}` : '';

                item.innerHTML = `
                    <span class="laptime-number">Tour ${index + 1}</span>
                    <span class="laptime-time">${laptime.timeString}</span>
                    <span class="laptime-delta ${deltaClass}">${deltaText}</span>
                `;
                wrapper.appendChild(item);
            });
        }

        content.appendChild(wrapper);
    }

    updateDriverStats(driver) {
        if (driver.lapTimes.length === 0) {
            driver.bestLapTime = null;
            driver.avgLapTime = null;
            return;
        }

        const times = driver.lapTimes.map(lt => lt.time);
        driver.bestLapTime = Math.min(...times);
        driver.avgLapTime = times.reduce((a, b) => a + b, 0) / times.length;
    }

    // ==================== TIME UTILITIES ====================
    parseTime(timeString) {
        const match = timeString.match(/(\d{1,2}):(\d{2})\.(\d{1,3})/);
        if (!match) return null;

        const minutes = parseInt(match[1]);
        const seconds = parseInt(match[2]);
        const millis = parseInt(match[3].padEnd(3, '0'));

        return minutes * 60000 + seconds * 1000 + millis;
    }

    formatTime(milliseconds) {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const ms = milliseconds % 1000;

        return `${minutes}:${String(seconds).padStart(2, '0')}.${String(ms).padStart(3, '0')}`;
    }

    // ==================== RENDERING ====================
    switchView(viewName) {
        this.currentView = viewName;

        // Update nav buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.view === viewName);
        });

        // Hide all views
        document.querySelectorAll('.view-container').forEach(view => {
            view.classList.remove('active');
        });

        // Show selected view
        document.getElementById(viewName).classList.add('active');

        // Render view-specific content
        if (viewName === 'dashboard') {
            this.renderDashboard();
        } else if (viewName === 'drivers') {
            this.renderDrivers();
        } else if (viewName === 'sessions') {
            this.renderSessions();
        } else if (viewName === 'analytics') {
            this.renderAnalytics();
        }

        // Resize charts if they exist
        setTimeout(() => {
            Object.values(this.charts).forEach(chart => {
                if (chart) chart.resize();
            });
        }, 100);
    }

    renderDashboard() {
        this.updateStats();
        this.renderLeaderboard();
        this.renderSessionsList();
        this.initTrendChart();
    }

    updateStats() {
        const driversCount = this.drivers.length;
        const sessionsCount = this.sessions.length;

        const allTimes = this.drivers.flatMap(d => d.lapTimes.map(lt => lt.time));
        const bestTime = allTimes.length > 0 ? Math.min(...allTimes) : null;
        const avgTime = allTimes.length > 0 ? allTimes.reduce((a, b) => a + b, 0) / allTimes.length : null;

        document.getElementById('stat-drivers').textContent = driversCount;
        document.getElementById('stat-sessions').textContent = sessionsCount;
        document.getElementById('stat-best-time').textContent = bestTime ? this.formatTime(bestTime) : '--:--';
        document.getElementById('stat-avg-time').textContent = avgTime ? this.formatTime(avgTime) : '--:--';
    }

    renderLeaderboard() {
        const leaderboard = document.getElementById('leaderboard');

        if (this.drivers.length === 0) {
            leaderboard.innerHTML = '<div class="text-slate-400 text-sm">Aucun pilote pour le moment</div>';
            return;
        }

        const ranked = this.drivers
            .filter(d => d.bestLapTime !== null)
            .sort((a, b) => a.bestLapTime - b.bestLapTime)
            .slice(0, 5);

        if (ranked.length === 0) {
            leaderboard.innerHTML = '<div class="text-slate-400 text-sm">Aucun temps enregistré</div>';
            return;
        }

        leaderboard.innerHTML = ranked.map((driver, index) => {
            const medals = ['🥇', '🥈', '🥉', '4️⃣', '5️⃣'];
            return `
                <div class="leaderboard-item animate-slideInDown" style="animation-delay: ${index * 0.1}s">
                    <div style="display: flex; align-items: center; flex: 1;">
                        <div class="leaderboard-rank" style="background: ${['rgba(245, 158, 11, 0.3)', 'rgba(192, 192, 192, 0.3)', 'rgba(205, 127, 50, 0.3)', 'rgba(6, 182, 212, 0.2)', 'rgba(6, 182, 212, 0.2)'][index]}; color: ${['#fcd34d', '#d1d5db', '#fbbf24', '#06b6d4', '#06b6d4'][index]}">
                            ${medals[index]}
                        </div>
                        <div class="leaderboard-info">
                            <div class="leaderboard-name">${driver.name}</div>
                            <div class="leaderboard-meta">#${driver.number} • ${driver.team || 'Sans équipe'}</div>
                        </div>
                    </div>
                    <div class="leaderboard-time">${this.formatTime(driver.bestLapTime)}</div>
                </div>
            `;
        }).join('');
    }

    renderSessionsList() {
        const list = document.getElementById('sessions-list');

        if (this.sessions.length === 0) {
            list.innerHTML = '<div class="text-slate-400 text-sm">Aucune session enregistrée</div>';
            return;
        }

        list.innerHTML = this.sessions
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 5)
            .map(session => `
                <div class="session-card animate-slideInDown">
                    <div class="session-header">
                        <div>
                            <div class="session-title">${session.name}</div>
                            <div class="session-track">${session.track} • ${new Date(session.date).toLocaleDateString('fr-FR')}</div>
                        </div>
                        <span class="session-badge">${session.weather}</span>
                    </div>
                    <div class="flex gap-2">
                        <button class="btn-primary btn-small" onclick="app.openSessionDetails('${session.id}')">
                            Détails
                        </button>
                        <button class="btn-secondary btn-small" onclick="app.openSessionModal('${session.id}')">
                            Modifier
                        </button>
                        <button class="btn-danger btn-small" onclick="app.deleteSession('${session.id}')">
                            Supprimer
                        </button>
                    </div>
                </div>
            `).join('');
    }

    renderDrivers() {
        const grid = document.getElementById('drivers-grid');

        if (this.drivers.length === 0) {
            grid.innerHTML = '<div class="text-slate-400">Aucun pilote ajouté</div>';
            return;
        }

        grid.innerHTML = this.drivers.map(driver => {
            const topSpeed = driver.lapTimes.length > 0 ? 'Actif' : 'Inactif';
            return `
                <div class="driver-card animate-slideInDown">
                    <div class="driver-number">#${driver.number}</div>
                    <div class="driver-info">
                        <div class="driver-name">${driver.name}</div>
                        <div class="driver-team">${driver.team || 'Sans équipe'}</div>
                        <div class="driver-car">${driver.car || 'Non spécifié'}</div>
                    </div>
                    <div class="driver-stats">
                        <div class="driver-stat">
                            <div class="driver-stat-label">Meilleur</div>
                            <div class="driver-stat-value">
                                ${driver.bestLapTime ? this.formatTime(driver.bestLapTime) : '--'}
                            </div>
                        </div>
                        <div class="driver-stat">
                            <div class="driver-stat-label">Tours</div>
                            <div class="driver-stat-value">${driver.lapTimes.length}</div>
                        </div>
                    </div>
                    <div class="driver-actions">
                        <button class="btn-primary btn-small" onclick="app.openDriverModal('${driver.id}')">
                            Modifier
                        </button>
                        <button class="btn-danger btn-small" onclick="app.deleteDriver('${driver.id}')">
                            Supprimer
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    renderSessions() {
        const grid = document.getElementById('sessions-grid');

        if (this.sessions.length === 0) {
            grid.innerHTML = '<div class="text-slate-400">Aucune session créée</div>';
            return;
        }

        grid.innerHTML = this.sessions
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map(session => {
                const driversInSession = this.drivers.filter(d =>
                    d.lapTimes.some(lt => lt.sessionId === session.id)
                );

                return `
                    <div class="session-card animate-slideInDown">
                        <div class="session-header">
                            <div>
                                <div class="session-title">${session.name}</div>
                                <div class="session-track">${session.track}</div>
                            </div>
                            <span class="session-badge">${new Date(session.date).toLocaleDateString('fr-FR')}</span>
                        </div>
                        <div class="session-drivers">
                            <div class="text-sm font-semibold text-slate-300 mb-2">Pilotes (${driversInSession.length})</div>
                            ${driversInSession.length === 0 ?
                                '<div class="text-xs text-slate-500">Aucun pilote</div>' :
                                driversInSession.map(d => `
                                    <div class="session-driver-item">
                                        <span>${d.name}</span>
                                        <span class="text-cyan-400">${d.bestLapTime ? this.formatTime(d.bestLapTime) : '--'}</span>
                                    </div>
                                `).join('')
                            }
                        </div>
                        <div class="session-actions">
                            <button class="btn-primary btn-small" onclick="app.openSessionDetails('${session.id}')">
                                Détails
                            </button>
                            <button class="btn-secondary btn-small" onclick="app.openSessionModal('${session.id}')">
                                Modifier
                            </button>
                            <button class="btn-danger btn-small" onclick="app.deleteSession('${session.id}')">
                                Supprimer
                            </button>
                        </div>
                    </div>
                `;
            }).join('');
    }

    renderAnalytics() {
        this.initDistributionChart();
        this.initProgressionChart();
        this.initComparisonChart();
    }

    // ==================== CHARTS ====================
    initTrendChart() {
        const chartDom = document.getElementById('trend-chart');
        if (!chartDom) return;

        const chart = echarts.init(chartDom);
        this.charts.trend = chart;

        const drivers = this.drivers.filter(d => d.lapTimes.length > 0);

        const option = {
            backgroundColor: 'transparent',
            textStyle: { color: '#cbd5e1' },
            grid: { left: '60px', right: '20px', top: '20px', bottom: '30px', containLabel: true },
            tooltip: {
                backgroundColor: 'rgba(30, 41, 59, 0.9)',
                borderColor: '#06b6d4',
                textStyle: { color: '#f1f5f9' }
            },
            xAxis: {
                type: 'category',
                data: drivers.map(d => d.name),
                axisLine: { lineStyle: { color: '#475569' } },
                splitLine: { show: false }
            },
            yAxis: {
                type: 'value',
                axisLine: { lineStyle: { color: '#475569' } },
                splitLine: { lineStyle: { color: '#334155' } }
            },
            series: [
                {
                    name: 'Meilleur Temps (ms)',
                    data: drivers.map(d => Math.round(d.bestLapTime || 0)),
                    type: 'bar',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#06b6d4' },
                            { offset: 1, color: '#3b82f6' }
                        ])
                    },
                    smooth: true
                }
            ]
        };

        chart.setOption(option);
    }

    initDistributionChart() {
        const chartDom = document.getElementById('distribution-chart');
        if (!chartDom) return;

        const chart = echarts.init(chartDom);
        this.charts.distribution = chart;

        const allTimes = this.drivers.flatMap(d => d.lapTimes.map(lt => lt.time));
        if (allTimes.length === 0) {
            chart.setOption({
                backgroundColor: 'transparent',
                title: { text: 'Pas de données', left: 'center', top: 'center' }
            });
            return;
        }

        const minTime = Math.min(...allTimes);
        const maxTime = Math.max(...allTimes);
        const range = (maxTime - minTime) / 10;
        const bins = Array(10).fill(0);

        allTimes.forEach(time => {
            const binIndex = Math.min(9, Math.floor((time - minTime) / range));
            bins[binIndex]++;
        });

        const option = {
            backgroundColor: 'transparent',
            textStyle: { color: '#cbd5e1' },
            grid: { left: '60px', right: '20px', top: '20px', bottom: '30px', containLabel: true },
            tooltip: {
                backgroundColor: 'rgba(30, 41, 59, 0.9)',
                borderColor: '#06b6d4'
            },
            xAxis: {
                type: 'category',
                data: Array(10).fill(0).map((_, i) => `Groupe ${i + 1}`),
                axisLine: { lineStyle: { color: '#475569' } }
            },
            yAxis: {
                type: 'value',
                axisLine: { lineStyle: { color: '#475569' } },
                splitLine: { lineStyle: { color: '#334155' } }
            },
            series: [{
                data: bins,
                type: 'bar',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#f59e0b' },
                        { offset: 1, color: '#06b6d4' }
                    ])
                }
            }]
        };

        chart.setOption(option);
    }

    initProgressionChart() {
        const chartDom = document.getElementById('progression-chart');
        if (!chartDom) return;

        const chart = echarts.init(chartDom);
        this.charts.progression = chart;

        const drivers = this.drivers.filter(d => d.lapTimes.length > 3);

        const series = drivers.map(driver => ({
            name: driver.name,
            type: 'line',
            data: driver.lapTimes.slice(-10).map(lt => lt.time),
            smooth: true,
            symbolSize: 6
        }));

        const option = {
            backgroundColor: 'transparent',
            textStyle: { color: '#cbd5e1' },
            grid: { left: '60px', right: '20px', top: '20px', bottom: '30px', containLabel: true },
            tooltip: {
                backgroundColor: 'rgba(30, 41, 59, 0.9)',
                borderColor: '#06b6d4'
            },
            xAxis: {
                type: 'category',
                data: Array(10).fill(0).map((_, i) => `Tour ${i + 1}`),
                axisLine: { lineStyle: { color: '#475569' } }
            },
            yAxis: {
                type: 'value',
                axisLine: { lineStyle: { color: '#475569' } },
                splitLine: { lineStyle: { color: '#334155' } }
            },
            series: series.length > 0 ? series : [{
                type: 'line',
                data: [],
                name: 'Aucune donnée'
            }],
            color: ['#06b6d4', '#3b82f6', '#f59e0b', '#10b981', '#ef4444']
        };

        chart.setOption(option);
    }

    initComparisonChart() {
        const chartDom = document.getElementById('comparison-chart');
        if (!chartDom) return;

        const chart = echarts.init(chartDom);
        this.charts.comparison = chart;

        const drivers = this.drivers.filter(d => d.bestLapTime !== null);

        const option = {
            backgroundColor: 'transparent',
            textStyle: { color: '#cbd5e1' },
            grid: { left: '100px', right: '20px', top: '20px', bottom: '30px', containLabel: true },
            tooltip: {
                backgroundColor: 'rgba(30, 41, 59, 0.9)',
                borderColor: '#06b6d4'
            },
            xAxis: {
                type: 'value',
                axisLine: { lineStyle: { color: '#475569' } },
                splitLine: { lineStyle: { color: '#334155' } }
            },
            yAxis: {
                type: 'category',
                data: drivers.map(d => `${d.name} #${d.number}`),
                axisLine: { lineStyle: { color: '#475569' } }
            },
            series: [{
                name: 'Meilleur Temps (ms)',
                data: drivers.map(d => Math.round(d.bestLapTime || 0)),
                type: 'bar',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        { offset: 0, color: '#06b6d4' },
                        { offset: 0.5, color: '#3b82f6' },
                        { offset: 1, color: '#f59e0b' }
                    ])
                }
            }]
        };

        chart.setOption(option);
    }

    // ==================== VANTA.JS SETUP ====================
    initVanta() {
        VANTA.WAVES({
            el: '#vanta-background',
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x0f172a,
            waveHeight: 20,
            waveSpeed: 1.5,
            zoom: 0.75
        });
    }

    // ==================== KEYBOARD SHORTCUTS ====================
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ignore if user is typing in an input
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
                return;
            }

            switch(e.key.toLowerCase()) {
                case 'd':
                    this.switchView('dashboard');
                    break;
                case 'p':
                    this.switchView('drivers');
                    break;
                case 's':
                    this.switchView('sessions');
                    break;
                case 'a':
                    this.switchView('analytics');
                    break;
                case 'n':
                    if (this.currentView === 'drivers') {
                        this.openDriverModal();
                    }
                    break;
                case 't':
                    if (this.currentView === 'sessions') {
                        this.openSessionModal();
                    }
                    break;
                case 'e':
                    this.exportData();
                    break;
                case '?':
                    this.openShortcutsModal();
                    break;
            }
        });
    }
}

// ==================== APP INITIALIZATION ====================
let app;

document.addEventListener('DOMContentLoaded', () => {
    app = new CrewDeckApp();
});
