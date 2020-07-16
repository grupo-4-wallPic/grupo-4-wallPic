module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define ("Products",{
    id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
    
    name: DataTypes.STRING,

    description: DataTypes.TEXT,

    images:  DataTypes.STRING
    
},{tableName: "PRODUCTS", timestamps: false});
    
return Product;
}