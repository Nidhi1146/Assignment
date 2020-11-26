import React from "react";
import './Temp.css'
const Temp = (props)=>
{
    return(
    <div class = "temp" >
        <span>
            {props.mintmp}&#176;
        </span>
        <span>
            {props.maxtmp}&#176;
        </span>

    </div>
    )
}
export default Temp;