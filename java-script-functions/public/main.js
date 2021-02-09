function main() {
  // C#
  //    public int square(int number)
  function square(number) {
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
}

document.addEventListener('DOMContentLoaded', main)
