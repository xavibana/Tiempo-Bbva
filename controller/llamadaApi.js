function geo_success(position) {
    var apiUrl = 'https://api.openweathermap.org/data/2.5/onecall?';
    var lat = 'lat=' + position.coords.latitude;
    var long = '&lon=' + position.coords.longitude;
    var exclu = '&exclude=minutely,hourly';
    var apiKey = '&units=metric&appid=032ce5e220d604b633f702f740d7239c';
    var apiCall = apiUrl + lat + long + exclu + apiKey;
    fetch(apiCall)
        .then(response => response.json())
        .then(data => {
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
    var responseApi, iView;
    var wetherVals = {
        Rain: 'bi-cloud-rain',
        Clouds: 'bi-clouds',
        Drizzle: 'bi-cloud-sun',
        Clear: 'bi-sun img-fluid',
        Thunderstorm: 'bi-cloud-lightning-rain',
        Snow: 'bi-cloud-snow'
    };
    for (var i = 0; i < 4; i++) {
        iView = document.getElementById('icon' + i);
        responseApi = data['daily'][i]['weather'][0]['main'];
        iView.classList.add(wetherVals[responseApi]);
    }
}

function forecast(data) {
    var dia = new Date();
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo', 'Lunes', 'Martes'];
    //Se empieza en 1 para seleccionar desde el dia siguiente
    for (var i = 1; i < 4; i++) {
        document.getElementById('dia+' + i).innerHTML = days[dia.getDay() + i];
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
window.onload = navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);