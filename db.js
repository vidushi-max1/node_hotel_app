//importing mongoose
const mongoose = require('mongoose');

//mongoose create default object that represents mongoDB connection
const db = mongoose.connect('mongodb+srv://boombeera:boombeera7@hotel.2syffdv.mongodb.net/')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

//export the database connecion
module.exports = db;








// //define the mongoDB connection URL
// const mongoURL= 'mongodb://localhost:27017/hotel';

// // const mongoURL = "mongodb+srv://'abhishek01':'AbhisheK98!@'@cluster0.ujjy76b.mongodb.net/MatchHub?retryWrites=true&w=majority";


// //set up mongoDB connection
// mongoose.connect(mongoURL,{
//     useNewUrlParser:true,
//     useUnifiedTopology: true
// })

// //mongoose create default object that represents mongoDB connection
// const db= mongoose.connection;

// //define event listeners
// db.on('connected',()=>{
//     console.log("connected to database");
// });

// db.on('disconnected',() =>{
//     console.log("disconnected to database");
// });
// db.on('error',(err) =>{
//     console.log("error",err);
// });


