//here we are gng to learn about 2 kyewords and one scenariobaswd one 

//1. is readonly if we deifn eit it cant be chnage in furture 

//A type in TypeScript is used to specify the shape or structure of a variable, object, or function. 
//It provides a way to define and enforce the expected data structure and types of its properties or parameters


type bankdetails = {
     readonly userid : number, // here the readonly is the keyword if we define it once cant be change in furture 
    username : string,
    mobilenumber : number,
    isActive : boolean;
    credircard ? : number // this is "?" is an ooptiona those creditcard can we define or not not mandatory 
}


// function bankinfo( bk : bankdetails)
// {
//     bk.username = "123",
//     bk.mobilenumber= 919919191,
//     bk.isActive = true;

//     console.log(bk.username  + bk.mobilenumber +   bk.isActive  )

//     return bk ; 
// }

let details : bankdetails = 
{
    userid : 1234,
    username : "Surya",
    mobilenumber : 98865689,
    isActive : false   
}

console.log(details)
