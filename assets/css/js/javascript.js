

function getApi() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
        
      });
}
getApi();
