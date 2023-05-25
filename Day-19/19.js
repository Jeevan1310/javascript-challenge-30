window.addEventListener('DOMContentLoaded', function() {
    var startBtn = document.getElementById('startBtn');
    var input = document.getElementById('input');
    var quote = document.getElementById('quote');
    var result = document.getElementById('result');
  
    startBtn.addEventListener('click', function() {
      var startTime = new Date().getTime();
      startBtn.disabled = true;
      input.disabled = false;
      input.focus();
  
      input.addEventListener('input', function() {
        var quoteText = quote.innerText.trim();
        var inputText = input.value.trim();
        var words = inputText.split(' ');
  
        var correct = true;
        for (var i = 0; i < words.length; i++) {
          if (words[i] !== quoteText.split(' ')[i]) {
            correct = false;
            break;
          }
        }
  
        if (correct && inputText.length === quoteText.length) {
          var endTime = new Date().getTime();
          var minutes = (endTime - startTime) / 1000 / 60;
          var wordsPerMinute = Math.round(words.length / minutes);
  
          result.textContent = 'Your typing speed: ' + wordsPerMinute + ' WPM';
          startBtn.disabled = false;
          input.disabled = true;
  
          // Reset the input and result after a delay
          setTimeout(function() {
            input.value = '';
            result.textContent = '';
          }, 3000);
        }
      });
    });
  });
  