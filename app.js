const darkMode = () => {
  if (document.body.style.background === "white") {
    document.body.style.background = "black";
    document.body.style.color = "green";
  } else {
    document.body.style.background = "white";
    document.body.style.color = "black";
  }
};

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "API_KEY",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {

      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Delhi");

const getWeatherDelhi = () => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi",
    options
  )
    .then((response) => response.json())
    .then((response) => {

      feels_like_delhi.innerHTML = response.feels_like;
      temp_delhi.innerHTML = response.temp;
      humidity_delhi.innerHTML = response.humidity;
      max_temp_delhi.innerHTML = response.max_temp;
      min_temp_delhi.innerHTML = response.min_temp;
      sunrise_delhi.innerHTML = response.sunrise;
      sunset_delhi.innerHTML = response.sunset;
      wind_degrees_delhi.innerHTML = response.wind_degrees;
      wind_speed_delhi.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

getWeatherDelhi();
const getWeatherKolkata = () => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata",
    options
  )
    .then((response) => response.json())
    .then((response) => {

      feels_like_kolkata.innerHTML = response.feels_like;
      temp_kolkata.innerHTML = response.temp;
      humidity_kolkata.innerHTML = response.humidity;
      max_temp_kolkata.innerHTML = response.max_temp;
      min_temp_kolkata.innerHTML = response.min_temp;
      sunrise_kolkata.innerHTML = response.sunrise;
      sunset_kolkata.innerHTML = response.sunset;
      wind_degrees_kolkata.innerHTML = response.wind_degrees;
      wind_speed_kolkata.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

getWeatherKolkata();

const getWeatherBoston = () => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston",
    options
  )
    .then((response) => response.json())
    .then((response) => {

      feels_like_boston.innerHTML = response.feels_like;
      temp_boston.innerHTML = response.temp;
      humidity_boston.innerHTML = response.humidity;
      max_temp_boston.innerHTML = response.max_temp;
      min_temp_boston.innerHTML = response.min_temp;
      sunrise_boston.innerHTML = response.sunrise;
      sunset_boston.innerHTML = response.sunset;
      wind_degrees_boston.innerHTML = response.wind_degrees;
      wind_speed_boston.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

getWeatherBoston();

const getWeatherLondon = () => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London",
    options
  )
    .then((response) => response.json())
    .then((response) => {

      feels_like_london.innerHTML = response.feels_like;
      temp_london.innerHTML = response.temp;
      humidity_london.innerHTML = response.humidity;
      max_temp_london.innerHTML = response.max_temp;
      min_temp_london.innerHTML = response.min_temp;
      sunrise_london.innerHTML = response.sunrise;
      sunset_london.innerHTML = response.sunset;
      wind_degrees_london.innerHTML = response.wind_degrees;
      wind_speed_london.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

getWeatherLondon();
