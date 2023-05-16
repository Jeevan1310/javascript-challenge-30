// Function to validate the form
function validateForm() {
    // Get the form inputs
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
  
    // Get the error message elements
    var nameError = document.getElementById("name-error");
    var emailError = document.getElementById("email-error");
  
    // Reset the error messages
    nameError.innerHTML = "";
    emailError.innerHTML = "";
  
    // Flag to track form validity
    var isValid = true;
  
    // Check if name is empty
    if (nameInput.value.trim() === "") {
      nameError.innerHTML = "Name is required.";
      isValid = false;
    }
  
    // Check if email is empty or invalid
    var emailValue = emailInput.value.trim();
    if (emailValue === "") {
      emailError.innerHTML = "Email is required.";
      isValid = false;
    } else if (!validateEmail(emailValue)) {
      emailError.innerHTML = "Invalid email format.";
      isValid = false;
    }
  
    // Return the form validity
    return isValid;
  }
  
  // Function to validate email format
  function validateEmail(email) {
    // Regular expression to validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  