const mongoose=require('mongoose')
const Schema=mongoose.Schema;

//create shema
const blogSchema=new Schema({
    title : {
        type:String,
        required:true
    },
    snippet : {
        type : String,
        required: true
    },

    body : {
        type : String,
        required: true
    }

},{timestamps : true});

const Blog = mongoose.model('Blog',blogSchema) //create module .  variable name start capital letter,
module.exports = Blog ;