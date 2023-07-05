interface plandetails 
{

    name :String ,
    mobile : number,
    active : boolean;
    //discount(couponname :String) ?: number;
    //here disocunt is a name of a method , copounmane is  nameif it , number is its return value of it 
}

interface plandetails 
{
    pricerange ?:string
} 

interface plandetails 
{
    cabincrew : string
} 


interface superplan extends plandetails
{
     role: string 
}

// const supedetails :superplan = 
// {
    
// }


const details :plandetails=
{
    name:"Surya",mobile:80877,active:true,
    cabincrew:"expert crew"
   
    };
console.log(details);