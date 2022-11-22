

//View enginess -first register view engine
//View engines allow us to inject dynamic content & variables into html templates before sending them to the browser.
//EJS -embeded javascript templating. instead using .html file write all html code in .ejs file 
//install EJS -  'npm install ejs'
// by using view engine "res.sendFile('./public/abot.html', {root:__dirname}); "  changed to  "res.render('index')" no need to specify root etc
//'EJS view engine' convert ejs to html

//middleware - order of the middleware important . example app.use(),app.get()

//use third party middleware - morgan
//install using  'npm install morgan'

//add static files -css file,image

//monogodb.  Document -> collection->{like json or javascript object(key-value pair)}
//use mongodb locally or use  colud database mongodb atlas(here i used mongodb atlas )
//user:Mahesh4038
//pswrd:4sn18cs038

//*****GET POST DELETE PUT request */
//GET  request-get resource
//POST- create new data(ex. a new blog)
//DELETE - delete data(ex. delete a blog)
//PUT - Update data(ex. update a blog)

const express=require('express')
const morgan=require('morgan')
const mongoose=require('mongoose')
const Blog = require('./models/blog');
const { render } = require('ejs');

//express app
const app=express(); // invoking function

//connect to mongodb
//'mongodb+srv://<username>:<password>@cluster0.vyqoz.mongodb.net/?retryWrites=true&w=majority'
//change userename and password and write db nsme betwen mongodb.net/ and ?
const dburl='mongodb+srv://Mahesh4038:mahesh4038@cluster0.vyqoz.mongodb.net/FirsrMongo?retryWrites=true&w=majority'
//mongoose -is an ODM(object document mapping library) library  -use to comunicate with database
//model - model allow us to communicate with database collection   (get,save,delete)
//schema-define the structure of datatype or data stote in database 
//install mongose here 'npm install mongose'
mongoose.connect(dburl,{UseNewUrlParser:true, useUnifiedTopology:true}) // it is Asychronous task therefore use then()
    .then((result)=>console.log(' congratulation!! connected to db'))   //now it is found acount in mongodb atlas
    .catch((err)=>{console.log(` The error is :- ${err}`) })

//register 'view engine'
app.set('view engine','ejs')  // by using ejs it directly look 'views' folder(it is default folder)
//app.set('views','your foldername')// if you want keep other folder

//listen for request
app.listen(5006)


//midelware & static files
app.use(express.static('public')) //now you can link external css file in head.ejs because staticfile public to brower

app.use(express.urlencoded({extended:true})) // use theis before use post request . urlencoded-used to take all url encoded data from any file and pass into object  you can use throw req object


//third party midleware 
app.use(morgan('dev'))

/*

//mongoose and mongo sandbox routes  //save data to database
app.get('/add-blog',(req,res)=>{
   const blog =new Blog({
     title:'new blog 2',
     snippet:'about my new blog',
     body:'more about my new blog'
   });

   blog.save() //send to data inside collection in database
   .then((result)=>{
        res.send(result)
   })
   .catch((err)=>{
     console.log(err)   
   })
})

app.get('/all-blog',(req,res)=>{
    Blog.find() // take all model from blog collection(take from database and print in browser) 
              .then((result)=>{
                res.send(result);
              })
              .catch((err)=>{
                console.log(err)
              })
})

app.get('/single-blog',(req,res)=>{
    Blog.findById('63243d2879119b2ea2506644') //take only the  mensioned id data
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
      })
})


//routes
app.use((req,res,next)=>{  // by using next it goes next midleware(buttom)
    console.log('new request made')
    console.log('host:',req.hostname)
    console.log('path:',req.path)
    console.log('method:',req.method)
    next();
});


*/


// index page
app.get('/',(req,res)=>{  // req used request of url etc and res used to send the responce

        res.redirect('/blogs') // by using this it will goes '/blogs' 
})


//blogs route    
app.get('/blogs',(req,res)=>{
    Blog.find().sort({createdAt:-1})      // take the data from database and disply in browser  //sort({createdAt:-1}) -used to recently inserted data  at top
    .then((result)=>{  // result means all collection
        res.render('index',{title:'All Blogs', blogs: result}) // it will goes index.ejs and use 'blogs' there

    })
    .catch((err)=>{
        console.log(err)
    })
})

app.post('/blogs',(req,res)=>{ // POST request - create new data(ex. a new blog)
   //console.log(req.body);
   const blog=new Blog(req.body)
   blog.save()
    .then((result)=>{
      res.redirect('/blogs')
    })
    .catch((err)=>{
      console.log(err)
    })
})


//get a single id 
app.get('/blogs/:id',(req,res)=>{

  const  id =req.params.id
  //console.log(id)
  Blog.findById(id)
    .then(result=>{
       res.render('details',{blog:result,title:'single Blog detail Page '})
    })
    .catch(err=>{
      
      console.log(err)
    })

})

//handle the delete request
app.delete('/blogs/:id',(req,res)=>{
  const  id =req.params.id

  Blog.findByIdAndDelete(id)
    .then(result =>{   //after sucessful delete  comes this block
    res.json({redirect:'/blogs'}) //because you responding back to browser or AJAX request(request from details.ejs)therfore respond will in json formate 
    })
    .catch(err=>{console.log(err)}) //Fail 


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




