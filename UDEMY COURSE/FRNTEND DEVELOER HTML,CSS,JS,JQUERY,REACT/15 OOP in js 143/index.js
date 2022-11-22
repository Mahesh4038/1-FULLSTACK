/*var vname="intro"
var fileformat="mp4"
var duration="2:48"
var owner="Mahe"



function getvideoname(){
    return vname;
}
*/

//create objects in js
//encapsulation
/*var video={
   vname:"intro",
    fileformat:"mp4",
     duration:"2:48",
    owner:"Mahe",
    getvideoname:function(){
        return this.vname
    }

}

console.log(video.getvideoname())
*/

/*
// this key word

var vname="sandeep"
var video={
    vname:"Mahesh",
    fileformat:"mp4",
    duration:2,
    owner:"Mahedslhc",
    getvideoname:function(){

        console.log(vname)  //It take global firsrt
        console.log(this.vname) //
     },
    parent:{
        vname:"Manoj",
        fileformat:"mp4",
        duration:2,
        owner:"Mahedslhc",
        getvideoname:function(){

        console.log(vname)  //It take global firsrt
        console.log(this.vname) //
    }
}
}

video.getvideoname();
video.parent.getvideoname();
 */

//constructor
 /*
function Person(pn,py) { //constructor fuction

    this.name=pn
    this.year=py
    this.calAge=function () {
        console.log(2022-this.year)
    }
    
}

var jhone=new Person('jhon',2001)//constructor fuction is called
jhone.calAge()

var Sandeep=new Person('Sandeep',2008)
Sandeep.calAge()
*/


//Prototype Implementation
/*
function Person(pn,py) { //constructor fuction

    this.name=pn
    this.year=py
    
    
}


Person.prototype.calAge=function () {
    console.log(2022-this.year)
}

Person.prototype.lastname="N";


var jhone=new Person('jhon',2001)//constructor fuction is called
jhone.calAge()

var Sandeep=new Person('Sandeep',2009)
Sandeep.calAge()

console.log(Sandeep);
console.log(jhone.lastname)
console.log(Sandeep.lastname)
*/

function Person(pn,py) { //constructor fuction

    this.name=pn
    this.year=py
    //console.log(2022-this.year)

    
    this.calAge=function(){
        console.log('befor update ' + this.name+ ' age', 2022- this.year)
    }

    
    
}


Person.prototype.Updateyear=function (birthyear) {
    
   this.year=birthyear
   console.log('after ',2022-this.year)


  

}




var jhone=new Person('jhon',2000)//constructor fuction is called
jhone.calAge()
jhone.Updateyear(2001)





