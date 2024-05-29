const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const db = require('./db');
const personRoutes = require('./routes/personRoute');
const menuRoutes = require('./routes/menuRoute');
const drinkRoutes = require('./routes/drinkRoute');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('welcome vidu')
})

app.use('/person', personRoutes);
app.use('/menu', menuRoutes);
app.use('/drink', drinkRoutes);
//---------------------------------------------------------------------------------------------------------------




app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})