//Require the following npm packages inside of the server.js file:
//    * express
// * method-override
// * body-parser

// Dependencies
// ==============================================================================
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require('./models');

const PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(express.static('public'));
// app.use(express.static('app'));

const exphbs = require("express-handlebars");

//passport

var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// let routes = require("./controllers/thoughts42dayp2_controllers.js");

// app.use("/", routes)

// require('./routes/html-routes')(app);
// require('./routes/html-routes')(app);
require('./routes/html-routes')(app);
require('./routes/api-routes')(app);


db.sequelize.sync({force: true}).then(function(){
    app.listen(PORT, function() {
        console.log("App listening on PORT: " + PORT);
    });
});