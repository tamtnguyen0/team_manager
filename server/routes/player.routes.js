const PlayerController = require('../controllers/player.controller')

module.exports = app => {
    app.post('/api/players/create', PlayerController.createPlayer);
    app.get('/api/players', PlayerController.getAllPlayers);
    app.get('/api/players/:id', PlayerController.getOnePlayer);
    app.put('/api/players/:id/update', PlayerController.updatePlayer);
    app.delete('/api/players/:id/delete', PlayerController.deletePlayer);
}