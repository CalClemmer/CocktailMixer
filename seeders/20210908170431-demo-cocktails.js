'use strict';

const cocktailSeedArray = [];
const ingredientSeedArray = [];
const recipeSeedArray = [];


//============================COCKTAILS=======================================

const whiteRussian = {
  name: 'White Russian',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/48/White-Russian.jpg',
  blurb: 'Mix equal parts Vodka, Kahlua, and Half and Half. Add ice cubes and serve in a short tumbler',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(whiteRussian);

const blackRussian = {
  name: 'Black Russian',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Black_Russian.jpg/220px-Black_Russian.jpg',
  blurb: 'Mix equal parts Vodka and Kahlua. Add ice cubes and serve in a short tumbler.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(blackRussian);

const screwdriver = {
  name: 'Screwdriver',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Screwdriver%2C_Birmingham-Shuttlesworth_International_Airport%2C_Birmingham_AL.jpg/1024px-Screwdriver%2C_Birmingham-Shuttlesworth_International_Airport%2C_Birmingham_AL.jpg',
  blurb: 'Add one part Vodka for every three parts of Orange Juice. Add ice cubes and serve in a high ball glass.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(screwdriver);

const alexander = {
  name: 'Alexander',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Alexander_Cocktail.png',
  blurb: 'Add one ounce of Cognac, one ounce of Creme de Cacao, and one ounce of Light Cream. Shake all ingredients with ice and strain contents into a cocktail glass. Sprinkle nutmeg on top and serve.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(alexander);

const americano = {
  name: 'Americano',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Americano_cocktail_at_Nightwood_Restaurant.jpg',
  blurb: 'Pour the one ounce of Campari and one ounce of Red Vermouth over ice into an old fashioned glass, add a splash of soda water and garnish with half orange slice and a lemon twist.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(americano);

const angelFace = {
  name: 'Angel Face',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/97/IBA_Cocktail_Angel_Face_%2828068833805%29.jpg',
  blurb: 'Pour one ounce of Gin, one ouncer of Apricot Brandy, and one ounce of Calvados into cocktail shaker filled with ice cubes. Shake and strain into a chilled cocktail glass.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(angelFace);

const aviation = {
  name: 'Aviation',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Aviation_Cocktail.jpg',
  blurb: 'Pour one and a half ounces of Gin, half an ounce of Lemon Juice, half an ounce of Maraschino Liqueur, and a splash of Creme de Violette into cocktail shaker filled with ice cubes. Shake and strain into a chilled cocktail glass.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(aviation);

const betweenTheSheets = {
  name: 'Between the Sheets',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Between_The_Sheets_Cocktail.jpg',
  blurb: 'Pour one ounce of White Rum, one ounce of Cognac, one ounce of Triple Sec, and two thirds an ounce of Lemon Juice into shaker with ice cubes, shake, strain into chilled cocktail glass.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(betweenTheSheets);

const boulevardier = {
  name: 'Boulevardier',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Society_Lounge_-_Boulevardier_-_16164913902.jpg',
  blurb: 'Stir 1.5 ounces of Bourbon, one ounce of Red Vermouth, and one ounce of Campari with ice, strain, garnish and serve in an old fashioned glass.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(boulevardier);

const casino = {
  name: 'Casino',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Casino_Cocktail_%289120690108%29.jpg',
  blurb: 'Pour 1.25 ounces of Gin, a third of an ounce of Maraschino Liqueur, a third of an ounce of Lemon Juice, and two dashesw of Orange Bitters into shaker with ice cubes. Shake well. Strain into chilled cocktail glass. Garnish with a lemon twist and a maraschino cherry. Serve without a straw.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(casino);

const cloverClub = {
  name: 'Clover Club Cocktail',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Cloverclub.jpg',
  blurb: 'Dry shake to emulsify one and a half ounces of Gin, a half ounce of Lemon Juice, a half ounce of Raspberry Syrup, a splash of Dry Vermouth, and an Egg White, add ice, shake and served straight up in a cocktail glass.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(cloverClub);

const daiquiri = {
  name: 'Daiquiri',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Classic_Daiquiri_in_Cocktail_Glass.jpg',
  blurb: '	In a cocktail shaker add two ounces of White Rum, two thirds ounces of Lime Juice, and a third of an ounce of Sugar. Stir well to dissolve the sugar. Add ice and shake. Strain into chilled cocktail glass.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(daiquiri);

const martini = {
  name: 'Martini',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/80/15-09-26-RalfR-WLC-0084.jpg',
  blurb: 'Pour two ounces of Gin and a third of an ounce of Dry Vermouth into mixing glass with ice cubes. Stir well. Strain in chilled martini glass. Squeeze oil from lemon peel onto the drink, or garnish with olive.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(martini);

const ginFizz = {
  name: 'Gin Fizz',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/15-09-26-RalfR-WLC-0032.jpg',
  blurb: 'Shake 1.5oz Gin, 1oz Lemon Juice, 0.33oz Simple Syrup with ice cubes. Pour into old fashioned glass. Top with soda water.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(ginFizz);

const johnCollins = {
  name: 'John Collins',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/IBA_Cocktail_John_Collins_%2829221732881%29.jpg',
  blurb: 'Pour 1.5oz Gin, 1oz Lemon Juice, 0.5oz Simple Syrup, and 2oz Carbonated Water directly into highball glass filled with ice. Stir gently. Garnish with a lemon slice and maraschino cherry. Add a dash of Angostura bitters.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(johnCollins);

const lastWord = {
  name: 'Last Word',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/43/The_Last_Word_cocktail_raised.jpg',
  blurb: 'Shake 0.75oz of Gin, 0.75oz of Lime Juice, 0.75oz of green Chartreuse, and 0.75oz of Maraschino Liqueur with ice and strain into a cocktail glass.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(lastWord);

const manhattan= {
  name: 'Manhattan',
  imgUrl: 'https://en.wikipedia.org/wiki/Manhattan_(cocktail)',
  blurb: 'Stir 1.66oz of Rye Whiskey, 0.67oz of Red Vermouth, and a dash of Angostura bitters over ice, strained into a chilled glass, garnished with a Maraschino cherry, and served up',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(manhattan);

const martinez= {
  name: 'Martinez',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Negroni_served_in_Vancouver_BC.jpg',
  blurb: 'Stir 1.5oz Gin, 1.5oz Red Vermouth, a splash of Maraschino Liueur, and two dashes of Orange Bitters over ice, strained into a chilled glass, garnished with a lemon zest, and served up.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(martinez);

const negroni= {
  name: 'Negroni',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Martinez_Cocktail.jpg',
  blurb: 'Stir 1oz Gin, 1oz Red Vermouth, and 1oz Campari into glass over ice, garnish with an orange slice and serve.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(negroni);

const oldFashioned= {
  name: 'Old Fashioned',
  imgUrl: 'https://en.wikipedia.org/wiki/File:Whiskey_Old_Fashioned1.jpg',
  blurb: 'Place sugar cube in old fashioned glass and saturate with Angostura Bitters, add a few dashes of plain water. Muddle until dissolved. Fill the glass with ice cubes and add 1.5oz Bourbon. Garnish with orange slice or zest, and a cocktail cherry.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(oldFashioned);

const paradise= {
  name: 'Paradise',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Paradise_cocktail.jpg',
  blurb: 'Shake 1.25oz Gin, 0.67oz Apricot Brandy, and 0.5oz Orange Juice together over ice. Strain into cocktail glass and serve chilled.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(paradise);

const plantersPunch= {
  name: 'Planter\'s Punch',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Planters_Punch_2.jpg',
  blurb: 'Pour 1.5oz Rum, 0.5oz Lime Juice, and 1oz Simple Syrup into a highball glass over ice. Garnish with an orange zest.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(plantersPunch);

const sazerac = {
  name: 'Sazerac',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/SazeracRooseveltNOLA1July2009.JPG',
  blurb: 'Rinse a chilled old-fashioned glass with 0.33oz absinthe, add crushed ice, and set it aside. Stir 1.67oz Cognac, a dash of sugar, and two dashes of Peychaud\'s Bitters over ice and set it aside. Discard the ice and any excess absinthe from the prepared glass, and strain the drink into the glass. Add the lemon peel for garnish.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(sazerac);

const sidecar = {
  name: 'Sidecar',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Sidecar-cocktail.jpg',
  blurb: 'Pour 1.67oz Cognac, 0.67oz Triple Sec, and 0.67oz Lemon Juice into cocktail shaker filled with ice. Shake well and strain into cocktail glass.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(sidecar);

const stinger = {
  name: 'Stinger',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Stinger_Cocktail.jpg',
  blurb: 'Pour 1.67oz Cognac and 0.67oz Creme de Menthe in a mixing glass with ice, stir and strain into a cocktail glass. May also be served on rocks in a rocks glass.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(stinger);

const whiskeySour = {
  name: 'Whiskey Sour',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Whiskey_Sour.jpg',
  blurb: 'Shake 1.5oz Bourbon, 1oz Lemon Juice, and 0.5oz Simple Syrup with ice. Strain into chilled glass, garnish with a maraschino cherry and half orange slice and serve.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(whiskeySour);


//===========================INGREDIENTS================================

const vodka = {
  name: 'Vodka',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(vodka);

const kahlua = {
  name: 'Kahlua',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(kahlua);

const halfHalf = {
  name: 'Half and Half',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(halfHalf);

const OJ = {
  name: 'Orange Juice',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(OJ);

const cognac = {
  name: 'Cognac',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(cognac);

const cremeDeCacao = {
  name: 'Creme de Cacao',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(cremeDeCacao);

const lightCream = {
  name: 'Light Cream',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(lightCream);

const Campari = {
  name: 'Campari',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(Campari);

const redVermouth = {
  name: 'Red Vermouth',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(redVermouth);

const sodaWater = {
  name: 'Soda Water',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(sodaWater);

const gin = {
  name: 'Gin',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(gin);

const apricotBrandy = {
  name: 'Apricot Brandy',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(apricotBrandy);

const calvados = {
  name: 'Calvados',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(calvados);

const lemonJuice = {
  name: 'Lemon Juice',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(lemonJuice);

const maraschinoLiqueur = {
  name: 'Maraschino Liqueur',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(maraschinoLiqueur);

const cremeDeViolette = {
  name: 'Creme de Violette',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(cremeDeViolette);

const whiteRum = {
  name: 'White Rum',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(whiteRum);

const tripleSec = {
  name: 'Triple Sec',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(tripleSec);

const bourbon = {
  name: 'Bourbon',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(bourbon);

const orangeBitters = {
  name: 'Orange Bitters',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(orangeBitters);

const raspberrySyrup = {
  name: 'Raspberry Syrup',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(raspberrySyrup);

const dryVermouth = {
  name: 'Dry Vermouth',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(dryVermouth);

const eggWhite = {
  name: 'Egg White',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(eggWhite);

const limeJuice = {
  name: 'Lime Juice',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(limeJuice);

const sugar = {
  name: 'Sugar',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(sugar);

const simpleSyrup = {
  name: 'Simple Syrup',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(simpleSyrup);

const carbonatedWater = {
  name: 'Carbonated Water',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(carbonatedWater);

const greenChartreuse = {
  name: 'Green Chartreuse',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(greenChartreuse);

const ryeWhiskey = {
  name: 'Rye Whiskey',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(ryeWhiskey);

const angosturaBitters = {
  name: 'Angostura Bitters',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(angosturaBitters); 

const peychaudsBitters = {
  name: 'Peychaud\'s Bitters',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(peychaudsBitters); 

const absinthe = {
  name: 'Absinthe',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(absinthe); 

const cremeDeMenthe = {
  name: 'Creme de Menthe',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(cremeDeMenthe); 



//=============================RECIPES=================================

const wR1 = {
  cocktailId: 1,
  ingredientId: 1,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const wR2 = {
  cocktailId: 1,
  ingredientId: 2,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const wR3 = {
  cocktailId: 1,
  ingredientId: 3,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
recipeSeedArray.push(wR1);
recipeSeedArray.push(wR2);
recipeSeedArray.push(wR3);

const bR1 = {
  cocktailId: 2,
  ingredientId: 1,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const bR2 = {
  cocktailId: 2,
  ingredientId: 2,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
recipeSeedArray.push(bR1);
recipeSeedArray.push(bR2);

const screw1 = {
  cocktailId: 3,
  ingredientId: 1,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const screw2 = {
  cocktailId: 3,
  ingredientId: 4,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}

recipeSeedArray.push(screw1);
recipeSeedArray.push(screw2);

const alex1 = {
  cocktailId: 4,
  ingredientId: 5,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const alex2 = {
  cocktailId: 4,
  ingredientId: 6,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const alex3 = {
  cocktailId: 4,
  ingredientId: 7,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
recipeSeedArray.push(alex1);
recipeSeedArray.push(alex2);
recipeSeedArray.push(alex3);

const amer1 = {
  cocktailId: 5,
  ingredientId: 8,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const amer2 = {
  cocktailId: 5,
  ingredientId: 9,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const amer3 = {
  cocktailId: 5,
  ingredientId: 10,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
recipeSeedArray.push(amer1);
recipeSeedArray.push(amer2);
recipeSeedArray.push(amer3);

const angel1 = {
  cocktailId: 6,
  ingredientId: 11,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const angel2 = {
  cocktailId: 6,
  ingredientId: 12,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const angel3 = {
  cocktailId: 6,
  ingredientId: 13,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
recipeSeedArray.push(angel1);
recipeSeedArray.push(angel2);
recipeSeedArray.push(angel3);

const avi1 = {
  cocktailId: 7,
  ingredientId: 11,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const avi2 = {
  cocktailId: 7,
  ingredientId: 14,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const avi3 = {
  cocktailId: 7,
  ingredientId: 15,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const avi4 = {
  cocktailId: 7,
  ingredientId: 16,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
recipeSeedArray.push(avi1);
recipeSeedArray.push(avi2);
recipeSeedArray.push(avi3);
recipeSeedArray.push(avi4);

const bts1 = {
  cocktailId: 8,
  ingredientId: 17,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const bts2 = {
  cocktailId: 8,
  ingredientId: 5,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const bts3 = {
  cocktailId: 8,
  ingredientId: 18,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const bts4 = {
  cocktailId: 8,
  ingredientId: 14,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
recipeSeedArray.push(bts1);
recipeSeedArray.push(bts2);
recipeSeedArray.push(bts3);
recipeSeedArray.push(bts4);

const bou1 = {
  cocktailId: 9,
  ingredientId: 19,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const bou2 = {
  cocktailId: 9,
  ingredientId: 9,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const bou3 = {
  cocktailId: 9,
  ingredientId: 8,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}

recipeSeedArray.push(bou1);
recipeSeedArray.push(bou2);
recipeSeedArray.push(bou3);

const cas1 = {
  cocktailId: 10,
  ingredientId: 11,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const cas2 = {
  cocktailId: 10,
  ingredientId: 15,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const cas3 = {
  cocktailId: 10,
  ingredientId: 14,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const cas4 = {
  cocktailId: 10,
  ingredientId: 20,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}

recipeSeedArray.push(cas1);
recipeSeedArray.push(cas2);
recipeSeedArray.push(cas3);
recipeSeedArray.push(cas4);

const ccc1 = {
  cocktailId: 11,
  ingredientId: 11,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const ccc2 = {
  cocktailId: 11,
  ingredientId: 14,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const ccc3 = {
  cocktailId: 11,
  ingredientId: 21,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const ccc4 = {
  cocktailId: 11,
  ingredientId: 22,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const ccc5 = {
  cocktailId: 11,
  ingredientId: 23,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}

recipeSeedArray.push(ccc1);
recipeSeedArray.push(ccc2);
recipeSeedArray.push(ccc3);
recipeSeedArray.push(ccc4);
recipeSeedArray.push(ccc5);

const daq1 = {
  cocktailId: 12,
  ingredientId: 17,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const daq2 = {
  cocktailId: 12,
  ingredientId: 24,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const daq3 = {
  cocktailId: 12,
  ingredientId: 25,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
recipeSeedArray.push(daq1);
recipeSeedArray.push(daq2);
recipeSeedArray.push(daq3);

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cocktails', cocktailSeedArray, {})
    await queryInterface.bulkInsert('Ingredients', ingredientSeedArray, {})
    await queryInterface.bulkInsert('Recipes', recipeSeedArray, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cocktails', null, {});
    await queryInterface.bulkDelete('Recipes', null, {});
    await queryInterface.bulkDelete('Ingredients', null, {});
  }
};
