
const path = require("path");
const express = require('express');
const router = express.Router();
const db = require("../models");


 // These Routes will handle the handle bars object if needed and the post routes to post thoughts to the archive

    router.get("/", function (req, res) {
        db.User.findAll({}).then(function(data) {
            // let hbsObject = {thought: data};
            res.send(data);
        });
    });


    // // Here we will add a new thought
    // router.post("/api/thoughttank/", function(req, res) {
    //    db.User.makeOne(req.body.thought_name, function(){
    //         res.json('/thoughttank');
    //     });
    // });
    //
    // //Here will be how to archive a thought
    // router.post("/api/thoughttank/archive/:id", function(req, res) {
    //     db.User.updateOne(req.params.id, function(){
    //         res.json('/archive');
    //     });
    // });






//Export the routes
module.exports = router;