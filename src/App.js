import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Today from './components/Today';
import Forecast from './components/Forecast';
import WeatherMain from './components/WeatherMain/WeatherMain';

class App extends Component {
  constructor() {
    super();
    this.state = {data:null};
    this.apiKey = 'fdf48deb199e99696ca0bd076095ddff';
  }

  componentDidMount() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        let query = 'lat='+position.coords.latitude+'&lon='+position.coords.longitude;
        this.getWeatherData(query);
      });
    } else {
      this.getWeatherData('q=wrocław');
    }
  }
  
  getWeatherData(query) {
    fetch('https://api.openweathermap.org/data/2.5/weather?'+query+'&units=metric&APPID='+this.apiKey)
    .then(this.handleErrors).then(result=>result.json())
    .then(items=>{ this.setState({data: items}) })
    .catch(error => alert('City name not found.'));
  }

  handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
  }

  getCity = (city) => {
    let query = 'q='+city;
    this.getWeatherData(query);
  }

  render() {
    if (this.state.data) {
      return (
        <div className='App'>
          <SearchBar 
            getCity={this.getCity}
          />
          <Today
            city={this.state.data.name} 
            country={this.state.data.sys.country}
            temp={this.state.data.main.temp} 
            weatherType={this.state.data.weather[0].description}
            wind={this.state.data.wind.speed}
            humidity={this.state.data.main.humidity}
            weatherIcon={this.state.data.weather[0].icon} />
            
          <div className="weatherCont p1-3 pb-3">
                        <WeatherMain day={'Mon'} icon={this.state.data.weather[0].icon} minTmp={this.state.data.weather[0].temp_min} maxTmp={this.state.data.weather[0].temp_max} description={this.state.data.weather[0].desciption}/>
                        
                </div>
        </div>
      );
    } else {
      return (<div className='Loading'><h1>LOADING...</h1></div>);
    }
  }
}

export default App;
