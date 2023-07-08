const output = document.getElementById('output');
const output2 = document.getElementById('output2');

/* STEP 1a: Create a new object using a regular function */
function createNewFunction(name) {
    var obj = {
        name: name,
        greeting: function() {
            console.log("Hi there! My name is " + this.name + ".");
        }
    }

    return obj;
}
/* STEP 1b: Use the console to create a new person, and then invoke the function represented by .greeting() */

/* STEP 2a: In order to be a bit more concise, JavaScript allows us to use constructor functions - 
rewrite the above function, without returning anything. Capitalize the name of the function. */

/* STEP 2b: Use the console to create a couple of different people, using the 'new' keyword, 
and again invoking the .greeting() method for each person */

/* STEP 3a: Build the complete constructor for the object Person (comment out the above function first).
 Include name (first and last), age, gender, interests, bio (function), and greeting (function). */

function Animal(animalName, animalType, animalAge) {
    this.animalName = animalName;
    this.animalType = animalType;
    this.animalAge = animalAge;

    this.greeting = function() {
        console.log("Hi there! My name is " + this.animalName + " and I am a " + this.animalType + ".");
    }
}


class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    };

    greeting = function() {
        console.log("Hi there! My name is " + this.firstName + " " + this.lastName + ".");
    };
}

var person1 = new Person("John", "Doe", 24);
person1.greeting();

// Get all the method names the instantiated object

// Get all the properties of the instantiated object
console.log(Object.keys(person1));

/* STEP 3b: Instantiate a new Person based on the above constructor */

/* STEP 3c: Attempt to access the various properties of person1 using the console. */
// person1['age']
// person1.interests[1]
// person1.bio()

/* STEP 4a: Alternatively, you can use the Object() constructor to create an object. eg. car*/
var fruit = new Object();

fruit.name = "Peach";
fruit.color = "Orange";
fruit.flavour = "Sweet";
fruit.isRipe = true;
fruit.eat = function() {
    delete this;
}

fruit.describe = function() {
    console.log(`This ${this.name} is ${this.color} and tastes ${this.flavour}`);
}

fruit.describe();

fruit.eat();

console.log(fruit);

/* STEP 4b: Once 'car' is created, add various properties and methods… */

/* STEP 4c: Change some of the properties of 'car' in the console, then invoke the car.blurb() function */

/* STEP 5a: Yet another approach is to use the create() method. Let's see how the above car object can be used to create another object */

/* STEP 5b: Output to the paragraph anotherCar.brand - you will see that it has retained the properties of the original object. */

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