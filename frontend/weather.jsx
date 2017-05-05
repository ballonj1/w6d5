import React from 'react';

class Weather extends React.Component {
  constructor() {
    super();
    this.state = { city: "", temp: "" };

    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.getWeather(position.coords.latitude,
        position.coords.longitude);
    });
  }
//T(F) = T(K) × 9/5 - 459.67
  getWeather(lat, long) {
    let request = new XMLHttpRequest();
    request.open('GET', `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=71cc9ea211da0cbadfea8373f403a0be`, true);

    request.onload = () => {
      const resp = JSON.parse(request.responseText);
      const city = resp.name;
      let temp = resp.main.temp;
      temp = temp * (9/5) - 459.67;
      this.setState({city, temp });
    };
    request.send();
  }

  render() {
    return(
      <div className="weather">
        <h2>{this.state.city}</h2>
        <h2>{this.state.temp} degrees</h2>
      </div>
    );
  }
}

export default Weather;
