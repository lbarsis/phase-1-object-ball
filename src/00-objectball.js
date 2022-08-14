function gameObject() {
    return {
        'home': {
            'teamName': 'Brooklyn Nets',
            'colors': ['Black','White'],
            'players': {
                'Alan Anderson': {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1
                },
                'Reggie Evans': {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 10,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7
                },
                'Brook Lopez': {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15
                },
                'Mason Plumlee': {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },
                'Jason Terry': {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                }
            }
        },
        'away': {
            'teamName': 'Charlotte Hornets',
            'colors': ['Turquoise', 'Purple'],
            'players': {
                'Jeff Adrien': {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2
                },
                'Bismak Biyombo': {
                    "number": 0,
                    "shoe": 15,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10
                },
                'DeSagna Diop': {
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5
                },
                'Ben Gordon': {
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0
                },
                'Brendan Haywood': {
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12
                }
            }
        }
    }
}

function homeTeamName() {
    let object = gameObject();
    return object['home']['teamName']
}

// function iterate(obj) {
  
//     Object.keys(obj).forEach(key => {

//     console.log('key: '+ key + ', value: '+ obj[key]);
    
//     if (typeof obj[key] === 'object') {
//             iterate(obj[key])
//         }
//     })

// }

function players() {
  return Object.assign({}, homeTeam().players, awayTeam().players)
}

function gameArrays() {
  return Object.entries(gameObject())
}

function awayTeam() {
  return gameObject().away
}

function homeTeam() {
  return gameObject().home
}

function numPointsScored(playerInput) {

  // for (const playerName in players()) {
  //   if (playerName === playerInput) {
  //     return players()[playerName].points
  //   }
  // }

  return players()[playerInput].points

  // const playerArrays = Object.entries(players())
  // const player = playerArrays.find(playerArray => playerArray[0] === playerInput)
  // return player[1].points
}

function shoeSize(playerInput) {
  return players()[playerInput].shoe
}

function teamColors(teamInput) {
  const teamsArray = [homeTeam(), awayTeam()]
  const teams = teamsArray.find(team => team.teamName === teamInput)
  return teams.colors
}

function teamNames() {
  return Object.assign({}, {'Away Team': awayTeam().teamName}, {'Home Team': homeTeam().teamName})
}

function playerNumbers(teamInput) {
  const teamsArray = [homeTeam(), awayTeam()]
  const players = teamsArray.find(team => team.teamName === teamInput).players
  const arr = []
  for (const player in players) {
    arr.push(players[player].number)
  }
  return arr
}

function playerStats(playerInput) {
  return players()[playerInput]
}

function bigShoeRebounds() {
  //goal: return rebounds based on largest shoes size
  // Note: this is bad code but I don't know how to fix it

  const shoeSizes = []
  const playerArray = []
  const playerRebounds = []
  for (const player in players()) {
      shoeSizes.push(players()[player].shoe)
      playerArray.push(player)
      playerRebounds.push(players()[player].rebounds)
  }

  // const largestShoeIndex = Math.max(...shoeSizes)

  const largestShoeIndex = shoeSizes.indexOf(Math.max(...shoeSizes))
  return playerArray[largestShoeIndex] + ': ' + playerRebounds[largestShoeIndex] + ' Rebounds'
}

function mostPointsScored() {
  //goal: return rebounds based on largest shoes size
  // Note: this is bad code but I don't know how to fix it, will revisit in future.

  const pointsScored = []
  const playerArray = []
  for (const player in players()) {
      pointsScored.push(players()[player].points)
      playerArray.push(player)
  }

  const mostPointsIndex = pointsScored.indexOf(Math.max(...pointsScored))
  return playerArray[mostPointsIndex] + ': ' + pointsScored[mostPointsIndex] + ' Points Scored'
}

function winningTeam() {

  const homeTeamPlayers = homeTeam().players
  const awayTeamPlayers = awayTeam().players

  const homeTeamScores = []
  const awayTeamScores = []

  for (const player in homeTeamPlayers) {
    homeTeamScores.push(homeTeamPlayers[player].points)
  }

  for (const player in awayTeamPlayers) {
    awayTeamScores.push(awayTeamPlayers[player].points)
  }

  const homeTeamTotal = homeTeamScores.reduce((a,b) => a + b)
  const awayTeamTotal = awayTeamScores.reduce((a,b) => a + b)

  return homeTeamTotal > awayTeamTotal ? gameObject().home.teamName : gameObject().away.teamName

}

function playerWithLongestName() {
  const nameArray = Object.keys(players())
  return nameArray.reduce((a,b) => a.length > b.length ? a:b)
}

function doesLongNameStealATon() {
  const longestName = playerWithLongestName()
  const longestNameSteals = players()[longestName].steals

  const playerScores = []
  const playerArray = []
  for (const player in players()) {
    if (player === longestName) {
      continue
    }
    playerScores.push(players()[player].steals)
    playerArray.push(player)
  }
  debugger
  const mostSteals = Math.max(...playerScores)
  return mostSteals > longestNameSteals ? false : true
}

console.log(playerWithLongestName())


