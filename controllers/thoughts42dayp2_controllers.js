
const path = require("path");
const express = require('express');
const router = express.Router();
const db = require("../models");


 // These Routes will handle the handle bars object if needed and the post routes to post thoughts to the archive
const controller = {
    getUsers: function (req, res) {
       return(
           db.User.findAll({}).then(function(dbUser) {
            console.log('user', dbUser);
            res.json(dbUser);
        })
    )
    },
    createUser: function(req, res) {
        // Create an User with the data available to us in req.body
        return(
            db.User.create(req.body).then(function (dbUser) {
            res.json(dbUser);
        })
    )
    },
    getUserById: function(req, res) {
        // Find one user with the id in req.params.id and return them to the user with res.json
        return(

            db.User.findOne({
            where: {
                id: req.params.id,
            }
        }).then(function(dbUser) {
            console.log(dbUser);
            res.json(dbUser);
        })
    )
    }
};




//Export the routes
module.exports = controller;