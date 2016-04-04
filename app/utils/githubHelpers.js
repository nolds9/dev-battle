var axios = require('axios');

// If Github rate limits us, we can sign up for a new key
var githubId = require('../../env').githubId
var githubSecret = require('../../env').githubSecret
var param = "?client_id=" + githubId + "&client_secret=" + githubSecret;

// returns a promise containing a github users data
function getUserInfo(username){
  return axios.get('http://api.github.com/users/' + username + param)
}

var helpers = {
  getPlayersInfo: function (players) {
    // call getUserInfo on each player in players, resolve only once ALL calls made
    return axios.all(players.map(function(username){
      return getUserInfo(username)
    })).then(function(info){
      // then parse the return data to get only what we want
      return info.map(function(user){
        return user.data;
      })
    }).catch(function (err){
      console.warn('Error in getPlayersInfo', err);
    })
  }
};

module.exports = helpers
