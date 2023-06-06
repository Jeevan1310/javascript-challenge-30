function generateRandomNumber() {
    var minNumber = parseInt(document.getElementById("minNumber").value);
    var maxNumber = parseInt(document.getElementById("maxNumber").value);

    if (isNaN(minNumber) || isNaN(maxNumber)) {
      document.getElementById("result").innerHTML = "Please enter valid numbers.";
    } else if (minNumber >= maxNumber) {
      document.getElementById("result").innerHTML = "Min number should be less than max number.";
    } else {
      var randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
      document.getElementById("result").innerHTML = "Random number: " + randomNumber;
    }
}