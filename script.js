// Replace the API_KEY with your own API key
const API_KEY = 'YOUR_API_KEY';

// Replace the default latitude and longitude with the desired location
const LATITUDE = 37.7749;
const LONGITUDE = -122.4194;

const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const weatherIconElement = document.getElementById('weather-icon');
const imageSectionElement = document.getElementById('image-section');

// Fetch weather data from API
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        locationElement.textContent = data.name;
        temperatureElement.textContent = `${Math.round(data.main.temp - 273.15)}°C`;
        descriptionElement.textContent = data.weather[0].description;
        weatherIconElement.style.backgroundImage = `url('https://openweathermap.org/img/w/${data.weather[0].icon}.png')`;
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Replace the image source with your desired image link
const imageSource = 'your-image-link.jpg';
imageSectionElement.querySelector('img').src = imageSource;
