// express setup
const http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// point express to client folder / automatically start serving up those files.
app.use(express.static('client'));
app.use('/', bodyParser.json());
// listens to when GET method occurs
app.get('/', function(request, response) {
  response.send(   );
})
// listens to when POST method occurs
app.get('/', function(request, response) {
  response.send(   );
})
// listens to port
app.listen(3000, () => {
  console.log('Server listening on port 3000!');
});