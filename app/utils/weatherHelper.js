'use strict';

var axios = require('axios');
var API_KEY = require('../../keys').API_KEY;
var path = 'http://api.openweathermap.org/data/2.5/';

function extractData(res) {
	return res.data;
}

module.exports = {
	getCurrentWeather: function(city) {
		return axios.get(path + 'weather?q='+ city + '&type=accurate&APPID=' + API_KEY)
			.then(extractData)
			.catch(function(err) {
				console.warn('There was an error retrieving the current weather: ', err);
			})
	},

	getForecast: function(city) {
		return axios.get(path + 'forecast/daily?q=' + city + '&type=accurate&APPID=' + API_KEY + '&cnt=5')
			.then(extractData)
			.catch(function(err) {
				console.warn('There was an error retrieving the current weather: ', err);
			})
	},

	convertTemp: function(temp) {
		return Math.round(temp * (9/5) - 459.67);
	}
}