const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Explanation extends Model {}

Explanation.init(
  {
    sublaw_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'laws',
        key: 'sublaw_id',
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
    explanation_id: {
      type: DataTypes.STRING,
      allowNull: false,
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
