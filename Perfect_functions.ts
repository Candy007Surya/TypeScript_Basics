// Functions
// Functions are the primary means of passing data around in JavaScript. 
// TypeScript allows you to specify the types of both the input and output values of functions.
//differet types of functions are :--
// Parameter Type Annotations
// Return Type Annotations
// Anonymous Functions


// Parameter Type Annotations

function adds( num : number)
{
    return  num+2;
}
let ss = adds(5);
console.log(ss)

// Return Type Annotations

function susb(num : number)
{
    return num-2;
}
const sk = susb(5);
console.log(sk);

// Anonymous Functions
const names = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});