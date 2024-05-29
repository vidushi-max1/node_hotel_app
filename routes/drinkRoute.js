const express = require('express');
const router = express.Router();
const drink = require('../models/drinkModel');

router.get('/', async(req, res) => {
    try {
        const data = await drink.find();
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post('/', async(req, res) => {
    try {
        const data = req.body;
        const newdrink = new drink(data);
        const response = await newdrink.save();
        console.log(response);
        res.send(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
})

module.exports = router;