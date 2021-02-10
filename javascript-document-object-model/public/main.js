// @ts-check
function main() {
  let currentPlayer = 'X'

  const allSquares = document.querySelectorAll('li')

  function handleClickSquare(eventThatHappened) {
    const thingClickedOn = eventThatHappened.target

    thingClickedOn.textContent = currentPlayer
    thingClickedOn.classList.add('taken')

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
