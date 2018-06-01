// html-routes.js - this file offers a set of routes for sending users to the various html pages
// ============================================================

// Dependencies
// =============================================================
let path = require('path');

//GET Requests...this code will handle when a user visits the home page, the thought tank page, and the archive page


module.exports = function(app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/thought42.html"));
    });

    app.get("/thoughttank", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/thoughttank.html"));

    });

    app.get("/archive", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/archive.html"));

    });

};

