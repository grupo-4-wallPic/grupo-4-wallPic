module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define ("Products",{
    id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
    
    name: DataTypes.STRING,

    description: DataTypes.TEXT,

    categoryId: DataTypes.INTEGER,

    images:  DataTypes.STRING
    
},{tableName: "PRODUCTS", timestamps: false});
    
return Product;
}