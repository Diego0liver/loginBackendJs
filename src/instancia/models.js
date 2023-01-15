const Sequelize = require('sequelize')
const database = require('./mysql')


const Login = database.define('login',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull:false
    },
    email:{
        type: Sequelize.STRING,
        allowNull:false
    },
    password:{
        type: Sequelize.STRING
    }
},{
    tableName: 'login',
    timestamps: false
})

module.exports = Login