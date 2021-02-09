function main() {
  // C#
  //    public int square(int number)
  // function square(number) {
  //   return number * number
  // }

  // That above is just friendly syntax
  // for the following
  const square = function (number) {
    return number * number
  }

  // C#
  //
  //   public int addOne(int number)
  function addOne(number) {
    return number + 1
  }

  // C#    var myNumber = 42
  const myNumber = 42
  // C#   var myAnswer = square(myNumber)
  const myAnswer = square(myNumber)
  console.log(myAnswer)

  const myOtherAnswer = addOne(myNumber)
  console.log(myOtherAnswer)

  const myName = 'Gavin'
  const myAnswerWithName = addOne(myName)
  console.log(myAnswerWithName)

  function printIt(array, func) {
    for (let index = 0; index < array.length; index++) {
      const value = array[index]

      // const result = square(value)
      // const result = addOne(value)
      const result = func(value)

      console.log(`Function turned ${value} into ${result}`)
    }
  }

  const numbers = [1, 2, 3, 4, 5]
  printIt(numbers, square)
  printIt(numbers, addOne)
}

document.addEventListener('DOMContentLoaded', main)
