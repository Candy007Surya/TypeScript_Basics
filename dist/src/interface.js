"use strict";
//here we will get to knwo the importance of interface 
class insta_cams {
    constructor(camera, filter, noofclicks, mode, 
    // the above are mandatory to get tem as per the class if we need extra features we can add them like 
    uploadperday) {
        this.camera = camera;
        this.filter = filter;
        this.noofclicks = noofclicks;
        this.mode = mode;
        this.uploadperday = uploadperday;
    }
}
class youtube {
    constructor(picture, camera, filter, noofclicks, mode) {
        this.picture = picture;
        this.camera = camera;
        this.filter = filter;
        this.noofclicks = noofclicks;
        this.mode = mode;
    }
}
let instpics = new insta_cams("iphonecam", "dark", 3, "Bright", 2);
console.log(instpics);
