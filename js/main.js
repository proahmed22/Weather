// today 
let today = document.querySelector('#today') ;
let todayDate = document.querySelector('#todayDate') ;
let cityLocation = document.querySelector('#cityLocation') ;
let todayDegree = document.querySelector('#todayDegree') ;
let todayCustom = document.querySelector('#todayCustom') ;
let todayIcon = document.querySelector('#todayIcon') ;
let humidity = document.querySelector('#humidity') ;
let windKph = document.querySelector('#windKph') ;
let windDir = document.querySelector('#windDir') ;

// next day
let nextDay = document.getElementsByClassName("nextDay") ;
let nextDayIcon = document.getElementsByClassName("nextDayIcon") ;
let maxDegree = document.getElementsByClassName("maxDegree") ;
let minDegree = document.getElementsByClassName("minDegree") ;
let nextDayDescription = document.getElementsByClassName("nextDayDescription") ;


let searchBar = document.querySelector('#searchBar') ;
let currentCity = 'دمنهور';

let days = ["Sunday ","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"] ;
let month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

let responseData ;            


let date = new Date() ;



async function getWeatherData () {
   let  apiResponse = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=362989f873a1417297f164547232002&q=${currentCity}&days=7`) ;
     responseData = await apiResponse.json() ;
    console.log(responseData);
    displayTodayWeather () ;
    displayNextDayWeather () ;
}
getWeatherData () ;
// today 

function displayTodayWeather () {
        today.innerHTML = days[date.getDay()] ;
        todayDate.innerHTML = date.getDate() + month[date.getMonth()] ;
        cityLocation.innerHTML = responseData.location.name ;
        todayDegree.innerHTML = responseData.current.temp_c + '°C';
        todayCustom.innerHTML = responseData.current.condition.text ;
        todayIcon.setAttribute("src",`https:${responseData.current.condition.icon}`) ;
        humidity.innerHTML = responseData.current.humidity + '%';
        windKph.innerHTML = responseData.current.wind_kph + 'km/h' ;
        windDir.innerHTML = responseData.current.wind_dir ;
}


// next Day

function displayNextDayWeather () {
    for(let i = 0 ; i<nextDay.length ; i++) {
        nextDay[i].innerHTML = days[ new Date(responseData.forecast.forecastday[i+1].date).getDay() ];
        nextDayIcon[i].setAttribute("src",`https:${responseData.forecast.forecastday[i+1].day.condition.icon}`) ;
        maxDegree[i].innerHTML = responseData.forecast.forecastday[i+1].day.maxtemp_c +'°C' ;
        minDegree[i].innerHTML = responseData.forecast.forecastday[i+1].day.mintemp_c +'°';
        nextDayDescription[i].innerHTML = responseData.forecast.forecastday[i+1].day.condition.text ;
    }
}


searchBar.addEventListener("keyup",function() {
    currentCity = searchBar.value ;
    console.log(currentCity);
    getWeatherData () ;
})