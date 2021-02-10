function main() {
  const allSquares = document.querySelectorAll('li')

  function handleClickSquare(eventThatHappened) {
    const thingClickedOn = eventThatHappened.target

    thingClickedOn.textContent = 'X'
  }

  allSquares.forEach(listItem =>
    listItem.addEventListener('click', handleClickSquare)
  )
}

document.addEventListener('DOMContentLoaded', main)
