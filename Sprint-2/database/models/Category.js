module.exports = (sequelize, DataTypes) => {

    const Category = sequelize.define ("Categories",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    
    name: DataTypes.STRING
    
},{tableName: "CATEGORIES", timestamps: false
});
    // Category.associate = function(models){
    //     Category.hasMany(models.Product, {foreignKey: 'categoryId', as: 'category'}) 
    // }

return Category;
}