import React, { Component } from 'react'
import ConfirmBattle from '../components/ConfirmBattle'
import githubHelpers from '../utils/githubHelpers'

class ConfirmBattleContainer extends Component {
  constructor () {
    super()
    this.state = {
      isLoading: true,
      playersInfo: []
    }
  }

  async componentDidMount () {
  // once this components render to the view:
    // grab usernames
    const { query } = this.props.location
    // fetch their info from api, then update the state
    try {
      const players = await githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      this.setState({
        isLoading: false,
        playersInfo: [players[0], players[1]]
      })
    } catch (err) {
      console.warn('Error in ConfirmBattleContainer', err)
    }
  }

  handleInitiateBattle () {
    this.context.router.push({
      pathname: "/results",
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  }

  render () {
    return(
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
        onInitiateBattle={ () => this.handleInitiateBattle() } />
    )
  }
}
ConfirmBattleContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default ConfirmBattleContainer
