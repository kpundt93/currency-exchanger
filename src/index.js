import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from "./js/currency-service";

function buildCurrencyString(response, usd, currency) {
  console.log(currency);
  Object.keys(response.conversion_rates).forEach(function(key) {
    if(key === currency.toUpperCase()) {
      console.log(key);
      console.log("currency found");
      let convertedAmount = response.conversion_rates[key] * usd;
      console.log(response.conversion_rates[key]);
      console.log(convertedAmount);
      $('#conversion-result').text(convertedAmount);
    }
    return `<p>Error!</p>`;
  });
}

function displayCurrency(response, usd, currency) {
  let output = buildCurrencyString(response, usd, currency);
  $('#conversion-result').text(output);
}

function displayErrors(error) {
  $('#show-errors').text(`${error}`);
}

$(document).ready(function(){
  $('#convert').click(function(){
    CurrencyService.getCurrency()
      .then(function(currencyResponse) {
        if (currencyResponse instanceof Error) {
          throw Error(`ExchangeRate-API error: ${currencyResponse.message}`);
        }
        displayCurrency(currencyResponse, $('#usd-amount').val(), $('#currency-code').val().toUpperCase());
      })
      .catch(function(error) {
        displayErrors(error.message);
      });
  });
});