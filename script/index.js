const barcelonaElement = document.querySelector("#barcelona");
const hongKongElement = document.querySelector("#hong-kong");

function updateTime() {
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
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>`;
  }
  displayNewTime();
  setInterval(displayNewTime, 1000);
}

const citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
