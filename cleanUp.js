// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function nameQuestion() {
  console.log("Hello, what is your name?");
}

nameQuestion();

// Line 12: Added semicolon at end of line for good practice.
// Line 15: Added semicolon after function call for good practice.

// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third;
  console.log(sum);
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);

// Line 22: Tab'd line forward for better readability. Added semicolon to end of line for good practice.
// Line 23: Tab'd line forward for better readability. Added semicolon to end of line for good practice.
// Line 24: Deleted tabs to bring curly bracket in-line with line 21 for better readability.


// EX 3:
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
}

makeFreshPesto();
// Line 35: Corrected <func> to <function>.
// Line 35: Added space between ending parentheses and opening curly bracket for better readability.
// Line 41: Moved closing curly bracket from line 40 to 41 for better readability.

//  EX 4:
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;

  console.log(`The average is: ${avg}.`);
}

average(4, 8);

// Line 49: Moved opening curly bracket from line 50 to 49 for better readability.
// Line 50: Tab'd line forwards for better readability.
// Line 51: Tab'd line backwards to align with line 50.
// Line 53: Capitalized first character in string and moved string's punctuation inside of closing backtick.
// Line 54: Tab'd closing curly bracket backwards for better readability.
// Line 56: Added function call with arguments.
