const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/api')

const app = express();
app.use('/books-ms',routes)

//connect to mongoDB
mongoose.connect('mongodb+srv://affan:affan@cap-affan.acbrv.mongodb.net/NodeJSMicroservice', function () {
    console.log("MongoDB Connected successfully");
  })
mongoose.Promise = global.Promise;


app.listen(9001,()=>{
    console.log('Books Service running on 9001')
})


