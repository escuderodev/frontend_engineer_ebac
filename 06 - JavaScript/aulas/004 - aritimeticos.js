let num1 = 4;
let num2 = 2;

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let resto = num1 % num2;
let potencia = num1 ** num2; //elevado ao quadrado/cubo

console.log(`${num1} + ${num2} = ${soma}`);
console.log(`${num1} - ${num2} = ${subtracao}`);
console.log(`${num1} * ${num2} = ${multiplicacao}`);
console.log(`${num1} / ${num2} = ${divisao}`);
console.log(`Resto da divisão de ${num1} / ${num2} = ${resto}`);
console.log(`${num1} elevado ao ${num2} = ${potencia}`);

// manipulação de strings
let altura = '2.50';
console.log(typeof(altura));

let alturaFloat = parseFloat(altura);
console.log(typeof(alturaFloat));

let idade = '38';
let idadeInt = parseInt(idade);
console.log(idadeInt); 