
console.log("Update html element inside values and html element attribute");
var countdown=document.getElementById('count');
//console.log(countdown.innerHTML)
//console.log(countdown.innerHTML)

var countvalue=countdown.innerHTML;
console.log(countvalue);

//update
    //countdown.innerHTML=100; 

    //var initial=countdown.innerHTML=countvalue-1;

//setInterval-builtin function

var back=document.getElementById('background');
//console.log(back);
//console.log(back.src);

setInterval(function() {
//countvalue==0? countvalue=10 :
//console.log(countvalue=countvalue > 0 ? countvalue-1:10)
//console.log(countvalue=countvalue > 0 ? countvalue-1:0)
countvalue=countvalue > 0 ? countvalue-1:0  
countdown.innerHTML=countvalue; //html element inside value update

var backimg= countvalue % 2 === 0? '/images (4).jpeg' : '/15-mercedes-benz-vehicles-concept-cars-vision-avtr-2560x1280.jpeg';
back.src=backimg;//html element atribute update

//back.id="img" // chnage id name

}, 1000);



