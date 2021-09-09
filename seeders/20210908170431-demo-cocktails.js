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
const OJ = {
  userId: 1,
  ingredientId: 4,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
invSeedArray.push(OJ);

// const OJ = {
//   name: 'Orange Juice',
//   createdAt: new Date().toISOString(),
//   updatedAt: new Date().toISOString(),
// }

// ingredientSeedArray.push(OJ);

// const cocktail = {
//   name: 'Screwdriver',
//   imgUrl: 'https://en.wikipedia.org/wiki/Screwdriver_(cocktail)#/media/File:Screwdriver,_Birmingham-Shuttlesworth_International_Airport,_Birmingham_AL.jpg',
//   createdAt: new Date().toISOString(),
//   updatedAt: new Date().toISOString(),
// }

// cocktailSeedArray.push(cocktail);

// const wR1 = {
//   cocktailId: 3,
//   ingredientId: 1,
//   ingredientAmount: 2,
//   createdAt: new Date().toISOString(),
//   updatedAt: new Date().toISOString(),
// }
// const wR2 = {
//   cocktailId: 3,
//   ingredientId: 4,
//   ingredientAmount: 2,
//   createdAt: new Date().toISOString(),
//   updatedAt: new Date().toISOString(),
// }

// recipeSeedArray.push(wR1);
// recipeSeedArray.push(wR2);





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
