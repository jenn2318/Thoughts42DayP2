// Requiring our models
let db = require("../models");
let express = require('express');
let router = express.Router();

// Routes
// =============================================================
module.exports = function(app) {

    // GET route for getting all of the posts
    app.get("/api/posts", function(req, res) {
        let query = {};
        if (req.query.thought_name) {
            query.ThoughtName = req.query.thought_name;
        }
        db.Post.findAll({
            where: query
        }).then(function(dbPost) {
            res.json(dbPost);
        });
    });

    // Get route for retrieving a single post
    app.get("/api/posts/:id", function(req, res) {
        db.Post.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbPost) {
            console.log(dbPost);
            res.json(dbPost);
        });
    });

    // POST route for saving a new post by a user
    app.post("/api/posts", function(req, res) {
        db.Post.create(req.body).then(function(dbPost) {
            res.json(dbPost);
        });
    });


    // PUT route for updating posts by a user
    app.put("/api/posts", function(req, res) {
        db.Post.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function(dbPost) {
            res.json(dbPost);
        });
    });
};
