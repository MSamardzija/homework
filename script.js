//
// Time Line
//
const redBox = document.querySelector('.time-span__red')
const blueBox = document.querySelector('.time-span__blue')

// Time array total needs to be 90min
// Every second number in array is team blue
const time = [2, 3, 5, 5, 3, 5, 15, 25, 5, 10, 5, 5, 2]
let position = 0

// Proportion of 90min to 100% width so 15min of possession matches 15% of time line
const proportions = (value) => {
  let sum = 0
  sum = (100 * value) / 90
  return Math.round(sum * 100) / 100
}

for (let i = 0; i < time.length; i++) {
  const box = document.createElement('div')
  if (i % 2 == 0) {
    box.style.width = proportions(time[i]) + '%'
    box.style.left = position + '%'
    box.className = 'red-box'
    redBox.appendChild(box)
  } else {
    box.style.width = proportions(time[i]) + '%'
    box.style.left = position + '%'
    box.className = 'blue-box'
    blueBox.appendChild(box)
  }
  position += time[i] - (time[i] - proportions(time[i]))
}

// EVENTS (Goal or cards)
const events = document.querySelectorAll('.event')

events.forEach((element) => {
  element.style.left =
    proportions(parseInt(element.children[0].innerHTML)) + '%'
})

//
// Player positions
//
const leftContainer = document.querySelector('#item-2 div')
const rightContainer = document.querySelector('#item-3 div')
const redTeam = '#c90f32'
const blueTeam = '#00448b'

// First value goes from top to bottom in %
// Second value goes from left to right in %
const teamA = {
  player0: [100, 50],
  player1: [30, 50],
  player2: [50, 80],
  player3: [10, 12],
  player4: [60, 30],
  player5: [10, 24],
  player6: [30, 30],
  player7: [60, 50],
  player8: [20, 50],
  player9: [54, 50],
  player10: [77, 50],
}

const teamB = {
  player0: [0, 50],
  player1: [25, 20],
  player2: [20, 40],
  player3: [20, 60],
  player4: [25, 80],
  player5: [50, 20],
  player6: [35, 50],
  player7: [50, 80],
  player8: [70, 30],
  player9: [80, 50],
  player10: [70, 70],
}

const addPlayers = (element, cordinates, color) => {
  Object.keys(cordinates).forEach((key, index) => {
    const newPlayer = document.createElement('span')
    newPlayer.innerText = '№'
    newPlayer.style.top = `max(1px, calc(${cordinates[key][0]}% - 15px))`
    newPlayer.style.left = `max(1px, calc(${cordinates[key][1]}% - 15px))`
    newPlayer.className = 'player-dot'
    newPlayer.style.backgroundColor = color
    element.appendChild(newPlayer)
  })
}

addPlayers(leftContainer, teamA, blueTeam)
addPlayers(rightContainer, teamB, redTeam)
