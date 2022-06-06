// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

const API_KEY = "fc552d2e0473bcbae68aa48291540746"

const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const cityEl = document.getElementById('city');
const stateEl = document.getElementById('state');
const currentWeathcondEl = document.getElementById('weather-conditions');
const ForecastEl = document.getElementById('forecast');
const currentTempEl = document.getElementById('current-temperature');



function showWeatherData (data){
    let {temp,humidity, wind_speed, uv_index} = data.current;

    currentWeatherItemsEl.innerHTML =
    `<div class="weather-item">
        <div>Temperature</div>
        <div>${temp}</div>
    </div>
    <div class="weather-item">
        <div>Humidity</div>
        <div>${humidity}</div>
    </div>

    <div class="weather-item">
        <div>Wind Speed</div>
        <div>${wind_speed}</div>
    </div>

    <div class="weather-item">
        <div>UV Index</div>
        <div>${uv_index}</div>
    </div>`

    ;

    let fiveDayForecast= ''
    data.daily.forEach((day, idx) => {
        if(idx == 0){
            currentTempEl.innerHTML = `
                <img src=" http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
                <div class="weather-forecast-item">
                <div class="day">${window.moment(day.dt*1000).format('ddd')}</div><div class="temp">${day.temp.day}&#176; F</div>
            </div>
            `

        }else{
            fiveDayForecast += `
            <div class="weather-forecast-item">
            <div class="day">${window.moment(day.dt * 1000).format('ddd')}</div>
            <img src=" http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
            <div class="temp">${day.temp.day}&#176; F</div>
            </div>
            `


        }
        
    })

    weatherForecastEl.innerHTML = fiveDayForecast;
}