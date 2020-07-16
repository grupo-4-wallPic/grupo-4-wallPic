module.exports = (sequelize, DataTypes) => {

    const Color = sequelize.define ("Color",{
    id: DataTypes.INTEGER,

    color: DataTypes.STRING
    
},{tableName: "COLOR", timestamps: false});
    Color.associate = function(models){
    Color.hasMany(models.Product, {foreignKey: 'categoryId', as: 'category'}) 
}
return Color;
}