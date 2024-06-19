import './whetherapp.css';
import cloud from './cloudy.png';
import raining from './raining.png';
import sun from './sun.png';
import snow from './snow.png';
import storm from './storm.png';
import wind from './wind.png';
import humidity from './humidity.png';
import search1 from './search.png';
import clear from './clear-sky.png';
import mint from './fog.png';

import { useState } from 'react';
export default function Wheatherapp()
{
 const[icon,seticon]=useState(cloud);
 let appapi="7bb276584e61aae5346fa92b11d38e54"; 
 async function search()
 {
    const values=document.getElementsByClassName("inputvalue");
    if(values[0].value===0)
    {
        return 0;
    }
    let url=  `https://api.openweathermap.org/data/2.5/weather?q=${values[0].value}&units=Metric&appid=${appapi}`;
    let data= await fetch(url);
    let data1=await data.json();
    let temp=document.getElementsByClassName("whethercel");
    let location=document.getElementsByClassName("location");
    let wind=document.getElementsByClassName("huminitydata");
    let huminity=document.getElementsByClassName("windspeeddata");
    
    temp[0].innerHTML=data1.main.temp+"c";
    location[0].innerHTML=data1.name;
    wind[0].innerHTML=data1.wind.speed+"%";
    huminity[0].innerHTML=data1.main.humidity+"</br>"+"km/h";
    if(data1.weather[0].icon==="01d" ||data1.weather[0].icon==="01n" )
    {
        seticon(sun);
    }
    else if(data1.weather[0].icon==="02d" ||data1.weather[0].icon==="02n" )
    {
        seticon(clear);
    }

else if(data1.weather[0].icon==="03d" ||data1.weather[0].icon==="03n" )
{
    seticon(cloud);
}

else if(data1.weather[0].icon==="04d" ||data1.weather[0].icon==="04n" )
{
    seticon(cloud);
}

else if(data1.weather[0].icon==="09d" ||data1.weather[0].icon==="09n" )
{
    seticon(raining);
}
else if(data1.weather[0].icon==="10d" ||data1.weather[0].icon==="10n" )
{
    seticon(raining);
}
else if(data1.weather[0].icon==="11d" ||data1.weather[0].icon==="11n" )

{
    seticon(storm);
}

else if(data1.weather[0].icon==="13d" ||data1.weather[0].icon==="13n" )
{
    seticon(snow);
}
else if(data1.weather[0].icon==="50d" ||data1.weather[0].icon==="50n"){
 seticon(mint);
}
}

return(
    <div className="whethercontainer">
       <div className="searchbar">
        <div className="searchinput">
        <input className='inputvalue' type="text" placeholder='Search here'/>
        </div>
        <div onClick={()=>search()} className="searchimg">
        <img src={search1} alt="notvalid" />
        </div>
        </div>
        <div className="whetherdata">
            <div className="whetherimg">
            <img src={icon} alt="" />
            </div>
           <div className="whethercel">
            29 c
           </div>
        <div className="location">
            London
        </div>
        </div>
        <div className="wind">
            <div className="huminiy">
                <div className="huminityimg">
                <img src={humidity} alt="" />
                    </div>
                    <div className="huminitydata" >
                    <p >64%</p>
                 <span>Humidity</span>
                    </div>
            </div>
            <div className="windspeed">
               <div className="windspeedimg">
               <img src={wind} alt="" />
                </div > 
                 <div className="windspeeddata" >
                    <p >18 km/h</p>
                    <span>wind speed</span>
                 </div>
       
        </div>
       </div>
  </div>
)
}