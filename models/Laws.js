const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Laws extends Model {}

Laws.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
    },
    section_heading_id: {
      type: DataTypes.INTEGER,
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
