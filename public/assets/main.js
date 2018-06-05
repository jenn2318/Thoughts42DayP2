//Materialize code for the Parallax
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
    // $('.modal').modal();
});

//==========================================================
///Materialize Initializer Code For The Modals

$(document).ready(function(){
    $('.modal').modal();
});

document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.modal');
    let instances = M.Modal.init(elems);
});

// Or with jQuery


// $(document).ready(function(){
//     $('.modal').modal();
// });

$(document).ready(function() {
    $("#modal1").on("click", function() {
        console.log("modal-show");
        $(".modal").show();
        // $.get("/api/thought").then(function (thoughts) {
        // $("<div>").addClass("card").append(
        //     $("<div>").addClass("card-image").append(
        //
        //     )
        // )
        // console.log(thoughts);


        // })

    });

});

$(document).ready(function() {
    $("#modal02").on("click", function() {
        console.log("modal-show");
        $(".modal").show();
        $.get("/api/thought").then(function (thoughts) {
            console.log("entering loop")
            for (let i=0; i<thoughts.length; i++) {
                console.log(thoughts[i])
                $("#modelcontent").append(
                    $("<div>").addClass("card").append(
                        $("<h6>").text(thoughts[i].body)

                    )

                );
            }
            // $("<div>").addClass("card").append(
            //     $("<div>").addClass("card-image").append(
            //
            //     )
            // )
            console.log(thoughts);


        })

    });

});

//==============================================================
//Click event that will handle when the user clicks on the Login button
//Click event will handle thought submit data to be posted to the backend

$(document).ready(function() {



    $("#thought-submit").on("click", function(event) {
        event.preventDefault();

        // Make a Thought object
        let newThoughtPost = {
            first_name: $("#first_name").val().trim(),
            last_name: $("#last_name").val().trim(),
            body: $("#body").val().trim(),
            date: $("#date").val().trim(),
            // date: moment().format("YYYY-MM-DD HH:mm:ss")
        };

        // Send an AJAX POST-request with jQuery
        $.post("/api/thought", newThoughtPost)

        // On success, run the following code
            .then(function(response) {
                console.log(response);
              alert("Entry Saved In Database!");

            });

        //Empty each input box by replacing the value with an empty string

        document.getElementById("myForm").reset();

        $("#thought").val("");

        $("#thought-box").val("");
    });
});
// When the page loads, immediately show the user live social thought post feed
// $.get("/api/thoughttank", function(data) {
//
//     if (userPostArr.length !== 0) {
//
//         for (let i = 0; i < userPostArr.length; i++) {
//
//             let row = $("<div>");
//             row.addClass("post");
//
//             row.append("<p>" + user.post.data[i].thought_name + " chirped.. </p>");
//             row.append("<p>" + user.post.data[i].body + "</p>");
//             row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
//
//             $("#modal2-show").prepend(row);
//
//             $("#thought").val("");
//         }

// When the page loads, grab all of the thoughts
//         $.get("/api/all", function (data) {
//
//             if (data.length !== 0) {
//
//                 for (var i = 0; i < data.length; i++) {
//
//                     var row = $("<div>");
//                     row.addClass("thought");
//
//                     row.append("<p>" + data[i].author + " chirped.. </p>");
//                     row.append("<p>" + data[i].body + "</p>");
//                     row.append("<p>At" + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
//
//                     $("#thought-area").prepend(row);
//
//
//                 }
//
//             }
//
//
//         });
//
//
//     }
//