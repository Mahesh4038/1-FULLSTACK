console.clear()
let nam='mahesh'
console.log(nam)

//not suport ES6 let ,cost varible  acess or print before intialize
A='20'
console.log(A)
//var A;
//let A  //error


//template  String

//normal way 
var m='Mahesh'
var n='How r u ' + m
console.log(n)

//Using template String
const j='sandeep'
const k=`Hello ${j}`
console.log(k)

const firstname='Mahesh'
const lname='N'
function getfullname(fname ,lastname){

    return `${fname} ${lname} `

}
const mgreating=`Helooo HIIIIIII ${getfullname(firstname,lname)+ 'ok ' +100}`
console.log(mgreating) 


//rgba(red,green,blue,alpha)


let red=200
let green=155
let blue=100
let alpha=0.8

//normal way
const rgbaExp='rgba('+red+','+green+','+blue+','+alpha+')'
console.log(rgbaExp)

//template string
const rgbaExp1=`rgba(${red,green,blue,alpha})`
console.log(rgbaExp)

