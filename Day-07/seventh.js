function getWeather() {
    const latitudeInput = document.getElementById('latitudeInput');
    const longitudeInput = document.getElementById('longitudeInput');
    const latitude = latitudeInput.value;
    const longitude = longitudeInput.value;
    const apiKey = 'API_KEY'; // Replace with your OpenWeatherMap API key
  
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        displayWeather(data);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
  
function displayWeather(data) {
    const weatherContainer = document.getElementById('weatherContainer');
  
    // Clear previous weather information
    weatherContainer.innerHTML = '';
  
    // Create elements to display the weather
    const locationName = document.createElement('h2');
    locationName.textContent = data.name;
  
    const temperature = document.createElement('p');
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
  
    const weatherDescription = document.createElement('p');
    weatherDescription.textContent = `Weather: ${data.weather[0].description}`;
  
    // Append elements to the container
    weatherContainer.appendChild(locationName);
    weatherContainer.appendChild(temperature);
    weatherContainer.appendChild(weatherDescription);
}
  
  
  