/*
//create modules and load a module
var url='http://my.io/log'

function log(message){
    //send an http request
    console.log(message)
}

module.exports.log=log;
//module.exports.url=url;
*/

//extends eventemitter module

const EventEmitter=require('events') 


var url='http://my.io/log'

class Logger extends EventEmitter {//class name always start with uppercase
     log(message){ //method in the class
        //send an http request
        console.log(message)
    
        //Raise an event 
    //emitter.emit('messageLogged', {id:1,url:'http://'});
    this.emit('messageLogged', {id:1,url:'http://'});
    }
}    


module.exports=Logger;
