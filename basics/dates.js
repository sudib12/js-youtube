let  mydate= new Date()
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toISOString())
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleString())
console.log(mydate.toLocaleTimeString())
console.log(mydate.toTimeString())
console.log(typeof mydate);

let mycreateddate=new Date(2023,0,23)
console.log(mycreateddate.toDateString())

let mycreateddate2=new Date(2023,0,23,17,3)
console.log(mycreateddate2.toLocaleString());

let mycreateddate3=new Date("2023-01-14") //yyyy-mm-dd
console.log(mycreateddate3.toLocaleString())

let mycreateddate4=new Date("01-14-2023") //mm-dd-yyyy
console.log(mycreateddate3.toLocaleString())

let myTimeStamps=Date.now()
console.log(myTimeStamps);
console.log(mycreateddate4.getTime());

console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));
// output mai UK ka time dikha rha hai

let  newdate= new Date()
console.log(newdate)
console.log(newdate.getMonth()+1)
console.log(newdate.getDay())

console.log( `Today's date is ${newdate.getDate()} and the time is ${newdate.toTimeString()}`)

newdate.toLocaleString('default',{
    weekday:"long",
    
})
