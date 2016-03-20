/* React components should be FIRST

Focused
Independent
Reusable
Small
Testable
*/

//////////////////////////////////////////////////////////////
var USER_DATA = {
  name: 'Nick Olds',
  username: 'nolds9',
  image: 'https://avatars.githubusercontent.com/u/10698044?v=3'
}
////////////////////////////////////////////////////////////
var React = require('react');
var ReactDom = require('react-dom');

var ProfilePic = React.createClass({
  render: function(){
    return (
      <img src={this.props.photoUrl} style={{height: 100, width: 100}} />
    )
  }
});

var ProfileLink = React.createClass({
  render: function(){
    return (
      <div>
        <a href={'https://github.com/' + this.props.username}>
          {this.props.username}
        </a>
      </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function(){
    return (
      <div>{this.props.name}</div>
    )
  }
});

var Avatar = React.createClass({
  render: function(){
    return (
      <div>
        <ProfilePic photoUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
});

ReactDom.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
)
