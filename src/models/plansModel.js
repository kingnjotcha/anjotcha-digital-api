const { DataTypes } = require('sequelize');
const sequelize = require('../dbconfig/dbconn');
const Service = require('./servicesModel');

const Plan = sequelize.define('Plan', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  service_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: Service, key: 'serviceId' }
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'plans',
  timestamps: false
});

Plan.belongsTo(Service, { foreignKey: 'service_id' });
Service.hasMany(Plan, { foreignKey: 'service_id' });

module.exports = Plan;