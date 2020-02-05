
 /*eslint-env jquery*/
//stuff for user input (city) ---Dear Emmanuel - it does not work - where is my mistake??? :(

//var api = 'http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=0595215f568d90110031d71a7b16a440';
//var citytype = 'London';
//var apiKey = '&APPID=0595215f568d90110031d71a7b16a440';
//var units = '&units=metric';
//var url = api + citytype + apiKey + units;


$(document).ready(function(){

  $('#divBtn').hide().delay(1000).show(3000);

    $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
    $('#myModal').modal('toggle')
  });


  //Correction of the code begins here *******remember that too much comments makes your 
  //code difficult to read. in all you have done an amazing job.


  var initialCity = "london";

  $('#submit').click(function() {

    var val = $('#citytype').val();
    initialCity = val;

    loadWeatherData();
    $('#citytype').val('')
  });

  
  //get the API from openweathermap & with console.log checking if data is loaded
  function loadWeatherData() {
    jQuery.getJSON('http://api.openweathermap.org/data/2.5/weather?q='+initialCity+'&units=metric&APPID=0595215f568d90110031d71a7b16a440',
    function(data) {
      displayWeatherInfo(data);
    });
  };


function displayWeatherInfo(data) {
  //now get the default icons which openweathermap is giving me displayed - created therefore in the indey.html the class for it

  var icon = 'http://openweathermap.org/img/w/'+ data.weather[0].icon + '.png';
  var temp = Math.floor(data.main.temp); //get the temperatur displayed like the icon & hint: Math.floor ist für die Rundung
  var weather = data.weather[0].main;// get the weather with words displayed
  var city  = data.name;
  var detailWeather = data.weather[0].description; //get descpription for the details in the modal


  jQuery('.icon').attr('src', icon);
  jQuery('.temp').html(temp);
  jQuery('.weather').html(weather);
  jQuery('.city').html(city);
  jQuery('.detailWeather').html(detailWeather);
}
loadWeatherData();


});
