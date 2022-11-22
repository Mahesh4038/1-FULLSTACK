var btn=document.getElementById("clicks");
var hedDiv=document.querySelector("header div");

console.log(hedDiv)

//method 1
/*btn.onclick=function(){
    alert("CLICKED");

}*/


// call reference
/*function onbclk() {

    alert("CLICKED!!!!!!!");
    
}*/

//btn.onclick=onbclk(); //when give paranthisis it show alert when page is open therfore not give
//btn.onclick=onbclk;

//method 2

/*btn.addEventListener('click', function(){
    alert("DONE***")
})*/


function onbclk() {

    //alert("CLICKED!!!!!!!");
    //btn.style.backgroundColor="red"
   // hedDiv.style.backgroundColor="green"

  // alert(Math.floor(Math.random()*255)) //math.flor =convert decimal to integer
  
  /*var randomnum=Math.floor(Math.random()*255)
  alert("rgb("+randomnum+","+23+","+77+")") */
  
  //alert("rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")")
  
  hedDiv.style.backgroundColor="rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")"


}

btn.addEventListener('click', onbclk)

