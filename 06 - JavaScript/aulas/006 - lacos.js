// declarando um array
let tecnologiasWeb = ['html', 'css', 'javascript'];

// add elmentos a um array
tecnologiasWeb.push('react');
tecnologiasWeb.push('angular');

// percorrendo um array com forEach
console.log('\nPercorrendo um array com [forEach]');
for(elemento in tecnologiasWeb) {
    console.log(tecnologiasWeb[elemento]);
};

// percorrendo um array com for
console.log('\nPercorrendo um array com [for]');
for(let i = 0; i < tecnologiasWeb.length; i++) {
    console.log(tecnologiasWeb[i])
};

let contador = 10;

console.log('\nUtilizando [while]');
while(contador > 0) {
    console.log(contador);
    contador--;
}

console.log('\nUtilizando [do while]');
do {
    console.log(contador);
    contador++;
} while(contador <= 10);

console.log('teste');
let counter = 0;
while (counter < 10) {
    console.log(counter * 10);
}