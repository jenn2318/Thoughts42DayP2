
// Sequelize (capital) references the standard library
let Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
let sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
let User = sequelize.define("user", {
    // the routeName gets saved as a string
    routeName: Sequelize.STRING,
    // the name of the user (a string)
    name: Sequelize.STRING,
    // the user's profession (a string)
    role: Sequelize.STRING,
}, {
    timestamps: false
});

// Syncs with DB
User.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = User;
