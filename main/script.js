const app = document.querySelector('.weather-app');
const temp = document.querySelector('.temp');
const conditionOutput = document.querySelector('.condition');
const nameOutput = document.querySelector('.name');
const icon = document.querySelector('.icon');
const cloudOutput = document.querySelector('.cloud');
const humidityOutput = document.querySelector('.humidity');
const windOutput = document.querySelector('.wind');
const form = document.querySelector('.locationInput');
const search = document.querySelector('.search');
const btn = document.querySelector('.submit');
const cities = document.querySelector('.city');
const searchInputBox = document.getElementById('input-box');
let x = window.matchMedia("(max-width: 500px)")

// build API
const weatherApi={
    key: "c4fba6a748d8e989ea6afdb69659d063",
    baseurl: "https://api.openweathermap.org/data/2.5/weather"
 }
 btn.addEventListener('click', (event) => {
    if(search.value.length == 0){
        alert("Please type a city name");
    } else{

        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        app.style.opacity = "1";
    }
 })
 searchInputBox.addEventListener('keypress', (event) =>{
    if(event.keyCode==13){
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
    }
})
//get report
function getWeatherReport(city){
    fetch(`${weatherApi.baseurl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
    app.style.opacity = "0";
}
//show report
function showWeatherReport(weather){
    console.log(weather);

    nameOutput.innerText = `${weather.name}`;

    temp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    conditionOutput.innerText = `${weather.weather[0].main}`;

    humidityOutput.innerText = `${weather.main.humidity}%`;

    windOutput.innerText = `${weather.wind.deg}km/h`;

    cloudOutput.innerText = `${weather.clouds.all}%`;

    //change styles
    if(conditionOutput.textContent == 'Clear'){
        document.body.style.backgroundImage = "url(../images/clear.jpeg)";
        icon.src = "../icon/clear.png";
        x.body.backgroundImage = "url(../images/clear-mob.jpeg)";
    }
    else if(conditionOutput.textContent == 'Clouds'){
        document.body.style.backgroundImage = "url(../images/clouds.jpeg)";
        icon.src = "../icon/cloudy.png";
        x.body.backgroundImage = "url(../images/cloud-mob.jpeg)";
    }
    else if(conditionOutput.textContent == 'Sunny'){
        document.body.style.backgroundImage = "url(../images/sunny.jpeg)";
        icon.src = "../icon/cloudy.png";
        x.body.backgroundImage = "url(../images/sunny-mob.jpeg)";
    }
    else if(conditionOutput.textContent == 'Rain'){
        document.body.style.backgroundImage = "url(../images/rainy.jpeg)";
        icon.src = "../icon/rainy.png";
        x.body.backgroundImage = "url(../images/rainy.jpeg)";
    }
    else if(conditionOutput.textContent == 'Snow'){
        document.body.style.backgroundImage = "url(../images/clear.jpeg)";
        icon.src = "../icon/snowy.png";
        x.body.backgroundImage = "url(../images/clear-mob.jpeg)";
    }
    else if(conditionOutput.textContent == 'Thunderstorm'){
        document.body.style.backgroundImage = "url(../images/thunder.jpeg)";
        icon.src = "../icon/thunder.png";
        x.body.backgroundImage = "url(../images/thunder-mob.jpeg)";
    }
    else if(conditionOutput.textContent == 'Haze'){
        document.body.style.backgroundImage = "url(../images/haze.jpeg)";
        icon.src = "../icon/haze.png";
        x.body.backgroundImage = "url(../images/haze-mob.jpeg)";
    }
}