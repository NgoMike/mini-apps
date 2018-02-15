const express = require('express');
const http = require('http');
const app = express();

// static file = index.html in dist/compiled
app.use(express.static(__dirname + '/dist/compiled'));

app.get('/', function(request, response) {
  response.send(200);
});

let body = [];
app.post('/', function(request, response) {
  request.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    response.send(request.body);
  })
});
// set express to listen to localhost port
app.listen(3000, () => console.log('Listening to port 3000!'));

