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
    });

});

$(document).ready(function() {
    $("#modal02").on("click", function() {
        console.log("modal-show");
        $(".modal").show();
        $.get("/api/thought").then(function (thoughts) {
            console.log("entering loop")
            // empy the modal (adding div)
            $("#modalcontent").empty();
            for (let i=0; i<thoughts.length; i++) {
                console.log(thoughts[i])
                $("#modelcontent").append(
                    $("<div>").addClass("card blue-grey darken-1").append(
                        $("<div>").addClass("card-content white-text").append(
                        	$("<span>").addClass("card-title text-center").html(thoughts[i].first_name + " " + thoughts[i].last_name),
                        	// ).text(thoughts[i].body).append(
                        	$("<div>").addClass("card-image").append(
                        		$("<img>").css({"height": "50%", "width": "50%"}).attr("src", "/assets/images/userLW.jpeg")),
                        		$("<p>").text(thoughts[i].date),
                        		$("<p>").text(thoughts[i].body)                        			
                        	)

                    )

                );
            }
         })
    });
});

//==============================================================
//Click event that will handle when the user clicks on the Login button
//Click event will handle thought submit data to be posted to the backend

$(document).ready(function() {



    $("#thought-submit").on("click", function(event) {
        console.log("thought-submit clicked");
        event.preventDefault();

        // let newDate =  moment($("#date").val().trim())
        // console.log("newDate", newDate);

        // Make a Thought object
        let newThoughtPost = {
            first_name: $("#first_name").val().trim(),
            last_name: $("#last_name").val().trim(),
            body: $("#body").val().trim(),
            date: $("#date").val().trim(),
            // date: moment().format("YYYY-MM-DD HH:mm:ss")
        };

        console.log("newThoughtPost", newThoughtPost);

        // Send an AJAX POST-request with jQuery
        $.post("/api/thought", newThoughtPost)

        // On success, run the following code
            .then(function(response) {
                console.log(response);
                let row = $("<div>");

                row.addClass("post");
                 row.prepend("<p>" + newThoughtPost.thought_name + " posted: </p>");
                 row.prepend("<p>" + newThoughtPost.body + "</p>");
                row.prepend("<p>" + newThoughtPost.date + "</p>");
                 // row.prepend("<p>At " + moment(thought_date.created_at).format("h:mma on dddd") + "</p>");

                 $("#modal2-show").prepend(row);

                 row.addClass("thought");

                 row.append("<p>" + newThoughtPost.thought_name + " thoughts: </p>");
                 row.append("<p>" + newThoughtPost.body + "</p>");
                 row.append("<p>" + newThoughtPost.date + "</p>");
                 // row.append("<p>At " + moment(newThoughtPost.created_at).format("h:mma on dddd") + "</p>");

                $("#thought").prepend(row);


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