var React = require('react');
var ReactDOM = require('react-dom');

var WeatherClock = React.createClass({
  getInitialState: function(){
    return {myDate: new Date(), weather: null, temperature: null};
  },

  tick: function() {
    this.setState({myDate: new Date()});
  },

  componentDidMount: function() {
    setInterval(this.tick, 1000);
    this.getWeather();
  },

  getWeather: function() {
    var request = new XMLHttpRequest();
    var data = {};
    var that = this;
    request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=94105,us&appid=44db6a862fba0b067b1930da0d769e98', true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        data = JSON.parse(request.responseText);
        that.setState({temperature: data.main.temp});
      } else {
        // We reached our target server, but it returned an error

      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();
  },

  render: function(){

    var myHour = this.state.myDate.getHours();
    var myMinute = this.state.myDate.getMinutes();
    var mySecond = this.state.myDate.getSeconds();
    return (
      <ul>
        <li>
          {this.state.temperature}
        </li>
        <li>
          {myHour + ":" + myMinute + ":" + mySecond}
        </li>
      </ul>
    )
  }
})

module.exports = WeatherClock;
