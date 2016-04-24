'use strict';

var React = require('react');

function BootstrapContainer(props) {
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					{ props.children }
				</div>
			</div>
		</div>
	)
}

module.exports = BootstrapContainer;