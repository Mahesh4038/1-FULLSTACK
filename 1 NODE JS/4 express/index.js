//Experss is a framework 
//Express is a popular unopinionated web framework, written in JavaScript and hosted within the Node.js runtime environment.
//'npm install express'

//delete this page this page is not reqiured. just for compare 

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


            res.writeHead(200, {'Content-Type':contentType});
           
            res.end(content,'utf8')

        }
    })

});


const PORT=process.env.PORT || 5002;


server.listen(PORT, ()=>console.log(`hy!! server running on port ${PORT}`))