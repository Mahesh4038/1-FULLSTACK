
//craete an express app(express used here)
const express=require('express')

//express app
const app=express(); // invoking function

//listen for request
app.listen(5002)

app.get('/',(req,res)=>{  // req used request of url etc and res used to send the responce

    //res.send('<p>HoMe</p>')
    // send html file
   res.sendFile('./public/index.html', {root:__dirname}); //root:__dirname store '4 Express' folder

})

app.get('/abot',(req,res)=>{  

    //res.send('<p>About Page</p>')
    res.sendFile('./public/abot.html', {root:__dirname}); 


})

//redirect - change one url to another

app.get('/about-us',(req,res)=>{
    res.redirect('/abot');
    
})

//404 page
app.use((req,res)=>{  // if not match any url it will run. always use at the last   //use is used create midleware
// res.sendFile('./public/404.html',{root:__dirname})
res.status(404).sendFile('./public/404.html',{root:__dirname})
})



//View enginess