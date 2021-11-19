import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from "./js/currency-service";

function buildCurrencyString(response, usd, currency) {
  for (let i = 0; i < response.conversion_rates.length; i++) {
    if (currency === response.conversion_rates[i]) {
      return `<p>$${usd} USD is equivalent to ${usd * response.conversion_rates[i]} in ${currency}.</p>`;
    }
  }
  return `<p>I'm sorry, we couldn't find an exchange rate for ${currency}.</p>`;
}

function displayCurrency(response, usd, currency) {
  let output = buildCurrencyString(response, usd, currency);
  $('#conversion-result').html(output);
}

function displayErrors(error) {
  $('#show-errors').text(`${error}`);
}

$(document).ready(function(){
  $('#convert').click(function(){
    let usd = $('#usd-amount').val();
    let currency = $('#ex-currency').val();
    CurrencyService.getCurrency()
      .then(function(currencyResponse) {
        if (currencyResponse instanceof Error) {
          throw Error(`ExchangeRate-API error: ${currencyResponse.message}`);
        }
        displayCurrency(currencyResponse);
      })
      .catch(function(error) {
        displayErrors(error.message);
      });
    console.log("usd-amount: " + usd);
    console.log("exchange currency: " + currency);
  });
});