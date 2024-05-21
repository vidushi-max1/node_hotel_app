const mongoose = require('mongoose');


//define the person schema
const personSchema =new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    age:{
        type:Number,    
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    mobile:{
        type:String,
        required: true
    },
    address:{
        type:String,
    },
    salary:{
        type:Number,
        required: true
    },  
})
//create person model
const personmodel = mongoose.model('personmodel',personSchema);

//export person model
module.exports= personmodel;