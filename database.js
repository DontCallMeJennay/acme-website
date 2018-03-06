var mongoose = require('mongoose');
var MongoStore = require('connect-mongo')(session);
var connect = mongoose.connect('mongodb://localhost:27017/acme', {
	useMongoClient: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));