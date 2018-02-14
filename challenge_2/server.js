// express setup
const http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// point express to client folder / automatically start serving up those files.
app.use(express.static('client'));
// to support JSON-encoded bodies
app.use(bodyParser.json());
// to support URL-encoded bodies
app.use(bodyParser.urlencoded({     
  extended: false
}));
// listens to when GET method occurs
app.get('/', function(request, response) {
  response.send(200);
})

var values = [];
// recursion to flatten object
var flatten = (body) => {
  body = JSON.parse(body);
  for (var props in body) {
    values.push(props);
    // if doesn't have children, push values
    if (props !== 'children') {
      values.push(body[props]);
    } else {
      // loop over children
      for (var i = 0; i < body['children'].length; i++) {
        var obj = body['children'][i];
        // recurse to keep checking if there's children
        flatten(obj);
      }
    }
  }
  return values.toString();
}

// listens to when POST method occurs
app.post('/', function(request, response) {
  // response.send(JSON.stringify(request.body));
  // console.log(request.body);
  let body = [];
  request.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    response.set('Content-Type', 'application/json');
    response.send(flatten(body));
  });
})
// listens to port
app.listen(3000, () => {
  console.log('Server listening on port 3000!');
});



