const { DataTypes } = require('sequelize');
const sequelize = require('../dbconfig/dbconn');

const News = sequelize.define('News', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: true
  },
  published: {
    type: DataTypes.DATE,
    allowNull: false
  },
  img: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'news',
  timestamps: true
});

module.exports = News;