const form = document.querySelector('#signup-form')
form.addEventListener('submit', event => {
  event.preventDefault()
  event.currentTarget.submit()
})
