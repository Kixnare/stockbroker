let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let gmeElement = document.querySelector(".js-gmeResult");
let pltrElement = document.querySelector(".js-pltrResult");
let amcElement = document.querySelector(".js-amcResult");
let bbElement = document.querySelector(".js-bbResult");




formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let ratePLNtoUSD = 0.26;
  let rateEURtoUSD = 1.20;
  let gmePriceInUSD = 173.59;
  let pltrPriceInUSD = 23.04;
  let amcPriceInUSD = 10.03;
  let bbPriceInUSD = 8.83;

  let amount = +amountElement.value;
  let currency = currencyElement.value;

  switch (currency) {
    case "PLN":
      gme = amount * ratePLNtoUSD / gmePriceInUSD
      pltr = amount * ratePLNtoUSD / pltrPriceInUSD
      amc = amount * ratePLNtoUSD / amcPriceInUSD
      bb = amount * ratePLNtoUSD / bbPriceInUSD
      break;
    case "USD":
      gme = amount / gmePriceInUSD
      pltr = amount / pltrPriceInUSD
      amc = amount / amcPriceInUSD
      bb = amount / bbPriceInUSD
      break;
    case "EUR":
      gme = amount * rateEURtoUSD / gmePriceInUSD
      pltr = amount * rateEURtoUSD / pltrPriceInUSD
      amc = amount * rateEURtoUSD / amcPriceInUSD
      bb = amount * rateEURtoUSD / bbPriceInUSD
      break;
  }

  gmeElement.innerText = gme.toFixed(4);
  pltrElement.innerText = pltr.toFixed(4);
  amcElement.innerText = amc.toFixed(4);
  bbElement.innerText = bb.toFixed(4);
});
