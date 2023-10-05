const name='shreejoy'
const count=40

console.log(name+count+'value');
//mordern sting input 
console.log(`hello my name is ${name} and my count is ${count}`);

const gameName=new String("IGi_game") // another way of defining the string variable
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName);
console.log(gameName.charAt(1))

const newString=gameName.substring(0,5);
console.log(newString)

const anotherstring=gameName.slice(-3,8)
console.log(anotherstring)


const newStringOne="    shreejoy    "
console.log(newStringOne);
console.log(newStringOne.trim())

const url='https://shreejoy.com/shreejoy%20sarkar'
console.log(url.replace('%20','-'))

console.log(url.includes('shreejoy'))
console.log(url.includes('rak'))

console.log(gameName.split('-'))