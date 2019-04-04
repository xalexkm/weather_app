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

    if (city) {
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        const data = await api_url.json();
        console.log(data);
        // conversion for sunset
        var sunset = data.sys.sunset;
        var date_ss = new Date()
        date_ss.setTime(sunset * 1000);
        var sunset_date = date_ss.getHours() + ":" + date_ss.getMinutes();
        // conversion for sunrise
        var sunrise = data.sys.sunrise;
        var date_sr = new Date()
        date_sr.setTime(sunrise * 1000);
        var sunrise_date = date_sr.getHours() + ":" + date_sr.getMinutes();

        this.setState({
            temp: Math.round(data.main.temp - 273.150),
            city: data.name,
            country: data.sys.country,
            sunrise: sunrise_date,
            sunset: sunset_date,
            error: "",
        })
    }
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