var express =require('express')
var bodyParser=require('body-parser')
var mongoose =require('mongoose')

const app=express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/mydb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

var db = mongoose.connection;

db.on('error',()=>console.log("error in coonecting to db"));
db.once('open',()=>console.log("connected to database"))

app.post("/signup_sucess.html",(req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var phno = req.body.phno;
    var CGPA = req.body.CGPA;
    var usn = req.body.usn;
    var Gender = req.body.Gender;
    var Highest_Qualification = req.body.Highest_Qualification;
    

    var data = {
        "name": name,
        "email" : email,
        "phno": phno,
        "CGPA" : CGPA,
        "usn" : usn,
    "Gender"  : Gender,
    "Highest_Qualification" : Highest_Qualification 
}

    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record inserted sucessfully");
    });

return res.redirect('signup_sucess.html')

})

app.get("/",(req,res)=>{
    
    res.set({
        "Allow-access-Allow-origin":"*"
    })

    return res.redirect("index.html")
}).listen(3000);

console.log("listen on PORT 3000");