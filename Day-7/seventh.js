function getWeather() {
    const locationInput = document.getElementById('locationInput');
    const location = locationInput.value;
    const apiKey = '69a2b16fea7b38fcceaff626dd19cb5f'; 
  
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
  