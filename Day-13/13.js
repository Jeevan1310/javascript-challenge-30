document.getElementById("generate").addEventListener("click", generatePassword);

function generatePassword() {
  var length = parseInt(document.getElementById("length").value);
  var uppercase = document.getElementById("uppercase").checked;
  var lowercase = document.getElementById("lowercase").checked;
  var numbers = document.getElementById("numbers").checked;
  var special = document.getElementById("special").checked;
  
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var numberChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  
  var allChars = "";
  var password = "";

  if (uppercase) {
    allChars += uppercaseChars;
  }

  if (lowercase) {
    allChars += lowercaseChars;
  }

  if (numbers) {
    allChars += numberChars;
  }

  if (special) {
    allChars += specialChars;
  }
  
  for (var i = 0; i < length; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
  
  document.getElementById("password").value = password;
}
