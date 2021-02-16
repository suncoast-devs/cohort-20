let counter = 99

function render() {
  const html = `
  <p>${counter}</p>
  <button>Increment</button>
`

  document.body.innerHTML = html

  document.querySelector('button').addEventListener('click', function (event) {
    counter++

    // This is no longer needed...
    // const counterElement = document.querySelector('p')
    // counterElement.textContent = counter

    // What I need is to re-render the page
    render()
  })
}

function main() {
  render()

  // This isn't needed
  // document.querySelector('button').addEventListener('click', function (event) {
  //   counter++

  //   const counterElement = document.querySelector('p')
  //   counterElement.textContent = counter
  // })
}

document.addEventListener('DOMContentLoaded', main)
