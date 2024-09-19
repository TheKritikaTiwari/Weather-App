const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8650f509d5msh707ad6cd4aeeb5ep1932bbjsn335ea99c6715',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

const temp = document.getElementById('temp');
const cloud = document.getElementById('cloud');
const condition = document.getElementById('condition');
const feels_like = document.getElementById('feels_like');
const humidity = document.getElementById('humidity');
const precipitation = document.getElementById('precipitation');
const wind_speed = document.getElementById('wind_speed');
const wind_degrees = document.getElementById('wind_degrees');
const dewpoint = document.getElementById('dewpoint');
const weatherImage = document.getElementById('weatherImage');

const weatherImages = {
  sunny: 'Images/Sunny.jpg',
  cloudy: 'Images/Cloudy.jpg',
  p_cloudy: 'Images/Partly_Cloudy.jpg',
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;

  fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const weather = data.current;

      temp.innerHTML = weather.temp_c + " °C";
      cloud.innerHTML = weather.cloud + " %";
      feels_like.innerHTML = weather.feelslike_c + " °C";
      humidity.innerHTML = weather.humidity + " %";
      precipitation.innerHTML = weather.precip_mm + " mm"; 
      wind_speed.innerHTML = weather.wind_kph + " kph";
      wind_degrees.innerHTML = weather.wind_degree + "°";
      dewpoint.innerHTML = weather.dewpoint_c + " °C";

      let conditionText = "";
      const cloudCoverage = weather.cloud;

      if (cloudCoverage <= 10) {
        conditionText = "Sunny";
      } else if (cloudCoverage <= 30) {
        conditionText = "Mostly Sunny";
      } else if (cloudCoverage <= 50) {
        conditionText = "Partly Cloudy";
      } else if (cloudCoverage <= 70) {
        conditionText = "Mostly Cloudy";
      } else if (cloudCoverage <= 90) {
        conditionText = "Cloudy";
      } else {
        conditionText = "Overcast";
      }

      condition.innerHTML = conditionText;

      if (conditionText.includes('Sunny')) {
        weatherImage.src = weatherImages.sunny;
      } else if (conditionText.includes('Mostly Sunny') || conditionText.includes('Partly Cloudy') || conditionText.includes('Mostly Cloudy')) {
        weatherImage.src = weatherImages.p_cloudy;
      } else if (conditionText.includes('Cloudy')) {
        weatherImage.src = weatherImages.cloudy;
      }

    })
    .catch(error => {
      console.error(error);
    });
  };

  submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value);
  }
);

getWeather("Delhi");
