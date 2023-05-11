function getWeather() {
    const locationInput = document.getElementById('locationInput');
    const location = locationInput.value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        displayWeather(data);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
  