//-------------------Numbers------------------------------------------------------------------//

const Num1 = 1234123
const NewNum1 = new Number(1212100);
// console.log(NewNum1.toString().length)
// console.log(NewNum1.toFixed(2))
// console.log(Num1)
// console.log(NewNum1)
//console.log(NewNum1.valueOf())
//console.log(NewNum1.toString(' , '))
const otherNumber = 1198000000
// console.log(otherNumber.toExponential(5))               // return exponential number
// console.log(otherNumber.toPrecision(2))           // round off before decimal and return string
// console.log(otherNumber.toFixed(1))               // round off after decimal

// console.log(otherNumber.toLocaleString('en-in'))  

//----------------------Maths--------------------------------------------------------------------//
// console.log(Math.PI)
// console.log(Math.round(4.6))
// console.log(Math.abs(-3.34))
// console.log(Math.ceil(4.6))
// console.log(Math.floor(4.6))
// console.log(Math.sqrt(24))
// console.log(Math.min(1,2,0,6))
// console.log(Math.max(1,2,0,6))
//console.log(Math.random()) // renerate random number from 0 to 1
//console.log(((Math.random()*100) +1).toPrecision(2)) // to generate the random number with decimal and whole number
//console.log((Math.floor(Math.random()*100) +1))  // to generate the random whole number number

const min = 100
const max = 110

//console.log(Math.floor((Math.random()*100)) + min) // to get a random number above a specific value

console.log(Math.floor(Math.random()* (max - min + 1) )+ min) // generate random number betwen specific value