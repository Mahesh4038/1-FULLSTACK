var h=document.getElementById("main-heading")
var b1=document.getElementById("inc")
var b2=document.getElementById("dec")

console.log(window.getComputedStyle(h).fontSize)

var initialfont=window.getComputedStyle(h).fontSize
initialfont=parseInt(initialfont.substring(0,(initialfont.length-2)));//32px it is string take only 32(not take px) and covert Number(integer)

b1.onclick=function(){
    initialfont+=10;
    h.style.fontSize=initialfont + "px"
}

b2.onclick=function(){
    initialfont-=10;
    h.style.fontSize=initialfont + "px"
}

