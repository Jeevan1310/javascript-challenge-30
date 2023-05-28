function findMinMaxNumbers() {
    var numbers = [5, 10, 3, 8, 2, 1]; // Change this array to your desired numbers

    var minNumber = numbers[0];
    var maxNumber = numbers[0];

    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] < minNumber) {
            minNumber = numbers[i];
        }

        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
    }

    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'Smallest Number: ' + minNumber + '<br> Largest Number: ' + maxNumber;
}