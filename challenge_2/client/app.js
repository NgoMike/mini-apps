// input: JSON data
// output: CSV report

//textarea - input field for JSON data
// submit button - on click - POST form data to server

// prevent page from reloading/change in URL

// jquery ajax OK and for DOM events
// nodemon
// no css

// server must flatten JSON hierachy - mapping each item in JSON to single line of CSV report
// child records in jSON = property children
// other columns must be mapped in CSV
import $ from 'jquery';

// event listener for when form is filled and submitted
$('#submitBtn').on('click', function(e){
  // prevents reload of page
  e.preventDefault();
  var textValues = document.getElementById('text').val();
  
  $.ajax({
    url: localhost:3000,
    type: 'POST',
    dataType: 'application/json',
    success: () => {
      console.log('Success!');
    }
  });
});




// export { post };