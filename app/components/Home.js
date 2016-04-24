'use strict';

var React = require('react');
var PropTypes = React.PropTypes;

var BootstrapContainer = require('../components/BootstrapContainer');
var InputContainer = require('../containers/InputContainer');
var styles = require('../styles');

function Home(props) {
	return (
		<BootstrapContainer>
			<div className="col-sm-12 text-center" style={ styles.backgroundPattern }>
				<div className="col-sm-8 col-sm-offset-2">
					<h1>Enter a City and State</h1>
					<InputContainer />
				</div>
			</div>
		</BootstrapContainer>
	)
}

module.exports = Home;