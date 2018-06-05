// const Sequelize = require("sequelize");
// const connection = new Sequelize("thoughts_db", "root", "root")


module.exports = function(sequelize, DataTypes) {
    let Thought = sequelize.define("Thought", {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        date: DataTypes.DATE,
        body: DataTypes.TEXT,

    });
    return Thought;
};

//Syncs with db
// Thought.sync();