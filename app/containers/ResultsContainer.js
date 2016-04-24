import React, { Component } from 'react'
import Results from "../components/Results"
import githubHelpers from "../utils/githubHelpers"

class ResultsContainer extends Component {
  constructor () {
    super()
    this.state = {
      isLoading: true,
      scores: []
    }
  }

  async componentDidMount () {
    try {
      const scores = await githubHelpers.battle(this.props.location.state.playersInfo)
      this.setState({
        scores,
        isLoading: false
      })
    } catch (e) {
      console.warn("Error in ResultsContainer", e)
    }

  }

  render () {
    return(
      <Results
        isLoading={this.state.isLoading}
        scores={this.state.scores}
        playersInfo={this.props.location.state.playersInfo} />
    )
  }
}

export default ResultsContainer
