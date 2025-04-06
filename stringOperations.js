let info = "The child walked to the market";
let capitalizedinfo = info.charAt(0).toUpperCase() + info.slice(1);
console.log(capitalizedinfo);

let greeting = "hello";
let char = "X";
let modified = greeting.slice(0, 3) + char + greeting.slice(3);
console.log(modified);

let Speach = "hello world, hello JavaScript!";
let count = (Speach.match(/hello/g) || []).length;
console.log(count);

let myLanguage = "JavaScript";
let lastThreeChar = myLanguage.slice(-3);
console.log(lastThreeChar);

let firstThreeChar = myLanguage.slice(0, 3);
console.log(firstThreeChar);

let sorted = greeting.split('').sort().join('');
console.log(sorted);

let noSpaces = info.replace(/\s/g, "");
console.log(noSpaces);

let salutation = "greeting";
let indexOfT = salutation.indexOf("t");
console.log(indexOfT);

let noFirstTwoChar = greeting.slice(2);
console.log(noFirstTwoChar);

let noLastTwoChar = greeting.slice(0, -2);
console.log(noLastTwoChar);

