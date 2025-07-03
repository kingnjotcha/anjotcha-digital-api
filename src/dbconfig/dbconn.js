const { Sequelize } = require('sequelize');

db_name = process.env.DB_NAME
db_user =process.env.DB_USER
db_pwd =process.env.DB_PASSWORD

const sequelize = new Sequelize(db_name, db_user, db_pwd , {
    host: process.env.DB_HOST, 
    dialect:process.env.DIALECT,
    port: process.env.DB_PORT, 
    logging: false, // set to true for SQL query logging
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = sequelize;