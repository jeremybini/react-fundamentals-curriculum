'use strict';

var React = require('react');
var PropTypes = React.PropTypes;
var getDate = require('../utils/dateHelper').getDate;

function getIcon(day) {
	var code = day.weather[0].icon.slice(0,-1);
	return '/app/images/' + code + '.svg'
};

function WeatherIcon(props) {
	return (
		<div onClick={ props.handleClick }>
			<img className="weather-icon" src={ getIcon(props.day) } />
			<h3>{ getDate(props.day.dt) }</h3>
			{ props.handleClick && <p>{ props.day.weather[0].main }</p>}
		</div>
	)
};

WeatherIcon.propTypes = {
	day: PropTypes.shape({
		dt: PropTypes.number.isRequired,
		weather: PropTypes.array.isRequired
	}),
	handleClick: PropTypes.func
};

module.exports = WeatherIcon;