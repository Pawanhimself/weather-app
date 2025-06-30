async function getWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ec5ad5d022d4c4053de698a941fe76d0`;
    let response = await fetch(apiUrl);
    if (!response.ok) {
        alert(`There is no weather data related to ${city}`);
    }else{
        response = await response.json();
        console.log(response);
        document.getElementById('weather-description').textContent = response.weather[0].description;
        document.getElementById('cityName').textContent = response.name;
        document.getElementById('weather-icon').src = "https://openweathermap.org/img/wn/"+ response.weather[0].icon + ".png";     
        document.getElementById('temp').textContent  = Math.floor( response.main.temp - 273.15 );
        document.getElementById('feels_like').textContent = Math.floor( response.main.feels_like - 273.15 );
        document.getElementById('wind-speed').textContent = Math.floor( response.wind.speed );
        document.getElementById('humidity').textContent = response.main.humidity;
        document.getElementById('pressure').textContent = response.main.pressure;
    }
} 

const svgHTML = `<svg width="40px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path style="fill:#ffffff" d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/></svg>`;

document.querySelectorAll("li").forEach(li => {
    const svgElement = document.createElement("div");
    svgElement.innerHTML = svgHTML;
    li.appendChild(svgElement.firstChild); // Insert as last child
});

getWeather("ludhiana");