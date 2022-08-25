console.log(__dirname)
//----function expression----

sayhi = () => console.log('hi') //normal function
//or
saybye = function () {console.log('bye')}

sayhi();
saybye();

function callFunction(func) {
    func();
}

callFunction(sayhi)

//----module and require

var module = require('./module')
console.log(module.counter(['affan','bin','hasan']))

//-----module patterns

console.log(module.adder(5,6) + ' and pi is : ' + module.pi)
console.log(module.adder(module.pi,2))

//-----the node event emitter-------------------------------------

var events = require('events');

// element.on('click',function(){})

var myEmitter = new events.EventEmitter();

myEmitter.on('randomEvent',function(msg){
    console.log(msg);
})

myEmitter.emit('randomEvent', 'the even was emitted')

var util = require('util')

// var Person = (name) =>{
//     this.name = name;
// }

// util.inherits(Person,events.EventEmitter);

class Person extends events.EventEmitter{
    
    constructor(name)
    {
        super(util);
        this.name = name
    }
    
}

let affan = new Person('affan')
let bin = new Person('bin');
let hasan = new Person('hasan');

let people = [affan,bin,hasan]

people.forEach(function(person){
    person.on('speak',function(msg){
        console.log(person.name+ " said : " + msg)
    })
})

affan.emit('speak','wassup?')
bin.emit('speak','thats my middle name')


//------------------FILES-------------------------------------

var fs = require('fs');

let readme = fs.readFileSync('readme.txt', 'utf8');    //synchronous file reader

// console.log(readme)

// fs.writeFileSync('writeme.txt', readme)

//asynchronous methods

let readme_async = fs.readFile('readme.txt', 'utf8', function(err,data) {
    // console.log(data)
    // fs.writeFile('writeMe.txt',data)
}); //aynchronous method requires three parameters

console.log('test')

console.log(fs.readdirSync('./').forEach(file => {console.log(file)}))