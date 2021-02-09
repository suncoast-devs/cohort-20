function main() {
  const colors = ['red', 'green', 'blue']

  // Old-school (from yesterday...)
  //
  // for(let index = 0; ...)

  function logSomeColor(currentColor) {
    console.log(`The color is ${currentColor}`)
  }

  // C#:  foreach(var color in colors)

  //
  // array
  //   |
  //   |   foreach-equivalent
  //   |     |
  //   |     |       work to do
  //   |     |        |
  //   |     |        V
  colors.forEach(logSomeColor)

  // length is a property of the array that tells us how long the array is
  colors.length

  // forEach is a property of the array that is a FUNCTION that loops over the contents of the array
  colors.forEach

  const person = {
    // state
    name: 'Gavin',
    // state
    favoriteColor: 'blue',
    // state
    salary: 1000000,
    // behavior
    loggingFunction: logSomeColor,
  }
}

document.addEventListener('DOMContentLoaded', main)
