import React from "react";
import Info from "./components/info.component";
import Form from "./components/form.component";
import Weather from "./components/weather.component";

const API_KEY = "af2800001b1662275de2be534e6c237f";

class App extends React.Component {


  state = {
      temp: undefined,
      city: undefined,
      sunset: undefined,
      sunrise: undefined,
      country: undefined,
      error: undefined
  }


  gettingweather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    const data = await api_url.json();
    console.log(data);
    this.temperature = Math.round(data.main.temp - 273.150);
    this.setState({
        temp: Math.round(data.main.temp - 273.150),
        city: data.name,
        country: data.sys.country,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        error: "",
    })
  }

  render() {

    return(
        <div>
          <Info />
          <Form weatherMethod = {this.gettingweather} />
          <Weather
              temp={this.state.temp}
              city={this.state.city}
              country={this.state.country}
              sunset={this.state.sunset}
              sunrise={this.state.sunrise}
              error={this.state.error}
          />
        </div>
    );
  }

}

export default App;