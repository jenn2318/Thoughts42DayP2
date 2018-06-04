module.exports = function(sequelize, DataTypes) {
    var Thought = sequelize.define("Thought", {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        date: DataTypes.DATE,
        body: DataTypes.TEXT,

    });
    return Thought;
};
