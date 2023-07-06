// we canot create an object for an abstract class so thats why we extend this and call those values 


abstract class mobilephone 
{
   constructor(
    public battreyinfo:String,
    public softwareversion :String,
   // private parts_info :string
   )
   {}

    priceofphone()
   {
    //somany pricess 
    return 20;
   }

   abstract phonedisplaysetting():void
}




class phonedetals extends mobilephone
{
   
    constructor
    (
        public battreyinfo:String,
        public softwareversion :String,
        public batterylife : number
    )
    {
        super(battreyinfo,softwareversion);
    }
    phonedisplaysetting(): void {
        throw new Error("Method not implemented.");
    }

}


let phoneinfo = new phonedetals("3 hours life","andriod10.3",4);
let details = phoneinfo.phonedisplaysetting;
phoneinfo.priceofphone;

console.log(phoneinfo);
console.log(details);
