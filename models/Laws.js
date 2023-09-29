const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Laws extends Model {}

Laws.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    section_heading_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'section_heading',
        key: 'id',
      },
    },
    text: {
      type: DataTypes.TEXT,
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
    modelName: 'laws',
  },
);

module.exports = Laws;
