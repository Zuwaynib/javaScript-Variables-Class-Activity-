const myName = "Zainab";

let age = 12;

let userInput = prompt("Are you married?");
userInput = userInput.toLowerCase();

let isMarried = userInput === "yes" ? true : false;

if (userInput === "yes") {
    alert("User is married!");
  } else {
    alert("User has undefined relationship status");
  }

console.log(myName);
console.log(age);
console.log(isMarried);