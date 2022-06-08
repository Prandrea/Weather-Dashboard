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
var btn = document.getElementById('button')


var weather = function () {
    var apiKey = 'fc552d2e0473bcbae68aa48291540746'
    var city = document.getElementById('searchinput').value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            var lat = data.coord.lat
            var lon = data.coord.lon
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)
                .then(res1 => res1.json())
                .then(data1 => {
                    // THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
                    document.getElementById('current').innerHTML = `City: ${city}`
                    document.getElementById('date').innerHTML = `${moment().format('L')}`
                    document.getElementById('Temp').innerHTML = `Temperature: ${data1.daily[0].temp.day} &#176; F`
                    document.getElementById('Humid').innerHTML = `Humidity: ${data1.daily[0].humidity}`
                    document.getElementById('Wind').innerHTML = `Wind: ${data1.daily[0].wind_speed}`
                    document.getElementById('UV').innerHTML = `UV-index: ${data1.daily[0].uvi}`
                })
        })
    };
    btn.addEventListener("click", weather)