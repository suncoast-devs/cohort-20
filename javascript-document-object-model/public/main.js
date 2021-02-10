// @ts-check
function main() {
  let currentPlayer = 'X'
  let moveCounter = 0

  const allSquares = document.querySelectorAll('li')

  function handleClickSquare(eventThatHappened) {
    const thingClickedOn = eventThatHappened.target

    // If we already are marked as taken
    // if (thingClickedOn.textContent !== '') {
    if (thingClickedOn.classList.contains('taken')) {
      // Log a message to anyone looking
      console.log('NOPES....')

      // GTFO. Get out of here, no more code to run this time
      return
    }

    thingClickedOn.textContent = currentPlayer
    thingClickedOn.classList.add('taken')

    moveCounter++

    const header = document.querySelector('h1')
    header.textContent = `Move ${moveCounter} of Tic Tac Toe`

    // If the currentPlayer is exactly the text 'X'
    if (currentPlayer === 'X') {
      // Make the current player 'O'
      currentPlayer = 'O'
    } else {
      // The currentPlayer must have been 'O', so become 'X'
      currentPlayer = 'X'
    }
  }

  allSquares.forEach(listItem =>
    listItem.addEventListener('click', handleClickSquare)
  )
}

document.addEventListener('DOMContentLoaded', main)
