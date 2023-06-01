// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1 = document.querySelector("#noun1");
const verb = document.querySelector("#verb");
const adjective = document.querySelector("#adjective");
const noun2 = document.querySelector("#noun2");
const setting = document.querySelector("#setting");

// Constants for p tag to display query selectors
const choosenNoun1 = document.querySelector("#choosenNoun1");
const choosenVerb = document.querySelector("#choosenVerb");
const choosenAdjective = document.querySelector("#choosenAdjective");
const choosenNoun2 = document.querySelector("#choosenNoun2");
const choosenSetting = document.querySelector("#choosenSetting");

const allParagraphs = [choosenNoun1, choosenVerb, choosenAdjective, choosenNoun2, choosenSetting]

// Constants for final buttons and p tags
const playback = document.querySelector("#playback");
const random = document.querySelector("#random");
const reset = document.querySelector("#reset");
const readBtn = document.querySelector("#read");

const story = document.querySelector("#story");

// Variables for pre-defined arrays
var nouns1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
var verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
var nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Variables for count to grab array elements
var chosenNoun1 = -1;
var chosenVerb = -1;
var chosenAdjective = -1;
var chosenNoun2 = -1;
var chosenSetting = -1;

/* Functions
-------------------------------------------------- */

// concatenate the user story and display
function playback_on_click() {

    try {
        chosenNoun1 = grab_value("noun1");
        chosenVerb = grab_value("verb");
        chosenAdjective = grab_value("adjective");
        chosenNoun2 = grab_value("noun2");
        chosenSetting = grab_value("setting");
    }
    catch {
        alert("Please choose all the options!");
        return;
    }
    var fullStoryString = chosenNoun1 + " " + chosenVerb + " " + chosenAdjective + " " + chosenNoun2 + " " + chosenSetting + ".";
    story.innerHTML = fullStoryString;

}

// reset the story
function reset_on_click() {
    var fullStory = "";

    story.innerHTML = fullStory;

    document.querySelectorAll("input[type=radio]").forEach((input) => {
        input.checked = false;
    });

    allParagraphs.forEach((p) => {
        p.innerHTML = "";
    })
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    var randomNoun1 = Math.floor(Math.random() * nouns1.length);
    var randomVerb = Math.floor(Math.random() * verbs.length);
    var randomAdjective = Math.floor(Math.random() * adjectives.length);
    var randomNoun2 = Math.floor(Math.random() * nouns2.length);
    var randomSetting = Math.floor(Math.random() * settings.length);

    var fullStory = nouns1[randomNoun1] + " " + verbs[randomVerb] + " " + adjectives[randomAdjective] + " " + nouns2[randomNoun2] + " " + settings[randomSetting] + ".";

    story.innerHTML = fullStory;
}

// Create a function that will grab a chosen value from the form
function grab_value(name) {
    var value = document.querySelector(`input[name=${name}]:checked`).value;
    return value;
}

/* Event Listeners
-------------------------------------------------- */

playback.addEventListener("click", playback_on_click);
random.addEventListener("click", random_on_click);
reset.addEventListener("click", reset_on_click);


// Here comes the fun part :)

// Key used for the Google's text-to-speech API
var apiKey = "AIzaSyAKhQMrbrSetBVnJRSYuCII8fpuC-z_1pM";

let url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`;

function read_text() {

    var fullStory = story.innerHTML;

    if(fullStory == "") {
        alert("Please generate a story first!");
        return;
    }

    var body = {
        "input": {
            "text": fullStory
        },
        "voice": {
            "languageCode": "en-US",
            "ssmlGender": "NEUTRAL"
        },
        "audioConfig": {
            "audioEncoding": "MP3"
        }
    }

    var reqParams = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }

    fetch(url, reqParams).then((resp) => resp.json()).then((data) => {
        var audio = new Audio("data:audio/mp3;base64," + data.audioContent);
        audio.play();
    }).catch((err) => {
        console.log(err);
    })

}

readBtn.addEventListener("click", read_text);