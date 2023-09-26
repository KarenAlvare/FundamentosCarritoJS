// Strings en JS

let miString = "Este Es Un TeXtO" + " DE pRuEbA";
console.log(miString);

console.log(miString.charAt(5));
console.log(miString.endsWith('A'));
console.log(miString.length);
console.log(miString.repeat(2));
console.log(miString.toLowerCase());
console.log(miString.toUpperCase());

console.log("I'm Karen");

console.log('i\'m Karen');

// String Multilinea
const menu =  `
1 - Opción 1
2 - Opción 3
3 - Opción 3
`;

console.log(menu);

//String Templates
//placeholder ${}

const name = 'Karen';
const estudiante = 'TIADSM';
const age = 20;

console.log("Soy" + name +", soy " + estudiante +" y tengo.")
console.log(`Soy ${name} soy ${estudiante } y tengo ${age} años`);