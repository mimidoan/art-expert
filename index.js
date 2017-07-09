// var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();

// localhost port
app.set('port', (process.env.PORT || 5000));

// stylesheets stored in Public directory
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// render index page
app.get('/', function(request, response) {
  response.render('pages/index');
});

// render cool page
// app.get('/cool', function(request, response) {
//   response.send(cool());
// });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
