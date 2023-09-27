import React, { useState } from 'react'
import './weather_app.css';
import search_icon from '../assets/search.png';
import snow from '../assets/snow.png';
import wind from '../assets/wind.png';
import rain from '../assets/rain.png';
import humidity from '../assets/humidity.png';
import drizzle from '../assets/drizzle.png';
import cloud from '../assets/cloud.png';
import clear from '../assets/clear.png';

export const Weather_app = () => {
  let api_key = "";
  const [wicon , setwincon] = useState(cloud);

  const search = async () =>
  {
    const element = document.getElementsByClassName("cityInput");
    if(element[0].value === "")
    {
        return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidity-precent");
    const wind = document.getElementsByClassName("wind-speed");
    
    const temp = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = data.wind.speed + " km/h";
    temp[0].innerHTML = data.main.temp + " °C";
    location[0].innerHTML = data.name;

    
    if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n")
    {
        setwincon(clear);
    }
    else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n")
    {
        setwincon(cloud);
    }
    else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n")
    {
        setwincon(drizzle);
    }
    else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n")
    {
        setwincon(drizzle);
    }
   else  if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n")
    {
        setwincon(rain);
    }
    else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n")
    {
        setwincon(rain);
    }
   else  if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n")
    {
        setwincon(snow);
    }
    else
    {
        setwincon(clear);
    }
  }
  return (
    <div className='container'>
      <div className='top-bar'>
        <input type='text' className='cityInput' placeholder='search'/>
        <div className='search-icon' onClick={search}>
          <img className = "in_b" src={search_icon} alt='search'/>
        </div>
      </div>
      <div className='weather-image'>
            <img src={wicon}/>
      </div>
      <div className='weather-temp'>33 Deg.</div>
      <div className='weather-location'>London</div>
      <div className='data-container'>
            <div className='element'>
                <img src={humidity} className='icon' />
                <div className='data'>
                    <div className='humidity-precent'>64%</div>
                    <div className='text'>Humidity</div>
                </div>
            </div>
            <div className='element'>
                <img src={wind} className='icon' />
                <div className='data'>
                    <div className='wind-speed'>18 km/ph</div>
                    <div className='text'>Wind Speed</div>
                </div>
            </div>
      </div>
    </div>
  );
}
