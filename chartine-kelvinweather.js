// The value of kelvin stays constant
const kelvin = 0;

// We get the value of celsius by sbustracting 273 from kelvin
const celsius = kelvin - 273;

// Formula for fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// Round down
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Faranheit.`);

// Convert to Newton
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.` );