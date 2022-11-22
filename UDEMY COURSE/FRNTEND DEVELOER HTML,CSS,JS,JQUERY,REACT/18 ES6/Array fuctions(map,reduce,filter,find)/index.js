
const marr=[1,2,3,4,5]
/*
//normal
const doblingvalue=(item)=>{
    return item*2;
}

let newArr=[]
for(let i=0;i<marr.length;i++){
    newArr.push(doblingvalue(marr[i]))
}


console.log(newArr)
*/

/*
//map()
    //ARAAY
    let newArr=marr.map((item,i)=>{
        //console.log(item);
        console.log(`Item at pos: ${i} is ${item}`);
        return item*2
    })

    console.log(marr)
    console.log(newArr)

    //OBJECT

    const mobj=[{
        names:"MM1",
        exp:10,
        type:'comertial'
    },
    {
        names:"MM2",
        exp:108,
        type:'comertial'
    },
    {
        names:"MM6",
        exp:107,
        type:'comertial'
    }]

    let newArr3=mobj.map((data)=>{
        console.log(data)
        return{
            names:data.names,
            expirance:data.exp
        };
        
    })

    console.log(mobj)
    console.log(newArr3)
*/

/*
//reduce()
 // Array
const marr2=[11,12,13,14,15]

const result=marr2.reduce((acc,item)=>{
    console.log(acc)
    console.log(item)

    return acc+1
    //return acc+item


},0)

console.log(`final result:${result}`)

//object

const mobj=[{
    names:"MM1",
    exp:10,
    type:'comertial'
},
{
    names:"MM2",
    exp:108,
    type:'comertial'
},
{
    names:"MM6",
    exp:107,
    type:'comertial'
}]

let newArr3=mobj.reduce((acc,data)=>{
    console.log(data.names)
    return acc + data.exp
        
   
    
},0)

console.log(newArr3)


*/

/*
//filter()
   // array
const marr2=[11,12,13,14,15]

const result=marr2.filter(item=>{

    console.log(item)
   // return true
   //return item%2===0
   return item%2!==0

})

console.log('result array =>' +result)

//object
const mobj=[{
    names:"MM1",
    exp:10,
    type:'comertial'
},
{
    names:"MM2",
    exp:108,
    type:'comertial'
},
{
    names:"MM6",
    exp:107,
    type:'comertial'
}]


const result2=mobj.filter(item=>{
    console.log(item)

    console.log(item.exp)


    return item.exp<100
})


console.log(result2)

*/


//find() 
/*
const marr2=[11,-12,12,13,14,15]
const result =marr2.find(item=>{
    console.log(item)
    //return item
    //return true;
    //return false;
    return (item%2==0 && item>=0)

})

console.log('result:'+result)
*/

//findIndex()
const marr2=[11,-12,12,13,14,15]
const result =marr2.findIndex(item=>{
    console.log(item)
    //return item
    //return true;
    //return false;
    return (item%2==0 && item>=0)

})

console.log('result:'+result)