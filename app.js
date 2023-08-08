const api='https://api.openweathermap.org/data/3.0/';
const apiKey='be5edf98a579ba37be902f620398c0c8';

const setSehir=(e)=>{
    if (e.keyCode=='13') 
    {
        getResult(srcBar.value)
    }
    const getResult=(cityName)=>
    {
        let sorgu=`${api}weather?q=${cityName}&appid=${apiKey}&units=metric&lang=tr`

        fetch(query)
        .then(weather=> weather.json()).then(goster)
    }
    const goster=(r)=>
    {
        let city=document.querySelector('.city')
        city.innerHTML=`${r.name},${r.sys.country}`

        let temp=document.querySelector('.temp')
        temp.innerHTML=`${Math.round(r.main.temp)}°C`

        let desc=document.querySelector('.desc')
        desc.innerHTML=`${r.weather[0].description}`

        let minmax=document.querySelector('.minmax')
        minmax.innerHTML=`${Math.round(r.main.temp_min)}°C/
        ${Math.round(r.main.temp_max)}°C`

    }
    
};

let input=document.querySelector('#srcbar');
input.addEventListener('keypress',setSehir);
