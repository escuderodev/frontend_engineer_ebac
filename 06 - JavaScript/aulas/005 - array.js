// declarando um array
let tecnologiasWeb = ['html', 'css', 'javascript'];

// add elmentos a um array
tecnologiasWeb.push('react');
tecnologiasWeb.push('angular');

// acessando elementos de um array
console.log('acessando elementos de um array');
console.log(tecnologiasWeb);
console.log(tecnologiasWeb[2]);

// percorrendo um array com for
console.log('\npercorrendo um array com for');
for(elemento in tecnologiasWeb) {
    console.log(tecnologiasWeb[elemento]);
}

// verificando o tamanho do array
console.log('\nverificando o tamanho do array');
console.log(tecnologiasWeb.length);

