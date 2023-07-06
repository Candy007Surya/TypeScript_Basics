//creating arrays with the functions 

function itoperations <T> (operationname : T[]): T
{
    // do some data base connsetions and then
      const indexvalue  = 3 ; 
     return operationname[indexvalue];

}


//More genereic way fo wrting a code is 

const plandetails1 = <T> (products : T[]) :T =>{

    // do some data base connsetions and then
    const indexvalue  = 3 ; 
    return products[indexvalue]

}

