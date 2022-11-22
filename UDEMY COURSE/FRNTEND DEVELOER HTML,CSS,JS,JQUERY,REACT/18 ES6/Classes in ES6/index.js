
//old js (construcor fuction)
/*
function Person(names,birth){
 this.names=names,
 this.birth=birth
 this.getdetails=function(){
   return  "name:" +this.names + " age:" +(2022-birth)
 }
}

var jhon=new Person('jhon',2008);
console.log(jhon.getdetails());
*/


//class in ES6

/*
class Person2{
    constructor(name1,birth1){ //Initialize 
        this.names=name1
        this.birth=birth1
    }

    getdetails2=()=>{//method outside constuctor
        return `name: ${this.names} Age: ${2022-this.birth}`
    }


}

var Mahesh=new Person2('MAHESH' , 2000 )
console.log(Mahesh.getdetails2())

*/


//Inheritance

class Person2{
    constructor(name1,birth1){ //Initialize 
        this.names=name1
        this.birth=birth1
    }

    getdetails2=()=>{//method outside constuctor
        return `name: ${this.names}     Age: ${2022-this.birth}`
    }


}

class pilot extends Person2 {
    constructor(name,birth,exp){

        super(name,birth) // call parent constructor

        this.name=name
        this.birth=birth
        this.exp=exp
    }

    getData=()=>{
        console.log(`${this.getdetails2()}    Expirance is:  ${this.exp}`)
    }
}

const Sandeep= new pilot('SANDEEP',2000, 10)
const Manoj= new pilot('Manoj',1999, 11)
const harshith= new pilot('Harshith',2002, 8)

Sandeep.getData();
Manoj.getData();
harshith.getData();

//console.log(Sandeep)

