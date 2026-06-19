const resultado = document.getElementById("resultado");

function retornarPadrao() {
    window.location.href = "index.html"
} 

function fetchWeather(event) {
  event.preventDefault();

  const cidade = document.getElementById("cidade").value;
  console.log(cidade);

  const APPID = "ddc8416700b6f82c3fcff83b6b007088";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${APPID}&units=metric&lang=pt_br`
  )
    .then((res) => res.json())
    .then((data) => {
  resultado.innerHTML = `

        <button class="text-center text-white content-center cursor-pointer" onclick="retornarPadrao()">Pesquisar outra cidade</button>
        
        <hr class="mt-5 text-white">

            <span class="text-white text-2xl">${data.name}</span>

            <div class="flex justify-between my-3">
                <span class="text-white text-3xl">${data.main.temp}ºC</span>
                <span class="text-white text-3xl">${data.main.humidity}</span>
            </div>

            <div class="flex flex-col items-center my-3">
                <span class="text-white text-lg">${data.weather[0].description}</span>
                <img src='https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}.png' alt=icone>
            </div>

            <div class="rounded-xl bg-gray-300 p-3 mb-3 flex flex-col items-center">
                <span>Temperatura Máxima</span>
                <span>${data.main.temp_max}ºC</span>
            </div >

            <div class="rounded-xl bg-gray-300 p-3 mb-3 flex flex-col items-center">
                <span>Temperatura Mínima</span>
                <span>${data.main.temp_min}ºC</span>
            </div >

            <div class="rounded-xl bg-gray-300 p-3 mb-3 flex flex-col items-center">
                <span>Sensação Térmica</span>
                <span>${data.main.feels_like}ºC</span>
            </div>`

            console.log(data)
})}

