const name="sudib"
const repocount=50
console.log(name+repocount+"value");
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName=new String('sudib das')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const newstring=gameName.substring(0,4)
console.log(newstring);
const anotherstring=gameName.slice(-8,4)
console.log(anotherstring);
const newStringone="  Sudib  "
console.log(newStringone);
console.log(newStringone.trim());

const url="https://sudib.com/sudib%20das"
console.log(url.replace('%20','-'));
console.log(url.includes("sundar"))
console.log(gameName.split(' '))



