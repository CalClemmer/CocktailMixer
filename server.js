require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('./config/ppConfig');
const isLoggedIn = require('./middleware/isLoggedIn');
const user = require('./models/user');


const { Ingredients, Inventory } = require('./models');

const SECRET_SESSION = process.env.SECRET_SESSION;
console.log(SECRET_SESSION);

console.log(process.env);

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);
app.use(session({
  secret: SECRET_SESSION,    // What we actually will be giving the user on our site as a session cookie
  resave: false,             // Save the session even if it's modified, make this false
  saveUninitialized: true    // If we have a new session, we save it, therefore making that true
}));

app.use(flash());            // flash middleware

app.use(passport.initialize());      // Initialize passport
app.use(passport.session());         // Add a session

app.use((req, res, next) => {
  console.log(res.locals);
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

app.get('/', isLoggedIn, async (req, res) => {
  try {
    //const allIngredients = await Ingredients.findAll({});

    const { id } = req.user.get(); 

    const parsedIngredients = await Ingredients.findAll({});
    console.log(parsedIngredients);

    const parsedInventory = await Inventory.findAll({});
    console.log(parsedInventory);

    res.render('index', { ingredients: parsedIngredients, inventory: parsedInventory, id });

  } catch (err) {
    console.log(err);
  }
})

/*
      app.get('/users', async (req, res) => {
        try {
            const allUsers = await User.findAll({});
            
            const parsedUsers = allUsers.map(u => u.toJSON())
            console.log(parsedUsers);

            //resizeBy.render('users/index', {users: parsedUsers});
            res.render('users/index', { users: parsedUsers });
            
        } catch (err) {
            console.log(err);
        }
      })
*/

app.use('/auth', require('./controllers/auth'))

app.get('/profile', isLoggedIn, (req, res) => {
  const { id, name, email } = req.user.get(); 
  res.render('profile', { id, name, email });
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`🎧 You're listening to the smooth sounds of port ${PORT} 🎧`);
});

module.exports = server;
