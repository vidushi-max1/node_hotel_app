const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const db = require('./db');
const personRoutes = require('./routes/personRoute');
const menuRoutes = require('./routes/menuRoute');
const drinkRoutes = require('./routes/drinkRoute');
require('dotenv').config();
const passport = require('./auth');


//Define PORT from .env file
const PORT = process.env.PORT || 3000;

//middlewares
app.use(bodyParser.json());

app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local', { session: false });

app.get('/', localAuthMiddleware, function(req, res) {
    res.send('Welcome to the Hotel.');
});

app.use('/person', personRoutes);
app.use('/menu', menuRoutes);
app.use('/drink', drinkRoutes);
//---------------------------------------------------------------------------------------------------------------




app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})