/*
const balance=1000
if(balance<500){
   console.log("less than 500")
}else if(balance<750){
    console.log("less than 750")
 }
 else if(balance<1200){
    console.log("less than 1200")
 } 
 
 //Switch

 const month=3
 switch (month) {
   case 1:
      console.log("January");
      break;
   case 2:
      console.log("February");
      break;
   case 3:
      console.log("March");
      //break;
   case 4:
      console.log("April");
      break;
 
   default:
      console.log("default case match")
      break;
 }

 /*
 (object.keys)--> returns keys in a n array....
thus we can we lenght function of array with it.
By this we can see whether it is empty or not


const emptyObj={}

if(Object.keys(emptyObj).length===0){
 console.log("object is empty")
}   

 


//terniary operator

const iceTeaPrice=100
iceTeaPrice<=80 ? console.log("less than 80"): console.log("more than 80")

//for loop
for (let i = 0; i <10; i++) {
   const element = i;
   if(element==5){
      console.log("5 is the best")
   }
   console.log(element)
} 
/*

for (let i = 0; i <=10; i++) {
   console.log(`outer loop value:${i}`);
   for (let j = 0; j <=10; j++) {
      console.log(`Inner loop value:${j} and inner loop ${i}`)
      
   }
   
}

let myArray=["flash","batman"]
for (let i = 0; i <= myArray.length; i++) {
   const element = myArray[i];
   console.log(element)   
}


/////// While Loop /////////
 let i=0
 while(i<=10){
     console.log(`value of i is ${i}`);
     i=i+2
 }


let myArray=['flash','batman','hawkeye']
let arr=0
while(arr<myArray.length){
   console.log(`value is ${myArray[arr]}`)
   arr++

}
///////// Do While Loop /////////////
let score=5
do{
   console.log(`The score is ${score}`)
   score++
}
while(score<=10)
*/


/////High Order Loops//////  
// forof loop

const arr=[1,2,3,4,5]
for (const i of arr) {
   console.log(i);
   
}

// forof can also be used for strings

const greetings="Hello World"
for(const greet of greetings){
    console.log(`Each char is ${greet}`)
} 


//Maps

const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
console.log(map);

for(const[key,value] of map){
   console.log(key,':-',value);
}


const coding=["js","ruby","java","python","cpp"]

coding.forEach(function(val){
   console.log(val);
})

function printMe(item){
   console.log(item);
}
coding.forEach(printMe)

//don't call the function,just give its referrence



coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

const myCoding=[
   {
      languageName:"javascript",
      languageFileName:"js"
   },
   {
      languageName:"java",
      languageFileName:"java"
   },
   {
      languageName:"python",
      languageFileName:"py"
   }
]
myCoding.forEach((item)=>{
   console.log(item.languageName)
})

