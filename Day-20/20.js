function calculateFactorial() {
    var numberInput = document.getElementById("number");
    var resultDiv = document.getElementById("result");
    var number = parseInt(numberInput.value);

    if (isNaN(number) || number < 0) {
      resultDiv.innerHTML = "Please enter a non-negative number.";
    } else {
      var factorial = 1;
      for (var i = 2; i <= number; i++) {
        factorial *= i;
      }
      resultDiv.innerHTML = "Factorial of " + number + " is: " + factorial;
    }
  }