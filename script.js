/*
File name: script.js

ECS Front-End Dev Project: Radhika's Recipes
Description: This program uses HTML, JS, and CSS to create a recipe blog.

*Developer: Radhika Parkhi*

Version: 1.0
Last modified: 04/11/2024
*/



/*EVENT LISTENERS*/
document.getElementById("submitBtn")?.addEventListener("click", submit);


/*FUNCTIONS*/
// submit function
function submit() {
    // get display
    let thankYouDisplay = document.getElementById("thankYouDisplay");
    // get values
    let yourName = document.getElementById("yourName").value;
    let yourEmail = document.getElementById("yourEmail").value;

    // check if name is blank
    if(yourName === "") {
        thankYouDisplay.innerHTML = "Please enter your name <i>and</i> email.";
    // check if email is blank
    } else if(yourEmail === "") {
        thankYouDisplay.innerHTML = "Please enter your name <i>and</i> email.";
    // display thank you
    } else {
        thankYouDisplay.innerHTML = `Thank you, ${yourName}!`;
        // disable input fields
        let nameInput = document.getElementById("yourName");
        nameInput.disabled = true;
        let emailInput = document.getElementById("yourEmail");
        emailInput.disabled = true;
    }
}

// scale 2x function NOT WORKING
/*function scale2x() {
    let breadValue = document.getElementById("bread").value;
    let breadLabel = document.getElementById("breadLabel");
    let labelString = breadLabel.textContent;
    newValue = breadValue * 2;
    newString = labelString.replace("4", newValue);
    breadLabel.innerHTML = newString;
}*/


/*STAR RATING*/
let stars = document.getElementsByClassName("star");
let output = document.getElementById("output");

// update rating function
function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
}

// remove styling function
function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}