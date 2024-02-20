// This is my age
const myAge = 25;
// Early years for a dog
let earlyYears = 2;
earlyYears *= 10.5;
// Since we already accounted for the first two years
let laterYears = myAge - 2;
// Multiply lateryears by 4
laterYears *= 4;
console.log(earlyYears, laterYears);
// how old would it be in dogyears
let myAgeInDogYears = earlyYears + laterYears;
let myName = 'Chartine'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

