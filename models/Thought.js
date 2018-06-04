module.exports = function(sequelize, DataTypes) {
    let Thought = sequelize.define("Thought", {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        date: DataTypes.DATE,
        body: DataTypes.TEXT,

    });
    return Thought;
};
