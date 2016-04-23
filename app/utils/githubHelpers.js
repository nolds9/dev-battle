import axios from 'axios'

// If Github rate limits us, we can sign up for a new key
const githubId = require('../../env').githubId
const githubSecret = require('../../env').githubSecret
const param = "?client_id=" + githubId + "&client_secret=" + githubSecret;

// returns a promise containing a github users data
function getUserInfo(username){
  return axios.get('http://api.github.com/users/' + username + param)
}

function getRepos (username) {
  // fetch username's repos
  return axios.get('http://api.github.com/users/' + username + '/repos' + param + '&per_page=100')
}

function getTotalStars (repos) {
  // calculate all the stars that the users has
  return repos.data.reduce( (prev, current ) => prev + current.stargazers_count, 0)
}

function getPlayersData (player) {
  // get repos
  return getRepos(player.login)
    // getTotalStars
    .then(getTotalStars)
    // return an object with that data
    .then( (totalStars) => (
      {
        followers: player.followers,
        totalStars: totalStars
      }
    ))
}

function calculateScores (players) {
  // applying alogrithims to determine a winner, return an array of player data
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
}

const helpers = {
  getPlayersInfo (players) {
    // call getUserInfo on each player in players, resolve only once ALL calls made
    return axios.all(players.map( (username) =>  getUserInfo(username)))
    // then parse the return data to get only what we want
      .then( (info) => info.map((user) => user.data))
      .catch( (err) => {
        console.warn('Error in getPlayersInfo', err);
      })
  },
  battle (players) {
    const playerOneData = getPlayersData(players[0]);
    const playerTwoData = getPlayersData(players[1]);

    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch( (err) => {
        console.warn('Error in getPlayersInfo: ', err)
      })
  }
};

export default helpers
