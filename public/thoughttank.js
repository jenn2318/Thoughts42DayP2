// $(document).ready(function(){
//     $('.parallax').parallax();
// });


// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.parallax');
//     var instances = M.Parallax.init(elems, options);
// });

// Or with jQuery

// $(document).ready(function(){
//     $('.parallax').parallax();
// });



/// JOE  I think this is right
// When user clicks submit-btn
// Maybe create a DATE for newThought
// $(".btn").on("click", function(event) {
//   event.preventDefault();

//   // Make a newThought object
//   var newThought = {
//     first_name: $("#first_name").val().trim(),
//     last_name: $("#last_name").val().trim(),
//     body: $("#textarea1").val().trim(),
//     created_at: moment().format("YYYY-MM-DD HH:mm:ss")
//   };

//   console.log(newThought);



///CHIRP???
///  Need to split Author and create a #first_name and #last_name
  // Send an AJAX POST-request with jQuery
  // $.post("/api/new", newThought)
  //   // On success, run the following code
  //   .done(function() {

  //     var row = $("<div>");
  //     row.addClass("chirp");

  //     row.append("<p>" + newThought.first_name +  newThought.last_name + " chirped: </p>");
  //     row.append("<p>" + newThought.body + "</p>");
  //     row.append("<p>At " + moment(newThought.created_at).format("h:mma on dddd") + "</p>");

  //     $("#textarea1").prepend(row);

  //   });


///  I think this is right
  // Empty each input box by replacing the value with an empty string
//   $("#first_name").val("");
//   $("#last_name").val("");
//   $("#textarea1").val("");
// });


///  Need to split Author and create a #first_name and #last_name
// When the page loads, grab all of our chirps
// $.get("/api/all", function(data) {

//   if (data.length !== 0) {

//     for (var i = 0; i < data.length; i++) {

//       var row = $("<div>");
//       row.addClass("chirp");

//       row.append("<p>" + data[i].first_name + data[i].last_name + " chirped.. </p>");
//       row.append("<p>" + data[i].body + "</p>");
//       row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

//       $("#textarea1").prepend(row);

//     }

//   }

// });
