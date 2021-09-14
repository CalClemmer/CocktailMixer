# Project 2 Planning

Fork & Clone this repo.

## Part 1

Review the [Project 2 requirements](https://github.com/SEI802/project-2-ideas/blob/main/requirements.md) and check out some [examples](https://romebell.gitbook.io/sei-802/projects/past-projects/project2).

In this space below, list **THREE** ideas for your Project 2. For each idea, include [user stories](https://revelry.co/user-stories-that-dont-suck/) for each idea and a link to the API(s) you want to use for it.

--------------------------------------------------------
1. Cocktail mixing app 
- User Story: I have ingredients and want to know what cocktails I can make. I input my ingredient list and the app shows me what cocktails I can make. 
2. Dartboard Stocks 
- User Story: I want to invest money but don't know what stocks to buy. Input how much money you want to spend and how many different stocks you want to buy and the app randomly shows you some, with information about how the stocks have done in the past. 
Studies show that the vast majority of investment forms offer worse results than if you randomly pick stocks, for example by throwing darts at a newspaper and buying the stocks the dart hits. 
3. I need a hobby
- User Story: I want to find a hobby. I go to the site, put in some general interests, and the app tries to provide me hobbies I might be interested in. The site could provide cost estimates for getting into the hobby and links to other sites describing how to get into the hobby. 

---------------------------------------------------------


---

## Part 2

In the space below:
* either embed or link a completed ERD for your approved P2 idea
* if there are any changes/additions to your user stories, place your full set of revised user stories here
* either embed or link wireframes for every page of your app

----------------------------------------------------------
### ERD
https://imgur.com/a/vhpDZCy
----------------------------------------------------------
### User Stories

----------------------------------------------------------
### Wireframes
https://imgur.com/a/Hd68VZ6
----------------------------------------------------------



## How to Install
1. git clone down to machine 
2. run "npm install" to install all dependencies 
3. run "sequelize db:migrate"
4. run "sequelize db:seed:all" 
5. run "npm run start" 
6. Go to localhost:3000 to view page 

Here's some code I'm proud of: 

```javascript
const filteredCocktailsIds = [];
  parsedRecipes.forEach(function(recipe){
  // returns true if recipe ingredient is NOT in inventory
    if (!ingredientIds.includes(recipe.ingredientId)) {
      filteredCocktailsIds.push(recipe.cocktailId)
    }
})
```

This code took a long time to figure out 
```javascript
  router.post('/deleteingredient', async function(req, res) {
  
    const { id } = req.user.get(); 

    let ingredientId = req.body.ingredient
  
    const delIngredient = await Inventory.destroy({ 
      where: {
        userId: id, 
        ingredientId 
      }
    });
```