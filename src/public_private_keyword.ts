//here by normal decleration of vaiarbales or class and public and private we see in classes file now 
//lets write the high coding standards how pros will write 


class planticket
{  
    
    readonly ticketnumber : number = 123;
    constructor( 
        public name :String ,
        public mobilenumber : number,
        private address : string,
        readonly age : number
        
        )
    {}

}

const plandetails = new planticket("Surya",998898,"54",300303);
//plandetails.ticketnumber= 500;
