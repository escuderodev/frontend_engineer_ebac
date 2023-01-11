$(document).ready(function() {
//    add evento com javascript puro
//    document.querySelector('header button').addEventListener('click', function() {

//    })

// add evento com jquery
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('form').on('submit', function(e) {
        console.log('submit');
        e.preventDefault();
    })

    $('#reset').click(function() {
        $('form').slideUp();
    })
})

