const store = require('./store')

// directs to sign in form
const onSignUpSuccess = function (response) {
  $('#sign-up').trigger('reset')
  // hides
  $('#sign-up').hide()
  $('.cancel-click').hide()
  // shows
  $('.cancel-click').show()
  $('#sign-in').show()
  $('#message').show()
  // text
  $('#message').text(`Thank you for signing up ${response.user.email}. You can now log in.`)
}
// resets form
const onSignUpFailure = function () {
  $('#message').text('Sign up failed')
  $('#sign-up').trigger('reset')
}
// directs to create zoo page
const onSignInSuccess = function (response) {
  $('#sign-in').trigger('reset')
  // saved information from response
  store.id = response.user._id
  store.token = response.user.token
  store.userEmail = response.user.email
  // shows
  $('.sign-out-click').show()
  $('.change-password-click').show()
  $('.create-zoo-click').show()
  $('#title').show()
  // hides
  $('#message').hide()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('.cancel-click').hide()
  $('#change-password-form').hide()
  // messages
}

const onSignInFailure = function () {
  $('#message').text('Signed in failed')
  $('#sign-in').trigger('reset')
}
const onSignOutSuccess = function () {
  // shows
  $('.sign-up-click').show()
  $('.sign-in-click').show()
  $('#message').show()
  // hides
  $('.sign-out-click').hide()
  $('.change-password-click').hide()
  $('.create-zoo-click').hide()
  // message
  $('#message').text('Sign out successful.')
}

const onSignOutFailure = function () {
  $('#message').show()
  $('#message').text('Signed out failed')
}
const onChangePasswordSuccess = function (response) {
  $('#change-password').trigger('reset')
  // shows
  $('#message').show()
  $('.change-password-click').show()
  $('.create-zoo-click').hide()
  // hides
  $('.cancel-change-click').hide()
  $('#change-password').hide()
  // message
  $('#message').text(store.userEmail + ' password successfully changed.')
}
const onChangePasswordFailure = function () {
  $('#change-password').trigger('reset')
  $('#message').show()
  $('#message').text('Password change failed, try again.')
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
