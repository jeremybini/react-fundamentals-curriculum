'use strict';

var React = require('react');
var Forecast = require('../components/Forecast');
var weatherHelper = require('../utils/weatherHelper');

var ForecastContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState: function() {
		return {
			isLoading: true,
			forecast: {}
		}
	},

	componentDidMount: function() {
		var city = this.props.routeParams.city.split(',')[0];
		
		this.fetchForecast(city);
	},

	componentWillReceiveProps: function(props) {
		this.fetchForecast(props.routeParams.city)
	},

	handleClick: function(day) {
		this.context.router.push({
			pathname: '/details/' + this.props.routeParams.city,
			state: {
				day: day
			}
		})
	},

	render: function() {
		return (
			<Forecast
				city={ this.props.routeParams.city }
				handleClick={ this.handleClick }
				isLoading={ this.state.isLoading }
				forecast={ this.state.forecast }>
			</Forecast>
		)
	},

	fetchForecast: function(city) {
		return weatherHelper.getForecast(city)
			.then(function(weather) {
				this.setState({
					isLoading: false,
					forecast: weather
				})
			}.bind(this))
	}

})

module.exports = ForecastContainer;