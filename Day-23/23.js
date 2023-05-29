function convert() {
    var amount = document.getElementById("amount").value;
    var fromCurrency = document.getElementById("fromCurrency").value;
    var toCurrency = document.getElementById("toCurrency").value;
  
    // Make an API call to get the exchange rate
    var xhr = new XMLHttpRequest();
    var url = "https://api.exchangerate-api.com/v4/latest/" + fromCurrency;
  
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        var exchangeRate = response.rates[toCurrency];
        var result = amount * exchangeRate;
  
        document.getElementById("result").innerHTML =
          amount + " " + fromCurrency + " = " + result + " " + toCurrency;
      }
    };
  
    xhr.send();
  }
  