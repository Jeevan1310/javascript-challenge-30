
function displayMenu() {
    console.log("Please select an operation:\n1. Addition (+)\n2. Subtraction (-)\n3. Quit");
    return prompt("Enter your choice (1-3):");
  }
  

  function addNumbers() {
    let num1 = prompt("Enter the first number:");
    let num2 = prompt("Enter the second number:");
    let sum = Number(num1) + Number(num2);
    console.log("The sum of " + num1 + " and " + num2 + " is " + sum);
  }
  
  function subtractNumbers() {
    let num1 = prompt("Enter the first number:");
    let num2 = prompt("Enter the second number:");
    let difference = Number(num1) - Number(num2);
    console.log("The difference between " + num1 + " and " + num2 + " is " + difference);
  }
  

  let choice;
  do {
    choice = displayMenu();
    switch (choice) {
      case "1":
        addNumbers();
        break;
      case "2":
        subtractNumbers();
        break;
      case "3":
        console.log("Exiting program...");
        break;
      default:
        console.log("Invalid choice. Please try again.");
        break;
    }
  } while (choice !== "3");
  