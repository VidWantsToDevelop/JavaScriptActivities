const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');


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


    let el = null;

    this.cook = function(output) {
        console.log("Cooking the hamburger");
        output.innerHTML += "<p>Cooking the hamburger</p>";
        console.log(`A smell of fried ${this.meat} fills the air`);
        output.innerHTML += `<p>A smell of fried ${this.meat} fills the air</p>`;
        console.log("Lovely song is playing on the background");
        output.innerHTML += "<p>Lovely song is playing on the background</p>";

        setTimeout(() => {
            console.log("Hamburger is ready");
            output.innerHTML += "<p>Hamburger is ready</p>";
            const comboState = combo ? "Don't forget your fries and pop!" : "Enjoy your meal!";
            console.log(comboState);
            output.innerHTML += `<p>${comboState}</p>`;
        }, 3000)
    }

    this.eat = function(output) {
        console.log("Taking a bite...");
        output.innerHTML += "<p>Taking a bite...</p>";

        setTimeout(() => {
            if(this.madeWithLove) {
                console.log("This is the best hamburger I've ever had!");
                output.innerHTML += "<p>This is the best hamburger I've ever had!</p>";
            }
            else {
                const picklesState = hasPickles ? "At least it has pickles..." : "This is the worst hamburger I've ever had!"
                console.log(picklesState);
                output.innerHTML += `<p>${picklesState}</p>`;
            }
        }, 3000);
    }

    this.observe = function(output) {
        console.log("Observing the hamburger...");
        output.innerHTML += "<p>Observing the hamburger...</p>";

        setTimeout(() => {
            if(bunType) {
                const observation = `I wouldn't expect ${this.name} to have such a tasy ${this.bunType} bun!`;
                console.log(observation);
                output.innerHTML += `<p>${observation}</p>`;
            }
            else {
                console.log("That's the first time in my life when I get a hamburger without a bun...");
                output.innerHTML += "<p>That's the first time in my life when I get a hamburger without a bun...</p>";
            }
        }, 3000);
    }

    this.describe = function(output) {
        let description = `Pretty "${this.name}" hamburger with the ${this.pattyType} ${this.meat} patty, dressed with ${this.sauce} sauce, with the ${this.cheese} cheese on top of the ${this.garnishes}`;
        console.log(description);
        output.innerHTML += `<p>${description}</p>`;
    }
}


var hamburger1 = new Hamburger("tomatoes", "two slices of", "hot", "tripple", true, true, true, "Big Mac", "beef", "sesame seed");
var hamburger2 = new Hamburger("onions", "mozarello", "sweet and sour", "double", true, false, false, "FattyPatty", "fish");

setTimeout(() => {
    hamburger1.cook(output1);
}, 3100);
setTimeout(() => {
    hamburger1.eat(output1);
}, 6200);
setTimeout(() => {
    hamburger1.observe(output1);
}, 9300);

setTimeout(() => {
    hamburger2.cook(output2);
}, 12400);

setTimeout(() => {
    hamburger2.eat(output2);
}, 15500);

setTimeout(() => {
    hamburger2.observe(output2);
}, 18600);

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS