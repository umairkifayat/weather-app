 
const input = document.querySelector('.input');
const div = document.querySelector('.div');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  const location = input.value;
  axios.get(`https://api.weatherapi.com/v1/current.json?key=f9f9014172b940579ff40822231710&q=${location}`)
    .then((response) => {
      const weatherData = response.data;

      // Access and display weather information
      const cityName = weatherData.location.name;
      const country = weatherData.location.country;
      const temperature = weatherData.current.temp_c;
      const weatherDescription = weatherData.current.condition.text;

      div.innerHTML += `
        <h2>City: ${cityName}, Country: ${country}</h2>
        <h2>Temperature: ${temperature}°C</h2>
        <h2>Weather: ${weatherDescription}</h2>
      `;

      console.log('Weather data:', weatherData);
    })
    .catch((error) => {
      console.error(error);
      div.innerHTML = 'data not found.';
    });
});




