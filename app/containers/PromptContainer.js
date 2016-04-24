import React, { Component } from 'react'
import Prompt from "../components/Prompt"


class PromptContainer extends Component {
  constructor () {
    super()
    this.state = {
      username: ''
    }
  }

  handleUpdateUser (e) {
    this.setState({
      username: e.target.value
    })
  }

  handleSubmitUser (e) {
    e.preventDefault();
    const { username } = this.state
    this.setState({
      username: ''
    })

    const { playerOne } = this.props.routeParams

    if (playerOne){
      // go to battle
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne,
          playerTwo: username
        }
      })
    } else {
      // go to playerTwo
      console.log(username);
      this.context.router.push({
        pathname: `/playerTwo/${username}`
      })
    }

  }

  render (){
    return (
      <Prompt
        onSubmitUser={ (e) => this.handleSubmitUser(e) }
        onUpdateUser={ (e) => this.handleUpdateUser(e) }
        header={this.props.route.header}
        username={this.state.username} />
    )
  }
}

PromptContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}


export default PromptContainer
