const mongoose = require('mongoose');


//define the person schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    salary: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

//create person model
//const MyModel = mongoose.model('ModelName', mySchema);
// The first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural version of your model name.
const personmodel = mongoose.model('personmodel', personSchema);

//export person model
module.exports = personmodel;