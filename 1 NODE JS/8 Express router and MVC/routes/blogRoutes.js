const express=require('express')
const blogController=require('../controllers/blogController')

const router=express.Router();//create new instances of router object

// ALL blogs router in this page
router.get('/', blogController.blog_index);//It will go to controllere/blogController
router.post('/',blogController.blog_create_post) // POST request - create new data(ex. a new blog)
//craet page 
router.get('/create',blogController.blog_create_gets) //it write  always before the '/:id'
//get a single id 
router.get('/:id',blogController.blog_details)
//handle the delete request
router.delete('/:id',blogController.blog_delete)

module.exports=router;