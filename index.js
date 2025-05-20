function updateClock() {
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");
losAngelesDateElement.innerHTML =losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML =losAngelesTime.format("h:mm:ss [<small>]A[</small>]");


let berlinElement = document.querySelector("#berlin");
let berlinDateElement = berlinElement.querySelector(".date");
let berlinTimeElement = berlinElement.querySelector(".time");
let berlinTime = moment().tz("Europe/Berlin");
berlinDateElement.innerHTML =berlinTime.format("MMMM Do YYYY");
berlinTimeElement.innerHTML =berlinTime.format("h:mm:ss [<small>]A[</small>]");


let sydneyElement = document.querySelector("#sydney");
let sydneyDateElement = sydneyElement.querySelector(".date");
let sydneyTimeElement = sydneyElement.querySelector(".time");
let sydneyTime = moment().tz("Australia/Sydney");
sydneyDateElement.innerHTML =sydneyTime.format("MMMM Do YYYY");
sydneyTimeElement.innerHTML =sydneyTime.format("h:mm:ss [<small>]A[</small>]");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess()};
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
   
    let cityDisplayElement = document.querySelector("#city");
    cityDisplayElement.innerHTML = `


    <div class="city" >
        <div class="city-date">
                <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.
            format(
                "A"
            )}</small></div>
    </div>
    `;
}
let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", updateCity);

updateClock();
setInterval(updateClock, 1000);


