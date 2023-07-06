class userlogin
{
    firstname : string
    lastname:string
    mobile:number
    olduser:boolean
    address:String = "";
    readonly userid :number = 121;
    constructor(firstname : string, lastname: string, mobile :number , olduser:boolean)
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.mobile = mobile;
        this.olduser = olduser;
    }
}

const surya = new userlogin("bayyani","Surya",9098987,true)
surya.address="Hyderbad"
console.log(surya)