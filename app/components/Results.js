import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles  from '../styles'
import UserDetails from './UserDetails'
import UserDetailsWrapper from './UserDetailsWrapper'
import MainContainer from '../containers/MainContainer'
import Loading from './Loading'

function StartOverButton (props) {
  return (
    <div className='col-sm-12' style={styles.space}>
      <Link to="/playerOne">
        <button type="button" className='btn btn-lg btn-danger'>Start Over</button>
      </Link>
    </div>
  )
}

function Results({ isLoading, scores, playersInfo }){
  // check to see if the api call is still happening
  if (isLoading) {
    // if it is, show some loading text
    return (<Loading speed={400} text={"Drum Roll Please"} />)
  }
  // check to see if each score is equal to one another
  if (scores[0] === scores[1]) {
    return (
      //  if it'ts a tie, show the user some UI
      <MainContainer>
        <h1>It's a tie!</h1>
        <StartOverButton />
      </MainContainer>
    )
  }

  // Otherwise, calculate which player won
  const winningIndex = scores[0] > scores[1] ? 0 : 1
  const losingIndex = winningIndex == 0 ? 1 : 0

  return (
    // Display the Winner and Loser, as well as their player info
    <MainContainer>
      <h1>Results:</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <UserDetailsWrapper header="Winner">
          <UserDetails score={scores[winningIndex]} info={playersInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Loser">
          <UserDetails score={scores[losingIndex]} info={playersInfo[losingIndex]} />
        </UserDetailsWrapper>
      </div>
      <StartOverButton />
    </MainContainer>
  )
}

// Only these types of values should be used for our component's props
Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playersInfo: PropTypes.array.isRequired
}

export default Results
