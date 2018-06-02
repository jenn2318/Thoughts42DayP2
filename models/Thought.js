module.exports = function(sequelize, DataTypes) {
    var Thought = sequelize.define("Thought", {
        title: DataTypes.STRING,
        body: DataTypes.STRING,

    });
    return Thought;
};
