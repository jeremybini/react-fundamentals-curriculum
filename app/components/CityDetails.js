'use strict';

var React = require('react');
var PropTypes = React.PropTypes;

var BootstrapContainer = require('../components/BootstrapContainer');
var WeatherIcon = require('../components/WeatherIcon');
var convertTemp = require('../utils/weatherHelper').convertTemp;

function CityDetails(props) {
	return (
		<BootstrapContainer>
			<div className="col-xs-12 text-center">
				<WeatherIcon day={ props.day } />
				<div>
	        <h4>{props.city}</h4>
	        <p>{props.day.weather[0].description}</p>
	        <p>min temp: {convertTemp(props.day.temp.min)} degrees</p>
	        <p>max temp: {convertTemp(props.day.temp.max)} degrees</p>
	        <p>humidity: {props.day.humidity}</p>
	      </div>
			</div>
		</BootstrapContainer>
	)
}

CityDetails.propTypes = {
	city: PropTypes.string.isRequired,
	day: PropTypes.shape({
		weather: PropTypes.array.isRequired,
		temp: PropTypes.object.isRequired,
		humidity: PropTypes.number.isRequired
	})
}

module.exports = CityDetails;