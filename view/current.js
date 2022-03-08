const current = (data) => {
    var localizacion = data['timezone'].split("/");
    document.getElementById('currentTemp').innerHTML = Math.round(data['current']['temp']) + "°";
    document.getElementById('geoCity').innerHTML = localizacion[1];
    document.getElementById('geoZone').innerHTML = localizacion[0];
    document.getElementById('tempMax').innerHTML = Math.round(data['daily'][0]['temp']['max']) + "°";
    document.getElementById('tempMin').innerHTML = Math.round(data['daily'][0]['temp']['min']) + "°";
    document.getElementById('humedad').innerHTML = "Humidity: " + data['daily'][0]['humidity'] + "%";
}