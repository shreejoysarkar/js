/* datatypes:-
based on the 
1. primitive type 
    7 types : String, Number, Boolean, null, undefined, Symbol(used to make a value unique), BigInt.

    "a dynamically typed language, means the variable type not need to be defined ea&rly"

2. non primitive type/reference type

    Array, Objects, Functions
*/

// use of Symbol datatype:
const id= Symbol("223")
const anotherId= Symbol("223")
console.log(id==anotherId);

// array:
const heros=["shaktiman","naagraj","doga"]
// objects:
let myObj={
    name:"shreejoy",
    age:18,
}
// functions:
const myFunction=function(){
    console.log("hello world")
}
// for knowing the type of datatype:
console.log(typeof id);