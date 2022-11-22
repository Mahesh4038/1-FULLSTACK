const Blog = require('../models/blog');


//blog_index,blog_details,blog_create_get,blog_create_post,blog_delete


const blog_index=( req,res)=>{
    Blog.find().sort({createdAt:-1})      // take the data from database and disply in browser  //sort({createdAt:-1}) -used to recently inserted data  at top
    .then((result)=>{  // result means all collection
        res.render('blogs/index',{title:'All Blogs', blogs: result}) // it will goes index.ejs and use 'blogs' there

    })
    .catch((err)=>{
        console.log(err)
    })
}


// single 
const blog_details=(req,res)=>{
    const  id =req.params.id
  //console.log(id)
  Blog.findById(id)
    .then(result=>{
       res.render('blogs/details',{blog:result,title:'single Blog detail Page '})
    })
    .catch(err=>{
      
      //console.log(err)
      res.status(404).render('404',{title:'Blog not found'})
    })
}


//create page
const blog_create_gets=(rer,res)=>{
    res.render('blogs/create',{title:'Create a Blog'});
}


//post
const blog_create_post=(req,res)=>{
//console.log(req.body);
const blog=new Blog(req.body)
blog.save()
 .then((result)=>{
   res.redirect('/blogs')
 })
 .catch((err)=>{
   console.log(err)
 })
}

//delete
const blog_delete=(req,res)=>{
    const  id =req.params.id

  Blog.findByIdAndDelete(id)
    .then(result =>{   //after sucessful delete  comes this block
    res.json({redirect:'/blogs'}) //because you responding back to browser or AJAX request(request from details.ejs)therfore respond will in json formate 
    })
    .catch(err=>{console.log(err)}) //Fail 
}

module.exports={
    blog_index,
    blog_details,
    blog_create_gets,
    blog_create_post,
    blog_delete
}