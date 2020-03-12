const {Player} = require('../models/player.model')

module.exports.createPlayer = (req, res) => {
    const {name, pref_pos} = req.body;
    Player.create({
        name,
        pref_pos,
        status: {
            game1: 'Undecided',
            game2: 'Undecided',
            game3: 'Undecided'
        }
    })
        .then(player => res.json(player))
        .catch(err => res.status(400).json(err));
}

module.exports.getAllPlayers = (req, res) => {
    Player.find()
        .then(players => res.json(players))
        .catch(err => res.json(err));
}

module.exports.getOnePlayer = (req, res) => {
    Player.findOne({_id: req.params.id})
        .then(player => res.json(player))
        .catch(err => res.status(400).json(err));
}

module.exports.updatePlayer = (req, res) => {
    Player.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(player => res.json(player))
        .catch(err => res.status(400).json(err));
}

module.exports.deletePlayer = (req, res) => {
    Player.deleteOne({_id: req.params.id})
        .then(response => res.json(response))
        .catch(err => res.json(err));
}