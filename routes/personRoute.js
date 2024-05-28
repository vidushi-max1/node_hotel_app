const express = require('express');
const router = express.Router();
const person = require('../models/personmodel');


//add person details
router.post('/', async(req, res) => {
    try {

        //assume it contains person data
        const data = req.body;
        console.log(data);

        //create a new person object using mongoose
        const newperson = new person(data);

        //save the new person to db
        const response = await newperson.save();
        console.log("person data saved successfully")
        res.status(200).json(response);

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal server error' });

    }
})


//get all person details
router.get('/', async(req, res) => {
    try {
        const data = await person.find();
        console.log("all persons data fetched")
        res.status(200).json(data);
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal server error' });
    }
})

//get person by worktype
router.get('/:worktype', async(req, res) => {
    try {
        let worktype = req.params.worktype; //extract work type from the URL parameter
        if (worktype == 'chef' || worktype == 'manager' || worktype == 'waiter') {
            const data = await person.find({ work: worktype });
            console.log("according to worktype data fetched")
            res.status(200).json(data);
        } else {
            res.status(404).json({ error: "invalid work type" });
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal server error' });
    }
})

//update person data by id
router.put('/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const data = await person.findByIdAndUpdate(id, updatedData, {
            new: true, //return updated document
            runValidators: true //run mongoose validation 
        });

        if (!data) {
            res.status(404).json({ error: "person not found" });
        }

        console.log("person data updated successfully");
        res.status(200).json(data);
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal server error' });
    }
})

//delete person data by id
router.delete('/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const data = await person.findByIdAndDelete({ _id: id })
        console.log("person data deleted successfully");
        res.status(200).json(data);

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal server error' });
    }
})



module.exports = router;