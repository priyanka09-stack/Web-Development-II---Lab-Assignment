const API_KEY="2afedcc7f7c9dc9fbad631aa6099014d"
const  form=document.querySelector("#weatherForm")
const weatherInfo=document.querySelector(".info")
const weatherHistory=document.querySelector(".searchHistory")
const searchHistory =JSON.parse(localStorage.getItem("searchHistory")) || []

form.addEventListener('submit',async(event)=>{
    event.preventDefault()
    const searchedCity=city.value
    getData(searchedCity)
})

async function getData(city){    
    if(city){
        try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            const data= await response.json()
            if (data.cod === 200){
                console.log(data)
                weatherInfo.innerHTML=`
                <h3>Weather Info</h3>
                <p>City: ${data.name}</p>
                <p>Temp:${(data.main.temp-273.15).toFixed(1)}C</p>
                <p>Weather:${data.weather[0].main}</p>
                <p>Humidity:${data.main.humidity}%</p>
                <p>Wind :${data.wind.speed}m/s</p>
            
         
       `
            if(!searchHistory.includes(city)){
                searchHistory.push(city)
                localStorage.setItem("searchHistory",JSON.stringify(searchHistory))
            }
        }else{  
            weatherInfo.innerHTML=`
            <h3>Weather Info</h3>
            <p class="err">City not found.</p>
            `
        }

        }catch(err){
            console.log(err)
            weatherInfo.innerHTML=`
            <h3>Weather Info</h3>
            <p >City not found.</p>`
        }

    }
    
}
function showHistory(){
    weatherHistory.innerHTML=''
    const history =JSON.parse(localStorage.getItem("searchHistory")) 
    history.forEach(city=>{
        const li=document.createElement("button")
        li.textContent=city
        li.addEventListener("click",()=>{
            getData(city)
        })
        weatherHistory.appendChild(li)
    })
    
}
showHistory()



















