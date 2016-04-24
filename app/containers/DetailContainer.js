'use strict';

var React = require('react');
var CityDetails = require('../components/CityDetails');

var DetailContainer = React.createClass({
	render: function() {
		return (
			<CityDetails
				day={ this.props.location.state.day } 
				city={ this.props.routeParams.city }/>
		)
	}
})

module.exports = DetailContainer;