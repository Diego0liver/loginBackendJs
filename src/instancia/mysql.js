const {Sequelize} = require('sequelize')
const dotenv  = require('dotenv')

dotenv.config()

const sequelize = new Sequelize(
    process.env.MYSQL_BD,
     process.env.MYSQL_USER,
     process.env.MYSQL_PASSWORD,
    {
        dialect: 'mysql',
        port: process.env.MYSQL_PORT
    }
)

module.exports = sequelize