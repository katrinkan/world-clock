function updateTime() {
  // Barcelona
  const barcelonaElement = document.querySelector("#barcelona");
  const barcelonaDateElement = barcelonaElement.querySelector(".date");
  const barcelonaTimeElement = barcelonaElement.querySelector(".time");
  const barcelonaTime = moment().tz("Europe/Madrid");
  barcelonaDateElement.innerHTML = moment().format("MMMM Do YYYY");
  barcelonaTimeElement.innerHTML = `${barcelonaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;

  //Hong Kong
  const hongKongElement = document.querySelector("#hong-kong");
  const hongKongDateElement = hongKongElement.querySelector(".date");
  const hongKongTimeElement = hongKongElement.querySelector(".time");
  const hongKongTime = moment().tz("Asia/Hong_Kong");
  hongKongDateElement.innerHTML = moment().format("MMMM Do YYYY");
  hongKongTimeElement.innerHTML = `${hongKongTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;
}
updateTime();
setInterval(updateTime, 1000);
