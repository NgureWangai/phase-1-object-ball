function gameObject() {
    return {
        home: {
          teamName: 'Brooklyn Nets',
          colors: ['Black', 'White'],
          players: {
            'Alan Anderson':{
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals:3,
                blocks: 1,
                slamDunks: 1
            },
            'Reggie Evans' :{
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7
            },
            'Brook Lopez' :{
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15
            },
            'Mason Plumlee' :{
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5
            },
            'Jason Terry' :{
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1
            }
        }   
    },
    away: {
        teamName: 'Charlotte Hornets',
        Colors: ['Turquoise', 'Purple'],
        players: {
            'Jeff Adrien':{
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2
            },
            'Bismak Biyombo': {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10
            },
            'DeSagna Diop': {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5
            },
            'Ben Gordon' : {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0
            },
            'Brendan Haywood' : {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12
            }
        }
    }
}
}
console.log(gameObject())

function numPointsScored(playerName) {
    const game = gameObject();
    for (const team in game) {
        if (game.hasOwnProperty(team)) {
            for (const player in game[team].players) {
                if (player === playerName) {
                    return game[team].players[player].points;
                }
            }
        }
    }
}
console.log(numPointsScored('Brook Lopez'))

function shoeSize(playerName) {
    const game = gameObject();
    for (const team in game) {
        if (game.hasOwnProperty(team)) {
            for (const player in game[team].players) {
                if (game[team].players.hasOwnProperty(player)) {
                    if (player === playerName) {
                        return game[team].players[player].shoe;
                    }
                }
            }
        }
    }
}
console.log(shoeSize('Brook Lopez'))

function teamColors(teamName) {
    const game = gameObject();
    for (const team in game) {
        if (game.hasOwnProperty(team)) {
            if (game[team].teamName === teamName) {
                return game[team].colors;
            }
        }
    }
}
console.log(teamColors('Brooklyn Nets'))

function teamNames() {
    const game = gameObject();
    const teams = [];
    for (const team in game) {
        if (game.hasOwnProperty(team)) {
            teams.push(game[team].teamName);
        }
    }
    return teams;
}
console.log(teamNames())

function playerNumbers(teamName) {
    const game = gameObject();
    for (const team in game) {
        if (game.hasOwnProperty(team) && game[team].teamName === teamName) {
            const numbers = [];
            for (const player in game[team].players) {
                if (game[team].players.hasOwnProperty(player)) {
                    numbers.push(game[team].players[player].number);
                }
            }
            return numbers;
        }
    }
}
console.log(playerNumbers('Brooklyn Nets'))

function playerStats(playerName) {
    const game = gameObject();
    for (const team in game) {
        if (game.hasOwnProperty(team)) {
            const players = game[team].players;
            if (players.hasOwnProperty(playerName)) {
                return players[playerName];
            }
        }
    }
}
console.log(playerStats('Jason Terry'))

function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let playerWithLargestShoe = ' ';
    for (const team in game) {
        if (game.hasOwnProperty(team)) {
            const players = game[team].players;
            for (const player in players) {
                if (players.hasOwnProperty(player)) {
                    const shoeSize = players[player].shoe;
                    if (shoeSize > largestShoeSize) {
                        largestShoeSize = shoeSize;
                        playerWithLargestShoe = players[player];
                    }
                }
            }
        }
    }
return playerWithLargestShoe.rebounds;
}
console.log(bigShoeRebounds())

function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let playerWithMostPoints = ' ';
    for (const team in game) {
        if (game.hasOwnProperty(team)) {
            const players = game[team].players;
            for (const player in players) {
                if (players.hasOwnProperty(player)) {
                    const points = players[player].points;
                    if (points > maxPoints) {
                        maxPoints = points;
                        playerWithMostPoints = player;
                    }
                }
            }
        }
    }
 return playerWithMostPoints;
}
console.log(mostPointsScored())

function winningTeam() {
    const game = gameObject();
    let maxPoints = 0;
    let winningTeamName = ' ';
    for (const team in game) {
        if (game.hasOwnProperty(team)) {
            const points = Object.values(game[team].players).reduce((total, player) => total + player.points, 0);
            if (points > maxPoints) {
                maxPoints = points;
                winningTeamName = game[team].teamName;
            }
        }
    }
    return winningTeamName;
}
console.log(winningTeam())

function playerWithLongestName() {
    const game = gameObject();
    let longestName = '';
    let playerWithLongestName = ' ';
    for (const team in game) {
        if (game.hasOwnProperty(team)) {
            const players = game[team].players;
            for (const player in players) {
                if (players.hasOwnProperty(player) && player.length > longestName.length) {
                    longestName = player;
                    playerWithLongestName = player;
                }
            }
        }
    }
    return playerWithLongestName;
}
console.log(playerWithLongestName())

function doesLongNameStealATon() {
    const game = gameObject();
    let longestName = '';
    let mostSteals = 0;
    let longestNamePlayer = ' ';
    let mostStealsPlayer = ' ';
    for (const team in game) {
        const players = game[team].players;
        for (const player in players) {
            if (player.length > longestName.length) {
                longestName = player;
                longestNamePlayer = player;
            }
            if (players[player].steals > mostSteals) {
                mostSteals = players[player].steals;
                mostStealsPlayer = player;
            }
        }
    }
return longestNamePlayer === mostStealsPlayer;
}
console.log(doesLongNameStealATon())

