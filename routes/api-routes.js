var db = require("../models");

module.exports = function(app) {
    // Find all users and return them to the user with res.json
    app.get("/api/user/all", function(req, res) {
        db.User.findAll({user: data}).then(function(dbUser) {
            console.log('user', data);
            res.json(dbuser);
        });
    });

    app.post("/api/user", function(req, res) {
        // Create an User with the data available to us in req.body
        console.log(req.body);
        db.User.create(req.body).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    app.get("/api/user/:id", function(req, res) {
        // Find one user with the id in req.params.id and return them to the user with res.json
        db.User.findOne({
            where: {
                email: req.params.email,
                password: req.params.password,
            }
        }).then(function(dbUser) {
            console.log(dbUser);
            res.json(dbUser);
        });
    });

};
