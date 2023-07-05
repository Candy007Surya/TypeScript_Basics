
function createlogindeatils( name : String , phonenumber :number, emailid:string , existinguser : boolean = false)
{
return {name ,phonenumber,emailid,existinguser}
}

let deatils = createlogindeatils("Surya",9988988,"Surya@gmail.com")
console.log(deatils)


