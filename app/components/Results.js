var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles/index')
var UserDetails = require('../components/UserDetails')
var UserDetailsWrapper = require('../components/UserDetailsWrapper')
var MainContainer = require('../containers/MainContainer')
var Link = require('react-router').Link;

function StartOverButton (props){
  return (
    <div className='col-sm-12' style={styles.space}>
      <Link to="/playerOne">
        <button type="button" className='btn btn-lg btn-danger'>Start Over</button>
      </Link>
    </div>
  )
}

function Results(props){
  // check to see if the api call is still happening
  if (props.isLoading) {
    // if it is, show some loading text
    return (<p>LOADING!</p>)
  }
  // check to see if each score is equal to one another
  if (props.scores[0] === props.scores[1]) {
    return (
      //  if it'ts a tie, show the user some UI
      <MainContainer>
        <h1>It's a tie!</h1>
        <StartOverButton />
      </MainContainer>
    )
  }

  // Otherwise, calculate which player won
  var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1
  var losingIndex = winningIndex == 0 ? 1 : 0

  return (
    // Display the Winner and Loser, as well as their player info
    <MainContainer>
      <h1>Results:</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <UserDetailsWrapper header="Winner">
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Loser">
          <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
        </UserDetailsWrapper>
      </div>
      <StartOverButton />
    </MainContainer>
  )
}

// Only these types of values should be used for our props
Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = Results;
