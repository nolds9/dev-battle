import axios from 'axios'

// If Github rate limits us, we can sign up for a new key
const githubId = require('../../env').githubId
const githubSecret = require('../../env').githubSecret
const param = `?client_id=${githubId}&client_secret=${githubSecret}`

// returns a promise containing a github users data
function getUserInfo(username = 'dhh'){
  return axios.get(`http://api.github.com/users/${username + param}`)
}

function getRepos (username = 'dhh') {
  // fetch username's repos
  return axios.get(`http://api.github.com/users/${username}/repos${param}&per_page=100`)
}

function getTotalStars (repos) {
  // calculate all the stars that the users has
  return repos.data.reduce( (prev, current ) => prev + current.stargazers_count, 0)
}

async function getPlayersData ({login, followers}) {
  try {
    const repos = await getRepos(login)
    const totalStars = await getTotalStars(repos)
    return {
      followers,
      totalStars
    }
  } catch (e) {
    console.warn("Error in githubHelpers", e);
  }

  // get repos
  return getRepos(login)
    // getTotalStars
    .then(getTotalStars)
    // return an object with that data
    .then( (totalStars) => (
      {
        followers,
        totalStars
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
  async getPlayersInfo (players) {
    try {
      // call getUserInfo on each player in players, resolve only once ALL calls made
      const info = await Promise.all(players.map( (username) =>  getUserInfo(username)))
      // then parse the return data to get only what we want
      return info.map((user) => user.data)
    } catch (e) {
      console.warn('Error in getPlayersInfo', e);
    }
  },
  async battle (players) {
    const playerOneData = getPlayersData(players[0]);
    const playerTwoData = getPlayersData(players[1]);

    try {
      const data = await Promise.all([playerOneData, playerTwoData])
      return await calculateScores(data)
    } catch (e) {
      console.warn('Error in getPlayersInfo', e);
    }
  }
};

export default helpers
