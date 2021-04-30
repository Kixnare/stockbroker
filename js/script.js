let plnElement = document.querySelector(".js-pln");
let formElement = document.querySelector(".js-form");
let gmeElement = document.querySelector(".js-gme");
let pltrElement = document.querySelector(".js-pltr");
let amcElement = document.querySelector(".js-amc");
let bbElement = document.querySelector(".js-bb");
let usd = 3.8;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let pln = plnElement.value;

  let gme = pln / (156.44 * usd);
  let pltr = pln / (23.15 * usd);
  let amc = pln / (9.94 * usd);
  let bb = pln / (8.77 * usd);

  gmeElement.innerText = gme.toFixed(4);
  pltrElement.innerText = pltr.toFixed(4);
  amcElement.innerText = amc.toFixed(4);
  bbElement.innerText = bb.toFixed(4);
});
