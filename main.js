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
//5.1 USE 



let additionalTips = [
  "Keep your pennies is a glass jar",
  "Pick up every penny you find on the ground!",
  "Don't let your partner know...",
];

