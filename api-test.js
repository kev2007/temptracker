(async function() {
    const ciudad = 'Huancayo';
    const idioma = 'es';
    const claveApi = 'tu_api_key_aqui'; // Reemplaza con tu API key
    
    const url = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('Datos del clima:', data);
        
        // Mostrar información clave
        console.log(`Clima en ${data.location.name}:`);
        console.log(`- Temperatura: ${data.current.temp_c}°C`);
        console.log(`- Condición: ${data.current.condition.text}`);
        console.log(`- Humedad: ${data.current.humidity}%`);
        console.log(`- Viento: ${data.current.wind_kph} km/h`);
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
})();