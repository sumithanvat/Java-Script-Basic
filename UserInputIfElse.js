var userInput = prompt("Enter your name:");

if (userInput !== null) {
  if (userInput.trim() !== "") {
    console.log("Hello, " + userInput + "!");
  } else {
    console.log("You didn't enter a name.");
  }
} else {
  console.log("User canceled the input.");
}
