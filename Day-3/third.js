const quotes = [
    "The best way to predict the future is to invent it. - Alan Kay",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "You can never cross the ocean until you have the courage to lose sight of the shore. - Christopher Columbus",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela"
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("quote").innerHTML = quote;
  }
  
  generateQuote();