//node is runtime environment of javascript
//browser embeded v8 javascript compiler
//also nodejs embeded v8 javascript compiler
// By using node js You can run javascript outside the browser and run javascript server side 
//you can get os details,work with file ,net server,listen to http server
/*
function FirstNJS(names){
 console.log('hello  '+names)
}

FirstNJS('MAHESH');

//Node Module system -global object
console.log(module) //global accesible anywhere
//global objects
setTimeout() //call after 1 sec like that
clearTimeout()
setInterval()

window.console('hii')

//In node we dont have window object
//we Use global

global.console.log('JII')
global.setInterval()

//variable not add to global object
var msg='oiiii'
console.log(global.msg) //error . it is available only in app.js



//Modules -Every file in node application cosider as a module
console.log(module)

*/

//create modules and load amodule

//require('./subfolder/loger')  //in subfolder
//require('../loger')  //in parent folder
//const logger=require('./loger');

//console.log(logger)

//logger.log('MAHESH')

//jshint app.js used to check the error 

// require() is a Module wrapper fuction

// built in modules - https://nodejs.org/dist/latest-v16.x/docs/api/

// Path module
/*
const path=require('path');
var pathobj=path.parse(__filename)
console.log(pathobj);
*/

/*
//Os module

const os= require('os')
var totalmemory=os.totalmem();
var freeMemory=os.freemem();
console.log(`Total Memory:  ${totalmemory} `)
console.log(`Free Memory:  ${freeMemory} `)

*/


/*
//file system module

const fs=require('fs')
// const files=fs.readdirSync('./') //retrn all files in same folder
// console.log(files)

// Always use Asynchronous method
fs.readdir('./',function(err,files){
    if(err) console.log('ERROR',err);
    else console.log('Result',files)

})
*/

/*

//EVENT - A singnal that something that happened in our application
//EventEmitter os a class
const EventEmitter=require('events') //EventEmitter first letter is uppercase is a class,class is a container of propeties are called methods
const emitter=new EventEmitter()//created instantiation , emitter is a object here

//Register a listner
emitter.on('messageLogged', function(){
    console.log('Listner called')
})

//Raise an event -when rise an event the listner is called  .  always first write a listner after write raise event
emitter.emit('messageLogged')//emit means Making noise or produce something or singnaling  ,  messageLogged -name of the event

*/

/*
// Event arguments

const EventEmitter=require('events') 
const emitter=new EventEmitter()

//Register a listner
emitter.on('messageLogged', (arg)=>{  // here changed to arrow fuction
    console.log('Listner called',arg)
})

//Raise an event 
emitter.emit('messageLogged', {id:1,url:'http://'});

*/

/*
//extends eventemitter module
 // go loger.js
const EventEmitter=require('events'); 

const Logger =require('./loger');
const logger=new Logger(); // used to acess a loger.js class

//Register a listner
logger.on('messageLogged', (arg)=>{  // here changed to arrow fuction
    console.log('Listner called',arg)
})


logger.log('message')

*/

//Http Module     after run go http://localhost:3000/    //control+c to stop terminal

const http=require('http')
const server=http.createServer((req,res)=>{ // you can acess browesr url using req.url
    if(req.url=='/'){
        res.write('HELLOO WORLD')
        res.end();
    }

    if(req.url==='/api/courses/hjsb'){
        res.write(JSON.stringify([1,2,3])); //stringfy-convert array into string
        res.end();
    }
})

/*
server.on('connection',(socket)=>{   //listner
    console.log('New connection!!!!!!')
})
*/


server.listen(3000)
console.log('listen on port 3000.....')

