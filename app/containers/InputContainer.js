'use strict';

var React = require('react');
var CityInput = require('../components/CityInput');
var weatherHelper = require('../utils/weatherHelper');

var InputContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState: function() {
		return {
			place: "",
		}
	},

	handlePlaceChange: function(e) {
		this.setState({
			place: e.target.value
		})
	},

	handlePlaceSubmit: function(e) {
		e.preventDefault();
		
		this.context.router.push({
			pathname: '/forecast/' + this.state.place
		});
	},

	render: function() {
		return (
			<CityInput
				onPlaceChange={ this.handlePlaceChange }
				onPlaceSubmit={ this.handlePlaceSubmit }>
			</CityInput>
		)
	}
})

module.exports = InputContainer;