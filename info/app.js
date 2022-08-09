//Search for a term in a file

const fs = require('fs')
let search_term= 'harry';

fs.readFile('searchFile.txt', function (err,data){
    if (err) throw err;
    if(data.includes(search_term)){
        console.log('file has harry in it')
    }
})