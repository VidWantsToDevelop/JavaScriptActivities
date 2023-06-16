// STEP 1: Initialize and declare variables
var displayedImage = document.querySelector(".displayed-img");
var thumbBar = document.querySelector(".thumb-bar");

/* STEP 2: Loop 5 times to create the <img> elements */
for (var i = 1; i < 6; i++) {
    var newImage = document.createElement("img");
    newImage.setAttribute("src", "images/pic" + i + ".jpg");
    thumbBar.appendChild(newImage);
    /* STEP 3: Build event handler for each <img> */
    // newImage.onclick = function(event) {
    // 	var imgSrc = event.target.getAttribute('src');
    // 	displayImage(imgSrc);
    // }
}

// Continuing lab 5 :). Just wanted to add a default outline for the first picutre
var initialImage = document.querySelector(`.thumb-bar img[src="${displayedImage.getAttribute("src")}"]`)

initialImage.style.outline = "5px solid red";
initialImage.style.position = "relative";
initialImage.style.zIndex = "10";


/* STEP 4: Function to change the src of the main <img> */
function displayImage(value) {
    displayedImage.setAttribute("src", value);
}

/* STEP 5: Event Delegation
Instead of adding event handlers for each image, how about event delegation? Build a click handler on the parent element, and capture each target (and its attributes) from the event object */
thumbBar.onclick = function (event) {
    // event.target is the element that was clicked
    if (event.target && event.target.nodeName === "IMG") {
        var img = event.target;
        var imgSrc = img.getAttribute("src");
        displayImage(imgSrc);
        // Lab 5 STEP G: Call the clearWayfinding() function that you built below - and enjoy the result!
        clearWayfinding();
        // Lab 5 STEP A: Inside the thumbBar.onclick event handler function, and also inside the if statement, change the event.target CSS outline property to "5px solid red"
        img.style.outline = "5px solid red";
        // Lab 5 STEP B: Next, change the event.target CSS position property to "relative"
        img.style.position = "relative";
        // Lab 5 STEP C: And then set the CSS z-index property to "10" so that the thumbnail clicked is on top of all the others
        img.style.zIndex = "10";
    }
};


// Lab 5 STEP D: Initialize and declare a var called 'thumbImgs' using the querySelectorAll method to grab all the IMG elements inside the .thumb-bar
var thumbImgs = document.querySelectorAll(".thumb-bar > img")
// Lab 5 STEP E: Build a function called 'clearWayfinding()' that loops through the thumbImgs array with a FOR loop
const clearWayfinding = () => {
    for (let i = 0; i < thumbImgs.length; i++) {
        thumbImgs[i].style.outlineWidth = 0;
        thumbImgs[i].style.zIndex = 0;
    }
}

const h1 = document.querySelector("h1");
h1.onclick = clearWayfinding;
// Lab 5 STEP F: Inside the clearWayfinding function, for each thumbImgs IMG element, set the CSS outline-width property to "0", and the z-index property also to "0"

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Image_gallery and https://davidwalsh.name/event-delegate
