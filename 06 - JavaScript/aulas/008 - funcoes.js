// Trabalhando com funções
let nome = prompt('Digite o seu nome: ');
let anoAtual = parseInt(prompt('Digite o ano atual: '));
let anoNascimento = parseInt(prompt('Digite o ano do seu nasciumento: '));

function main() {
    dizOi(nome);
    calculaIdade(anoAtual, anoNascimento);
    alert(`Sua idade é ${calculaIdade(anoAtual, anoNascimento)} anos.`);
};

function dizOi(nome) {
    alert(`Olá ${nome}, seja bem vindo(a)!`);
};

function calculaIdade(anoAtual, anoNascimento) {
    return anoAtual - anoNascimento;
};

main();