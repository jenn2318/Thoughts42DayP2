document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
    $('.modal').modal();
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
    $('.modal').modal();
});

// $("id").something();
//
//
// if () else {
//
//
// };
//
//
// $("id").prependListener()

// chirpy ref

// When user clicks add-btn
$("#thought-submit").on("click", function(event) {
    event.preventDefault();

    // Make a newChirp object
    var newThought = {
        author: $("#author").val().trim(),
        body: $("#thought").val().trim(),
        created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };

    console.log(newThought);

    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newThought)
    // On success, run the following code
        .then(function() {

            var row = $("<div>");
            row.addClass("thought");

            row.append("<p>" + newThought.author + " thoughts: </p>");
            row.append("<p>" + newThought.body + "</p>");
            row.append("<p>At " + moment(newThought.created_at).format("h:mma on dddd") + "</p>");

            $("#thought").prepend(row);

        });

    // Empty each input box by replacing the value with an empty string
    $("#thought").val("");
    $("#thought").val("");
});

// When the page loads, grab all of our chirps
$.get("/api/all", function(data) {

    if (data.length !== 0) {

        for (var i = 0; i < data.length; i++) {

            var row = $("<div>");
            row.addClass("thought");

            row.append("<p>" + data[i].author + " chirped.. </p>");
            row.append("<p>" + data[i].body + "</p>");
            row.append("<p>At" + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

            $("#thought-area").prepend(row);

        }

    }

});