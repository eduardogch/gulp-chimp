var express    = require('express');
var path       = require('path');
var logger     = require('morgan');
var bodyParser = require('body-parser');
var app        = express();

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

/**
 * Primary app routes.
 */
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/home', function(req, res) {
    res.sendFile(path.join(__dirname + '/home.html'));
});

/**
 * Start Express server.
 */
app.listen(app.get('port'), function() {
  console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});

module.exports = app;
