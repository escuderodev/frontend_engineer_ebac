
const form = document.getElementById('form_deposito');
const nomeBeneficiario = document.getElementById('beneficiario');
let formValido = false;

// função anonima que trabalha com o formulário para realizar depósito
form.addEventListener('submit', function (evento) {
    // desativando o reload da página quando o botão é pressionado
    evento.preventDefault();
    // let formValido = false;

    // manipulando o DOM
    // const nomeBeneficiario = document.getElementById('beneficiario');
    const numeroConta = document.getElementById('numero_conta');
    const valorDeposito = document.getElementById('valor_deposito');
    const descricao = document.getElementById('descricao');
    const mensagemSucesso = `Depósito realizado com sucesso!<br>Valor R$ <b>${valorDeposito.value}</b><br>Cliente: <b>${nomeBeneficiario.value}</b><br>Conta: <b>${numeroConta.value}</b>`;

    // validando o nome
    formValido = validaNome(nomeBeneficiario.value);
    if (formValido) {
        const containerMensagemSucesso = document.querySelector('.success_message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        nomeBeneficiario.value = '';
        numeroConta.value = '';
        valorDeposito.value = '';
        descricao.value = '';

    } else {
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error_message').style.display = 'block';
    }
})

// função que valida se o nome está completo
function validaNome(nomeBeneficiario) {
    const benArray = nomeBeneficiario.split(' ');
    return benArray.length >= 2;
};

// função anonima para add evento e mudar o campo nomeBeneficiario
nomeBeneficiario.addEventListener('keyup', function(evento) {
    console.log(evento.target.value);
    formValido = validaNome(evento.target.value);
    if (!formValido) {
        // nomeBeneficiario.style.border = '1px solid red';
        nomeBeneficiario.classList.add('error');
        document.querySelector('.error_message').style.display = 'block';
    } else {
        // nomeBeneficiario.style.border = '';
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.error_message').style.display = 'none';
    }
});