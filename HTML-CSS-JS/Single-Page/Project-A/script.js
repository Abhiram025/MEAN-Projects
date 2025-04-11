const cityName=document.getElementById("city-name").value
const temp=document.getElementById("temp")
const city=document.getElementById("city")
const getTemp=document.getElementById("get-temp")
const humidPercent=document.getElementById("humid-percent")
const windPercent=document.getElementById("wind-percent")

const apiKey="cf94d7d3e74b6f8bdbb77d49673e3a2a"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric"
const apiDetails=`&q=${cityName}&appid=${apiKey}`

async function weatherReport() {
    const ob1=await fetch(apiUrl+apiDetails)
    const weatherObj=await ob1.json()
    temp.textContent=`${weatherObj.temperature}°c`
    city.textContent=weatherObj.name
    windPercent.textContent=`${weatherObj.windSpeed}KMPH`
    humidPercent.textContent=`${weatherObj.humidity}%`
}

getTemp.addEventListener('click', ()=> {
    weatherReport() 
})
