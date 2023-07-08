const button = document.querySelector("#submit");
const inputValue = document.querySelector("#inputValue");
const topContainer = document.querySelector(".top-container");
const bottomContainer = document.querySelector(".bottom-container");
const cityName = document.querySelector(".name");
const desc = document.querySelector(".desc");
const temp = document.querySelector(".temp");
const icon = document.querySelector("#weather-icon");

function showWeatherInfo(event) {
  event.preventDefault(); // Prevent the form from submitting

  topContainer.style.opacity = "0";

  setTimeout(() => {
    fetch(
      "https://api.weatherbit.io/v2.0/current?&key=6ac460af1ac2444784422ca273400e3e&city=" +
        inputValue.value +
        "+&units=I"
    )
      .then((response) => response.json())
      .then((data) => {
        const dataSource = data.data[0];

        if (dataSource) {
          const nameValue = dataSource.city_name;
          const tempValue = dataSource.temp;
          const descValue = dataSource.weather.description;
          const symValue = dataSource.weather.icon;

          cityName.innerHTML = nameValue;
          temp.innerHTML = tempValue + " °F";
          desc.innerHTML = descValue;

          icon.src =
            "https://www.weatherbit.io/static/img/icons/" + symValue + ".png";

          topContainer.style.display = "none";
          bottomContainer.style.opacity = "0";
          bottomContainer.style.display = "block";
          setTimeout(() => {
            bottomContainer.style.opacity = "1";
          }, 100); // Delay the opacity transition of the bottom container
        } else {
          console.log("Unable to fetch weather data.");
        }
      })
      .catch((err) => console.log({ err }));
  }, 2000); // Simulate a delay to showcase the loading animation

  inputValue.value = "";
}

button.addEventListener("click", function (event) {
  showWeatherInfo(event);
});

inputValue.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    showWeatherInfo(event);
  }
});
