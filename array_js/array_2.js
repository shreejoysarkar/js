const marvel_heros=['thor','ironman','spiderman']
const dc_heros=['superman','flash','batman']

// marvel_heros.push(dc_heros)         //  here dc_heros will become an element of marvel_heros

// console.log(marvel_heros);

// const all_heros=marvel_heros.concat(dc_heros)           // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(all_heros)

// const all_new_heros=[...marvel_heros,...dc_heros]       //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(all_new_heros)


const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array= another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray('shreejoy'))

console.log(Array.from('1234'))         //  from() will make anything inside the () array 