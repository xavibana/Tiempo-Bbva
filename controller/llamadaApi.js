function geo_success(position) {
    var apiUrl = 'https://api.openweathermap.org/data/2.5/onecall?';
    var lat = 'lat=' + position.coords.latitude;
    var long = '&lon=' + position.coords.longitude;
    var exclu = '&exclude=minutely,hourly';
    var apiKey = '&units=metric&appid=1b7a9ad11a8b3dda8a62a94aea1830b8';
    var apiCall = apiUrl + lat + long + exclu + apiKey;
    fetch(apiCall).then(response => response.json()).then(data => {
        current(data);
        forecast(data);
        recuperarIcons(data);
    });
}

function current(data) {
    var localizacion = data['timezone'].split("/");
    document.getElementById('currentTemp').innerHTML = Math.round(data['current']['temp']) + "°";
    document.getElementById('geoCity').innerHTML = localizacion[1];
    document.getElementById('geoZone').innerHTML = localizacion[0];
    document.getElementById('tempMax').innerHTML = Math.round(data['daily'][0]['temp']['max']) + "°";
    document.getElementById('tempMin').innerHTML = Math.round(data['daily'][0]['temp']['min']) + "°";
    document.getElementById('humedad').innerHTML = "Humidity: " + data['daily'][0]['humidity'] + "%";
}

function recuperarIcons(data) {
    var responseApi;
    var rain = 'bi-cloud-rain';
    var clouds = 'bi-clouds';
    var fewClouds = 'bi-cloud-sun';
    var clear = 'bi-sun img-fluid';
    var thunderstorm = 'bi-cloud-lightning-rain';
    var snow = 'bi-cloud-snow';
    var err = 'bi-question-diamond';
    for (var i = 0; i < 4; i++) {
        responseApi = data['daily'][i]['weather'][0]['main'];
        if (responseApi == 'Rain') {
            document.getElementById('icon' + i).classList.add(rain);
        } else if (responseApi == 'Clouds') {
            document.getElementById('icon' + i).classList.add(clouds);
        } else if (responseApi == 'Drizzle') {
            document.getElementById('icon' + i).classList.add(fewClouds);
        } else if (responseApi == 'Clear') {
            document.getElementById('icon' + i).classList.add(clear);
        } else if (responseApi == 'Thunderstorm') {
            document.getElementById('icon' + i).classList.add(thunderstorm);
        } else if (responseApi == 'Snow') {
            document.getElementById('icon' + i).classList.add(snow);
        } else {
            document.getElementById('icon' + i).classList.add(err);
        }
    }
}

function forecast(data) {
    var dia = new Date();
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', ];
    //Se empieza en 1 para seleccionar desde el dia siguiente
    for (var i = 1; i < 4; i++) {
        if (dia.getDay() + i == 7) {
            document.getElementById('dia+' + i).innerHTML = days[0];
        } else if (dia.getDay() + i == 8) {
            document.getElementById('dia+' + i).innerHTML = days[1];
        } else if (dia.getDay() + i == 9) {
            document.getElementById('dia+' + i).innerHTML = days[2];
        } else {
            document.getElementById('dia+' + i).innerHTML = days[dia.getDay() + i];
        }
        document.getElementById('tempMaxDia+' + i).innerHTML = Math.round(data['daily'][i]['temp']['max']) + "°";
        document.getElementById('tempMinDia+' + i).innerHTML = Math.round(data['daily'][i]['temp']['min']) + "°";
    }
}

function geo_error() {
    document.getElementsByTagName('body')[0].innerHTML = "Debes acceptar los permisos de localizacion para poder consultar el tiempo";
    alert("Debes acceptar los permisos de localizacion para poder consultar el tiempo");
    //Redireccionamos al inicio o volvemos a cargar la pagina de inicio
}
var geo_options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000
};
//**************************
//         MAIN
//**************************
navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);