import React from 'react'
import ConfirmBattle from '../components/ConfirmBattle'
import githubHelpers from '../utils/githubHelpers'

const ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState  ( ) {
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  componentDidMount () {
  // once this components render to the view:
    // grab usernames
    const { query } = this.props.location
    // fetch their info from api, then update the state
    githubHelpers
      .getPlayersInfo([query.playerOne, query.playerTwo])
      .then((players) => {
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        })
      })
  },
  handleInitiateBattle () {
    this.context.router.push({
      pathname: "/results",
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  },
  render () {
    return(
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
        onInitiateBattle={this.handleInitiateBattle} />
    );
  }
});

export default ConfirmBattleContainer
