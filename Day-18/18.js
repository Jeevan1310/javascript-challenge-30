function checkLeapYear() {
    var year = document.getElementById("yearInput").value;
    
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      document.getElementById("result").innerHTML = year + " is a leap year.";
    } else {
      document.getElementById("result").innerHTML = year + " is not a leap year.";
    }
  }