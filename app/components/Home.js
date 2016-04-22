import React from 'react'
import { Link } from 'react-router'
import MainContainer from "../containers/MainContainer"
import { transparentBg } from "../styles"

const Home = React.createClass({
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


export default Home
