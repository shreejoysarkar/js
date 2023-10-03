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





// --------------------------------------------


/* Memory 2 types:- 
Stack (primmitive), Heap(non-primitive_)

in stack we get the copy of the that reference
and in heap we get the original reference

*/

let name='shreejoy'

let anothername = name
anothername='messhu'

console.log(anothername);
console.log(name);


let user1={
    email:'google.com',
    upi:'user1@ybl'
}

let user2=user1

user2.email='user2@google.com'

console.log(user1.email);
console.log(user2.email);
console.log(user1)