
var numbers = [5, 3, 8, 1, 2];


function sortArrayAscending() {
  numbers.sort(function(a, b) {
    return a - b;
  });

  displayOutput();
}


function sortArrayDescending() {
  numbers.sort(function(a, b) {
    return b - a;
  });

  displayOutput();
}


function displayOutput() {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = numbers.join(", ");
}
