function checkPalindrome() {
    var inputText = document.getElementById('input-text').value;
    var reversedText = inputText.split('').reverse().join('');
  
    if (inputText === reversedText) {
      document.getElementById('result').textContent = 'The input is a palindrome!';
    } else {
      document.getElementById('result').textContent = 'The input is not a palindrome.'; 
    }
  }
  