// Dates

let myDate=new Date()
console.log(myDate.toString());

console.log(myDate.toLocaleString());

console.log(typeof myDate)


let myCreatedDate=new Date(2023,2,23)
let myCreatedDate1=new Date("2023-01-14")

console.log(myCreatedDate.toDateString())
console.log(myCreatedDate1.toDateString())



let myTimeStamp=Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())


let newDate=new Date()
console.log(newDate)
console.log(newDate.getDate())


