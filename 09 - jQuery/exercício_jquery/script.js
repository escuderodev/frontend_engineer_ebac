// capturando elementos do DOM
const form = document.getElementById('form_tarefas');
const tasks = [];

// armazernando todas as linhas digitadas em um array glogal
let lines = [];

form.addEventListener('submit', function(evento) {
    // deabilitando reload da página
    evento.preventDefault();

    // funções auxiliares
    addLine();
    updateTable();
});

// função que adiciona uma linha a tabela
function addLine() {
    // recuperando os valores dos inputs
    const inputTasks = document.getElementById('tarefa');

    // validando duplicidade de registros
    if(tasks.includes(inputTasks.value)) {
        alert(`A tarefa ${inputTasks.value} já foi cadastrada!`);
    } else {
        // guardando os inputs em arrays
        tasks.push(inputTasks.value);

        // preparando a inserção de dados na tabela
        let line = '<tr>';
        line += `<td>${inputTasks.value}</td>`;
        lines += line;
    };

    // limpando os campos após o submit
    inputTasks.value = '';
};

// função que atualiza a tabela
function updateTable() {
    // recuperando o corpo da tabela
    const tbody = document.querySelector('tbody');
    // inserindo as linhas na tabela
    tbody.innerHTML = lines;
};