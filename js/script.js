{
  const calculateResult = (amount, currency) => {
    const ratePLNtoUSD = 0.26;
    const rateEURtoUSD = 1.20;
    const gmePriceInUSD = 173.59;
    const pltrPriceInUSD = 23.04;
    const amcPriceInUSD = 10.03;
    const bbPriceInUSD = 8.83;
    const gmeElement = document.querySelector(".js-gmeResult");
    const pltrElement = document.querySelector(".js-pltrResult");
    const amcElement = document.querySelector(".js-amcResult");
    const bbElement = document.querySelector(".js-bbResult");

    switch (currency) {
      case "PLN":
        gme = amount * ratePLNtoUSD / gmePriceInUSD;
        pltr = amount * ratePLNtoUSD / pltrPriceInUSD;
        amc = amount * ratePLNtoUSD / amcPriceInUSD;
        bb = amount * ratePLNtoUSD / bbPriceInUSD;
        break;
      case "USD":
        gme = amount / gmePriceInUSD;
        pltr = amount / pltrPriceInUSD;
        amc = amount / amcPriceInUSD;
        bb = amount / bbPriceInUSD;
        break;
      case "EUR":
        gme = amount * rateEURtoUSD / gmePriceInUSD;
        pltr = amount * rateEURtoUSD / pltrPriceInUSD;
        amc = amount * rateEURtoUSD / amcPriceInUSD;
        bb = amount * rateEURtoUSD / bbPriceInUSD;
        break;
    }

    gmeElement.innerText = gme.toFixed(4);
    pltrElement.innerText = pltr.toFixed(4);
    amcElement.innerText = amc.toFixed(4);
    bbElement.innerText = bb.toFixed(4);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const gme = calculateResult(amount, currency);
    const pltr = calculateResult(amount, currency);
    const amc = calculateResult(amount, currency);
    const bb = calculateResult(amount, currency);

    calculateResult(gme, pltr, amc, bb);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
  };

  init();
}
