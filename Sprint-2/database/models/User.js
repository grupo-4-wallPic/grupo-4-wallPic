module.exports = (sequelize, DataTypes) => {

const User = sequelize.define ("User",{
id: {
    type : DataTypes.INTEGER
},
name: {
    type: DataTypes.STRING
},
last_name: {
    type: DataTypes.STRING
},
email: {
    type: DataTypes.STRING
},
password: {
    type: DataTypes.STRING
},
newsletter: {
    type : DataTypes.INTEGER
},
createat: {
    type: DataTypes.DATE
},
updateat:{
    type: DataTypes.DATE
},
deleteat: {
    type:DataTypes.DATE
}
},{
    tableName: "USERS" });

return User;
}