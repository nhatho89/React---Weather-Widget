var React = require('react');
var ReactDOM = require('react-dom');

var AutoComplete = React.createClass({
  getInitialState: function(){
    return {userInput: ""};
  },

  handleInput: function(e){
    this.setState({userInput: e.currentTarget.value})
  },

  render: function() {
    var that = this;
    var possibleNames = this.props.nameList.filter(function(x) {
      return x.indexOf(that.state.userInput) !== -1;
    }).map(function(y) {
      return <li>{y}</li>
    })
    return (
      <ul>
        {possibleNames}
        <input type="text" onInput={this.handleInput}></input>
      </ul>
    )
  }
})

module.exports = AutoComplete;
