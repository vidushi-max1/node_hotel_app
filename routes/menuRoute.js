const express = require('express');
const router = express.Router();
const menu = require('../models/menumodel');

//add menu details
router.post('/',async(req,res) =>{
    try{

        //assume it contains menu data
        const data=req.body; 
        console.log(data)

        //create a new menu object using mongoose
        const newmenu =new menu(data);

        //save the new menu to db
        const response= await newmenu.save();
        console.log("menu data saved successfully")
        res.status(200).json(response);

    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server error'});

    }
})

//get all menu details
router.get('/',async(req,res)=>{
    try{
        const data= await menu.find();
        console.log("full menu data fetched")
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server error'});
    }
})

//get menu by taste
router.get('/:tastetype',async(req,res)=>{
    try{
        let tastetype= req.params.tastetype; //extract taste type from the URL parameter
        if(tastetype == 'sweet' ||tastetype == 'spicy'|| tastetype == 'sour'){
        const data=await menu.find({taste:tastetype});
        console.log("according to tastetypr data fetched")
        res.status(200).json(data);  
        }
        else{
            res.status(404).json({error:"oops! we dont have food with such taste"}); 
        }          
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server error'});
    }
})

module.exports = router;

