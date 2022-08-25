const http = require('http');

const fs = require('fs');

let server = http.createServer(function(req,res){
    console.log('request was made : ' + req.url);
    

    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname+'/index.html').pipe(res);
        
    }
    else if(req.url === '/contact-us'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname+'/contact.html').pipe(res);
    }
    else if(req.url === '/api/dev'){
        let developers = [{name:'Affan',age:21},{name:'Atharva',age:21}]
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(developers))
    }
    else{
        res.writeHead(404,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname+'/404.html').pipe(res);
    }
    

})

server.listen(4000, 'localhost')
console.log('Now Listening to port 4000');