//textarea - html form / input field
// submit button - on click - POST form data to server

// prevent page from reloading/change in URL

// jquery ajax OK and for DOM events
// nodemon
// no css

// server must flatten JSON hierachy - mapping each item in JSON to single line of CSV report
// child records in jSON = property children
// other columns must be mapped in CSV
import $ from 'jquery';

$('#submitBtn').on('click', () => {
  console.log('hello');
});

$.ajax({
  url: url,
  data: data,
  success: success,
  dataType: dataType
});