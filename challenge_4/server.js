const express = require('express');
const app = express();


app.use(express.static(__dirname + '/src/client'));

app.get('/', function(request, response) {
  response.send(200);
});

app.post('/', function(request, response) {
  request.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    response.send(request.body);
  })
});


app.listen(3000, () => console.log('Listening to port 3000!'));