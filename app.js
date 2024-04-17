const apiKey = "da72ed4ca19db544d064735d5da5be01";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const cityName = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const mainWeather = document.querySelector(".weather");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        mainWeather.style.display = "none";
    } else {
        let data = await response.json();
        console.log(data)

        cityName.innerHTML = data.name;
        temp.innerHTML = `${Math.round(data.main.temp)}°C`;
        humidity.innerHTML = `${data.main.humidity}%`;
        wind.innerHTML = `${data.wind.speed} km/h`;

        if (data.weather[0].main = "Clouds") {
            weatherIcon.src = "Images/clouds.png";
        } else if (data.weather[0].main = "Clear") {
            weatherIcon.src = "Images/clear.png";
        } else if (data.weather[0].main = "Rain") {
            weatherIcon.src = "Images/rain.png";
        } else if (data.weather[0].main = "Drizzle") {
            weatherIcon.src = "Images/drizzle.png";
        } else if (data.weather[0].main = "Mist") {
            weatherIcon.src = "Images/mist.png";
        } else if (data.weather[0].main = "Clouds") {
            weatherIcon.src = "Images/clouds.png";
        }

        mainWeather.style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});


