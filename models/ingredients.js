'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingredients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Ingredients.belongsToMany(models.User,{through: 'Inventory', foreignKey: 'ingredientId'});
      models.Ingredients.belongsToMany(models.Cocktails,{through: 'Recipes', foreignKey: 'ingredientId'});

    }
  };
  Ingredients.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ingredients',
  });
  return Ingredients;
};