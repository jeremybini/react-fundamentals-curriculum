'use strict';

var React = require('react');
var Link = require('react-router').Link;
var BootstrapContainer = require('../components/BootstrapContainer');
var InputContainer = require('../containers/InputContainer');
var styles = require('../styles');

function Header(props) {
	return (
		<BootstrapContainer>
			<div className="col-xs-12" style={ styles.orangeBg }>
				<Link to="/">
					<div className="title pull-left">Clever Title</div>
				</Link>
				<div className="header-input pull-right">
					<InputContainer />
				</div>
			</div>
		</BootstrapContainer>
	)
}

module.exports = Header;
