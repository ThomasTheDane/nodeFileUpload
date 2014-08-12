var fs = require('fs');

exports.upload = function(req, res) {
	console.log(req.files);
	res.render('index', {title: 'File uploaded, check node console'});
}; 

