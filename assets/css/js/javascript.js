
var searchCity = $("#search-city");
var currentWeather = $('#current-weather');
var cityName = $('.city-name');
var cityTemp = $('.city-temp');
var cityWind = $('.city-wind');
var cityHumidity = $('.city-humidity');
var cityIndex = $('.city-index');


var searchBtn = $(".searchBtn")
$ (searchBtn).on("click", function(){
  getApi();
});
function getApi() {
  var getCityName = searchCity.val();
  var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + getCityName + '&appid=089135872fa5031f91618d985e90536c&units=imperial';
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      cityName.text( data.name+ " " + moment().format('L') );
      cityTemp.text("Temp: " + data.main.temp + " ℉")
      cityWind.text("Wind: " + data.wind.speed + " MPH")
      cityHumidity.text("Humidity: " + data.main.humidity + " %")
      var cityLat = (data.coord.lat);
      var cityLon = (data.coord.lon);
      var oneCallUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + cityLat + '&lon=' +cityLon +'&exclude={part}&appid=089135872fa5031f91618d985e90536c&units=imperial'
      var fiveDayUrl = 'api.openweathermap.org/data/2.5/forecast?lat=' + cityLat + '&lon=' + cityLon + '&appid=089135872fa5031f91618d985e90536c&units=imperial'
      fetch (oneCallUrl)
        .then (function (responseone){
          return responseone.json();
        })
        .then (function (dataone){
          console.log(dataone)
          cityIndex.text("UV Index: " + dataone.current.uvi);
          cityIndex.removeClass("green yellow orange red purple");
          if (dataone.current.uvi>=0 & dataone.current.uvi<=2.99){
            cityIndex.addClass("green")
          }
          if (dataone.current.uvi>=3 & dataone.current.uvi<=5.99){
            cityIndex.addClass("yellow")
          }
          if (dataone.current.uvi>=6 & dataone.current.uvi<=7.99){
            cityIndex.addClass("orange")
          }
          if (dataone.current.uvi>=8 & dataone.current.uvi<=10.99){
            cityIndex.addClass("red")
          }
          if (dataone.current.uvi>=11){
            cityIndex.addClass("purple")
          }
        })
        fetch (fiveDayUrl)
          .then (function (fivedayresponse){
            return fivedayresponse.json();
          })
          .then (function (datafiveday){
            console.log(datafiveday);
            for (let i = 0; i < datafiveday.list.length; i++){
              cardDate = $("#card-date");
              cardDate.text(datafiveday.list[i].dt_txt)
              cardBody = $("#card-body");
            }
          })
    });
}
