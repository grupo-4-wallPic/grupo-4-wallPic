module.exports = (sequelize, DataTypes) => {

    const Size = sequelize.define ("Size",{
    id: DataTypes.INTEGER,
    
    size: DataTypes.STRING,

    price: DataTypes.DECIMAL(6, 2)

},{tableName: "Size", timestamps: false});

return Size;
}