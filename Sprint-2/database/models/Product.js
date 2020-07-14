module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define ("Product",{
    id: {
        type : DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT
    },
    images: {
        type: DataTypes.STRING
    }
},{tableName: "PRODUCTS"});

return Product;
}