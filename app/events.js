const getFormFields = require('../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

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
  // shows message that password can be changed in form
  $('#message').show()
  $('#message').text('You may now change your password in the form below.')
  // hide
  $('.change-password-click').hide()
  $('.show-animals-click').hide()
  $('.add-animal-click').hide()
}
const onCancelChangeClick = function (event) {
  // show
  $('.change-password-click').show()
  $('.show-animals-click').show()
  $('.add-animal-click').show()
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
const onAddAnimalClick = function (event) {
  $('#add-animal').show()
  $('.add-animal-click').hide()
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
  $('#animal-list').show()
  api.showAnimals()
    .then(ui.onShowAnimalsSuccess)
    .catch(ui.onShowAnimalsFailure)
}
const onDeleteAnimal = function (event) {
  store.animalId = $(event.target).data('id')
  api.deleteAnimal(store.animalId)
    .then(ui.onDeleteAnimalSuccess)
    .then(ui.onDeleteAnimalFailure)
}
const onUpdateAnimal = function (event) {
  event.preventDefault()
  console.log(event.target)
  const form = event.target
  const id = $(form).data('id')
  const animalData = getFormFields(event.target)
  console.log('animal data is ', animalData)

  api.updateAnimal(id, animalData)
    .then(ui.onUpdateAnimalSuccess)
    .catch(ui.onUpdateAnimalFailure)
}
module.exports = {
  onSignUpClick,
  onSignInClick,
  onCancelClick,
  onAddAnimalClick,
  onChangePasswordClick,
  onCancelChangeClick,
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onAddAnimal,
  onShowAnimals,
  onDeleteAnimal,
  onUpdateAnimal

}
