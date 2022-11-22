//Destructuring in Array

    //normal js
        const name="Mahesh N Navoor"
        const nameArr=name.split(' ')
        console.log(nameArr)

        let firstname=nameArr[0]
        let lname=nameArr[1]

        console.log(firstname)
        console.log(lname)

    //Destructuring
        let [Fname, ,housename]=nameArr //sequence matter

        console.log(Fname)
        //console.log(Lname)
        console.log(housename)

//Destructuring in objects
 
const pereson={
    Fname1:'MAHESH',
    Lnames:'N',
    age:56

}

let{Fname1,age}=pereson //keyname matters 
console.log(Fname1);
console.log(age)


//other (extra) same key using
let Fname2='MAHESH';
let Lnames3='N';

let oBJ={
    Fname2,
    Lnames3,
    //FNAME:Fname2,
}

console.log(oBJ)



