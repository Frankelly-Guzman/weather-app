var button = document.querySelector(".button");
var inputValue = document.querySelector(".inputValue");
var cityName = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");

button.addEventListener("click", function () {
  fetch(
    "https://api.weatherbit.io/v2.0/current?&key=6ac460af1ac2444784422ca273400e3e&city=" +
      inputValue +
      "+&units=I"
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log({ err }));
});
