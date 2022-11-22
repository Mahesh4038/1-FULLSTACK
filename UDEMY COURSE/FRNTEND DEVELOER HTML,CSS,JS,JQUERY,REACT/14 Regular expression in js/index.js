//console.clear();
/*
var str="This is my friends "

var pattern=/my/;
console.log(str.search(pattern))
console.log(pattern.test(str))


var str="This is my friends my "
var pattern=/my/g;
console.log(str.match(pattern))

var str="This is my friends My "
var pattern=/my/gi; //case insensitive
console.log(str.match(pattern))

// method 2  using class

var str="This is 100 my 78 friends My "
//var pattern=new RegExp('my' , 'gi'); //case insensitive
//var pattern=new RegExp('\s' , 'gi');
//var pattern=new RegExp('[0-9]' , 'gi');
var pattern=new RegExp('.' , 'gi');
console.log(str.match(pattern))


//Regex Groups

//var str="9481701275"
var str="+919481701275"

//var pattern=/[\d]/g

//var pattern=/[\d]{10}/g
//var pattern=/^[\d]{10}$/g  // start with 10digits and end
//var pattern=/^(\+91)[\d]{10}$/g //start with +91 next 10digit
var pattern=/^(\+91)?[\d]{10}$/g //start with +91 is optional next 10digit
console.log(str.match(pattern))

//var str="www*edyoga.com"
//var str="ddwww.edyoga.com"
var str="www.edyoga.com"

//var patern=/www/g
//var patern=/www./g  //. means any symbol 
var patern=/^www\.[\w]+\.(com||org||in)$/g // ^ satrt  , $ means end
console.log(str.match(patern))

*/

// Form validation using regex
var uname=document.getElementById(username);
var eror=document.getElementById(error);



uname.addEventListener('input', function(e) {

    var pattern=/^[\w]{6,8}$/

    var curentvalue=e.target.value;

   // console.log(pattern.test(curentvalue))

   var valid=pattern.test(curentvalue)

   if(valid){

    eror.style.display='block'

   }
   else{
    eror.style.display='none'
   }
    
});




