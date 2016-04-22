import React from 'react'
import ConfirmBattle from '../components/ConfirmBattle'
import githubHelpers from '../utils/githubHelpers'

const ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  componentDidMount: function(){
  // once this components render to the view:
    // grab usernames
    const { query } = this.props.location
    // fetch their info from api, then update the state
    githubHelpers
      .getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function(players){
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        })
      }.bind(this)) // make sure to preserve context to the component
  },
  handleInitiateBattle: function(){
    this.context.router.push({
      pathname: "/results",
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  },
  render: function(){
    return(
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
        onInitiateBattle={this.handleInitiateBattle} />
    );
  }
});

export default ConfirmBattleContainer
