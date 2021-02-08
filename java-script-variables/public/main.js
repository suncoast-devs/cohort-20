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

  // Makes an object, car is a variable of type "object"
  // it has no properties
  const car = {}

  // car has no properties so...
  console.log(car.make)

  // person is a variable of type 'object'
  // it has *four* properties
  const person = {
    // the name property, the value is 'Gavin
    name: 'Gavin',

    // the favoriteColor property has the value 'blue'
    favoriteColor: 'blue',
    department: 'teaching',

    // Properties can have different types
    salary: 1000000,

    hireDate: 2016,
    'firing date': 2024,

    'special-feature': 'Talks slow',
  }

  console.log(person.name)
  console.log(person.salary)
  console.log(person)

  car.make = 'Ford'
  car.model = 'Mustang'
  car.year = 1969

  // Just like above, but using
  // BRACKET syntax instead of DOT syntax
  car['make'] = 'Ford'
  car['model'] = 'Mustang'
  car['year'] = 1969
  car['special-feature'] = 'Go fast'

  console.log(car.make)
  console.log(car)

  // Creating arrays with `new Array` is confusing.
  // let newArray = new Array(42, 100)
  // console.log(newArray)

  // let newArrayOne = new Array(12)
  // console.log(newArrayOne)

  const people = ['Betty', 'Wilma', 'Fred']
  const collection = ['Betty', 98, 'Fred', 12, 42]
  console.log(collection)

  const colors = ['red', 'green', 'blue']
  // C# for(var index = 0; index < colors.Length; index++)
  for (let index = 0; index < colors.length; index++) {
    // C#   var currentColor = colors[index]
    const currentColor = colors[index]

    // currentColor = 'rebeccapurple'

    // C#    Console.WriteLine(currentColor)
    console.log(currentColor)
  }
}

document.addEventListener('DOMContentLoaded', main)
