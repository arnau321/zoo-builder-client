const store = require('./store')

const onSignUpSuccess = function (response) {
  $('#message').text(`Thank you for signing up ${response.user.email}. You can now log in.`)
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function () {
  $('#message').text('Sign up failed')
  $('#sign-up').trigger('reset')
}
const onSignInSuccess = function (response) {
  // clears form fields after submit
  $('#sign-in').trigger('reset')
  // saved information from response
  store.id = response.user._id
  store.token = response.user.token
  store.userEmail = response.user.email
  // shows
  $('#sign-out').show()
  $('#change-password').show()
  // hides
  $('#message').hide()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#change-password-form').hide()
  // messages
}

const onSignInFailure = function () {
  $('#message').text('Signed in failed')
  $('#sign-in').trigger('reset')
}
const onSignOutSuccess = function () {
  // shows
  $('#message').show()
  $('#sign-in').show()
  $('#sign-up').show()
  // hides
  $('#sign-out').hide()
  $('#game-board').hide()
  $('#start-game').hide()
  $('#change-password').hide()
  $('#welcome-message').hide()
  $('#fun-message').hide()
  $('#show-number-of-games').hide()
  $('#change-password-form').hide()
  $('#cancel-button').hide()
  // message
  $('#message').text('Sign out successful.')
}

const onSignOutFailure = function () {
  $('#message').show()
  $('#message').text('Signed out failed')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure
}
