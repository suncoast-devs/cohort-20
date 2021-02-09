function main() {
  const number1 = '100'
  const number2 = 100

  //    number1 != number2
  if (number1 !== number2) {
    console.log('The two things are not strictly equal')
  }

  if (number1 === number2) {
    console.log('These are the same!')
  } else {
    console.log('These are different!')
  }
}

document.addEventListener('DOMContentLoaded', main)
