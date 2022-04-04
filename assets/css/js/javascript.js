
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
      var iconEl = $(".icon-current")
      var dataIcon= (data.weather[0].icon)
      var iconUrl="http://openweathermap.org/img/wn/" + dataIcon + "@2x.png"
      iconEl.attr("src", iconUrl);
      cityName.text( data.name+ " " + moment().format('L'));
      cityTemp.text("Temp: " + data.main.temp + " ℉")
      cityWind.text("Wind: " + data.wind.speed + " MPH")
      cityHumidity.text("Humidity: " + data.main.humidity + " %")
      var cityLat = (data.coord.lat);
      var cityLon = (data.coord.lon);
      var oneCallUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + cityLat + '&lon=' +cityLon +'&exclude={part}&appid=089135872fa5031f91618d985e90536c&units=imperial'
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
          cardDateOne.text("Date: " + dataone.daily[0].dt)
          var reformatDate = moment(cardDateOne).add(1, "days").format("M/D/YY")
          cardDateOne.text("Date: " + reformatDate)
          var dataIconOne= (dataone.daily[0].weather[0].icon)
          var iconUrlOne="http://openweathermap.org/img/wn/" + dataIconOne + "@2x.png"
          cardIconOne.attr("src", iconUrlOne);
          cardTempOne.text("Temp: " + dataone.daily[0].temp.day + "℉")
          cardWindOne.text("Wind: " + dataone.daily[0].wind_speed + " MPH")
          cardHumidityOne.text("Humidity: " + dataone.daily[0].humidity + " %")

          cardDateTwo.text("Date: " + dataone.daily[1].dt)
          var reformatDateTwo = moment(cardDateOne).add(2, "days").format("M/D/YY")
          cardDateTwo.text("Date: " + reformatDateTwo)
          var dataIconTwo= (dataone.daily[1].weather[0].icon)
          var iconUrlTwo="http://openweathermap.org/img/wn/" + dataIconTwo + "@2x.png"
          cardIconTwo.attr("src", iconUrlTwo);
          cardTempTwo.text("Temp: " + dataone.daily[1].temp.day + "℉")
          cardWindTwo.text("Wind: " + dataone.daily[1].wind_speed + " MPH")
          cardHumidityTwo.text("Humidity: " + dataone.daily[1].humidity + " %")

          cardDateThree.text("Date: " + dataone.daily[2].dt)
          var reformatDateThree = moment(cardDateOne).add(3, "days").format("M/D/YY")
          cardDateThree.text("Date: " + reformatDateThree)
          var dataIconThree= (dataone.daily[2].weather[0].icon)
          var iconUrlThree="http://openweathermap.org/img/wn/" + dataIconThree + "@2x.png"
          cardIconThree.attr("src", iconUrlThree);
          cardTempThree.text("Temp: " + dataone.daily[2].temp.day + "℉")
          cardWindThree.text("Wind: " + dataone.daily[2].wind_speed + " MPH")
          cardHumidityThree.text("Humidity: " + dataone.daily[2].humidity + " %")

          cardDateFour.text("Date: " + dataone.daily[3].dt)
          var reformatDateFour = moment(cardDateFour).add(4, "days").format("M/D/YY")
          cardDateFour.text("Date: " + reformatDateFour)
          var dataIconFour= (dataone.daily[3].weather[0].icon)
          var iconUrlFour="http://openweathermap.org/img/wn/" + dataIconFour + "@2x.png"
          cardIconFour.attr("src", iconUrlFour);
          cardTempFour.text("Temp: " + dataone.daily[3].temp.day + "℉")
          cardWindFour.text("Wind: " + dataone.daily[3].wind_speed + " MPH")
          cardHumidityFour.text("Humidity: " + dataone.daily[3].humidity + " %")

          cardDateFive.text("Date: " + dataone.daily[4].dt)
          var reformatDateFive = moment(cardDateFive).add(5, "days").format("M/D/YY")
          cardDateFive.text("Date: " + reformatDateFive)
          var dataIconFive= (dataone.daily[4].weather[0].icon)
          var iconUrlFive="http://openweathermap.org/img/wn/" + dataIconFive + "@2x.png"
          cardIconFive.attr("src", iconUrlFive);
          cardTempFive.text("Temp: " + dataone.daily[4].temp.day + "℉")
          cardWindFive.text("Wind: " + dataone.daily[4].wind_speed + " MPH")
          cardHumidityFive.text("Humidity: " + dataone.daily[4].humidity + " %")
        })
    });
}

var cardDateOne = $("#card-date-one")
var cardIconOne = $(".card-icon-one")
var cardTempOne = $(".card-temp-one")
var cardWindOne = $("#card-wind-one")
var cardHumidityOne = $("#card-humidity-one")

var cardDateTwo = $("#card-date-two")
var cardIconTwo = $(".card-icon-two")
var cardTempTwo = $(".card-temp-two")
var cardWindTwo = $("#card-wind-two")
var cardHumidityTwo = $("#card-humidity-two")

var cardDateThree = $("#card-date-three")
var cardIconThree = $(".card-icon-three")
var cardTempThree = $(".card-temp-three")
var cardWindThree = $("#card-wind-three")
var cardHumidityThree = $("#card-humidity-three")

var cardDateFour = $("#card-date-four")
var cardIconFour = $(".card-icon-four")
var cardTempFour = $(".card-temp-four")
var cardWindFour = $("#card-wind-four")
var cardHumidityFour = $("#card-humidity-four")

var cardDateFive = $("#card-date-five")
var cardIconFive = $(".card-icon-five")
var cardTempFive = $(".card-temp-five")
var cardWindFive = $("#card-wind-five")
var cardHumidityFive = $("#card-humidity-five")