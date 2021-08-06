// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // hides
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('.cancel-click').hide()
  // forms hidden on opening page

  // submit and click events
  $('.sign-up-click').on('click', authEvents.onSignUpClick)
  $('.sign-in-click').on('click', authEvents.onSignInClick)
  $('.cancel-click').on('click', authEvents.onCancelClick)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('click', authEvents.onChangePassword)
})
