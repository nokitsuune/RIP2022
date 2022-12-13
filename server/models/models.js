const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date_order: {type:DataTypes.DATE}

})

const BasketOrder = sequelize.define('basket_order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Vitamin = sequelize.define('vitamin', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
})
const VitaminInfo = sequelize.define('vitamin_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})
const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Status = sequelize.define('status', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(Status)
Status.belongsTo(Basket)

Basket.hasMany(BasketOrder)
BasketOrder.belongsTo(Basket)

Type.hasMany(Vitamin)
Vitamin.belongsTo(Type)

Vitamin.hasMany(BasketOrder)
BasketOrder.belongsTo(Vitamin)

Vitamin.hasMany(VitaminInfo, {as:'info'});
VitaminInfo.belongsTo(Vitamin)

module.exports = {
    User,
    Basket,
    BasketOrder,
    Vitamin,
    VitaminInfo,
    Status,
    Type

}