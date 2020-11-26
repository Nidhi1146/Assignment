import React from "react";
import "./WeatherMain.css";
import Days from "../Days/Days";
import Temp from "../Temp/Temp";
import WeatherIcon from "../WeatherIco/WeatherIcon";



const WeatherMain = props => {
    
    return(
        <div className="WeatherBody card">
         <Days day={props.day}/>
         <WeatherIcon icon={props.icon}/>
         <Temp minTmp={props.minTmp} maxTmp={props.maxTmp} description={props.description}/>
        </div>
    );
};

export default WeatherMain;