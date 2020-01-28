var city = "London"

//get the API from openweathermap & with console.log checking if data is loaded
jQuery.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=0595215f568d90110031d71a7b16a440",
function(data){
  console.log(data);

//now get the default icons which openweathermap is giving me displayed - created therefore in the indey.html the class for it

  var icon = "http://openweathermap.org/img/w/"+ data.weather[0].icon + ".png";
  var temp = Math.floor(data.main.temp); //get the temperatur displayed like the icon & hint: Math.floor ist für die Rundung
  var weather = data.weather[0].main;// get the weather with words displayed
  var city  = data.name;
  var detailWeather = data.weather[0].description; //get descpription for the details in the modal

  jQuery(".icon").attr('src', icon);
  jQuery(".temp").append(temp);
  jQuery(".weather").append(weather);
  jQuery(".city").append(city);
  jQuery(".detailWeather").append(detailWeather);

});

//****modal stuff****
//***most important statement to get jquery "started"
$(document).ready(function(){
//  alert($);   ***for checking if jquery is installed and up and running
//just for fun to give the page more life
$("#modalButton").hide().delay(1000).show(1000);
//show the modal when clicking on the button "more details"
$("#modalButton").on("click", function(){
  $("#modal").show(); //show the modal when clicking
//hide the modal again when clicking "x"
$("#closeButton").on("click", function(){
  $("#modal").hide();






});
});
});
