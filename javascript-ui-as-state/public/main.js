let counter = 0

function main() {
  document.querySelector('button').addEventListener('click', function (event) {
    counter++

    const counterElement = document.querySelector('p')
    counterElement.textContent = counter
  })
}

document.addEventListener('DOMContentLoaded', main)
