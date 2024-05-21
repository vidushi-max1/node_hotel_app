const mongoose = require('mongoose');


//define the person schema
const menuSchema =new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required:true    
    },
    taste:{
        type:String,
        enum:['sweet','sour','spicy'],
        required:true
    },
    is_drink:{
        type:Boolean,
        default: false,
    },
    ingredients:{
        type:[String],
        defualt:[]
    },
    numofsales:{
        type:Number,
        default:0,
    },  
})
//create menu model
const menumodel = mongoose.model('menumodel',menuSchema);

//export menu model
module.exports= menumodel;