let score=100
const scorevalue=100.3
// both variables are Number
// In js number and decimal are not seperately defined

const id= Symbol("123")
const anotherid= Symbol("123")
//console.log(id==anotherid);

const bignumber=34566885397934734n
//when n is used at the end,the number gets converted into big int

//Array
const heros=["shaktiman","naagraj","doga"]

//object
let myObj={
    name:"Sudib",
    age:21,
}
//Function
const myfunction=function(){
    console.log("hello World");

}
console.log(typeof myfunction);
console.log(typeof bignumber);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof anotherid);
//all non primitive types gives data type as object
// but function's data type is called function object

//+++++++++++++++++++++++++++++++++

//stack(for primitive data types)
//Heap(for non primitive data types)
let myytname="currentbuzz"
let anothername= myytname
anothername="musicalbuzz"
console.log(myytname);
console.log(anothername);

//object
let userone={
    email:"user@google.com",
    upi:"user@ybl"
}
let usertwo=userone
usertwo.email="sudib@google.com"
console.log(userone.email);
console.log(usertwo.email);
