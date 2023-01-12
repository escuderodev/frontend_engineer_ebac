$(document).ready(function() {
//    add evento com javascript puro
//    document.querySelector('header button').addEventListener('click', function() {

//    })

// add evento com jquery
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const url = $('#url').val();
        // console.log(url);
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${url}">`).appendTo(novoItem);
        $(`<div class="overlay_imagem_link"><a href="${url}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a></div>`).appendTo(novoItem);
        $(novoItem).appendTo(`ul`);
        $(novoItem).fadeIn(1000);
        $('#url').val('');
    })

    $('#reset').click(function() {
        $('form').slideUp();
    })
})

