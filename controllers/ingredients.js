const express = require('express');
var router = express.Router();
const passport = require('../config/ppConfig');

const { User, Ingredients, Inventory, Cocktails, Recipes } = require('./models');


// trying to add ingredients to user inventory 
router.post('/addingredient', async function(req, res) {

    const { id } = req.user.get(); 
    //console.log('LOL LOOK HERE', req.body);
    //These both work fantastically for grabbing the form's input data 
    //console.log('Doggo?', req.body.ingredient);
    let ingredientId = req.body.ingredient
  
    // console.log('INGREDIENT INGREDIENT ID ID ID ', ingredientId)
  
    const addIngredient = await Inventory.create({ userId: id, ingredientId });
    // console.log(addIngredient.toJSON());
  
    res.redirect('/');
  });
  
  router.post('/deleteingredient', async function(req, res) {
  
    const { id } = req.user.get(); 
    //console.log('LOL LOOK HERE', req.body);
    //These both work fantastically for grabbing the form's input data 
    //console.log('Doggo?', req.body.ingredient);
    let ingredientId = req.body.ingredient
  
    const delIngredient = await Inventory.destroy({ 
      where: {
        userId: id, 
        ingredientId 
      }
    });
  
    res.redirect('/');
  });
  
  router.post('/deleteallingredients', async function(req, res) {
  
    const { id } = req.user.get(); 
    //console.log('LOL LOOK HERE', req.body);
    //These both work fantastically for grabbing the form's input data 
    //console.log('Doggo?', req.body.ingredient);
    const delIngredient = await Inventory.destroy({ 
      where: {
        userId: id, 
      }
    });
  
    res.redirect('/');
  });
  