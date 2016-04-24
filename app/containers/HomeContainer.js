'use strict';

var React = require('react');
var Home = require('../components/Home');
var weatherHelper = require('../utils/weatherHelper');

var HomeContainer = React.createClass({
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
			<Home
				onPlaceChange={ this.handlePlaceChange }
				onPlaceSubmit={ this.handlePlaceSubmit }>
			</Home>
		)
	}
})

module.exports = HomeContainer;