// 1. Convert the first letter to uppercase
let info = "The child walked to the market";
let capitalizedinfo = info.charAt(0).toUpperCase() + info.slice(1);
console.log(capitalizedinfo);

// 2. Add a character at the third index
let greeting = "hello";
let char = "X";
let modified= greeting.slice(0, 3) + char + greeting.slice(3);
console.log(modified);

// 3. Count occurrences of "hello"
let Speach = "hello world, hello JavaScript!";
let count = (Speach.match(/hello/g) || []).length;
console.log(count);

// 4. Get the last three characters
let myLanguage = "JavaScript";
let lastThreeChar = myLanguage.slice(-3);
console.log(lastThreeChar);

// 5. Log the first three characters
let firstThreeChar = myLanguage.slice(0, 3);
console.log(firstThreeChar);

// 6. Sort characters in ascending order
let myWord = "hello";
let sorted = myWord.split('').sort().join('');
console.log(sorted);

// 7. Remove all spaces
let noSpaces = info.replace(/\s/g, "");
console.log(noSpaces);

// 8. Find the index of 't' in "greeting"
let salutation = "greeting";
let indexOfT = salutation.indexOf("t");
console.log(indexOfT);

// 9. Delete the first two characters
let noFirstTwoChar = greeting.slice(2);
console.log(noFirstTwoChar);

// 10. Delete the last two characters
let noLastTwoChar = greeting.slice(0, -2);
console.log(noLastTwoChar);

