/**
 * Demo Data Loader pour CrewDeck
 * Charge les données de démonstration dans localStorage
 *
 * Utilisation: Ouvrir console (F12) et exécuter:
 * loadDemoData();
 */

function loadDemoData() {
    // Données de démo
    const demoData = {
        drivers: [
            {
                id: "driver_001",
                name: "Max Verstappen",
                number: 1,
                team: "Red Bull Racing",
                car: "Porsche 911 GT3",
                bestLapTime: 82450,
                avgLapTime: 83120,
                lapTimes: [
                    { sessionId: "session_001", time: 83200, timeString: "1:23.200", timestamp: "2024-01-15T10:05:00Z" },
                    { sessionId: "session_001", time: 82900, timeString: "1:22.900", timestamp: "2024-01-15T10:06:00Z" },
                    { sessionId: "session_001", time: 82450, timeString: "1:22.450", timestamp: "2024-01-15T10:07:00Z" },
                    { sessionId: "session_001", time: 82600, timeString: "1:22.600", timestamp: "2024-01-15T10:08:00Z" },
                    { sessionId: "session_002", time: 82800, timeString: "1:22.800", timestamp: "2024-01-16T14:30:00Z" },
                    { sessionId: "session_002", time: 82500, timeString: "1:22.500", timestamp: "2024-01-16T14:31:00Z" },
                    { sessionId: "session_002", time: 82650, timeString: "1:22.650", timestamp: "2024-01-16T14:32:00Z" }
                ],
                createdAt: "2024-01-15T09:00:00Z"
            },
            {
                id: "driver_002",
                name: "Charles Leclerc",
                number: 16,
                team: "Ferrari",
                car: "Ferrari 488 GT3",
                bestLapTime: 82750,
                avgLapTime: 83450,
                lapTimes: [
                    { sessionId: "session_001", time: 83700, timeString: "1:23.700", timestamp: "2024-01-15T10:05:30Z" },
                    { sessionId: "session_001", time: 83200, timeString: "1:23.200", timestamp: "2024-01-15T10:06:30Z" },
                    { sessionId: "session_001", time: 82900, timeString: "1:22.900", timestamp: "2024-01-15T10:07:30Z" },
                    { sessionId: "session_001", time: 82750, timeString: "1:22.750", timestamp: "2024-01-15T10:08:30Z" },
                    { sessionId: "session_002", time: 83100, timeString: "1:23.100", timestamp: "2024-01-16T14:30:30Z" },
                    { sessionId: "session_002", time: 82850, timeString: "1:22.850", timestamp: "2024-01-16T14:31:30Z" }
                ],
                createdAt: "2024-01-15T09:15:00Z"
            },
            {
                id: "driver_003",
                name: "Lewis Hamilton",
                number: 44,
                team: "Mercedes",
                car: "Mercedes AMG GT3",
                bestLapTime: 83050,
                avgLapTime: 83650,
                lapTimes: [
                    { sessionId: "session_001", time: 84000, timeString: "1:24.000", timestamp: "2024-01-15T10:06:00Z" },
                    { sessionId: "session_001", time: 83500, timeString: "1:23.500", timestamp: "2024-01-15T10:07:00Z" },
                    { sessionId: "session_001", time: 83200, timeString: "1:23.200", timestamp: "2024-01-15T10:08:00Z" },
                    { sessionId: "session_001", time: 83050, timeString: "1:23.050", timestamp: "2024-01-15T10:09:00Z" },
                    { sessionId: "session_002", time: 83400, timeString: "1:23.400", timestamp: "2024-01-16T14:31:00Z" },
                    { sessionId: "session_002", time: 83150, timeString: "1:23.150", timestamp: "2024-01-16T14:32:00Z" },
                    { sessionId: "session_002", time: 83300, timeString: "1:23.300", timestamp: "2024-01-16T14:33:00Z" }
                ],
                createdAt: "2024-01-15T09:30:00Z"
            },
            {
                id: "driver_004",
                name: "Lando Norris",
                number: 81,
                team: "McLaren",
                car: "McLaren 720S GT3",
                bestLapTime: 83300,
                avgLapTime: 83850,
                lapTimes: [
                    { sessionId: "session_001", time: 84200, timeString: "1:24.200", timestamp: "2024-01-15T10:06:30Z" },
                    { sessionId: "session_001", time: 83800, timeString: "1:23.800", timestamp: "2024-01-15T10:07:30Z" },
                    { sessionId: "session_001", time: 83500, timeString: "1:23.500", timestamp: "2024-01-15T10:08:30Z" },
                    { sessionId: "session_001", time: 83300, timeString: "1:23.300", timestamp: "2024-01-15T10:09:30Z" },
                    { sessionId: "session_002", time: 83600, timeString: "1:23.600", timestamp: "2024-01-16T14:31:30Z" }
                ],
                createdAt: "2024-01-15T09:45:00Z"
            }
        ],
        sessions: [
            {
                id: "session_001",
                name: "Practice Session - Monza",
                track: "Monza",
                date: "2024-01-15",
                weather: "sunny",
                drivers: ["driver_001", "driver_002", "driver_003", "driver_004"],
                createdAt: "2024-01-15T09:00:00Z"
            },
            {
                id: "session_002",
                name: "Qualifying - Monza",
                track: "Monza",
                date: "2024-01-16",
                weather: "cloudy",
                drivers: ["driver_001", "driver_002", "driver_003", "driver_004"],
                createdAt: "2024-01-16T13:00:00Z"
            },
            {
                id: "session_003",
                name: "Endurance - Spa-Francorchamps",
                track: "Spa-Francorchamps",
                date: "2024-01-17",
                weather: "rainy",
                drivers: ["driver_001", "driver_002", "driver_003"],
                createdAt: "2024-01-17T15:00:00Z"
            }
        ]
    };

    // Sauvegarder dans localStorage
    localStorage.setItem('crewdeck_drivers', JSON.stringify(demoData.drivers));
    localStorage.setItem('crewdeck_sessions', JSON.stringify(demoData.sessions));

    console.log('✅ Données de démo chargées avec succès !');
    console.log('📊 Pilotes chargés:', demoData.drivers.length);
    console.log('🏁 Sessions chargées:', demoData.sessions.length);
    console.log('🔄 Recharchez la page pour voir les données...');

    // Recharger la page après 1 seconde
    setTimeout(() => {
        location.reload();
    }, 1000);
}

/**
 * Effacer les données de démo
 */
function clearAllData() {
    if (confirm('Êtes-vous sûr de vouloir effacer toutes les données ? Cette action est irréversible.')) {
        localStorage.removeItem('crewdeck_drivers');
        localStorage.removeItem('crewdeck_sessions');
        console.log('✅ Toutes les données ont été effacées');
        location.reload();
    }
}

/**
 * Exporter toutes les données
 */
function exportAllData() {
    const data = {
        drivers: JSON.parse(localStorage.getItem('crewdeck_drivers') || '[]'),
        sessions: JSON.parse(localStorage.getItem('crewdeck_sessions') || '[]'),
        exportedAt: new Date().toISOString()
    };

    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `crewdeck-backup-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);

    console.log('✅ Données exportées avec succès');
}

/**
 * Importer des données depuis un fichier JSON
 */
function importData(fileInput) {
    const file = fileInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);

            if (data.drivers) {
                localStorage.setItem('crewdeck_drivers', JSON.stringify(data.drivers));
                console.log('✅ Pilotes importés:', data.drivers.length);
            }

            if (data.sessions) {
                localStorage.setItem('crewdeck_sessions', JSON.stringify(data.sessions));
                console.log('✅ Sessions importées:', data.sessions.length);
            }

            console.log('✅ Données importées avec succès');
            location.reload();
        } catch (error) {
            console.error('❌ Erreur lors de l\'import:', error);
        }
    };
    reader.readAsText(file);
}

/**
 * Afficher les statistiques des données
 */
function showDataStats() {
    const drivers = JSON.parse(localStorage.getItem('crewdeck_drivers') || '[]');
    const sessions = JSON.parse(localStorage.getItem('crewdeck_sessions') || '[]');

    const totalLapTimes = drivers.reduce((sum, d) => sum + d.lapTimes.length, 0);
    const totalTime = drivers.reduce((sum, d) =>
        sum + d.lapTimes.reduce((s, lt) => s + lt.time, 0), 0);
    const avgLapTime = totalLapTimes > 0 ? totalTime / totalLapTimes : 0;

    console.log('📊 === STATISTIQUES DES DONNÉES ===');
    console.log('👥 Pilotes:', drivers.length);
    console.log('🏁 Sessions:', sessions.length);
    console.log('⏱️ Tours enregistrés:', totalLapTimes);
    console.log('⏱️ Temps moyen global:', formatTime(avgLapTime));
    console.log('');
    console.log('📈 Détails par pilote:');
    drivers.forEach(d => {
        const best = d.lapTimes.length > 0 ? Math.min(...d.lapTimes.map(lt => lt.time)) : null;
        console.log(`  ${d.name} (#${d.number}): ${d.lapTimes.length} tours, meilleur: ${best ? formatTime(best) : 'N/A'}`);
    });
}

/**
 * Utilitaire: formater le temps
 */
function formatTime(ms) {
    if (ms === null || ms === undefined) return '--:--';
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const millis = ms % 1000;
    return `${minutes}:${String(seconds).padStart(2, '0')}.${String(millis).padStart(3, '0')}`;
}

console.log(`
╔════════════════════════════════════════════════════╗
║        🏁 CREWDECK - DEMO DATA LOADER 🏁          ║
╚════════════════════════════════════════════════════╝

Commandes disponibles:
  loadDemoData()       → Charger les données de démo
  clearAllData()       → Effacer toutes les données
  exportAllData()      → Exporter les données en JSON
  showDataStats()      → Afficher les statistiques
  importData(input)    → Importer depuis un fichier

Exemples:
  • loadDemoData() et recharger la page
  • showDataStats() pour voir les statistiques
  • exportAllData() pour sauvegarder les données
`);
