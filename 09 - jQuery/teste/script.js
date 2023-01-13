$(document).ready(function() {
    
    // add evento com jquery
        // $('#btn_submit').click(function() {
        //     $('form').slideDown();
        // })
    
        $('form').on('submit', function(e) {
            e.preventDefault();
            const task = $('#tarefa').val();
            console.log(task);
            const newTask = $(`<li>${task}</li>`);
            // $(`<div class="overlay_imagem_link"><a href="${task}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a></div>`).appendTo(newTask);
            $(newTask).appendTo(`ul`);
            // $(newTask).fadeIn(1000);
            $('#tarefa').val('');
        })
    
    })
    