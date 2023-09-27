const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Explanation extends Model {}

Explanation.init(
  {
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
      allowNull: false,
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'explanation',
  },
);

module.exports = Explanation;
