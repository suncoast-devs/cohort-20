// let teamOneName = 'SDG JavaScripters'
// let teamOneScore = 12
let teamOne = {
  id: 1,
  name: 'SDG JavaScripters',
  score: 12,
}

// let teamTwoName = 'SDG SeeSharpers'
// let teamTwoScore = 15
let teamTwo = {
  id: 2,
  name: 'SDG SeeSharpers',
  score: 15,
}

function renderTeam(teamToRender) {
  const html = `
<section class="team${teamToRender.id}">
   <h2>${teamToRender.name}</h2>
   <h3>${teamToRender.score}</h3>
   <fieldset>
     <input type="text" placeholder="Name" value="${teamToRender.name}" />
   </fieldset>

   <fieldset>
     <i class="add fas fa-2x fa-plus-circle"></i>
     <i class="subtract fas fa-2x fa-minus-circle"></i>
   </fieldset>
 </section>
`
  return html
}

function render() {
  const html = `
  <header>
    <h1>My Score Board</h1>
  </header>
  <main>
    ${renderTeam(teamOne)}
    ${renderTeam(teamTwo)}
  </main>
`

  document.body.innerHTML = html

  document
    .querySelector('.team1 .add')
    .addEventListener('click', function (event) {
      teamOne.score++

      render()
    })
  document
    .querySelector('.team1 .subtract')
    .addEventListener('click', function (event) {
      teamOne.score--

      render()
    })
  document
    .querySelector('.team1 input')
    .addEventListener('input', function (event) {
      teamOne.name = event.target.value

      render()
    })

  document
    .querySelector('.team2 .add')
    .addEventListener('click', function (event) {
      teamTwo.score++

      render()
    })
  document
    .querySelector('.team2 .subtract')
    .addEventListener('click', function (event) {
      teamTwo.score--

      render()
    })
  document
    .querySelector('.team2 input')
    .addEventListener('input', function (event) {
      teamTwo.name = event.target.value

      render()
    })
}

function main() {
  render()
}

document.addEventListener('DOMContentLoaded', main)
