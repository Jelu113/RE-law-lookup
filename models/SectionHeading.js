const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SectionHeading extends Model {}

Keyword.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
    },
    section_heading_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'section_heading',
  },
);

module.exports = SectionHeading;
