// Reemplaza con tu propia API key de WeatherAPI
const claveApi = 'tu_api_key_aqui'; 

async function obtenerClima() {
    const ciudad = document.getElementById('input-ciudad').value;
    const idioma = 'es'; // Español
    
    if (!ciudad) {
        alert("Por favor, ingresa una ciudad");
        return;
    }

    try {
        const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;
        const response = await fetch(apiClimaActual);
        
        if (!response.ok) {
            throw new Error('Ciudad no encontrada');
        }
        
        const data = await response.json();
        mostrarClima(data);
    } catch (error) {
        alert(error.message);
        console.error('Error al obtener datos:', error);
    }
}

function mostrarClima(data) {
    document.querySelector('.clima-icono').src = data.current.condition.icon;
    document.querySelector('.clima-texto').innerHTML = data.current.condition.text;
    document.querySelector('.temp').innerHTML = `${Math.round(data.current.temp_c)}°C`;
    document.querySelector('.ciudad').innerHTML = data.location.name;
    document.querySelector('.humedad').innerHTML = `${data.current.humidity}%`;
    document.querySelector('.viento').innerHTML = `${data.current.wind_kph} km/h`;
    
    // Mostrar el contenedor principal si estaba oculto
    document.querySelector('.contenedor').style.opacity = '1';
}

// Opcional: Permitir búsqueda al presionar Enter
document.getElementById('input-ciudad').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        obtenerClima();
    }
});

// Inicializar con el contenedor semi-transparente
document.querySelector('.contenedor').style.opacity = '0.8';