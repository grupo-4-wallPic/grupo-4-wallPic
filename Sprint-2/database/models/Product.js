module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define ("Product",{
    id: DataTypes.INTEGER,
    
    name: DataTypes.STRING,

    description: DataTypes.TEXT,

    images:  DataTypes.STRING
    
},{tableName: "PRODUCTS", timestamps: false});
    
return Product;
}