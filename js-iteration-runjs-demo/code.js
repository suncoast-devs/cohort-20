// taste
// texture
// name
// quantity
// size (oz)
// number of ingredients

const steak = {
  name: 'steak',
  texture: 'tender',
  taste: 'delicious',
  quantity: 1,
  size: 8,
  numberOfIngredients: 1,
}

const spaghetti = {
  name: 'spaghetti',
  texture: 'slimy',
  taste: 'good',
  quantity: 5,
  size: 20,
  numberOfIngredients: 6,
}
const tacos = {
  name: 'tacos',
  texture: 'mushy',
  taste: 'amazing',
  quantity: 4,
  size: 4,
  numberOfIngredients: 12,
}

const foods = [steak, spaghetti, tacos]

// Iterate with while
let index = 0
while (index < foods.length) {
  console.log(foods[index].name)
  index++
}

// Iterate with for
for (let foodIndex = 0; foodIndex < foods.length; foodIndex++) {
  console.log(foods[foodIndex].name)
}

// Reverse iteration
for (let foodIndex = foods.length - 1; foodIndex >= 0; foodIndex--) {
  console.log(foods[foodIndex].name)
}

function showFoodName(theCurrentElementOfTheArray)
{
  // code here.
  console.log(`from showFoodName: ${theCurrentElementOfTheArray.name}`)
}

// showFoodName is a "callback function"
foods.forEach(showFoodName)

foods.forEach(function(food) {
  console.log(`from the inline function: ${food.name}`)
})

foods.forEach(food => 
  console.log(`from the inline arrow function: ${food.name}`)
)

// How do I take the array of food objects and get an array of food names
function turnFoodIntoItsName(food) {
  return food.name
}
const foodNamesLongForm = foods.map(turnFoodIntoItsName)

const foodNames = foods.map(function(food) {
  return food.name   
})

/*

1 is variable declartion
2 is the assignment operator syntax
3 is the VALUE we are assigning to the variable

11111111111111111    2 3333333
const personName     = 'gavin'

*/

/*

1 is variable declartion
2 is the assignment operator syntax
3 is the VALUE we are assigning to the variable
4 is the array we are going to iterate
5 is the iterator we are going to use (in this case map)
6 is the function we supply to map (in this case an uber cool arrow function)
7 is the variable (argument) that will receive each food object as map is working its way through the array
8 is the arrow that separates the arguments from the body of the function (its work)
9 is the body/work of the arrow function

11111111111111111    2 333333333333333333333333333
                       44444 555 66666666666666666
                                 7777 88 999999999
const foodNamesArrow = foods.map(food => food.name)

*/


const foodNamesArrow = foods.map(food => food.name)

foodNames
foodNamesLongForm
foodNamesArrow
//
//
//
//
//
//
//
//
// code here









 // Delcare a function named yelling that does x,y, z


function yelling(words)
{
  function makeWordUpperCase(word)
  {
    return word.toUpperCase()
  }
  
  const answer = words.map(makeWordUpperCase)
}

const yellingAgain = function(words)
{
  const makeWordUpperCase = function(word)
  {
    return word.toUpperCase()
  }
  
  const answer = words.map(makeWordUpperCase)
  
  const answerAgain = words.map(function(word) {
    return word.toUpperCase()
  })
}

const yellingAgainAgain = words => {
   return words.map(word => word.toUpperCase())
}

function yellingAgainAgainAgain(words) {
  return words.map(word => word.toUpperCase())
}




const foodsWithSizeMoreThanFour = foods.filter(food => (food.size > 4 && food.taste === 'good') || food.quantity > 3 || food.name.includes('k'))

foodsWithSizeMoreThanFour

sentence = "the veryveryquick brown fox jumped over the lazy dog"

sentence.split(' ').map(word => word.length).sort((a,b) => b - a)[0]

words = sentence.split(' ')
lengthOfAllWords = words.map(word => word.length)
sortedLengthOfAllWords = lengthOfAllWords.sort((a,b) => b - a)
longestWord = sortedLengthOfAllWords[0]
















