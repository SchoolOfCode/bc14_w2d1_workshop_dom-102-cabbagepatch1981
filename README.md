# DOM Practice

Your task today is to help us get our penny doubling scheme up and running, ready to create some riches. 💰💸

First, take a few minutes to familiarize yourself with the page. Open it in your browser, and carefully read through each line of the HTML until you feel comfortable with its structure.

Only then proceed on with the tasks. Remember to make a plan for each task breaking down the logic into the smallest chunks possible before you code!

## Objectives

- Continue practicing manipulating properties of DOM elements
- Create elements
- Append and remove child elements
- Use DOM manipulation within a function for code reusability

## Task 1 - selecting and changing text

Let's start out by changing the quote under the successful person to something more interesting.

👉 Use JavaScript to select the element with a class of `.quote` and store in a variable.

👉 Change its `textContent` to a quote of your choosing.

## Task 2 - selecting and changing style

👉 Select the `h1` tag using querySelector and store in variable.

👉 Change its `text-decoration` property to the value of `underline`.

## Task 3 - change the title

Not all aspects of the page need to accessed with `querySelector`. Some have shortcuts on the `document` object.

👉 Use the correct property on the `document` object to change the `title` property of the `document` to a new value of your choosing. Check the browser tab to make sure that it worked.

## Task 4 - getting the penny doubler working

Now it's time to get those pennies piling up! The DOUBLE EM! button is already hooked up to the `handleClick` function behind the scenes - you'll learn how to do this yourself soon! For now, your job is to write the code inside the function itself that manipulates the DOM to show a doubled amount of pennies on the page with each click.

The function `handleClick` currently looks like this...

```js
function handleClick() {
  console.log("I'm just to prove it's working!");
}
```

Within the function...

👉 Double the the value of the the pennies variable (already defined - look for it in the file!).

👉 Use the pennies variable to update the `textContent` of the output tag to be `${pennies} pennies`.

## Task 5 - creating elements

### 5.1 - add more proof

👉 Use JavaScript to create a paragraph element using the DOM.

👉 Inside this new paragraph, add some text with another sentence talking about how great our penny doubler is.

👉 Append your new paragraph as a child of the section element with the id `"proof-section"`.

### 5.2 - add more tips

We have some more top tips for financial success in the JavaScript file that we'd like to add to the current tips on the page. These are in the `additionalTips` array. Your job now is to add them to the unordered list with the id of `#tips-list` on the DOM.

👉 Use a for loop to loop through the array of additional tips.

👉 For each tip...

- create an `li` element
- set the `textContent` of the `li` element to be the current tip
- append the newly created element as a child of the `ul`

## 🌟 Bonus tasks

### Bonus 1 - remove that last tip

Hmm... On second thought, maybe that last additional tip isn't so great.

👉 Use the DOM to select the last tip in hte tips list and remove it from the page.

### Bonus 2 - show the current pennies in the title

👉 Put the code from task 3 in a function.

👉 Can you figure out how to have that function be called each time the DOUBLE EM! button is clicked?

### Bonus 3 - keep going

👉 Go nuts! See what else you can do. Use your imagination. 🤯
