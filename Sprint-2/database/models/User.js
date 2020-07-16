module.exports = (sequelize, DataTypes) => {

const User = sequelize.define ("Users",{
id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },

name: DataTypes.STRING,

last_name: DataTypes.STRING,

email: DataTypes.STRING,

password: DataTypes.STRING,

newsletter: DataTypes.INTEGER,

createdAt: DataTypes.DATE,

updatedAt: DataTypes.DATE,

deleteAt: DataTypes.DATE,

},{tableName: "USERS"});

return User;
}