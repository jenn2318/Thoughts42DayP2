let path = require("path");

//GET Requests...this code will handle when a user visits the home page, thought tank page and archive page

module.exports = function(app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/thought.html"));
    });
    app.get("/thoughttank", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/thoughttank.html"));

    });

    app.get("/archive", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/archive.html"));

    });

}

