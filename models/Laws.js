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
        }
    },
    keyword: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    additionalText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    statutesUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
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
  }
);

module.exports = Laws;
