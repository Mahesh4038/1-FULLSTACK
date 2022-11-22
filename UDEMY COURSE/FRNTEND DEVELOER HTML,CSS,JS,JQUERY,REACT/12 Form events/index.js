var i1=document.getElementById('input1')
var i2=document.getElementById('input2')
var btnn=document.getElementById('btn')
var forms=document.getElementById('lform')

i1.addEventListener('input',function (event) {
   // console.log(event.target.value)
   var curentval=event.target.value
   curentval=curentval.toUpperCase()
   console.log(curentval)
   i1.value=curentval; 
    
})

i2.addEventListener('focus',function () {
    console.log("element focused")
  
     
 })

 i2.addEventListener('blur',function () {
    console.log("element lost focused")
  
     
 })

 forms.addEventListener('submit',function (e) {
    alert("sucesfullyyyy submited")
    e.preventDefault()//remove default behaviour of sumit button by using this  page could not be refreshed and u will see console values
  
     
 })


