var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var transparentBg = require('../styles').transparentBg;

var Home = React.createClass({
  render: function(){
    return (
      <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
        <h1>Super Hack Bros</h1>
        <p>Some Fancy filler</p>
        <Link to="/playerOne">
          <button type="btn btn-lg btn-success">Get Started</button>
        </Link>
      </div>
    )
  }
});


module.exports = Home;
