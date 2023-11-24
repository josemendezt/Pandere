/* eslint-disable no-undef */
let rotation = 0
const radius = 50
let start = null
let animateSpinner = false

export function showSpinner() {
  const spinnerContainer = document.getElementById('spinner-container')
  spinnerContainer.classList.remove('hidden')
  animateSpinner = true
  animateRotation()
}

function animateRotation(timestamp) {
  const spinner = document.getElementById('spinner')
  if (!start) start = timestamp
  const elapsed = timestamp - start
  rotation = (elapsed / 10) % 360 // Modifica el factor de velocidad de rotación

  spinner.style.border = '4px solid rgb(123,46,224)'
  spinner.style.borderTop = '4px solid rgb(201, 190, 220)'
  spinner.style.borderRadius = '50%'
  spinner.style.width = radius + 'px'
  spinner.style.height = radius + 'px'
  spinner.style.transform = 'rotate(' + rotation + 'deg)'

  if (animateSpinner) {
    window.requestAnimationFrame(animateRotation)
  }
}

export function hideSpinner() {
  const spinnerContainer = document.getElementById('spinner-container')
  spinnerContainer.classList.add('hidden')
  animateSpinner = false
}

document.addEventListener('astro:before-preparation', (ev) => {
  const originalLoader = ev.loader
  ev.loader = async function () {
    showSpinner()
    await originalLoader()
    hideSpinner()
  }
})
