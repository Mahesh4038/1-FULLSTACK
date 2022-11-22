var Firstline=document.getElementById("main-heading")
Firstline.classList.add('big')

/*
setTimeout(() => {
    Firstline.classList.remove('big')
}, 1500);
*/

var btn=document.getElementById("clicks")
btn.addEventListener('click',function(){
    Firstline.classList.remove('big')
})

var menus=document.getElementById("menu");
var sidesbar=document.getElementById("sidebar")


menus.onclick=function(){
    /*sidesbar.classList.add('show')*/
    if(sidesbar.classList.contains('show')){
        sidesbar.classList.remove('show')
        sidesbar.classList.add('hide')
    }
    else{
        sidesbar.classList.add('show')
        sidesbar.classList.remove('hide')
    }
}
