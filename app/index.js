var React = require('react');
var ReactDom = require('react-dom');

var HelloWorld = React.createClass({
  render: function(){
    return (
      <p>Jello World</p>
    )
  }
});

ReactDom.render(
  <HelloWorld />,
  document.getElementById('app')
)
