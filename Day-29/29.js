function appendValue(value) {
    document.getElementById('result').value += value;
  }

  function calculate(operator) {
    document.getElementById('result').value += operator;
  }
  function calculateResult() {
    let expression = document.getElementById('result').value;
    let result;

    try {
      result = eval(expression);
      document.getElementById('result').value = result;
    } catch (error) {
      document.getElementById('result').value = 'Error';
    }
  }

  function clearResult() {
    document.getElementById('result').value = '';
  }