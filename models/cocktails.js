'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cocktails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Cocktails.belongsToMany(models.Ingredients,{through: 'Recipes', foreignKey: 'cocktailId'});
      models.Cocktails.belongsToMany(models.User,{through: 'Favorites', foreignKey: 'cocktailId'});
    }
  };
  Cocktails.init({
    name: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    blurb: DataTypes.STRING(1000)
  }, {
    sequelize,
    modelName: 'Cocktails',
  });
  return Cocktails;
};