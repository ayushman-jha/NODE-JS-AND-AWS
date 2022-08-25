const http = require('http');

const fs = require('fs');

// let myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf8');
// let myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

// // myReadStream.on('data',function(chunk){
// //     console.log('new chunk recieved')
// //     //console.log(chunk)
// //     myWriteStream.write(chunk);
// // }) // this is manual method

// //-----pipes method from readable stream

// myReadStream.pipe(myWriteStream);

// let server = http.createServer(function(req,res){
//     console.log('request was made : ' + req.url);
//     res.writeHead(200,{'Content-Type': 'text/plain'});
//     let myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf8');

//     myReadStream.pipe(res);

// })



let server = http.createServer(function(req,res){
    console.log('request was made : ' + req.url);
    res.writeHead(200,{'Content-Type': 'text/html'});
    let myReadStream = fs.createReadStream(__dirname + '/index.html','utf8');

    myReadStream.pipe(res);

})

server.listen(4000, 'localhost')
console.log('Now Listening to port 4000');