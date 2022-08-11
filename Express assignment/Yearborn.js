//To print the year a person was born when they typee their age on the url /year/(age)
var express = require('express');
var fs = require('fs');

var app = express();

app.listen(3000);

app.get('/year/:id', function(req,res)
{
    var year = 2022-(req.params.id);
    res.send("You were born in " + year);
});

console.log('Now listening to port 3000');
