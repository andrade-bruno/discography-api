'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artists extends Model {
    static associate(models) {
      // define association here
    }
  }
  Artists.init({
    title: DataTypes.STRING,
    age: DataTypes.TINYINT,
    mainGenre: DataTypes.STRING,
    avatar: DataTypes.STRING,
    bio: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Artists',
  });
  return Artists;
};