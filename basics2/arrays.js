//Array
const arr=[0,1,2,3,4,5,"Sudib"]
const myheroes=["shaktiman","Naagraj"]
const arr2= new Array(1,2,3,4)
console.log(arr[6]);

//Array Methods
arr.push(6)
arr.push(7)
arr.pop()

//arr.unshift(9)
arr.shift()

console.log(arr.includes(9));
console.log(arr.indexOf(3));
console.log(arr);

const newArr=arr.join()  //converts into string
console.log(arr);
console.log(newArr);    
console.log(typeof newArr);
///////////
console.log("Slice ,Splice")

console.log("A",arr);
const myn1=arr.slice(1,3)
console.log(myn1);
console.log("B",arr);

const myn2=arr.splice(1,3)
console.log("C",arr)
 console.log(myn2);

const marvels=["thor","ironman","hawkeye"]
const dc=["superman","flash","batman"]
//marvels.push(dc)
//console.log(marvels);
//console.log(marvels[3][1]);

//marvels.concat(dc)
//console.log(marvels);

//const allheroes=marvels.concat(dc)
//console.log(allheroes)

const allheroes=[...marvels,...dc]
console.log(allheroes)

const array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const array2=array.flat(1);
console.log(array2);

console.log(Array.isArray("Sudib"))
console.log(Array.from("SUdib"))
console.log(Array.of("Sudib"))

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3)) 