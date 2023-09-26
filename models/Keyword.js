const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Keyword extends Model {}

Keyword.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
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
    modelName: 'keyword',
  }
);

module.exports = Keyword;
