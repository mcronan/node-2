// Part 1,2 and 3

// var fs = require('fs')
// var express = require('express');

// var app = express();
// app.set('view engine', 'jade');
// app.set('views', __dirname + '/views');

// app.get('/', function(req, res) {

// 	fs.readFile('data.txt', function(err, data) {
// 		res.header('Content-Type', 'text/html')
// 		res.send(data)
// 	})
// });

// var server = app.listen(6951, function() {
// 	console.log('Express server listening on port ' + server.address().port);
// });

//  Bonus: Static file server

var fs = require('fs')
var express = require('express');

var app = express();

app.set('view engine', 'jade');

app.set('views', __dirname + '/views');
// the ':' tells node that this is a dynamic address
	app.get('/:filename', function(req, res) {
		// req.params.filename is the input
		fs.readFile('./public/' + req.params.filename, function(err, data) {
			res.header('Content-Type', 'text/html');
			res.send(data);
			})
});


var server = app.listen(6951, function() {
	console.log('Express server listening on port ' + server.address().port);
});
