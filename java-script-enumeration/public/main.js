function main() {
  const colors = ['red', 'green', 'blue']

  // Old-school (from yesterday...)
  //
  // for(let index = 0; ...)

  const logSomeColor = function (currentColor, colorIndex) {
    console.log(`The color at index ${colorIndex} is ${currentColor}`)
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
  colors.forEach(function (currentColor, colorIndex) {
    console.log(`The color at index ${colorIndex} is ${currentColor}`)
  })
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

  const lengths = []

  colors.forEach(function (color) {
    const lengthOfColor = color.length

    lengths.push(lengthOfColor)
  })

  console.log(lengths) // [ 3, 5, 4 ]

  const colorsMapped = colors.map(
    // The function to do for each element in the array
    //
    // The function receives each element of the array
    // we call that color here
    function (color) {
      return color.length
    }
  )

  const colorsUpperCased = colors.map(
    // Function to do upper casing
    function (color) {
      return color.toUpperCase()
    }
  )

  console.log(colorsMapped)
  console.log(colorsUpperCased)
}

document.addEventListener('DOMContentLoaded', main)
