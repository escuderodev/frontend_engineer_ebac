// Trabalhando com consicionais

let nota = 5;

// Utilizando [if else]
console.log('Utilizando [if else]');
if(nota > 6) {
    console.log(`Parabéns! Sua nota foi ${nota} e você foi aprovado!`);
} else if(nota > 5 && nota < 7) {
    console.log(`Sua nota foi ${nota} e você está de recuperação!`);
} else {
    console.log(`Que pena! Sua nota foi ${nota} e você foi reprovado!`);
};

// Utilizando [switch case]
let tamanho = 'GG';
console.log('\nUtilizando [switch case]');
switch(tamanho) {
    case 'P':
        console.log('Pequeno');
        break;
    case 'M':
        console.log('Médio');
        break;
    case 'G':
        console.log('Grande');
        break;
    case 'GG':
        console.log('Extra Grande');
        break;
    default:
        console.log('Tamanho indisponível!');
};

// utilizando igualdade
console.log('\nUtilizando igualdade');
console.log(10 == '10');
console.log(10 === '10');
console.log(10 !== '10');