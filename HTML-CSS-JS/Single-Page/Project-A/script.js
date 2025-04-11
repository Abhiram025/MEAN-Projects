const temp=document.getElementById("temp")
const city=document.getElementById("city")
const getTemp=document.getElementById("get-temp")
const humidPercent=document.getElementById("humid-percent")
const windPercent=document.getElementById("wind-percent")

async function weatherReport() {
    const cityName=document.getElementById("city-name").value
    const apiKey="cf94d7d3e74b6f8bdbb77d49673e3a2a"
    const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric"
    const apiDetails=`&q=${cityName}&appid=${apiKey}`

    const ob1=await fetch(apiUrl+apiDetails)
    const weatherObj=await ob1.json()
    temp.textContent=`${weatherObj.main.temp}°c`
    city.textContent=weatherObj.name
    windPercent.textContent=`${weatherObj.wind.speed}KMPH`
    humidPercent.textContent=`${weatherObj.main.humidity}%`
}

getTemp.addEventListener('click', ()=> {
    weatherReport() 
})
