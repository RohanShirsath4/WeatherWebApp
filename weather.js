const apiKey = '77ec10affd4fc0d58ada1c63cce6df19'; //

document.getElementById('weatherForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const city = document.getElementById('cityInput').value.trim();
    const resultDiv = document.getElementById('weatherResult');
    resultDiv.textContent = 'Loading...';
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'77ec10affd4fc0d58ada1c63cce6df19'}`);
        // if (!response.ok) {
        //     throw new Error('City not found');
        // }
        const data = await response.json();
        resultDiv.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
            <p><strong>Weather:</strong> ${data.weather[0].main} (${data.weather[0].description})</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
            <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        `;
    } catch (error) {
        resultDiv.textContent = error.message;
    }
}); 