// let teamOneName = 'SDG JavaScripters'
// let teamOneScore = 12
// let teamOne = {
//   id: 1,
//   name: 'SDG JavaScripters',
//   score: 12,
// }

// let teamTwoName = 'SDG SeeSharpers'
// let teamTwoScore = 15
// let teamTwo = {
//   id: 2,
//   name: 'SDG SeeSharpers',
//   score: 15,
// }

let teams = [
  {
    id: 1,
    name: 'SDG JavaScripters',
    score: 12,
  },
  {
    id: 2,
    name: 'SDG SeeSharpers',
    score: 15,
  },
]

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

function setupListeners(teamToListen) {
  document
    .querySelector(`.team${teamToListen.id} .add`)
    .addEventListener('click', function (event) {
      teamToListen.score++

      render()
    })
  document
    .querySelector(`.team${teamToListen.id} .subtract`)
    .addEventListener('click', function (event) {
      teamToListen.score--

      render()
    })
  document
    .querySelector(`.team${teamToListen.id} input`)
    .addEventListener('input', function (event) {
      teamToListen.name = event.target.value

      render()
    })
}

function render() {
  const html = `
  <header>
    <h1>My Score Board</h1>
  </header>
  <main>
    ${teams.map(function (team) {
      return renderTeam(team)
    })}
  </main>
`

  document.body.innerHTML = html

  teams.forEach(function (team) {
    setupListeners(team)
  })
}

function main() {
  render()
}

document.addEventListener('DOMContentLoaded', main)
