
let path = require("path");
let express = require('express');
let router = express.Router();


 // These Routes will handle the handle bars object if needed and the post routes to post thoughts to the archive

    router.get("/", function (req, res) {
        thought.selectAll(function(data) {
            let hbsObject = {thought: data};
            res.json('thought', hbsObject);
        });
    });


    // Here we will add a new thought
    router.post("/api/thoughttank/", function(req, res) {
        thought.insertOne(req.body.thought_name, function(){
            res.json('/thoughttank');
        });
    });

    //Here will be how to archive a thought
    router.post("/api/thoughttank/archive/:id", function(req, res) {
        thought.updateOne(req.params.id, function(){
            res.json('/archive');
        });
    });






//Export the routes
module.exports = router;