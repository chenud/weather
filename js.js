function getWeather() {
  const apiKey = "631e755c681f0943b212ca93ecfc2a78";
  const city = document.getElementById('city').value;

  if (city === '') {
      alert('Please enter a city name');
      return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          const weatherInfo = document.getElementById('weather-info');
          weatherInfo.innerHTML = `
              <p>City: ${data.name}, ${data.sys.country}</p>
              <p>Temperature: ${data.main.temp} °C</p>
              <p>Weather: ${data.weather[0].description}</p>
          `;
      })
      .catch(error => {
          console.error('Error fetching weather data:', error);
          alert('Error fetching weather data. Please try again.');
      });
}
