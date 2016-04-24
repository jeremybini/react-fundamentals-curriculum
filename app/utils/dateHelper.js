var moment = require('moment');

module.exports = {
	getDate: function(date) {
		return moment.unix(date).format('dddd, MMM Do')
	}
}