function main() {
  // Write all of our code here
  // inside these braces {       }

  var name = 'Gavin'
  var nameWithoutValue

  let nameWithLetSyntax = 'Gavin'
  let nameWithLetSyntaxButNoValue

  if (1 == 2) {
    var thisVariableLeaksOutsideItsBracesOnNooooo = 100
    let thisVariableIsOnlyVisibleInsideTheseBraces = 42
  }

  // I could try to usethisVariableLeaksOutsideItsBracesOnNooooo
  // here...

  // Perfectly fine to REASSIGN a `let` variable
  nameWithLetSyntax = 'Jason'
  nameWithLetSyntax = 1234567

  const nameWithConstSyntax = 'Gavin'
  // nameWithConstSyntax = 'Other String'

  nameWithNoSyntax = 'Gavin'

  let theScore = 98
  theScore = theScore + 1

  let x = 'The answer is ' + 42
  let y = 42 + ' is the answer'
  // Console.WriteLine
  console.log(x)
  console.log(y)

  let subtractionExample = '37' - 7
  console.log(subtractionExample)
  let additionExample = '37' + 7
  console.log(additionExample)

  const answer = 42
  const score = 98

  // This is like C#    $"Congratulations {answer} is correct. You have {score} points"
  const messageTheHardWay = 'Congratulations, ' + answer + ' is correct.'
  // const message = `Congratulations, ${answer} is correct. You have ${score} points`
  const message = `Congratulations ${answer} is correct. You have ${score} points`

  console.log(message)
}

document.addEventListener('DOMContentLoaded', main)
