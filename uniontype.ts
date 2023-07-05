// Union Types
// TypeScript’s type system allows you to build new types out of existing ones using a large variety of operators. 
// Now that we know how to write a few types, it’s time to start combining them in interesting ways.

let scoreboard : number | String  = 100;
console.log(scoreboard);
scoreboard= "Surya";
console.log(scoreboard)

type userid = {  username:string , userid: number};

type admiuserid = {  username121:string , userid: number};

let empyid : userid | admiuserid = {username:"Surya", userid:1231};
console.log(empyid)

const data : (String | number)[] = ["1",2,3,"4"];