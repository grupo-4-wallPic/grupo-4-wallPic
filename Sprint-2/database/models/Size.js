module.exports = (sequelize, DataTypes) => {

    const Size = sequelize.define ("Size",{
    id: {
        type : DataTypes.INTEGER
    },
    size: {
        type: DataTypes.STRING
    },
},{tableName: "Size"});

return Size;
}