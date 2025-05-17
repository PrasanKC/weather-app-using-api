const userInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather_icon");
const options = {
  method: "GET",
};
async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e55aae152c2ab3aaed67c12e9f6d8c2d&units=metric`;
  const response = await fetch(url, options);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var result = await response.json();
    console.log(result);

    document.querySelector(".city").innerHTML = result.name;
    document.querySelector(".temp").innerHTML =
      Math.round(result.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = result.main.humidity + "%";
    document.querySelector(".windy").innerHTML = result.wind.speed + " km/hr";

    if (result.weather[0].main == "Clouds") {
      weatherIcon.src = "imgs/clouds.png";
    } else if (result.weather[0].main == "Clear") {
      weatherIcon.src = "imgs/clear.png";
    } else if (result.weather[0].main == "Rain") {
      weatherIcon.src = "imgs/rain.png";
    } else if (result.weather[0].main == "Drizzle") {
      weatherIcon.src = "imgs/drizzle.png";
    } else if (result.weather[0].main == "Mist") {
      weatherIcon.src = "imgs/mist.png";
    } else if (result.weather[0].main == "Snow") {
      weatherIcon.src = "imgs/snow.png";
    }
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
  }
}
searchBtn.addEventListener("click", () => {
  getWeather(userInput.value);
});
