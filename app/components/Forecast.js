'use strict';

var React = require('react');
var PropTypes = React.PropTypes;

var BootstrapContainer = require('../components/BootstrapContainer');
var WeatherIcon = require('../components/WeatherIcon');

function Forecast(props) {
	return props.isLoading === true
		? <BootstrapContainer>
				<div className="text-center">
					<h1>Loading</h1>
				</div>
			</BootstrapContainer>
		: <BootstrapContainer>
				<div className="col-xs-12 text-center">
					<h1>{ props.city }</h1>
					<h2>Select a Day</h2>
					{ props.forecast.list.map(function(day, index) {
						return (
							<div className="col-sm-4" key={ index }>
								<WeatherIcon
									handleClick={ props.handleClick.bind(null, day) }
									day={ day }>
								</WeatherIcon>
							</div>
						)
					})}
				</div>
			</BootstrapContainer>
}

Forecast.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	forecast: PropTypes.object.isRequired,
	handleClick: PropTypes.func.isRequired,
	city: PropTypes.string.isRequired
}

module.exports = Forecast;