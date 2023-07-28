// Stores my student info
const studentInfo = document.querySelector(".student-info");
const defaultText = "You can also press this button to get more information about the author of this page";
studentInfo.textContent = defaultText;

// Create references to the elements
const capitalHolder = document.querySelector(".capital-holder");
const languagesHolder = document.querySelector(".languages-holder");
const languagseList = document.querySelector(".languages-list");
const flagContainer = document.querySelector(".flag-container");
const flagImage = document.querySelector(".flag-element");
const inputField = document.querySelector("input");
const buttonElement = document.querySelector(".container button");
const revealButton = document.querySelector("#reveal-button");

const timeouts = [];

var fetchedCountryName = "";

// Send an API request to get informaiton about a country
async function getCountryInfo(countryName) {

    const url = `https://restcountries.com/v3.1/name/${countryName}`;
    var resp = null;
    var result = null;

    try {
        resp = await fetch(url);
        result = await resp.json();
        console.log(result);
        fetchedCountryName = result[0].name.common;
    }
    catch(e) {
        alert("Country not found");

        console.log(e);

        // Clear all timeouts (prevents ovelapping of images)
        timeouts.forEach(timeout => clearTimeout(timeout))
        flagImage.src = "imgs/question-mark.svg";

        capitalHolder.textContent = `Could not find country ${countryName}`
        languagesHolder.textContent = "";
        languagseList.innerHTML = "";

        return;
    }

    const flagIcon = result[0].flag;
    const flagImageURL = result[0].flags["png"];
    const capitalName = result[0].capital[0];
    const coatOfArmsURL = result[0].coatOfArms["svg"];
    const languages = result[0].languages;

    // Clear all timeouts (prevents ovelapping of images)
    timeouts.forEach(timeout => clearTimeout(timeout));

    switchImage(flagImageURL, coatOfArmsURL, 0);

    capitalHolder.textContent = `Capital of ${fetchedCountryName} (${countryName}) is ${capitalName} ${flagIcon}`
    languagesHolder.textContent = `Languages spoken in ${fetchedCountryName} (${countryName}) are:`

    // Clear the list first
    languagseList.innerHTML = "";

    // Add languages to the list
    for(let [key, value] of Object.entries(languages)) {
        const listItem = document.createElement("li");
        listItem.textContent = `${key}: ${value}`;
        languagseList.appendChild(listItem);
    }
}

// Switches between flag and cloat of arms images
function switchImage(flag, coatOfArms, sequence) {
    var newSequence = null;

    if (sequence == 0) {
        newSequence = 1;
        flagImage.src = flag;
    }
    else {
        newSequence = 0;
        flagImage.src = coatOfArms;
    }

    // Create a timeout that would switch the image after 5 seconds
    const timeOutFunction = setTimeout(function() { switchImage(flag, coatOfArms, newSequence); }, 5000);

    // Store timeout in the array (so it can be cleared later)
    timeouts.push(timeOutFunction);
}

// Event handler for the button
function buttonClickHandler(e) {

    const value = inputField.value;

    if (value == "") {
        alert("Please enter a country name");
        return;
    }

    console.log("Event triggered");
    const countryName = value;

    getCountryInfo(countryName);

    inputField.value = "";
}

// Add event listener to the button
buttonElement.addEventListener("click", buttonClickHandler);

function revealHideStudentInfo() {
    if ((studentInfo.style.display == "none") || (studentInfo.textContent == defaultText)) {
        console.log("Triggered");
        studentInfo.style.display = "flex";
        revealButton.textContent = "Hide Student Info";
        studentInfo.textContent = "David Boldyrev 200471230";
    }
    else {
        studentInfo.style.display = "none";
        revealButton.textContent = "Reveal Student Info";
    }
}

revealButton.addEventListener("click", revealHideStudentInfo);
