
let userEmail = "";
let userPassword = "";


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
    $('.modal').modal();
});

//==============================================================
//Click event that will handle when the user clicks on the Login button
//Click event will allow the modal to show, will be hidden first


$(document).ready(function() {
    $("#modal1").on("click", function() {
        $(".modal").show();
    });

});


//If/Else Statement to handle the user authentication if user verified or not

$(document).on("click", login function () {
    if(!userEmail === userEmail.data) {
        $(#show).html("Please Try Again!");
    } else {
        if(userEmail === userEmail.data) {
            $(#show).html("Welcome, Access Granted");
        }
      }
});

$(document).on("click", login function () {
    if(!userPassword === userPassword.data) {
        $(#show).html("Please Try Again!");
    } else {
        if(userPassword === userPassword.data) {
            $(#show).html("Welcome, Access Granted");
        }
    }
});
//jQuery to prepend the current user's post
//jQuery to append the current user's post


// When user clicks on modal
$("#modal2-show").on("click", function(event) {
    event.preventDefault();

    // Make a new thoughtPost object
    let newThoughtPost = {
        thought_name: $("#thought").val().trim(),
        body: $("#thought-box").val().trim(),
        created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };

    console.log(newThoughtPost);

    // Send an AJAX POST-request with jQuery.....will prepend the user comment to top of live feed
    $.post("/api/thoughttank", newThoughtPost)
    // On success, run the following code
        .then(function() {

            var row = $("<div>");
            row.addClass("post");

            row.preppend("<p>" + newThoughtPost.thought_name + " posted: </p>");
            row.prepend("<p>" + newThoughtPost.body + "</p>");
            row.prepend("<p>At " + moment(thought_date.created_at).format("h:mma on dddd") + "</p>");

            $("#modal2-show").prepend(row);

        });

    // Empty each input box by replacing the value with an empty string
    $("#thought").val("");
    $("#thought-box").val("");
});

// When the page loads, immediately show the user live social thought post feed
$.get("/api/thoughttank", function(data) {

    if (userPostArr.length !== 0) {

        for (let i = 0; i < userPostArr.length; i++) {

            let row = $("<div>");
            row.addClass("post");

            row.append("<p>" + user.post.data[i].thought_name + " chirped.. </p>");
            row.append("<p>" + user.post.data[i].body + "</p>");
            row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

            $("#modal2-show").prepend(row);

        }

    }

});


