//Write a program to print Hello World at root URL '/'
var express = require('express');
var fs = require('fs');

var app = express();

app.listen(3000);

app.get('/', function (req , res)
{
    res.send("Hello World !");
});

console.log("Now listening to port 3000");