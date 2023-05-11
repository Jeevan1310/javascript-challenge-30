function getWeather() {
    const locationInput = document.getElementById ('locationInput');
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
  
  