//AjaX- send requst to backend for data(Json object)
// function getTodofromBackend(){

//     var http= new XMLHttpRequest();
//     http.open("GET","todo.json","true")
//     http.send();

// }

// getTodofromBackend();

//Handling Http Responce

/*function getTodofromBackend(){

    var http= new XMLHttpRequest();
    
    http.onreadystatechange=function(){
        if(this.readyState===4){
            if(this.status===200){
            //console.log('Responce Received')
            //console.log(this.responseText);
            console.log(JSON.parse(this.responseText));
            }
            else{
                console.log('Call Failed')
            }
        }
    }

    http.open("GET","todo.json","true")
    http.send();

}

getTodofromBackend();
*/

//working with http responce

/*
var list=document.getElementById('todo-list')


function getTodofromBackend(){

    var http= new XMLHttpRequest();
    
    http.onreadystatechange=function(){
        if(this.readyState===4){
            if(this.status===200){
            //console.log('Responce Received')
            //console.log(this.responseText);
            var response=JSON.parse(this.responseText)
            for(var i=0;i<response.length;i++){
               // console.log(createTodoDyanamically(response[i].id,response[i].title))
               list.appendChild(createTodoDyanamically(response[i].id,response[i].title))
            }
            }
            else{
                console.log('Call Failed')
            }
        }
    }

    http.open('GET','https://jsonplaceholder.typicode.com/todos',true)//online
    http.send();

}



function createTodoDyanamically(id, title){
    var newlist=document.createElement('li')
    var textNode=document.createTextNode(title)
    newlist.append(textNode);
    newlist.id=id;

    return newlist;
}

getTodofromBackend();

*/

//Http post request  (errror)

function createTODOBackend(){
    var http= new XMLHttpRequest();

    http.open('POST','https://jsonplaceholder.typicode.com/todos',true)
    http.onreadystatechange=function(){
        if(this.readyState === 4){
            if(this.status === 200){
            //console.log('Responce Received')
            //console.log(this.responseText);
            console.log(JSON.parse(this.responseText));
            }
            else{
                console.log('Call Failed')
            }
        }
    }

    var obj=JSON.stringify({
        "name":"MA",
        "class":8
    });
    http.send(obj);
    


}

createTODOBackend()

