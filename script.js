const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8650f509d5msh707ad6cd4aeeb5ep1932bbjsn335ea99c6715',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

const temp = document.getElementById('temp');
const feels_like = document.getElementById('feels_like');
const humidity = document.getElementById('humidity');
const min_temp = document.getElementById('min_temp');
const max_temp = document.getElementById('max_temp');
const wind_speed = document.getElementById('wind_speed');
const wind_degrees = document.getElementById('wind_degrees');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');

const getWeather = (city) => {
  cityName.innerHTML = city
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      temp.innerHTML = data.temp;
      feels_like.innerHTML = data.feels_like;
      humidity.innerHTML = data.humidity;
      min_temp.innerHTML = data.min_temp;
      max_temp.innerHTML = data.max_temp;
      wind_speed.innerHTML = data.wind_speed;
      wind_degrees.innerHTML = data.wind_degrees;
      sunrise.innerHTML = data.sunrise;
      sunset.innerHTML = data.sunset;
    })
    .catch(error => {
      console.error(error);
    });
}
submit.addEventListener("click", (e) => {
  e.preventDefault()
  getWeather(city.value)
})
getWeather("Delhi");