"use strict";
class userlogin {
    constructor(firstname, lastname, mobile, olduser) {
        this.address = "";
        this.userid = 121;
        this.firstname = firstname;
        this.lastname = lastname;
        this.mobile = mobile;
        this.olduser = olduser;
    }
}
const surya = new userlogin("bayyani", "Surya", 9098987, true);
surya.address = "Hyderbad";
console.log(surya);
