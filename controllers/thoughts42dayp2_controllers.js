
let path = require("path");
let express = require('express');
let router = express.Router();

//GET Requests...this code will handle when a user visits the home page and the thought tank page

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

 // These Routes will handle the handle bars object if needed and the post routes to post thought data

    router.get("/", function (req, res) {
        thought.selectAll(function(data) {
            let hbsObject = {thought: data};
            res.send('thought', hbsObject);
        });
    });


    // Here we will add a new thought
    router.post("/api/thoughttank/", function(req, res) {
        thought.insertOne(req.body.thought_name, function(){
            res.send('/thoughttank');
        });
    });

    router.post("/api/thoughttank/", function(req, res) {
        thought.insertOne(req.body.thought_date, function(){
            res.send('/thoughttank');
        });
    });


    //Here will be how to archive a thought
    router.post("/api/thoughttank/archive/:id", function(req, res) {
        thought.updateOne(req.params.id, function(){
            res.send('/archive');
        });
    });






//Export the routes
module.exports = router;