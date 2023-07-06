//here we will get to knwo the importance of interface 

interface capturepictures 
{
    camera :String,
    filter : String,
    noofclicks: number,
    mode : String;
}

interface uploadapost
{
     picture :String
}

class insta_cams implements capturepictures
{
     constructor
     (
       public  camera: String,
       public  filter: String,
       public  noofclicks: number,
       public  mode: String,
       // the above are mandatory to get tem as per the class if we need extra features we can add them like 
       private uploadperday : number
     )
     {}
   
}

class youtube implements capturepictures ,uploadapost
{
    constructor ( 
        public picture: String,
        public  camera: String,
        public  filter: String,
        public  noofclicks: number,
        public  mode: String
        )
    {
    }
   
}

let instpics = new insta_cams("iphonecam","dark",3,"Bright",2);
console.log(instpics)