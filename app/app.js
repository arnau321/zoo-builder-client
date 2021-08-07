// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // hides
  // forms
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-password').hide()
  // buttons
  $('.cancel-click').hide()
  $('.sign-out-click').hide()
  $('.change-password-click').hide()
  $('.create-zoo-click').hide()
  $('.cancel-change-click').hide()
  $('.delete-one-click').hide()
  // text
 // $('#title').hide()


  // submit and click events
  $('.sign-up-click').on('click', authEvents.onSignUpClick)
  $('.sign-in-click').on('click', authEvents.onSignInClick)
  $('.cancel-click').on('click', authEvents.onCancelClick)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('.sign-out-click').on('click', authEvents.onSignOut)
  $('.change-password-click').on('click', authEvents.onChangePasswordClick)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('.cancel-change-click').on('click', authEvents.onCancelChangeClick)
  $('#add-animal').on('submit', authEvents.onAddAnimal)
  $('.show-animals-click').on('click', authEvents.onShowAnimals)
  $('#animal-list').on('click', '.delete-animal', authEvents.onDeleteAnimal)
 // $('#animal-list').on('submit', '.update-animal', authEvents.onUpdateAnimal)
})
