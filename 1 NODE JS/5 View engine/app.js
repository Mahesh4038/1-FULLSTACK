

//View enginess -first register view engine
//View engines allow us to inject dynamic content & variables into html templates before sending them to the browser.
//EJS -embeded javascript templating. instead using .html file write all html code in .ejs file 
//install EJS -  'npm install ejs'
// by using view engine "res.sendFile('./public/abot.html', {root:__dirname}); "  changed to  "res.render('index')" no need to specify root etc
//EJS view engine conver ejs to html

//middleware - order of the middleware important . example app.use(),app.get()

//use third party middleware - morgan
//install using  'npm install morgan'

//add static files -css file,image

const express=require('express')
const morgan=require('morgan')

//express app
const app=express(); // invoking function

//register view engine
app.set('view engine','ejs')  // by using ejs it directly look 'views' folder(it is default folder)
//app.set('views','your foldername')// if you want keep other folder

//listen for request
app.listen(5003)


//midelware & static files
app.use(express.static('public')) //now you can link external css file in head.ejs because staticfile public to brower



//third party midleware 
app.use(morgan('dev'))


app.use((req,res,next)=>{  // by using next it goes next midleware(buttom)
    console.log('new request made')
    console.log('host:',req.hostname)
    console.log('path:',req.path)
    console.log('method:',req.method)
    next();
});

// index page
app.get('/',(req,res)=>{  // req used request of url etc and res used to send the responce

  const blogs=[
    {title:'Yoshi frinds eggs',snippet:'lorom ipsm dolor sit'},
    {title:'Yo frinds star',snippet:'lorom ipsm dolor sit'},
    {title:'ww frinds bro',snippet:'lorom ipsm dolor sit'}
  ];


    res.render('index',{title:'Home',blogs});

})

app.use((req,res,next)=>{
    console.log('your In next middleware')
    next();
});

//about page
app.get('/abot',(req,res)=>{  

    res.render('abot',{title:'ABOUT'});


})


//craet page

app.get('/create',(req,res)=>{
    
    res.render('create',{title:'Create a Blog'});
    
})

//404 page
app.use((req,res)=>{  // if not match any url it will run. always use at the last   //use is used create midleware
// res.sendFile('./public/404.html',{root:__dirname})
res.status(404).render('404',{title:'404'})
})


