module.exports = (sequelize, DataTypes) => {

    const Price = sequelize.define ("Price",{
    id: {
        type : DataTypes.INTEGER
    },
    price: {
        type: DataTypes.DECIMAL(6,2)
    },
},{tableName: "PRICE"});

return Price;
}