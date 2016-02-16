var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('./tabs.jsx');
var WeatherClock = require('./weatherClock.jsx');
var AutoComplete = require('./autoComplete.jsx');

var contents = [{title: "abc", content: "asdf"}, {title: "def", content: "defg"}, {title: "three", content: "what"}]
var nameLists = ["Nhat", "Stephen", "Bob"];

var MyComponent = React.createClass({

  render: function () {
    return(

      <div>
        <WeatherClock/>
        <Tabs content={contents}/>
        <AutoComplete nameList={nameLists}/>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<MyComponent />, document.getElementById('main'));
});
