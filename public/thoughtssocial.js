//Materialize Initializer Code For The Modals

// $(document).ready(function(){
//     $('.modal').modal();
// });

// document.addEventListener('DOMContentLoaded', function() {
//     let elems = document.querySelectorAll('.modal');
//     let instances = M.Modal.init(elems, options);
// });

// Or with jQuery


// $(document).ready(function(){
//     $('.modal').modal();
// });

// $(document).ready(function() {
//     $("#modal1").on("click", function() {
//         $(".modal").show();

//     });

// });


//==============================================================
//Click event that will handle when the user clicks on the Login button
//Click event will handle thought submit data to be posted to the backend

// $(document).ready(function() {



// $("#thought-submit").on("click", function(event) {
//     console.log("thought-submit clicked");
//     event.preventDefault();


    // Make a Thought object
    // let newThought = {
    //     first_name: $("#first_name").val().trim(),
    //     last_name: $("#last_name").val().trim(),
    //     body: $("#body").val().trim(),
    //     date: $("#date").val().trim(),
        // date: moment().format("YYYY-MM-DD HH:mm:ss")
    // };

    // console.log(newThought);

    // Send an AJAX POST-request with jQuery
    // $.post("/api/thought", newThought)

    // On success, run the following code
        // .then(function(response) {
        //     console.log(response);
            // var row = $("<div>");
            //
            // row.addClass("post");
            //
            // row.preppend("<p>" + newThoughtPost.thought_name + " posted: </p>");
            // row.prepend("<p>" + newThoughtPost.body + "</p>");
            // row.prepend("<p>At " + moment(thought_date.created_at).format("h:mma on dddd") + "</p>");
            //
            // $("#modal2-show").prepend(row);
            //
            // row.addClass("thought");
            //
            // row.append("<p>" + newThought.author + " thoughts: </p>");
            // row.append("<p>" + newThought.body + "</p>");
            // row.append("<p>At " + moment(newThought.created_at).format("h:mma on dddd") + "</p>");
            //
            // $("#thought").prepend(row);


        // });

    // Empty each input box by replacing the value with an empty string
    // $("#thought").val("");

    // $("#thought-box").val("");
// });
// });
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