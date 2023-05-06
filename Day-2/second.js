const readline = require('readline');

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for input
rl.question('Enter the first number: ', (number1) => {
  rl.question('Enter the second number: ', (number2) => {

    // Convert the input to numbers and add them
    let sum = Number(number1) + Number(number2);

    // Display the result
    console.log("The sum of the two numbers is: " + sum);

    // Close the readline interface
    rl.close();
  });
});
