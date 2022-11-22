//install  npm  packages globally
//nodemone install globally  'npm install -g nodemon'  (update automaticaly )
//Next when run project use 'nodemon filename'

//keep track of any package installed  locally to our your project ,or  If using 3rd party packages in your project then you definitely create json.file
//therfore go comand line  'npm init' (initialize package.json file) it is used to create package.json file in that file all your locally instaled package can visible 

//package-lock.json keep track of deferent dependecies version(here not there)(it can be make visible here using 'npm install -D nodemon'(it is the way of install nodemone locally))

//install package locally :install utility library is lodash -after install it will show in dependecies inside package.json file
// 'npm install lodash'

//use lodash -it is the package from npm
// const lo=require('lodash')
const _=require('lodash')
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

                    res.writeHead(500) // 500 means 
                    res.end(`Server error: ${err.code}`);

                }

        }
        else{ //sucess

        //lodash give  random number every time this fuction run
            const num =_.random(0,20)
            console.log(num)

        //by using lodash run the fuction only once
        /*const great=_.once(()=>{
            console.log("I disply only once hyyyyyy")
        })

        great();//call 1 time
        great();//call second time*/

            res.writeHead(200, {'Content-Type':contentType});
           
            res.end(content,'utf8')

        }
    })

});


const PORT=process.env.PORT || 5001;


server.listen(PORT, ()=>console.log(`hy!! server running on port ${PORT}`))


// when you downloaded the code from github the nodemodules are not their then you after open project in visual studio in terminal type 'npm install' to use all dependecies

