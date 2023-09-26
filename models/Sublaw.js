const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Sublaw extends Model {}

Sublaw.init(
  {
    law_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'laws',
        key: 'law_id',
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
    sublaw_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'sublaw',
  },
);

module.exports = Sublaw;
