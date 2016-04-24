'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('../components/Main');
var HeaderContainer = require('../containers/HeaderContainer');

var MainContainer = React.createClass({
	render: function() {
		return (
			<Main>
				<HeaderContainer></HeaderContainer>
				{ this.props.children }
			</Main>
		)
	}
});

module.exports = MainContainer;