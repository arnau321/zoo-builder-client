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
// cancels sign in sign out forms
const onCancelClick = function (event) {
  $('.sign-up-click').show()
  $('.sign-in-click').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('.cancel-click').hide()
  $('#message').hide()
}
// creates user and saves to db
const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}
// signs in user to app
const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}
// signs user out of app
const onSignOut = function () {
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}
// opens change password form
const onChangePasswordClick = function () {
  // show
  store.writeForm(store.changePasswordForm)
  //$('#change-password').show()
  //$('.cancel-change-click').show()
  // shows message that password can be changed in form
  //$('#message').show()
  //$('#message').text('You may now change your password in the form below.')
  //$('#add-update-message').text('')
  // hide
  //$('.change-password-click').hide()
  //$('.show-animals-click').hide()
  //$('.add-animal-click').hide()
  //$('#animal-list').hide()
 // $('#add-animal').hide()
  //$('.cancel-add-animal-click').hide()
}
// closes change password form with no changes.  Back to home screen
const onCancelChangeClick = function (event) {
  // show
  $('.change-password-click').show()
  $('.show-animals-click').show()
  $('.add-animal-click').show()
  // hide
  $('#change-password').hide()
  $('.cancel-change-click').hide()

  $('#message').empty()

}
// changes password
const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}
// opens add animal form
const onAddAnimalClick = function () {
  $('#add-animal').show()
  // hides message
  $('#add-update-message').empty()
  store.writeForm(store.addAnimalForm)
}
// hides add animal form without changes
const onCancelAddAnimalClick = function () {
  $('.add-animal-click').show()
  $('#add-animal').hide()
  $('.cancel-add-animal-click').hide()
  $('#add-update-message').empty()
}
// adds one animal to list of animals on server
const onAddAnimal = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.addAnimal(data)
    .then(ui.onAddAnimalSuccess)
    .catch(ui.onAddAnimalFailure)
}
// shows list of animals from server
const onShowAnimals = function () {
  $('#animal-list').show()
  api.showAnimals()
    .then(ui.onShowAnimalsSuccess)
    .catch(ui.onShowAnimalsFailure)
}
// deletes one animal from list
const onDeleteAnimal = function (event) {
  store.animalId = $(event.target).data('id')
  api.deleteAnimal(store.animalId)
    .then(ui.onDeleteAnimalSuccess)
    .then(ui.onDeleteAnimalFailure)
}
// updates size or age values for one animal on list
const onUpdateAnimal = function (event) {
  event.preventDefault()
  const form = event.target
  const id = $(form).data('id')
  const animalData = getFormFields(event.target)

  api.updateAnimal(id, animalData)
    .then(ui.onUpdateAnimalSuccess)
    .catch(ui.onUpdateAnimalFailure)
}
module.exports = {
  onSignUpClick,
  onSignInClick,
  onCancelClick,
  onAddAnimalClick,
  onCancelAddAnimalClick,
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
