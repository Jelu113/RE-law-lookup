const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Sublaw extends Model {}

Sublaw.init(
  {
    laws_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'laws',
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
    modelName: 'sublaw',
  },
);

module.exports = Sublaw;
