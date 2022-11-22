//javascript object
var mobj={
    name:'Mahesh',
    age:28
}

//JSON object
var mobj={
    "name":'Mahesh',
    "age":28
}

console.log(mobj.name)

var mArr=[1,2,3,4,5]
console.log(mArr[0])

//JSON array
var mArr2=[{
    "name":'Mahesh1',
    "age":29
},
{
    "name":'Mahesh3',
    "age":26
},
{
    "name":'Mahesh2',
    "age":29
}]

console.log(mArr2[0])
console.log(mArr2[0].name)


//benifits of JSON
var mobj={
    "name":'Mahesh',
    "age":28,
    "getName":function () {  // JSON Ignore fuction it cannot hold in JSON object
        return this.name
     },
     "married": true,//It accept number,array ,object,string,boolean
     "Score":[2,3,4,4,4],
     "Valid":null,
     score:{
            "math":56,
            "eng":67
     }
        
   
}

console.log(mobj.toString())  // not give data 
var strJson = JSON.stringify(mobj);// give a strings
console.log(strJson)
console.log(JSON.parse(strJson)) // convert string to jSON
