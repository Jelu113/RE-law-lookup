const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Explanation extends Model {}

Explanation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    sublaw_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'sublaw',
        key: 'id',
      },
    },
    text: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    citation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    keyword_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'keyword',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'explanation',
  }
);

module.exports = Explanation;
