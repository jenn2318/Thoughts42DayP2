$(document).ready(function(){
    $('.parallax').parallax();
});



document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
});

// Or with jQuery

$(document).ready(function(){
    $('.parallax').parallax();
    $('.modal').modal();
});