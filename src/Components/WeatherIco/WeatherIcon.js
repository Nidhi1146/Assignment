import React from "react";
import './WeatherIcon.css';
import Cloud from "../../icons/cloud.jpg";
import Rain from "../../icons/rain.jpg";
import Sun from "../../icons/sun.jpg";
import Snowing from "../../icons/snow.jpg";
import Thermometer from "../../icons/thermo.jpg";

const WeatherIcon = (props)=>
{
    switch(props.icon)
    {
       case 'Cloud' :
           return <img className="weatherIcon" src={Cloud}/>
           break;
        case 'Rain' :
            return <img className="weatherIcon" src={Rain}/>
            break;
        case 'Sun' :
           return <img className="weatherIcon" src={Sun}/>
           break;
        case 'Snowing' :
            return <img className="weatherIcon" src={Snowing}/>
            break;
        default:
            return(
            <React.Fragment>
              <img className="weatherIcon" src={Thermometer}/> 
              <h5>{props.description}</h5>
            </React.Fragment>
            );     
            
    }
    
};
export default WeatherIcon;