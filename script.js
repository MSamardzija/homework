const container = document.querySelector('#item-2 div')
const container2 = document.querySelector('#item-3 div')
const red = '#c90f32'
const blue = '#00448b'

const data = {
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

const data2 = {
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

const addPlayers = (positions, cont, color) => {
  Object.keys(positions).forEach((key, index) => {
    const newItem = document.createElement('span')
    newItem.innerText = '№'
    newItem.style.top = `max(1px, calc(${positions[key][0]}% - 15px))`
    newItem.style.left = `max(1px, calc(${positions[key][1]}% - 15px))`
    newItem.className = 'player-dot'
    newItem.style.backgroundColor = color
    cont.appendChild(newItem)
  })
}

addPlayers(data, container, blue)
addPlayers(data2, container2, red)
