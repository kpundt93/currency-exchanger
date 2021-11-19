import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from "./js/currency-service";

function displayErrors(error) {
  $('#show-errors').text(`${error}`);
}

$(document).ready(function(){
  $('#convert').click(function(){
    let usd = $('#usd-amount').val();
    let currency = $('#ex-currency').val();
    CurrencyService.getCurrency(currency)
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