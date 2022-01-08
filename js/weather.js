const API_KEY = "9d23257b54b6544f2442f4cd208cfea5";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      const city = document.querySelector("#weather span:nth-child(1)");
      const weather = document.querySelector("#weather span:nth-child(2)");
      const wind = document.querySelector("#weather span:nth-child(3)");
      const temp = document.querySelector("#weather span:nth-child(4)");
      city.innerText = `현재 ${data.name} 날씨는`;
      weather.innerText = `${data.weather[0].main} 입니다.`;
      wind.innerText = `풍속은 ${data.wind.speed}이며,`;
      temp.innerText = `온도는 ${data.main.temp}입니다.`;
    });
}
function onGeoError() {
  alert("Can't find you location.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
