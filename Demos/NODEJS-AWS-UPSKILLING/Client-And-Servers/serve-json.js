const http = require('http');

const fs = require('fs');

let server = http.createServer(function(req,res){
    console.log('request was made : ' + req.url);
    res.writeHead(200,{'Content-Type': 'application/json'});
    let myobj = {
        name : 'Affan',
        job : 'Software Developer',
        age : 21
    }

    res.end(JSON.stringify(myobj))

})

server.listen(4000, 'localhost')
console.log('Now Listening to port 4000');