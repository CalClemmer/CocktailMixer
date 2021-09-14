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
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Manhattan_Cocktail2.jpg/220px-Manhattan_Cocktail2.jpg',
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
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Whiskey_Old_Fashioned1.jpg/220px-Whiskey_Old_Fashioned1.jpg',
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

const longIslandIcedTea = {
  name: 'Long Island Iced Tea',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Long_Island_Iced_Teas.jpg/220px-Long_Island_Iced_Teas.jpg',
  blurb: 'Add 0.5oz Tequila, 0.5oz Vodka, 0.5oz White Rum, 0.5oz Triple Sec, 0.5oz Gin, 0.8oz Lemon Juice, 1oz Simple Syrup, and a splash of Cola into highball glass filled with ice. Stir gently. Optionally garnish with lemon slice.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(longIslandIcedTea);

const margarita = {
  name: 'Margarita',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/MargaritaReal.jpg/220px-MargaritaReal.jpg',
  blurb: 'Pour 1.75oz Tequila, 0.75oz Triple Sec, and 0.5oz Lime Juice into shaker with ice. Shake well and strain into cocktail glass rimmed with salt.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(margarita);

const mimosa= {
  name: 'Mimosa',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Pool-side_Mimosas_at_The_Standard_Hotel.jpg/220px-Pool-side_Mimosas_at_The_Standard_Hotel.jpg',
  blurb: 'Mix equal parts chilled Champagne and Orange Juice into the glass. Serve cold.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(mimosa);

const mojito= {
  name: 'Mojito',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Mojito98775.jpeg/220px-Mojito98775.jpeg',
  blurb: 'Muddle 6 sprigs of mint leaves with 0.75 oz Simple Syrup and 1oz Lime Juice. Add a splash of Soda Water and fill the glass with cracked ice. Pour in 1.25oz rum and top with soda water. Garnish with sprig of mint leaves and lemon slice. Serve in a Collins glass with straw.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(mojito);

const moscowMule= {
  name: 'Moscow Mule',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Moscow_Mule_at_Rye%2C_San_Francisco.jpg/220px-Moscow_Mule_at_Rye%2C_San_Francisco.jpg',
  blurb: 'Combine 1.5oz Vodka and 8oz Ginger Beer in a highball glass filled with ice. Add a large splash of lime juice. Stir gently. Garnish.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(moscowMule);

const pinaColada= {
  name: 'Pina Colada',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Pi%C3%B1a_Colada.jpg/220px-Pi%C3%B1a_Colada.jpg',
  blurb: 'Blend 1.5oz White Rum, 1oz Coconut Cream, and 1.5oz Pineapple Juice with ice in an electric blender, pour into a large goblet or Hurricane glass and serve.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(pinaColada);

const cosmopolitan= {
  name: 'Cosmopolitan',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Cosmopolitan_%285076906532%29.jpg/220px-Cosmopolitan_%285076906532%29.jpg',
  blurb: 'Shake 1.25oz Vodka, 0.5oz Triple Sec, 0.5oz Lime Juice, and 1oz Cranberry Juice in cocktail shaker filled with ice. Strain into a large cocktail glass. Garnish with lime slice.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(cosmopolitan);

const sexOnTheBeach= {
  name: 'Sex on the Beach',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Sex_On_The_Beach.jpg/180px-Sex_On_The_Beach.jpg',
  blurb: 'Build 1.5oz Vodka, 0.75oz Peach Schnapps, 1.5oz Orange Juice, and 1.5oz Cranberry Juice in a highball glass filled with ice. Garnish with orange slice.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(sexOnTheBeach);

const tequilaSunrise= {
  name: 'Tequila Sunrise',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tequila_Sunrise_glass.jpg/220px-Tequila_Sunrise_glass.jpg',
  blurb: 'Pour 1.5oz Tequila and 3oz Orange Juice into glass over ice. Add 0.5oz Grenadine, which will sink to the bottom. Stir gently to create the sunrise effect. Garnish and serve.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(tequilaSunrise);

const french75= {
  name: 'French 75',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/French_75.jpg/220px-French_75.jpg',
  blurb: 'Combine 1oz Gin, a splash of Simple Syrup, and 0.5oz Lemon Juice in a cocktail shaker filled with ice. Shake vigorously and strain into a chilled champagne glass. Top up with 4oz Champagne. Stir gently.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(french75);

const mintJulep= {
  name: 'Mint Julep',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Mint_Julep_im_Silberbecher.jpg/220px-Mint_Julep_im_Silberbecher.jpg',
  blurb: 'In a highball glass gently muddle 4 Mint Leaves, a teaspoon of Sugar, and 2 teaspoons of water. Fill the glass with cracked ice, add 1.5oz Bourbon and stir well until the glass is well frosted. Garnish with a mint sprig.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(mintJulep);

const seaBreeze= {
  name: 'Sea Breeze',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Cocktail_with_vodka.jpg/220px-Cocktail_with_vodka.jpg',
  blurb: 'Build 1.5oz Vodka, 4.5oz Cranberry Juice, and 1oz Grapefruit Juice in a highball glass filled with ice. Garnish with lime wedge.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(seaBreeze);

const irishCoffee= {
  name: 'Irish Coffee',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Irish_coffee_glass.jpg/220px-Irish_coffee_glass.jpg',
  blurb: 'Heat 3oz coffee, 1.5oz whiskey and a teaspoon of sugar; do not boil. Pour into glass and top with cream; serve hot.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(irishCoffee);

const grasshopper= {
  name: 'Grasshopper',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Grasshopper_cocktail.jpg/220px-Grasshopper_cocktail.jpg',
  blurb: 'Pour 1oz creme de menthe, 1oz creme de cacao, and 1oz cream into a cocktail shaker with ice. Shake briskly and then strain into a chilled cocktail glass.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(grasshopper);

const hemingwaySpecial= {
  name: 'Hemingway Special',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Hemingway_Daiquiri.jpg/220px-Hemingway_Daiquiri.jpg',
  blurb: 'Pour 2oz White Rum, 1.25oz Grapefruit Juice, 0.5oz Maraschino Liqueur, and 0.5oz Lime Juice into a shaker with ice. Shake.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(hemingwaySpecial);

const darkNStormy= {
  name: 'Dark \'n\' Stormy',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/DarknStormy.jpg/220px-DarknStormy.jpg',
  blurb: 'Fill glass with ice, add 3.5oz Ginger Beer and top with 2oz Dark Rum. Garnish with lime wedge.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(darkNStormy);

const paloma= {
  name: 'Paloma',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/TequilaPaloma.JPG/220px-TequilaPaloma.JPG',
  blurb: '	Pour 1.5oz Tequila into highball glass. Add a splash of Lime Juice. Add ice and a pinch of salt, then top with 4oz Grapefruit Soda and stir gently.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(paloma);

const corpseReviver= {
  name: 'Corpse Reviver',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Corpse_Reviver_2.jpg/220px-Corpse_Reviver_2.jpg',
  blurb: 'Shake 1oz Gin, 1oz Lemon Juice, 1oz Triple Sec, 1oz Lillet Blanc, and a dash of Absinthe together in a mixer with ice. Strain into chilled cocktail glass. Garnish with orange zest.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(corpseReviver);


const gimlet= {
  name: 'Gimlet',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Gimlet_cocktail.jpg/220px-Gimlet_cocktail.jpg',
  blurb: 'Mix 2oz Gin, 1oz Lime Juice, and 0.5oz Simple Syrup and serve in a cocktail. Garnish with a slice of lime',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(gimlet);

const spritzVeneziano= {
  name: 'Spritz Veneziano',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Select_Spritz.jpg/220px-Select_Spritz.jpg',
  blurb: 'Build 3oz Prosecco, 2oz Campari, and a splash of Carbonated Water into a wine glass filled with ice. Stir gently.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(spritzVeneziano);

const bellini= {
  name: 'Bellini',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Bellini_Cipriani%2C_Macaroni_Grill%2C_Dunwoody_GA.jpg/220px-Bellini_Cipriani%2C_Macaroni_Grill%2C_Dunwoody_GA.jpg',
  blurb: 'Pour 1.5oz peach purée into chilled glass, add 3oz Prosecco. Stir gently.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
cocktailSeedArray.push(bellini);


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

const tequila = {
  name: 'Tequila',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(tequila); 

const cola = {
  name: 'Cola',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(cola); 

const champagne = {
  name: 'Champagne',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(champagne); 

const mintLeaves = {
  name: 'Mint Leaves',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(mintLeaves); 

const gingerBeer = {
  name: 'Ginger Beer',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(gingerBeer); 

const coconutCream = {
  name: 'Coconut Cream',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(coconutCream); 

const cranberryJuice = {
  name: 'Cranberry Juice',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(cranberryJuice); 

const peachSchnapps = {
  name: 'Peach Schnapps',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(peachSchnapps); 

const grenadine = {
  name: 'Grenadine',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(grenadine); 

const grapefruitJuice = {
  name: 'Grapefruit Juice',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(grapefruitJuice); 

const irishWhiskey = {
  name: 'Irish Whiskey',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(irishWhiskey); 

const coffee = {
  name: 'Coffee',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(coffee); 

const cream = {
  name: 'Cream',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(cream); 

const darkRum= {
  name: 'Dark Rum',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(darkRum); 

const grapeFruitSoda= {
  name: 'Grapefruit Soda',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(grapeFruitSoda); 

const lilletBlanc= {
  name: 'Lillet Blanc',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(lilletBlanc); 

const prosecco= {
  name: 'Prosecco',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(prosecco); 

const peachPuree= {
  name: 'Peach Puree',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(peachPuree); 

const pineappleJuice= {
  name: 'Pineapple Juice',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
ingredientSeedArray.push(pineappleJuice); 



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

const mart1 = {
  cocktailId: 13,
  ingredientId: 11,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const mart2 = {
  cocktailId: 13,
  ingredientId: 22,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
recipeSeedArray.push(mart1);
recipeSeedArray.push(mart2);

const gf1 = {
  cocktailId: 14,
  ingredientId: 11,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const gf2 = {
  cocktailId: 14,
  ingredientId: 14,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const gf3 = {
  cocktailId: 14,
  ingredientId: 26,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const gf4 = {
  cocktailId: 14,
  ingredientId: 10,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
recipeSeedArray.push(gf1);
recipeSeedArray.push(gf2);
recipeSeedArray.push(gf3);
recipeSeedArray.push(gf4);

const jc1 = {
  cocktailId: 15,
  ingredientId: 11,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const jc2 = {
  cocktailId: 15,
  ingredientId: 14,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const jc3 = {
  cocktailId: 15,
  ingredientId: 26,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const jc4 = {
  cocktailId: 15,
  ingredientId: 10,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
recipeSeedArray.push(jc1);
recipeSeedArray.push(jc2);
recipeSeedArray.push(jc3);
recipeSeedArray.push(jc4);

const lw1 = {
  cocktailId: 16,
  ingredientId: 11,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const lw2 = {
  cocktailId: 16,
  ingredientId: 24,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const lw3 = {
  cocktailId: 16,
  ingredientId: 27,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const lw4 = {
  cocktailId: 16,
  ingredientId: 15,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
recipeSeedArray.push(lw1);
recipeSeedArray.push(lw2);
recipeSeedArray.push(lw3);
recipeSeedArray.push(lw4);

const manh1 = {
  cocktailId: 17,
  ingredientId: 28,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const manh2 = {
  cocktailId: 17,
  ingredientId: 9,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const manh3 = {
  cocktailId: 17,
  ingredientId: 29,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
recipeSeedArray.push(manh1);
recipeSeedArray.push(manh2);
recipeSeedArray.push(manh3);

const martinez1 = {
  cocktailId: 18,
  ingredientId: 11,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const martinez2 = {
  cocktailId: 18,
  ingredientId: 9,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const martinez3 = {
  cocktailId: 18,
  ingredientId: 15,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const martinez4 = {
  cocktailId: 18,
  ingredientId: 20,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
recipeSeedArray.push(martinez1);
recipeSeedArray.push(martinez2);
recipeSeedArray.push(martinez3);
recipeSeedArray.push(martinez4);

const neg1 = {
  cocktailId: 19,
  ingredientId: 11,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const neg2 = {
  cocktailId: 19,
  ingredientId: 9,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const neg3 = {
  cocktailId: 19,
  ingredientId: 8,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
recipeSeedArray.push(neg1);
recipeSeedArray.push(neg2);
recipeSeedArray.push(neg3);

const of1 = {
  cocktailId: 20,
  ingredientId: 19,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const of2 = {
  cocktailId: 20,
  ingredientId: 29,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const of3 = {
  cocktailId: 20,
  ingredientId: 25,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
recipeSeedArray.push(of1);
recipeSeedArray.push(of2);
recipeSeedArray.push(of3);

const para1 = {
  cocktailId: 21,
  ingredientId: 11,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const para2 = {
  cocktailId: 21,
  ingredientId: 12,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const para3 = {
  cocktailId: 21,
  ingredientId: 4,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
recipeSeedArray.push(para1);
recipeSeedArray.push(para2);
recipeSeedArray.push(para3);

const pla1 = {
  cocktailId: 22,
  ingredientId: 17,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const pla2 = {
  cocktailId: 22,
  ingredientId: 24,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const pla3 = {
  cocktailId: 22,
  ingredientId: 26,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
recipeSeedArray.push(pla1);
recipeSeedArray.push(pla2);
recipeSeedArray.push(pla3);

const saz1 = {
  cocktailId: 23,
  ingredientId: 5,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const saz2 = {
  cocktailId: 23,
  ingredientId: 31,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const saz3 = {
  cocktailId: 23,
  ingredientId: 25,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const saz4 = {
  cocktailId: 23,
  ingredientId: 30,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
recipeSeedArray.push(saz1);
recipeSeedArray.push(saz2);
recipeSeedArray.push(saz3);
recipeSeedArray.push(saz4);

const sc1 = {
  cocktailId: 24,
  ingredientId: 5,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const sc2 = {
  cocktailId: 24,
  ingredientId: 18,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const sc3 = {
  cocktailId: 24,
  ingredientId: 14,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}

recipeSeedArray.push(sc1);
recipeSeedArray.push(sc2);
recipeSeedArray.push(sc3);

const stin1 = {
  cocktailId: 25,
  ingredientId: 5,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const stin2 = {
  cocktailId: 25,
  ingredientId: 32,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
recipeSeedArray.push(stin1);
recipeSeedArray.push(stin2);

const ws1 = {
  cocktailId: 26,
  ingredientId: 19,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const ws2 = {
  cocktailId: 26,
  ingredientId: 14,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const ws3 = {
  cocktailId: 26,
  ingredientId: 26,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
recipeSeedArray.push(ws1);
recipeSeedArray.push(ws2);
recipeSeedArray.push(ws3);

const liit1 = {
  cocktailId: 27,
  ingredientId: 33,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const liit2 = {
  cocktailId: 27,
  ingredientId: 1,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const liit3 = {
  cocktailId: 27,
  ingredientId: 17,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const liit4 = {
  cocktailId: 27,
  ingredientId: 18,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const liit5 = {
  cocktailId: 27,
  ingredientId: 11,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const liit6 = {
  cocktailId: 27,
  ingredientId: 14,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const liit7 = {
  cocktailId: 27,
  ingredientId: 26,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const liit8 = {
  cocktailId: 27,
  ingredientId: 34,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
recipeSeedArray.push(liit1);
recipeSeedArray.push(liit2);
recipeSeedArray.push(liit3);
recipeSeedArray.push(liit4);
recipeSeedArray.push(liit5);
recipeSeedArray.push(liit6);
recipeSeedArray.push(liit7);
recipeSeedArray.push(liit8);

const marg1 = {
  cocktailId: 28,
  ingredientId: 33,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const marg2 = {
  cocktailId: 28,
  ingredientId: 18,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const marg3 = {
  cocktailId: 28,
  ingredientId: 24,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
recipeSeedArray.push(marg1);
recipeSeedArray.push(marg2);
recipeSeedArray.push(marg3);

const mim1 = {
  cocktailId: 29,
  ingredientId: 35,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const mim2 = {
  cocktailId: 29,
  ingredientId: 4,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
recipeSeedArray.push(mim1);
recipeSeedArray.push(mim2);

const moj1 = {
  cocktailId: 30,
  ingredientId: 17,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const moj2 = {
  cocktailId: 30,
  ingredientId: 24,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const moj3 = {
  cocktailId: 30,
  ingredientId: 36,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const moj4 = {
  cocktailId: 30,
  ingredientId: 26,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
recipeSeedArray.push(moj1);
recipeSeedArray.push(moj2);
recipeSeedArray.push(moj3);
recipeSeedArray.push(moj4);

const mosc1 = {
  cocktailId: 31,
  ingredientId: 1,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const mosc2 = {
  cocktailId: 31,
  ingredientId: 24,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const mosc3 = {
  cocktailId: 31,
  ingredientId: 37,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
recipeSeedArray.push(mosc1);
recipeSeedArray.push(mosc2);
recipeSeedArray.push(mosc3);

const pc1 = {
  cocktailId: 32,
  ingredientId: 17,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const pc2 = {
  cocktailId: 32,
  ingredientId: 38,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const pc3 = {
  cocktailId: 32,
  ingredientId: 51,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
recipeSeedArray.push(pc1);
recipeSeedArray.push(pc2);
recipeSeedArray.push(pc3);

const cos1 = {
  cocktailId: 33,
  ingredientId: 1,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const cos2 = {
  cocktailId: 33,
  ingredientId: 18,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const cos3 = {
  cocktailId: 33,
  ingredientId: 24,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const cos4 = {
  cocktailId: 33,
  ingredientId: 39,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
recipeSeedArray.push(cos1);
recipeSeedArray.push(cos2);
recipeSeedArray.push(cos3);
recipeSeedArray.push(cos4);

const sob1 = {
  cocktailId: 34,
  ingredientId: 1,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const sob2 = {
  cocktailId: 34,
  ingredientId: 40,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const sob3 = {
  cocktailId: 34,
  ingredientId: 4,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const sob4 = {
  cocktailId: 34,
  ingredientId: 39,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}

recipeSeedArray.push(sob1);
recipeSeedArray.push(sob2);
recipeSeedArray.push(sob3);
recipeSeedArray.push(sob4);

const ts1 = {
  cocktailId: 35,
  ingredientId: 33,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const ts2 = {
  cocktailId: 35,
  ingredientId: 4,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const ts3 = {
  cocktailId: 35,
  ingredientId: 41,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
recipeSeedArray.push(ts1);
recipeSeedArray.push(ts2);
recipeSeedArray.push(ts3);

const f751 = {
  cocktailId: 36,
  ingredientId: 11,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const f752 = {
  cocktailId: 36,
  ingredientId: 26,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const f753 = {
  cocktailId: 36,
  ingredientId: 14,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const f754 = {
  cocktailId: 36,
  ingredientId: 35,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}

recipeSeedArray.push(f751);
recipeSeedArray.push(f752);
recipeSeedArray.push(f753);
recipeSeedArray.push(f754);

const mj1 = {
  cocktailId: 37,
  ingredientId: 19,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const mj2 = {
  cocktailId: 37,
  ingredientId: 36,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const mj3 = {
  cocktailId: 37,
  ingredientId: 25,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
recipeSeedArray.push(mj1);
recipeSeedArray.push(mj2);
recipeSeedArray.push(mj3);

const sb1 = {
  cocktailId: 38,
  ingredientId: 1,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const sb2 = {
  cocktailId: 38,
  ingredientId: 39,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const sb3 = {
  cocktailId: 38,
  ingredientId: 42,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}

recipeSeedArray.push(sb1);
recipeSeedArray.push(sb2);
recipeSeedArray.push(sb3);

const ic1 = {
  cocktailId: 39,
  ingredientId: 43,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const ic2 = {
  cocktailId: 39,
  ingredientId: 44,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const ic3 = {
  cocktailId: 39,
  ingredientId: 45,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const ic4 = {
  cocktailId: 39,
  ingredientId: 25,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}

recipeSeedArray.push(ic1);
recipeSeedArray.push(ic2);
recipeSeedArray.push(ic3);
recipeSeedArray.push(ic4);

const gh1 = {
  cocktailId: 40,
  ingredientId: 32,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const gh2 = {
  cocktailId: 40,
  ingredientId: 6,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const gh3 = {
  cocktailId: 40,
  ingredientId: 45,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
recipeSeedArray.push(gh1);
recipeSeedArray.push(gh2);
recipeSeedArray.push(gh3);

const hs1 = {
  cocktailId: 41,
  ingredientId: 17,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const hs2 = {
  cocktailId: 41,
  ingredientId: 42,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const hs3 = {
  cocktailId: 41,
  ingredientId: 15,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const hs4 = {
  cocktailId: 41,
  ingredientId: 24,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
recipeSeedArray.push(hs1);
recipeSeedArray.push(hs2);
recipeSeedArray.push(hs3);
recipeSeedArray.push(hs4);

const dns1 = {
  cocktailId: 42,
  ingredientId: 46,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const dns2 = {
  cocktailId: 42,
  ingredientId: 37,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
recipeSeedArray.push(dns1);
recipeSeedArray.push(dns2);

const pal1 = {
  cocktailId: 43,
  ingredientId: 33,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const pal2 = {
  cocktailId: 43,
  ingredientId: 24,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const pal3 = {
  cocktailId: 43,
  ingredientId: 47,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
recipeSeedArray.push(pal1);
recipeSeedArray.push(pal2);
recipeSeedArray.push(pal3);

const corpse1 = {
  cocktailId: 44,
  ingredientId: 11,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const corpse2 = {
  cocktailId: 44,
  ingredientId: 14,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const corpse3 = {
  cocktailId: 44,
  ingredientId: 18,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const corpse4 = {
  cocktailId: 44,
  ingredientId: 48,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const corpse5 = {
  cocktailId: 44,
  ingredientId: 31,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}

recipeSeedArray.push(corpse1);
recipeSeedArray.push(corpse2);
recipeSeedArray.push(corpse3);
recipeSeedArray.push(corpse4);
recipeSeedArray.push(corpse5);

const gim1 = {
  cocktailId: 45,
  ingredientId: 11,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const gim2 = {
  cocktailId: 45,
  ingredientId: 24,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const gim3 = {
  cocktailId: 45,
  ingredientId: 26,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}

recipeSeedArray.push(gim1);
recipeSeedArray.push(gim2);
recipeSeedArray.push(gim3);

const sV1 = {
  cocktailId: 46,
  ingredientId: 49,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const sV2 = {
  cocktailId: 46,
  ingredientId: 8,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const sV3 = {
  cocktailId: 46,
  ingredientId: 10,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}

recipeSeedArray.push(sV1);
recipeSeedArray.push(sV2);
recipeSeedArray.push(sV3);

const bell1 = {
  cocktailId: 47,
  ingredientId: 49,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}
const bell2 = {
  cocktailId: 47,
  ingredientId: 50,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}

recipeSeedArray.push(bell1);
recipeSeedArray.push(bell2);

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
