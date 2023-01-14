$(document).ready(function() {
    
        $('form').on('submit', function(e) {
            e.preventDefault();
            const task = $('#tarefa').val();
            console.log(task);
            const newTask = $(`<li>${task}</li>`);
            $(newTask).appendTo(`ul`);
            $('#tarefa').val('');

            $('ul.lista_container li').click(function () {
                const li = $(this).text();
                // $("li").css("color", "red");
                $("li").css("text-decoration", "line-through");
            })
            
        })
    
    })


    