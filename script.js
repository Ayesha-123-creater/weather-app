const apiKey = "1ea5240cf8ea0ad5144396f27408c6fb"; // Replace this with your real key

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const url = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data); // Debugging

      if (data.cod !== 200) {
        alert("City not found");
        return;
      }

      document.getElementById("weatherInfo").classList.remove("hidden");
      document.getElementById("cityName").textContent = ${data.name}, ${data.sys.country};
      document.getElementById("temp").textContent = 🌡 Temp: ${data.main.temp}°C;
      document.getElementById("desc").textContent = ☁ ${data.weather[0].description};
      document.getElementById("humidity").textContent = 💧 Humidity: ${data.main.humidity}%;
      document.getElementById("wind").textContent = 🌬 Wind: ${data.wind.speed} m/s;

      const iconCode = data.weather[0].icon;
      document.getElementById("icon").src = https://openweathermap.org/img/wn/${iconCode}@2x.png;
    })
    .catch(error => {
      console.error("Fetch error:", error);
    });
}