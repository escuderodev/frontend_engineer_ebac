// declarando variáveis
let primeiroNome = 'Eduardo';
let sobreNome = 'Escudero';

// verificando o tipo de dados da variável
console.log(typeof primeiroNome);
console.log(primeiroNome + ' ' + sobreNome); //forma antiga
console.log(`${primeiroNome} ${sobreNome}`); //forma atual

// verifica o tamamho do elemento
console.log(primeiroNome.length);

// corta parte do elemento, exibindo apenas o range de indices informado
console.log(primeiroNome.slice(0, 2));

// verificando se um conteúdo existe dentro de uma variável e qual a sua posição inicial
console.log(primeiroNome.search('ar'));
