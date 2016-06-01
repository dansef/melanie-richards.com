/* SWITCH STYLES BASED ON LOCAL WEATHER
 * Cheat sheet for weather keywords: https://www.wunderground.com/weather/api/d/docs?d=resources/phrase-glossary&MR=1
 */

var weatherReq = new XMLHttpRequest();
var weatherApiKey = API_KEY_HERE;
var weatherApiURL = 'http://api.wunderground.com/api/' + weatherApiKey + '/conditions/q/WA/Seattle.json';

weatherReq.addEventListener('load', weatherSuccess);
weatherReq.open('GET', weatherApiURL);
weatherReq.send();

function weatherSuccess() {
  var weatherResponse = JSON.parse(this.responseText),
      currentConditions = weatherResponse.current_observation,
      weatherWord = currentConditions.weather.toLowerCase();
  printWeatherMsg(weatherWord);
  weatherBodyClass(weatherWord);
}

// Print weather message in footer
function printWeatherMsg(weatherWord) {

  if (weatherWord == 'clear') {
    var consequenceString = 'so things on the site are looking bright.'
  } else {
    var consequenceString = 'so things are a little grey on the site.'
  }
  var weatherFooterString = 'The <a href="https://www.wunderground.com/weather/api/">weather</a> in Seattle is ' + weatherWord + ', ' + consequenceString;

  var weatherFooterText = document.createElement('p');
  weatherFooterText.id = 'js-footer-weather';
  weatherFooterText.className += 'site-footer__weather';
  weatherFooterText.innerHTML = weatherFooterString;

  if (document.getElementById(weatherFooterText.id) == null) {
    document.getElementById('js-footer').appendChild(weatherFooterText);
  }

}

// Add a class to body if applies
function weatherBodyClass(weatherWord) {
  if (weatherWord != 'clear') {
    document.body.className += ' body--grey';
  }
}