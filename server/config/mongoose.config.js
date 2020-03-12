const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/team_manager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established connection to database'))
    .catch(err => console.log('Failed to connect to database', err));