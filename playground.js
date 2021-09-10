const { User, Ingredients, Inventory, Cocktails, Recipes } = require('./models');

queryInterface.addColumn('Cocktails', 'recipe', { type: DataTypes.STRING });