var db = require("../models");
const controller = require('../controllers/thoughts42dayp2_controllers')
module.exports = function(app) {
    // Find all users and return them to the user with res.json
    app.get("/api/user/all", controller.getUsers);

    app.get("/api/user/", controller.getUsers);

    app.post("/api/user", controller.createUser);

    app.post("/api/thought", controller.createThought);

    app.get("/api/user/:id", controller.getUserById);

};
