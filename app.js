const button = document.querySelector("#submit");
const inputValue = document.querySelector("#inputValue");
const cityName = document.querySelector(".name");
const desc = document.querySelector(".desc");
const temp = document.querySelector(".temp");
const sym = document.querySelector(".symbol");
const icon = document.querySelector("#weather-icon");

button.addEventListener("click", function () {
  fetch(
    "https://api.weatherbit.io/v2.0/current?&key=6ac460af1ac2444784422ca273400e3e&city=" +
      inputValue.value +
      "+&units=I"
  )
    .then((response) => response.json())
    .then((data) => {
      const dataSource = data.data[0];
      const nameValue = dataSource["city_name"];
      const tempValue = dataSource["temp"];
      const descValue = dataSource["weather"]["description"];
      const symValue = dataSource["weather"]["icon"];

      cityName.innerHTML = nameValue;
      temp.innerHTML = tempValue + " °F";
      desc.innerHTML = descValue;

      icon.src =
        "https://www.weatherbit.io/static/img/icons/" + symValue + ".png";
    })
    .catch((err) => console.log({ err }));
  inputValue.value = "";
});
