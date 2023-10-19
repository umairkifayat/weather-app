const input = document.querySelector('.input');
const form = document.querySelector('.btndiv');
const div = document.querySelector('.div');
const loader = document.querySelector('.loader');




form.addEventListener('click', (event) => {
  event.preventDefault();
  axios.get(`https://api.weatherapi.com/v1/current.json?key=f9f9014172b940579ff40822231710&q=${input.value}`)
    .then((res) => {
      console.log(res.data);
      div.innerHTML += `
      <div class ="div1">
      <div class="div2">
      <p class="temp">${res.data.current.temp_c}'C</p>
        <p class = 'name'>${res.data.location.name}
    <p class = "">${res.data.location.country}</p>
    <P>${res.data.current.condition.text}</P>
    

        </div>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<div >
    <img src="${res.data.current.condition.icon} " class="img" width ='100rem'  alt="">
    </div>
    </div>
`

    })
    .catch((error)=>{
div.innerHTML += ` <p class = 'error'>Data Not Found!</P>`
    })
    input.value = ''

  })


// const input = document.querySelector('.input');
// const div = document.querySelector('.div');
// const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//   axios.get(`https://api.weatherapi.com/v1/current.json?key=f9f9014172b940579ff40822231710&q=${location}`)
//     .then((response) => {
//       const weatherData = response.data;

//       // Access and display weather information
//       const cityName = weatherData.location.name;
//       const country = weatherData.location.country;
//       const temperature = weatherData.current.temp_c;
//       const weatherDescription = weatherData.current.condition.text;

//       div.innerHTML += `
//         <h2>City: ${cityName}, Country: ${country}</h2>
//         <h2>Temperature: ${temperature}°C</h2>
//         <h2>Weather: ${weatherDescription}</h2>
//       `;

//       console.log('Weather data:', weatherData);
//     })
//     .catch((error) => {
//       console.error(error);
//       div.innerHTML = 'data not found.';
//     });
// });