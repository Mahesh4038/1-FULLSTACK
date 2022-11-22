const msum=(num1,num2)=>console.log(num1+num2)
msum(1,2,3,3,4,4,7)


const msum1=(...args)=>console.log(args)
msum1(1,2,3,3,4,4,7)



const msum2=(...args)=>{

    let sum=0;
    for(let i=0;i<args.length;i++){
        sum+=args[i];

    }

    console.log(sum)
}
msum2(1,2,3,3,4,4,7)




const msum3=(num1,num2,...args)=>{

    console.log(num1)
    console.log(num2)
    console.log(args)

    let sum=0;
    for(let i=0;i<args.length;i++){
        sum+=args[i];

    }

    console.log(sum)
}
msum3(1,2,3,3,4,4,7) 


//Spread 
   //copies of array
  
let Array1=[1,2,3,44,55,]
let Array2=[...Array1] // only store copy or refernce of Array1 spreaded elements
let Array3=Array1// store original array if update  Array3 it will update in original array also

Array1.push(1000)

console.log(Array1)
console.log(Array2)
console.log(Array3)

    //concat array

let A=[2,34,5,555,]
let B=[9,9,9,0,8]

//normal js
let c=A.concat(B)
console.log(c)

//spread
let d=[0,6,...A,...B,9]
console.log(d)


// Spread in Object -expanded to key-value
let mobj={
    name:'jhon'
    
}

let mob2={
   // name:'Mhon',//if u gives name(keyname) again. when concat it will take last upadated key 
    class:14
}

let mob3={...mobj,...mob2}
console.log(mob3)