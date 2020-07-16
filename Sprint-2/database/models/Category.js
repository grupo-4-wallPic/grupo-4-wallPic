module.exports = (sequelize, DataTypes) => {

    const Category = sequelize.define ("Category",{
    id: DataTypes.INTEGER,
    
    name: DataTypes.STRING
    
},{tableName: "CATEGORIES", timestamps: false
});
    Category.associate = function(models){
        Category.hasMany(models.Product, {foreignKey: 'categoryId', as: 'category'}) 
    }

return Category;
}