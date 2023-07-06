"use strict";
// we canot create an object for an abstract class so thats why we extend this and call those values 
class mobilephone {
    constructor(battreyinfo, softwareversion) {
        this.battreyinfo = battreyinfo;
        this.softwareversion = softwareversion;
    }
    priceofphone() {
        //somany pricess 
        return 20;
    }
}
class phonedetals extends mobilephone {
    constructor(battreyinfo, softwareversion, batterylife) {
        super(battreyinfo, softwareversion);
        this.battreyinfo = battreyinfo;
        this.softwareversion = softwareversion;
        this.batterylife = batterylife;
    }
    phonedisplaysetting() {
        throw new Error("Method not implemented.");
    }
}
let phoneinfo = new phonedetals("3 hours life", "andriod10.3", 4);
let details = phoneinfo.phonedisplaysetting;
phoneinfo.priceofphone;
console.log(phoneinfo);
console.log(details);
