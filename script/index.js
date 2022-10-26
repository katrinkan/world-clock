const barcelonaElement = document.querySelector("#barcelona");
const hongKongElement = document.querySelector("#hong-kong");
const aucklandElement = document.querySelector("#auckland");

function updateTime() {
  // current location

  // Barcelona
  if (barcelonaElement) {
    const barcelonaDateElement = barcelonaElement.querySelector(".date");
    const barcelonaTimeElement = barcelonaElement.querySelector(".time");
    const barcelonaTime = moment().tz("Europe/Madrid");
    barcelonaDateElement.innerHTML = moment().format("MMMM Do YYYY");
    barcelonaTimeElement.innerHTML = `${barcelonaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }

  // Auckland
  if (aucklandElement) {
    const aucklandDateElement = aucklandElement.querySelector(".date");
    const aucklandTimeElement = aucklandElement.querySelector(".time");
    const aucklandTime = moment().tz("Pacific/Auckland");
    aucklandDateElement.innerHTML = moment().format("MMMM Do YYYY");
    aucklandTimeElement.innerHTML = `${aucklandTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }
  //Hong Kong
  if (hongKongElement) {
    const hongKongDateElement = hongKongElement.querySelector(".date");
    const hongKongTimeElement = hongKongElement.querySelector(".time");
    const hongKongTime = moment().tz("Asia/Hong_Kong");
    hongKongDateElement.innerHTML = moment().format("MMMM Do YYYY");
    hongKongTimeElement.innerHTML = `${hongKongTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }
}
if (barcelonaElement && hongKongElement) {
  updateTime();
  setInterval(updateTime, 1000);
}

function updateCity(event) {
  function displayNewTime() {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
      console.log(cityTimeZone);
    }
    const cityName = cityTimeZone.replace("_", " ").split("/")[1];
    const cityTime = moment().tz(cityTimeZone);
    const citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `<div class="city" id="hong-kong">
          <div>
            <h2>${cityName} 🌎</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>
        <button type='button' onclick='window.location.reload()' class='change-city-btn'>Back to all cities</button>`;
  }
  displayNewTime();
  setInterval(displayNewTime, 1000);
}

function changeTheme() {
  const html = document.querySelector("html");
  html.classList.toggle("light");
}

const button = document.querySelector(".change-theme-btn");
button.addEventListener("click", changeTheme);

const citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
