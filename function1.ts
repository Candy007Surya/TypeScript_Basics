//here we go na try different types of function without using any
//if we use any keyword there will be an conflict in furture if same varaible is used by other guy for different data type

function addtwonumbers (num1:number ,num2:number)
{
    return num1+num2;
}

function stringchecks (value:String)
{
    return value.toUpperCase();
}

function signupcase(name:string , emailid:string , login:boolean= false)
{
    let name1:String = name.concat("TypeScript");
    let emailid2 = emailid.toUpperCase();
   // login= false;

    return name1 + emailid2 + login;
}





let addnumber = addtwonumbers(2,4);
let givenavlue = stringchecks("Surya");
let logindeatils = signupcase("Surya", "Surya@gmail.com");


// here we can define function in this way also likje =>

let singinis=(names : String , phonenumber : number)=> {

}


console.log(`the addtion of two numbers is ${addnumber}`)
console.log("the string given to updercase"+ givenavlue);
console.log("the login function is :---"+ logindeatils);