//npm is used install all package in node
//first write in comand line  'npm init' it is used to create package.json file in than file all your package can visible in that you can modify 
// install uuid-generate random id 'npm install uuid'  //installed locally it will show in dependecies
//install nodemone to keep live server or restar your server continuosly(update automatically by using nodemone no need run everytime) 
//'npm install -D nodemon'     -D means dependencies  (it is locally instaled)  package-lock.json came in show in folder it keep track different dependies version

//if not install nodemone globally  means not run program using 'nodemone index.js' 
//therfore you have to go to package.json In script change test to start ("start": "node index.js","dev":"nodemon index ")
//Next use 'npm run dev' to start nodemone or run your file

/*const http=require('http')

http.createServer((req,res)=>{
    res.write('hello world IT is 5000 ')
    res.end()
})
.listen(5000,()=> console.log('Server Running...(5000'))
*/

/*
//read html files

const http=require('http')
const path=require('path')
const fs=require('fs')


const server=http.createServer((req,res)=>{ // 
    if(req.url=='/'){  // '/' means index page 
   // if(req.url=='/abot'){  // load the 'about page' In browse type http://localhost:5000/abot
        fs.readFile(path.join(__dirname, 'public','index.html'),(err,content)=>{  //load index page
       // fs.readFile(path.join(__dirname, 'public','abot.html'),(err,content)=>{ // load about page

            if(err) throw err;
            res.writeHead(200, {'Content-Type':'text/html'}); //200 means everything ok, Content-Type tell network to it is html file
            //res.write('<h1>HELLOO!! WORLD<h1>')
            //res.write(content)
            res.end(content);
        })


        
    }
    }
);

const PORT=process.env.PORT || 5000;

server.listen(PORT, ()=>console.log(`hy!! server running on port ${PORT}`))
*/


/*

//REST API -work in json

const http=require('http')
const path=require('path')
const fs=require('fs')


const server=http.createServer((req,res)=>{ // 
    if(req.url=='/'){  
   
        fs.readFile(path.join(__dirname, 'public','index.html'),(err,content)=>{  //load index page
       // fs.readFile(path.join(__dirname, 'public','abot.html'),(err,content)=>{ // load about page

            if(err) throw err;
            res.writeHead(200, {'Content-Type':'text/html'}); //200 means everything ok, Content-Type tell network to it is html file
            res.end(content);
        })
    }

    //REST API -work in json

    if(req.url=='/api/users'){

        const users=[
            {name:'MAHESH',age:40},
            {name:'Sandeep',age:30}
        ]

        res.writeHead(200, {'Content-Type':'application/json'}); 
        res.end(JSON.stringify(users))

    }


        
    
    }
);

const PORT=process.env.PORT || 5000;

server.listen(PORT, ()=>console.log(`hy!! server running on port ${PORT}`))


*/



//File path
const http=require('http') //hyper text transport protocol
const path=require('path')  
const fs=require('fs')  //file


const server=http.createServer((req,res)=>{
        //File path
    let filepath=path.join(__dirname,'public', req.url==='/'?'index.html':req.url) //ternary operator used
    //console.log(filepath) //go to website that file path display in terminal
    
    //extension of file
    let extname=path.extname(filepath)

    //Initaial content type
    let contentType='text/html'

    //check ext and set content type
    switch(extname){
        case '.js' : contentType='text/javascript'
                        break;
        case '.css' : contentType='text/css'
                        break;
        case '.json' : contentType='text/json'
                        break;
        case '.html' : contentType='text/html'
                        break;


        
    }

    //Read file
        fs.readFile(filepath,(err,content)=>{
        if(err) {
                if(err.code=='ENOENT'){// Page not found 

                    fs.readFile(path.join(__dirname,'public','404.html'),(err,content)=>{
                        res.writeHead(200, {'Content-Type':'text/html'}); //200 means everything ok, Content-Type tell network to it is html file
                        res.end(content,'utf8');
                    })

                }
                else{ //some server error(diferent error )

                    res.writeHead(500)
                    res.end(`Server error: ${err.code}`);

                }

        }
        else{ //sucess

            res.writeHead(200, {'Content-Type':contentType});
            res.end(content,'utf8')

        }
    })

});


const PORT=process.env.PORT || 5000;


server.listen(PORT, ()=>console.log(`hy!! server running on port ${PORT}`))


//you can Host your project on Heroku platform see videohttps://youtu.be/fBNz5xF-Kx4  -1:25:29
