"use strict";
//here this topic is very much important lets learn it 
//https://www.typescriptlang.org/docs/handbook/2/generics.html
//In languages like C# and Java, one of the main tools in the toolbox for creating reusable components is generics, that is, being able to create a component that can work over a variety of types rather than a single one. This allows users to consume these components and use their own types.
//Working with Generic Type Variables
//Generic Types
//Generic Classes
//Generic Constraints
//Using Type Parameters in Generic Constraints
//Using Class Types in Generics
//Generic Parameter Defaults
// A generic parameter default follows the following rules:
// A type parameter is deemed optional if it has a default.
// Required type parameters must not follow optional type parameters.
// Default types for a type parameter must satisfy the constraint for the type parameter, if it exists.
// When specifying type arguments, you are only required to specify type arguments for the required type parameters. Unspecified type parameters will resolve to their default types.
// If a default type is specified and inference cannot choose a candidate, the default type is inferred.
// A class or interface declaration that merges with an existing class or interface declaration may introduce a default for an existing type parameter.
// A class or interface declaration that merges with an existing class or interface declaration may introduce a new type parameter as long as it specifies a default
//here lets say how we check how we can define the function 
//type1 
function info1(inss) {
    return inss;
}
function info2(ins) {
    return ins;
}
function info3(ins) {
    return ins;
}
// then what is the differencet between any and type of we delcare any data at first in type it will lock it 
function info4(ins) {
    return ins;
}
// this is the standard way of using it 
function info5(ins) {
    return ins;
}
let iinfosos = info5(5);
console.log(iinfosos);
