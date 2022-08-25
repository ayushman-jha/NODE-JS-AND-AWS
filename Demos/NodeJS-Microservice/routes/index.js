const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router();
const axios = require('axios');
const registry = require('./registry.json');
const fs = require('fs');



router.all('/:apiName/:path',(req,res,next)=>{
    console.log(req.params.apiName+'\n')
    console.log(req.method)
    if(registry.services[req.params.apiName]){
        axios({
            method: req.method,
            url: registry.services[req.params.apiName].url + req.params.path,
            headers: req.headers,
            data: req.body
        })
        .then((response)=>{
            res.send(response.data)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }else{
        res.send('API doesnt exist')
    }
})

// router.post('/register',(req,res)=>{
//     const registrationInfo = req.body;
//     registry.services[registrationInfo.apiName] = { ...registrationInfo}
//     fs.writeFile('./routes/registry.json', JSON.stringify(registry), (err)=> {
//         if(err){
//             res.send("Could not register"+registrationInfo.apiName+"\n"+err)
//         }else{
//             res.send('success registration'+ registrationInfo.apiName)
//         }
//     })
// })

module.exports = router;