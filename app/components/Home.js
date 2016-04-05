var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require("../containers/MainContainer")

var Home = React.createClass({
  render: function(){
    return (
      <MainContainer>
        <h1>Super Hack Bros</h1>
        <p>Some Fancy filler</p>
        <Link to="/playerOne">
          <button type="btn btn-lg btn-success">Get Started</button>
        </Link>
      </MainContainer>
    )
  }
});


module.exports = Home;
