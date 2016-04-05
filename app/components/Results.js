var React = require('react');
var PropTypes = React.PropTypes;

function puke (object){
  return <pre>{JSON.stringify(object, 2, ' ')}</pre>
}

function Results(props){
  return(
    <div>Results: {puke(props)}</div>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playersInfo: PropTypes.array.isRequired
}
module.exports = Results;
