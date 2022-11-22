
console.log("Update style of html elements");

var countdown=document.getElementById('count');
var value=countdown.innerHTML;

var imges=document.getElementById('background');


var stopinterval=setInterval(function(){

    value=value > 0 ? value-=1 : 0;
    countdown.innerHTML=value;

    
   countdown.style.fontSize= value * 10 +"px"

   console.log(countdown.style.fontSize= value * 10 +"px")

   imges.style.width=value * 10 +"vw";

   //stop the Interval before 1 sec 

   if(value<=0){
    clearInterval(stopinterval);
   }



}
,1000);





