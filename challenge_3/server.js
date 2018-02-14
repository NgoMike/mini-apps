const express = require('express');
const app = express();

// static file = client folder
app.use(express.static('client'));

app.get('/', function(request, response) {
  response.send(200);
});

app.post('/', function(request, response) {
  response.send();
});
// set express to listen to localhost port
app.listen(3000, () => console.log('Listening to port 3000!'));


