const express = require('express');
const layouts = require('express-ejs-layouts');
var router = express.Router();
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('../config/ppConfig');
const isLoggedIn = require('../middleware/isLoggedIn');
const user = require('../models/user');
const { Op } = require("sequelize");




const { User, Ingredients, Inventory, Cocktails, Recipes } = require('../models');

// trying to add ingredients to user inventory 
router.post('/addingredient', async function(req, res) {

    const { id } = req.user.get(); 
    let ingredientId = req.body.ingredient
    const addIngredient = await Inventory.create({ userId: id, ingredientId });

    res.redirect('/');
  });
  
  router.post('/deleteingredient', async function(req, res) {
  
    const { id } = req.user.get(); 

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
  

module.exports = router;