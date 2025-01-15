document.addEventListener("DOMContentLoaded", () => {
  const cityinput = document.getElementById("city-input");
  const inpubtt = document.getElementById("get-wether-btn");
  const cityhead = document.getElementById("city-name");
  const temra = document.getElementById("tem");
  const discrip = document.getElementById("discription");
  const errormsg = document.getElementById("error-msg");
  const weatherinfo = document.getElementById("weather-info");

  const API_KEY = "9682854664ea0a2c26206845f0ff80fe";

  inpubtt.addEventListener("click", async () => {
    const city = cityinput.value.trim();
    if (!city) return;

    try {
      const weatherData = await fetchWeatherdata(city);
      displayWeatherdata(weatherData);
    } catch (error) {
      showError();
    }
  });

  async function fetchWeatherdata(city) {
    //get city data
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid={API key}`;

    const response = await fetch(url);
    console.log(typeof response);
    console.log("RESPONSE", response);

    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();
    return data;
  }

  function displayWeatherdata(weatherData) {
    //display
  }

  function showError() {
    weatherinfo.classList.add("hidden");
    errormsg.classList.remove("hidden");
  }
});
