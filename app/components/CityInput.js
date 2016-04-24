'use strict';

var React = require('react');
var PropTypes = React.PropTypes;
var BootstrapContainer = require('../components/BootstrapContainer');
var styles = require('../styles');

function CityInput(props) {
	return (
		<form onSubmit={ props.onPlaceSubmit }>
			<input
				onChange={ props.onPlaceChange }
				type="text"
				placeholder="St. George, Utah">
			</input>
			<button type="submit" className="btn btn-success">Get Weather</button>
		</form>
	)
}

CityInput.propTypes = {
	onPlaceSubmit: PropTypes.func.isRequired,
	onPlaceChange: PropTypes.func.isRequired
}

module.exports = CityInput;