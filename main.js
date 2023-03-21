// TASK 1 Selecting and Changing text COMPLETE. 
// Change the quote under successful person 
// Select "it worked for me" with class id .quote and store in a variable DONE

const quoteSuccess = document.querySelector('.quote');
//Change the text content of the "it worked for me".quote to a quote of your choosing

quoteSuccess.textContent = "I love being a winner!!!!";

//TASK 2 selecting and changing style COMPLETE
//Select h1 element using querySelector and store in variable
//Change its text decoration property to the value of underline i.e. simply underline the heading

const headingOne = document.querySelector("h1");
headingOne.style.textDecorationLine = "underline";

// TASK 3 change the webpage title in the browser tab COMPLETE
document.title = "Pyramid Scheme"

// TASK 4 getting the penny doubler working 
// Double the value of the pennies variable - using what method?
// Use the pennies variable to update the textContent of the output tag to be `${pennies} pennies`.

let pennies = 1;

/*function handleClick(pennies) {
  pennies *= 2; // Double the number
  console.log(pennies); // Log the doubled number to the console
  document.getElementById("output").textContent = `${pennies} pennies`;
  //console.log("I'm just to prove it's working!");
  // 🔺 Remember, this function is already hooked up to the button. You'll learn how to do this yourself soon! Your task is just to write the code inside this function itself.
} */


// TASK FOUR COMPLETE
function handleClick() {
  pennies *= 2;
  console.log("I'm just to prove it's working!");
   let answer = document.querySelector('output');
   answer.textContent = `${pennies} pennies`;
}

// TASK FIVE CREATING ELEMENTS
//5.1 COMPLETE
//Create a paragraph element using the DOM.
// - access the body of the document and create a new paragraph
// - append the new paragraph as a child of the the proof-section id. element 

let newParagraph = document.createElement("p");
// Write a new paragraph
newParagraph.textContent = ("You can't lose at penny doubler... just keep going!");
//Add the new paragraph to the proof-id section here
document.querySelector("#proof-section").appendChild(newParagraph);

// 5.2 ADD MORE TIPS
// Use a for loop to create an unordered list with the id of #tips-list 
// Pass the array to the unordered list
// create an `li` element
// set the `textContent` of the `li` element to be the current tip
// append the newly created element as a child of the `ul`

let additionalTips = [
  "Keep your pennies is a glass jar",
  "Pick up every penny you find on the ground!",
  "Don't let your partner know...",
];

//Setting up a for loop to go through the additionalTips array
for (let i = 0; i < additionalTips.length; i++) {
//create newTipsList variable in document.  Create a <li>.
  let newTipsList = document.createElement("li");
//newTipsList goes to look for text content inside the additionalTips array and newTipsList takes text
//content from additionalTips array and runs a loop until it finishes on the length of the additional tips.
  newTipsList.textContent = additionalTips[i];
//Go back into the document, find the tips-list element and append the newTipsList.
//Adds to the browser additional tips for success to the browser
  document.querySelector("#tips-list").appendChild(newTipsList);
}