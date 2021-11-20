import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from "./js/currency-service";

function buildCurrencyString(response, usd, currency) {
  Object.keys(response.conversion_rates).forEach(function(key) {
    if (key === currency.toUpperCase()) {
      let convertedAmount = (parseFloat(response.conversion_rates[key]) * usd).toFixed(2);
      $('#conversion-result').text(`$${usd} converted to ${currency} is ${convertedAmount}.`);
    } 
    const currencyCodes = Object.keys(response.conversion_rates);
    for (let i = 0; i < currencyCodes.length; i++) {
      if (currency === currencyCodes[i]) {
        return ("currency found");
      }
    }
    return $('#show-errors').text("Error! Please enter a valid currency code.");
  });
}

function displayCurrency(response, usd, currency) {
  let output = buildCurrencyString(response, usd, currency);
  $('#conversion-result').text(output);
}

function displayErrors(error) {
  $('#show-errors').text(`${error}`);
}

function reset() {
  $('#conversion-result').text("");
  $('#show-errors').text("");
}

$(document).ready(function(){
  $('#convert').click(function(event){
    event.preventDefault();
    reset();
    let usd = $('#usd-amount').val();
    let currency = $('#currency-code').val().toUpperCase();
    CurrencyService.getCurrency()
      .then(function(currencyResponse) {
        if (currencyResponse instanceof Error) {
          throw Error(`ExchangeRate-API error: ${currencyResponse.message}`);
        }
        displayCurrency(currencyResponse, usd, currency);
      })
      .catch(function(error) {
        displayErrors(error.message);
      });
  });
});