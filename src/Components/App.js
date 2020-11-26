import React from "react";
import CitySearchBar from "./CitySearchBar";
import Header from "./Header/Header";
import Loader from "./Loader/Loader";
import WeatherMain from './WeatherMain/WeatherMain'


class App extends React.Component{
    constructor(props){
      super(props);
      this.YOUR_ACCESS_KEY="d6067446bab1d33206a8f0b7ef9a4c7f";
      this.state={
          temp: [],
          city : null,
          isloaded : false

      };
    }
    
  componentDidMount() {
    this.setState({isloaded: true});
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
  fetch('http://api.weatherstack.com/current?access_key={YOUR_ACCESS_KEY}&query ={query}')
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

searchForCity = (city) => {
  let query = 'q='+city;
  this.getWeatherData(query);
}
    render(){
    const mintmp=this.state.temp.map(e1 =>{
        return parseInt(e1.low.temp)
    })
    const maxtmp=this.state.temp.map(e1 =>{
        return parseInt(e1.max.temp)
    })
    const icon=this.state.temp.map(e1 =>{
        return e1.weather.icon;
    })
    const desciption=this.state.temp.map(e1 =>{
        return e1.weather.desciption;
    })

    if(!this.state.isloaded)
    {

        return<Loader msg={'Data is Loading.....'}/>
    }

            return(
                <div className="App">
                    <React.Fragment>
                        <CitySearchBar city={this.state.city} searchForCity={this.searchForCity}/>
                    </React.Fragment>
                    <Header/>
                    <div className="weatherCont p1-3 pb-3">
                        <p>hello nidhi</p>
                        <WeatherMain day={'Mon'} icon={icon[0]} minTmp={mintmp[0]} maxTmp={maxtmp[0]} description={desciption[0]}/>
                        <WeatherMain day={'Tue'} icon={icon[1]} minTmp={mintmp[1]} maxTmp={maxtmp[1]} description={desciption[1]}/>
                        <WeatherMain day={'Wed'} icon={icon[2]} minTmp={mintmp[2]} maxTmp={maxtmp[2]} description={desciption[2]}/>
                        <WeatherMain day={'Thr'} icon={icon[3]} minTmp={mintmp[3]} maxTmp={maxtmp[3]} description={desciption[3]}/>
                        <WeatherMain day={'Fri'} icon={icon[4]} minTmp={mintmp[4]} maxTmp={maxtmp[4]} description={desciption[4]}/>
        
                </div>
                </div>
                
            );
        }
    }
     
   

export default App;