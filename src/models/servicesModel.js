const { DataTypes } = require('sequelize');
const sequelize = require('../dbconfig/dbconn'); // Corrected path

const Service = sequelize.define('Service', {
  serviceId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    // autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  icon: {
    type: DataTypes.STRING,
    allowNull: true // URL or icon name
  }
}, {
  tableName: 'services',
  timestamps: true
});

module.exports = Service;