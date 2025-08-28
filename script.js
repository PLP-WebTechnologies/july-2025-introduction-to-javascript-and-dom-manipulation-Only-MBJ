/************************************
 PART 1: Variables & Conditionals
*************************************/
let name = "Alice";
let age = 17;

// Check if user is adult or minor
if (age >= 18) {
  console.log(name + " is an adult.");
} else {
  console.log(name + " is a minor.");
}

/************************************
 PART 2: Functions
*************************************/
// Function 1: Greeting
function greet(person) {
  return "Hello, " + person + "!";
}

// Function 2: Add two numbers
function add(a, b) {
  return a + b;
}

console.log(greet(name));
console.log("5 + 3 = " + add(5, 3));

/************************************
 PART 3: Loops
*************************************/
// For loop example
for (let i = 1; i <= 3; i++) {
  console.log("For loop count: " + i);
}

// While loop example
let count = 3;
while (count > 0) {
  console.log("While loop countdown: " + count);
  count--;
}

/************************************
 PART 4: DOM Interactions
************************************/
// 1. Change text of a paragraph
document.getElementById("message").innerText = "JavaScript is running!";

// 2. Add event listener to button
document.getElementById("btn").addEventListener("click", function() {
  document.getElementById("message").innerText = greet(name);

  // 3. Generate list items dynamically
  let list = document.getElementById("list");
  list.innerHTML = ""; // clear old items
  for (let i = 1; i <= 3; i++) {
    let li = document.createElement("li");
    li.innerText = "Item " + i;
    list.appendChild(li);
  }
});
