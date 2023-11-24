/* eslint-disable no-undef */
export function showSpinner() {
  const spinnerContainer = document.getElementById('spinner-container')
  spinnerContainer.style.display = 'flex'
}

export function hideSpinner() {
  const spinnerContainer = document.getElementById('spinner-container')
  spinnerContainer.style.display = 'none'
}

document.addEventListener('astro:before-preparation', async (ev) => {
  const originalLoader = ev.loader
  ev.loader = async function () {
    showSpinner()
    await originalLoader()
    hideSpinner()
  }
})
