var fs = require('fs');

var src_path = __dirname + '/static/upload/photos/';
module.exports.list = function(callback) {
	fs.readdir(src_path, function(err, files) {
		var ret_files = [];
		files.forEach(function(file) {
			ret_files.push('/upload/photos/' + file);	
		});
		callback(err, ret_files);
	});
};