const { DataTypes } = require('sequelize');
const sequelize = require('../dbconfig/dbconn');
const Plan = require('./plansModel');

const Feature = sequelize.define('Feature', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  plan_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: Plan, key: 'id' }
  },
  feature: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'features',
  timestamps: false
});

Feature.belongsTo(Plan, { foreignKey: 'plan_id' });
Plan.hasMany(Feature, { foreignKey: 'plan_id' });

module.exports = Feature;