const getFormFields = require('../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
// const store = require('./store')
// Shows sign up form
const onSignUpClick = function (event) {
  $('.sign-in-click').hide()
  $('.sign-up-click').hide()
  $('.cancel-click').show()
  $('#sign-up').show()
  $('#message').show()
  // text
  $('#message').text('You can now sign up.')
}
// shows sign in form
const onSignInClick = function (event) {
  $('.sign-up-click').hide()
  $('.sign-in-click').hide()
  $('.cancel-click').show()
  $('#sign-in').show()
  $('#message').show()
  // text
  $('#message').text('You can now sign in.')
}
const onCancelClick = function (event) {
  $('.sign-up-click').show()
  $('.sign-in-click').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('.cancel-click').hide()
  $('#message').hide()
}
// creates user saves to db
const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}
// signs in user
const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}
const onSignOut = function () {
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

module.exports = {
  onSignUpClick,
  onSignInClick,
  onCancelClick,
  onSignUp,
  onSignIn,
  onSignOut

}
