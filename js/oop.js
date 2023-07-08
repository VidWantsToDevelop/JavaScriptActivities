
// That's it! Now on to Lab 8...
// Create a JavaScript function that permits the creation of a hamburger object
// Consider that a hamburger has many options – that might include
/*
    different types of buns,
    vegetable garnishes, 
    assortments of cheeses, 
    specialty sauces, 
    different meat patties(beef, chicken, vegetarian), 
    single, double, or triple patty, 
    Pickles, hot peppers, olives etc.
*/
// add some extra if you want
// Make sure that the function allows for the output of a sentence that describes the hamburger, too
function Hamburger(garnishes, cheese, sauce, pattyType, hasPickles, combo, madeWithLove, name, meat, bunType = null) {
    this.garnishes = garnishes;
    this.cheese = cheese;
    this.sauce = sauce;
    this.pattyType = pattyType;
    this.hasPickles = hasPickles;
    this.combo = combo;
    this.madeWithLove = madeWithLove;
    this.name = name;
    this.meat = meat;
    this.bunType = bunType;

    this.cook = function() {
        console.log("Cooking the hamburger");
        console.log(`A smell of fried ${this.meat} fills the air`);
        console.log("Lovely song is playing on the background");

        setTimeout(() => {
            console.log("Hamburger is ready");
            console.log(combo ? "Don't forget your fries and pop!" : "Enjoy your meal!");
        }, 3000)
    }

    this.eat = function() {
        console.log("Taking a bite...");

        setTimeout(() => {
            if(this.madeWithLove) {
                console.log("This is the best hamburger I've ever had!");
            }
            else {
                console.log(hasPickles ? "At least it has pickles..." : "This is the worst hamburger I've ever had!")
            }
        }, 3000);
    }

    this.observe = function() {
        console.log("Observing the hamburger...");

        setTimeout(() => {
            if(bunType) {
                console.log(`I wouldn't expect ${this.name} to have such a tasy ${this.bunType} bun!`);
            }
            else {
                console.log("That's the first time in my life when I get a hamburger without a bun...");
            }
        }, 3000);
    }

    this.describe = function() {
        let description = `Pretty "${this.name}" hamburger with the ${this.pattyType} ${this.meat} patty, dressed with ${this.sauce} sauce, with the ${this.cheese} cheese on top of the ${this.garnishes}`;
        console.log(description);
    }
}


var hamburger1 = new Hamburger("tomatoes", "two slices of", "hot", "tripple", true, true, true, "Big Mac", "beef", "sesame seed");
var hamburger2 = new Hamburger("onions", "mozarello", "sweet and sour", "double", true, false, false, "FattyPatty", "fish");

setTimeout(() => {
    hamburger1.cook();
}, 3100);
setTimeout(() => {
    hamburger1.eat();
}, 6200);
setTimeout(() => {
    hamburger1.observe();
}, 9300);

setTimeout(() => {
    hamburger2.cook();
}, 12400);

setTimeout(() => {
    hamburger2.eat();
}, 15500);

setTimeout(() => {
    hamburger2.observe();
}, 18600);

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS