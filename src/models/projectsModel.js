const { DataTypes } = require('sequelize');
const sequelize = require('../dbconfig/dbconn');

const Projects = sequelize.define('Projects', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  summary: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  started: {
    type: DataTypes.DATE,
    allowNull: false
  },
  completed: {
    type: DataTypes.DATE,
    allowNull: true
  },
  owner: {
    type: DataTypes.STRING,
    allowNull: false
  },
  technologies: {
    type: DataTypes.STRING, // Comma-separated or JSON string
    allowNull: false
  },
  demo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'projects',
  timestamps: true
});

module.exports = Projects;