function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("D");
    console.log("I");
    console.log("B");
}
//sayMyName()

//function addTwoNumbers(number1,number2){
//    console.log(number1+number2);


//addTwoNumbers(3,4)
//addTwoNumbers(3,"a")
//const result=addTwoNumbers(3,5)
//console.log("Result:",result);

function addTwoNumbers(number1,number2){
    let result=number1+number2
    return result
} 

const result=addTwoNumbers(3,5)
console.log("Result:",result);

/*function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("Sudib"))
*/




/*function loginUserMessage(username){
    if(username==undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Sudib"))
console.log(loginUserMessage())
*/
function loginUserMessage(username="PK"){
    if(username==undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Sudib"))
console.log(loginUserMessage())


//Rest operator:ek saath milaao(used for multiple operators)
 /*function calculateCartPrice(...num1){
    return num1
 }
 console.log(calculateCartPrice(200,300,400,500,550,600));
 */

 
 
 function calculateCartPrice(val1,val2,...num1){
    return num1
 }
 console.log(calculateCartPrice(200,300,400,500,550,600));

//passing Object in function
 const user={
    username:"Sudib",
    price:1999
 }
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);
handleObject({
      username:"sam",
      price:5000
})


//#passing arrays in function
const myNewArray=[200,300,400,100]
function returnSecondValue(getArray){
    return getArray[1]
}

//returnSecondValue(myNewArray)
console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,900,500,10000]));


