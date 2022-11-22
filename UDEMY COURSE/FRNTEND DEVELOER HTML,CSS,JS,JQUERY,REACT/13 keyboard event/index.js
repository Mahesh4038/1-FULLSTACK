document.body.addEventListener('keydown', function(e){
   var keycodes=e.keyCode ;
   // console.log(keycodes+" keycode key was pressed")

   if (keycodes===13) {
    console.log(keycodes+" keycode key was pressed  (Keydown)")
    //alert(keycodes+"keycode key was pressed it is enter (Keydown)  ")
   }
})


document.body.addEventListener('keypress', function(e){
    var keycodes=e.keyCode ;
    // console.log(keycodes+" keycode key was pressed")
 
    if (keycodes===13) {
     console.log(keycodes+" keycode key was pressed (keypress)")
     //alert(keycodes+"keycode key was pressed it is enter (keypress) ")
    }
 })



document.body.addEventListener('keyup', function(e){
    var keycodes=e.keyCode ;
    // console.log(keycodes+" keycode key was pressed")
 
    if (keycodes===13) {
     console.log(keycodes+" keycode key was pressed (Keyup)")
    // alert(keycodes+"keycode key was pressed it is enter (Keyup) ")
    }
 })

 