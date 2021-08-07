const getFormFields = require('../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
// const store = require('./store')

const eventListener = document.getElementById('listen')
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

const onChangePasswordClick = function (event) {
  // show
  $('#change-password').show()
  $('.cancel-change-click').show()
  // hide
  $('.change-password-click').hide()
  $('.create-zoo-click').hide()
  $('.delete-one-click').hide()
  $('#message').hide()
}
const onCancelChangeClick = function (event) {
  // show
  $('.change-password-click').show()
  $('.create-zoo-click').show()
  // hide
  $('#change-password').hide()
  $('.cancel-change-click').hide()
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}
const onAddAnimal = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data ', data)
  api.addAnimal(data)
    .then(ui.onAddAnimalSuccess)
    .catch(ui.onAddAnimalFailure)
}
const onShowAnimals = function () {
  console.log('in on show animals')
  api.showAnimals()
    .then(ui.onShowAnimalsSuccess)
    .catch(ui.onShowAnimalsFailure)
}

const onDeleteAnimal = function (event) {
  const animalId = $(event.target).data('id')
  api.deleteAnimal(animalId)
    .then(ui.onDeleteAnimalSuccess)
    .then(ui.onDeleteAnimalFailure)
}

module.exports = {
  onSignUpClick,
  onSignInClick,
  onCancelClick,
  onChangePasswordClick,
  onCancelChangeClick,
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onAddAnimal,
  onShowAnimals,
  onDeleteAnimal

}
