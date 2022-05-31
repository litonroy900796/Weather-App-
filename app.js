let inputvalue = document.querySelector("#weather-value");
let citys = document.querySelector(".city");
let tem = document.querySelector(".temp");
let desp = document.querySelector(".description");
let humiditys = document.querySelector(".humidity");
let winds = document.querySelector(".wind");
let icons = document.querySelector(".icon");
let seach_button = document.querySelector(".seach-button");
let apikey = "b2bcf4410653ef8951aff9e62c964eb5";

const temperture = (city = "Dhaka") => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const { temp, humidity } = data.main;
      const { icon, description } = data.weather[0];
      const { speed } = data.wind;
      citys.innerText = `Weather in ${city}`;
      tem.innerText = `${temp} °C`;
      humiditys.innerText = `Humidity: ${humidity}`;
      winds.innerText = `Wind speed: ${speed} km/h`;
      desp.innerText = `${description}`;
      icons.src = `https://openweathermap.org/img/wn/${icon}.png`;
      document.querySelector(".weather").classList.remove("loading");
      inputvalue.value = "";
    });
};
temperture();
seach_button.addEventListener("click", (e) => {
  temperture(inputvalue.value);
});
inputvalue.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    temperture(inputvalue.value);
  }
});
