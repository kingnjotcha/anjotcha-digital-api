const { DataTypes } = require('sequelize');
const sequelize = require('../dbconfig/dbconn');

const Promotion = sequelize.define('Promotion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  offer: {
    type: DataTypes.STRING,
    allowNull: false
  },
  desc: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  valid: {
    type: DataTypes.DATE,
    allowNull: false
  },
  img: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'promotions',
  timestamps: true
});

module.exports = Promotion;