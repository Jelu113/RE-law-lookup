const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Sublaw extends Model {}

Sublaw.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    laws_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
    modelName: 'sublaw',
  }
);

module.exports = Sublaw;
