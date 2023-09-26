const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Laws extends Model {}

Laws.init(
  {
    section_heading_id: {
      type: DataTypes.STRING,
      allowNull: false,
      autoIncrement: true,
      references: {
        model: 'section_heading',
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
    law_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'laws',
  },
);

module.exports = Laws;
