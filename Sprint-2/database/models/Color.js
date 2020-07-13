module.exports = (sequelize, DataTypes) => {

    const Color = sequelize.define ("Color",{
    id: {
        type : DataTypes.INTEGER
    },
    color: {
        type: DataTypes.STRING
    },
},{tableName: "COLOR"});

return Color;
}