const getFormFields = require('../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
// const store = require('./store')

const onSignUpClick = function (event) {
  $('.sign-in-click').hide()
  $('.cancel-click').show()
  $('#sign-up').show()
}
const onSignInClick = function (event) {
  $('.sign-up-click').hide()
  $('.cancel-click').show()
  $('#sign-in').show()
}
const onCancelClick = function (event) {
  $('.sign-up-click').show()
  $('.sign-in-click').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('.cancel-click').hide()
}
const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

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
