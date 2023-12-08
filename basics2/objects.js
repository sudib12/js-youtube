
//objects contains,keys and values
// Objects Literals

const mySym=Symbol("key1") //symbol declaration

const JsUser={
    name:"Sudib",
    "full name":"Sudib Das",

    [mySym]:"mykey1",
    age:18,
    location:"Tripura",
    email:"sudib@google.com",
    isLoggedIn:false,
    lastLoginDays:["MOnday","Saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
//console.log(JsUser.full name)
console.log(JsUser["full name"])

console.log(JsUser[mySym])
console.log(typeof JsUser[mySym])

JsUser.email="sudib@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email="sudib@microsoft.com"
console.log(JsUser.email)

JsUser.greeting = function(){
      console.log("Hello JS user");
}
JsUser.greeting2 = function(){
    console.log(`Hello JS user,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());

//const tinderuser=new Object()
const tinderuser={}

tinderuser.id="123abc"
tinderuser.name="Sudib"
tinderuser.isLoggedIn=false
console.log(tinderuser)

const user={
    email:"some@google.com",
    fullname:{
        userfullname:{
            firstname:"Sudib",
            lastname:"Das"
        }
    }
}
console.log(user.fullname);
console.log(user.fullname.userfullname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//const obj3={obj1,obj2}
//const obj3=Object.assign(obj1,obj2)
//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}//spread
console.log(obj3);

console.log(tinderuser)
console.log(Object.keys(tinderuser)); //output comes in array
console.log(Object.values(tinderuser));

console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty("isLoggedIn"));
console.log(tinderuser.hasOwnProperty("isLogged"));

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"sudib",
}
const{courseInstructor:Instructor}=course
//console.log(courseInstructor);
console.log(Instructor);





//JSON API