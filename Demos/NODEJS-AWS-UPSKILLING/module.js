var counter = (arr) => {
    return 'There are '+ arr.length + ' elements in this array';
}

let adder = (a,b) => `the sum of the two number is = ${a+b}`

const pi = 3.14

// console.log(counter(['affan','bin','hasan']))

//----module and require

// module.exports.counter = counter;
// module.exports.pi = pi;

module.exports = {
    counter:counter,
    adder:adder,
    pi: pi
}