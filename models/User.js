// const Sequelize = require("sequelize");
// const connection = new Sequelize("thoughts_db", "root", "root")


module.exports = function(sequelize, DataTypes) {
    let User = sequelize.define("User", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,

    });
    return User;
};

//Syncs with db

// User.syn();