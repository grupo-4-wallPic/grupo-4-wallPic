module.exports = (sequelize, DataTypes) => {

    const Color = sequelize.define ("Colors",{
    id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },

    color: DataTypes.STRING
    
},{tableName: "COLOR", timestamps: false});
//     Color.associate = function(models){
//     Color.hasMany(models.Product, {foreignKey: 'categoryId', as: 'category'}) 
// }
return Color;
}