// PROMESAS
const getLoc = ( ) =>{
    return new Promise( ( resolve, geo_error ) => {
          navigator.geolocation.getCurrentPosition( resolve, geo_error, geo_options );
    });
}


const geo_error = () =>  {
    document.getElementsByTagName('body')[0].innerHTML = "Debe acceptar los permisos de localizacion para poder consultar el tiempo";
    alert("Debe acceptar los permisos de localizacion para poder consultar el tiempo");
    //Redireccionamos al inicio o volvemos a cargar la pagina de inicio
};

let geo_options = {
    enableHighAccuracy: true,
    maximumAge: 4000,
    timeout: 1000
};


const llamadaApi = ( apiCall ) =>{
    return new Promise( ( resolve, reject ) => {
        const resultado = fetch( apiCall );
        (resultado)
            ? resolve( resultado )
            : reject( console.log(`No se ha podido establecer la conexión con la API devolviendo el siguiente error: ${resultado}`) );
    });
}


const respuestaApi = async( ) => {
    try{
        const resGeo = await getLoc();
//        console.log('resGeo.coords.latitude => '+resGeo.coords.latitude);
//        console.log('resGeo.coords.longitude => '+resGeo.coords.longitude);
        const apiUrl  = 'https://api.openweathermap.org/data/2.5/onecall?';
        const lat     = `lat=${resGeo.coords.latitude}`;
        const long    = `&lon=${resGeo.coords.longitude}`;
        const exclu   = '&exclude=minutely,hourly';
        const apiKey  = '&units=metric&appid=032ce5e220d604b633f702f740d7239c';
        const apiCall = apiUrl + lat + long + exclu + apiKey;
//        const apiCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${resGeo.coords.latitude}&lon=${resGeo.coords.longitude}&exclude=minutely,hourly&units=metric&appid=032ce5e220d604b633f702f740d7239c`;
        const res = await llamadaApi( apiCall );
        return res.json();
    }catch( error ){
        throw error;
    }
}


// MAIN 
respuestaApi( )
    .then( res => {
        console.log(`API BIEN ${res}`);
        console.log(res);
        current(res);
    })
    .catch( err => {
        console.log(`Ha habido un error general en el aplicativo. ${err}`)
    });
