var React = require('react');

var Tabs = React.createClass({
  getInitialState: function() {
    return {index: 0};
  },

  clickHandler: function(idx) {
    this.setState({index: idx});
  },

  render: function() {
        var that = this;
        var lists = this.props.content.map(function(l, idx){
          var listItem = <button key={idx} onClick={that.clickHandler.bind(null, idx)}>{l.title}</button>;
          if(idx === that.state.index) {
            listItem = <button key={idx} onClick={that.clickHandler.bind(null, idx)}>
              <strong>
                {l.title}
              </strong>
          </button>;
        };

          return listItem;
        });

        return(
          <ul>
            {lists}
          </ul>
        );
    }
})
module.exports = Tabs;
