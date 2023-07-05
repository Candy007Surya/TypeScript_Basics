//here in typescript arrays can be define in 2 times

//1st type is :-

const userprofile : string[] = [];

//2nd type 
const usernumbers : Array<number> = []

type logindeatils =  
{
    name : string,
    mobile : number,
    isactive : boolean
}

const valueaaa : logindeatils[] = []
valueaaa.push({name:"Surya",mobile:99889878,isactive:true})

let numberses= usernumbers.push(1)
console.log(valueaaa);
console.log(numberses)