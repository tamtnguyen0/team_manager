const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Player name is required'],
        minlength: [2, 'Player name should be at least 2 characters long']
    },
    pref_pos: String,
    status: {
        game1: String,
        game2: String,
        game3: String
    }
}, {timestamps: true})

module.exports.Player = mongoose.model('Player', PlayerSchema);