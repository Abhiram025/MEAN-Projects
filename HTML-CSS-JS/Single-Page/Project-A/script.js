const temp=document.getElementById("temp")
const city=document.getElementById("city")
const getTemp=document.getElementById("get-temp")
const humidPercent=document.getElementById("humid-percent")
const windPercent=document.getElementById("wind-percent")

getTemp.addEventListener('click', ()=> { 
    const cityName=document.getElementById("city-name").value
    const apiKey="cf94d7d3e74b6f8bdbb77d49673e3a2a"
    const apiUrl="https://api.openweathermap.org/data/2.5/weather?"

    const fahrenheit=document.getElementById("fahrenheit").checked
    const celsius=document.getElementById("celsius").checked
    const kelvin=document.getElementById("kelvin").checked

    const scale=fahrenheit?"standard":celsius?"metric":"imperial"
    const unit=fahrenheit?"°F":celsius?"°c":"°k"
    const apiDetails=`q=${cityName}&appid=${apiKey}&units=${scale}`

    if(!cityName) {
        alert("Enter the city name")
        cityNameElement.focus()
    }
    else {
        fetch(apiUrl+apiDetails)
        .then(response=>response.json())
        .then(data=>{
            temp.textContent=`${data.main.temp}${unit}`
            city.textContent=data.name
            windPercent.textContent=`${data.wind.speed}Kmph`
            humidPercent.textContent=`${data.main.humidity}%`
        })
    }    
})
