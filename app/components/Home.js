var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require("../containers/MainContainer")

var Home = React.createClass({
  render: function(){
    return (
      <MainContainer>
        <h1>Hacker Arena</h1>
        <p>Two will enter, only one will win</p>
        <Link to="/playerOne">
          <button type="btn btn-lg btn-success">Get Started</button>
        </Link>
      </MainContainer>
    )
  }
});


module.exports = Home;
