module.exports = (sequelize, DataTypes) => {

    const Size = sequelize.define ("Sizes",{
    id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
    
    size: DataTypes.STRING,

    price: DataTypes.DECIMAL(6, 2)

},{tableName: "Size", timestamps: false});

return Size;
}