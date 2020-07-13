module.exports = (sequelize, DataTypes) => {

    const Category = sequelize.define ("Category",{
    id: {
        type : DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
},{tableName: "CATEGORIES"});

return Category;
}