const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SectionHeading extends Model {}

SectionHeading.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    section_heading_name: {
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
    modelName: 'section_heading',
  },
);

module.exports = SectionHeading;
