const a = document.getElementById('num1');
const b = document.getElementById('num2');
let formValido = false;

// funçãoque valida o campo
function validaCampo(num1, num2) {
    if(num2 > num1) {
        return true;
    } else {
        return false;
    }
}

// função que altera a aparência do campo
a.addEventListener('keyup', function(evento) {
    let num1 = evento.target.value;

    b.addEventListener('keyup', function(evento) {
        num2 = evento.target.value;
    
        console.log(`Num1: ${num1} - Num2: ${num2}`);

        formValido = validaCampo(num1,num2);
        if(!formValido) {
            b.classList.add('error');
            document.querySelector('.error_message').style.display = 'block';
            document.querySelector('.success_message').style.display = 'none';
        } else {
            b.classList.remove('error');
            document.querySelector('.error_message').style.display = 'none';
            document.querySelector('.success_message').style.display = 'block';
        }
    })
});