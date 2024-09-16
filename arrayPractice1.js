//-----------array practice------------
const array =[1,2,3,4,5]
//console.log(array)
//----------array access----------------

//console.log(array[1])

//array.push(6)
//console.log(array)

//array.unshift(0)
//console.log(array)

array[4]=6
//console.log(array)

//console.log(array.slice(2,1))
// console.log(array)
// console.log(array.splice(2,1))
//----------------------------------------Multi dimentional array------------------------------------------//
let student1 = [ 'arsalan', 18];
let student2 = ['rehan', 22];
let student3 = ['faizan',23];

let studentData =[student1,student2,student3]
console.log(studentData)
//----------------------------------------access of array from multidimentional array---------------------//
console.log(studentData[1][1])
//----------------------------------------pushing data to multidimention array---------------------//

studentData[1][0]='rizwan'
console.log(studentData)

studentData.push(['danny',25])
console.log(studentData)


//console.log(studentData.splice(1,1))
