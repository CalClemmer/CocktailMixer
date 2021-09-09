'use strict';

const cocktailSeedArray = [];
const ingredientSeedArray = [];
const recipeSeedArray = [];
const invSeedArray = [];
/*
        const whiteRussian = {
          name: 'WhiteRussian',
          imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/48/White-Russian.jpg',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }

      cocktailSeedArray.push(whiteRussian);
        
        const vodka = {
          name: 'Vodka',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }
        const kahlua = {
          name: 'Kahlua',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }
        const halfHalf = {
          name: 'Half and Half',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }

      ingredientSeedArray.push(vodka);
      ingredientSeedArray.push(kahlua);
      ingredientSeedArray.push(halfHalf);

*/
const inv1 = {
  userId: 1,
  ingredientId: 1,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}

invSeedArray.push(inv1);

// const wR1 = {
//   cocktailId: 1,
//   ingredientId: 1,
//   ingredientAmount: 1,
//   createdAt: new Date().toISOString(),
//   updatedAt: new Date().toISOString(),
// }
// const wR2 = {
//   cocktailId: 1,
//   ingredientId: 2,
//   ingredientAmount: 1,
//   createdAt: new Date().toISOString(),
//   updatedAt: new Date().toISOString(),
// }
// const wR3 = {
//   cocktailId: 1,
//   ingredientId: 3,
//   ingredientAmount: 1,
//   createdAt: new Date().toISOString(),
//   updatedAt: new Date().toISOString(),
// }

// recipeSeedArray.push(wR1);
// recipeSeedArray.push(wR2);
// recipeSeedArray.push(wR3);





module.exports = {
  up: async (queryInterface, Sequelize) => {
    //await queryInterface.bulkInsert('Cocktails', cocktailSeedArray, {})
    //await queryInterface.bulkInsert('Ingredients', ingredientSeedArray, {})
    await queryInterface.bulkInsert('Inventories', invSeedArray, {})
    //await queryInterface.bulkInsert('Recipes', recipeSeedArray, {})

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkDelete('users', null, {});
    //await queryInterface.bulkDelete('Recipes', null, {});
    await queryInterface.bulkDelete('Inventories', null, {});


    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
