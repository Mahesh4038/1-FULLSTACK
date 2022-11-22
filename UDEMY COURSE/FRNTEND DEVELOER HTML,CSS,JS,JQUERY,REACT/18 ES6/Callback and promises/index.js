//here jquery reqired

/*
const postlistpromise =new Promise((resolve,reject)=>{
   $.get('https://jsonplaceholder.typicode.com/posts',(data)=>{
    
  resolve(data)
   //resolve(100)
   }).fail(err=>{
    reject(new Error(`call failed for GET POST List Request with statu ${err.status}`))
   }) //Jquery get metod Ajax call
})

postlistpromise.then((response)=>{
    console.log('call Sucess');
    console.log('Then response=> ', response)
})
.catch((error)=>{
    console.log('call Failed');
    console.log('catch error=>',error);
})

*/

//chaining promises


const postlistpromise =new Promise((resolve,reject)=>{
    console.log('SENDING list CALL')
    $.get('https://jsonplaceholder.typicode.com/posts',(data)=>{
     
   resolve(data)
    //resolve(100)
    }).fail(err=>{
     reject(new Error(`call failed for GET POST List Request with statu ${err.status}`))
    }) //Jquery get metod Ajax call
 })

 const postDetailspromise =()=> new Promise((resolve,reject)=>{
    console.log('SENDING DETAILS CALL')
    $.get(`https://jsonplaceholder.typicode.com/posts/${data[0].id}`,(data)=>{
     
    console.log(data)
   resolve(data)
    //resolve(100)
    }).fail(err=>{
     reject(new Error(`Details call failed and status ${err.status}`))
    }) //Jquery get metod Ajax call
 })
 
 postlistpromise.
 //then((responce)=>postDetailspromise(responce))
then(postDetailspromise)
.then(responce=>{
    console.log('POST DETAILS RESPONCE=>',responce)
}) 
 
 .catch((error)=>{
     console.log('call Failed');
     console.log('catch error=>',error);
 })
 

 
// IN axios you just one line  code do write 
