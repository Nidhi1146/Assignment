import { render } from "@testing-library/react";
import React from "react";

class CitySearchBar extends React.Component{
    state={
        city:""
    };

   onsubmit = (e) =>{
    e.preventDefault();
    if(this.state.city === " ")
    {
        alert("Please enter City");
    }
    else{
        this.props.searchForCity(this.state.city);
    }
 this.setState({city:""});
};

onChange =e =>
{
    this.setState({[e.target.name]: e.target.value});
}
render()
{
    return(
        <div>
            <h5>
                Seacrh Weather of your City
            </h5>
            <form >
            <input type="text" name ="city" onChange ={this.onChange}placeholder="Search for City...."/>
            <button type="submit" onClick={(e)=>{this.onsubmit(e)}} > Search</button>
            </form>
        </div>

    );
}
}
export default CitySearchBar;