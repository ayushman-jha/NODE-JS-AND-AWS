const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes/api')

const app = express();
app.use('/items',routes)

//connect to mongoDB
mongoose.connect('mongodb+srv://JHA:Xuv500@cluster0.x7f0g.mongodb.net/nodejsaws', function () {
    console.log("MongoDB Connected successfully");
  })
mongoose.Promise = global.Promise;



app.listen(4000,()=>{
    console.log('Inventory Service running on 4000')
})