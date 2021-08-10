// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // hidden forms
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-password').hide()
  // hidden buttons
  $('.cancel-click').hide()
  $('.sign-out-click').hide()
  $('.change-password-click').hide()
  $('.cancel-change-click').hide()
  $('.show-animals-click').hide()
  $('.add-animal-click').hide()
  $('.cancel-add-animal-click').hide()

  // submit and click events
  // opens sign up form
  $('.sign-up-click').on('click', authEvents.onSignUpClick)
  // opens sign in form
  $('.sign-in-click').on('click', authEvents.onSignInClick)
  // returns to first page from sign up or sign in forms displayed
  $('.cancel-click').on('click', authEvents.onCancelClick)
  // submits sign up form
  $('#sign-up').on('submit', authEvents.onSignUp)
  // submits sign in form
  $('#sign-in').on('submit', authEvents.onSignIn)
  // signs out if signed in
  $('.sign-out-click').on('click', authEvents.onSignOut)
  // opens change password form
  $('.change-password-click').on('click', authEvents.onChangePasswordClick)
  // submits change password form
  $('#modal-form').on('submit','#change-password', authEvents.onChangePassword)
  // closes change password form without change
  $('.cancel-change-click').on('click', authEvents.onCancelChangeClick)
  // opens add animal form
  $('.add-animal-click').on('click', authEvents.onAddAnimalClick)
  // submits a new animal
  $('#modal-form').on('submit', '#add-animal', authEvents.onAddAnimal)
  // shows all animals
  $('.show-animals-click').on('click', authEvents.onShowAnimals)
  // deletes selected animal
  $('#animal-list').on('click', '.delete-animal', authEvents.onDeleteAnimal)
  // updates selected animal
  $('#animal-list').on('submit', '.update-animal', authEvents.onUpdateAnimal)
  // cancels add animal
  $('.cancel-add-animal-click').on('click', authEvents.onCancelAddAnimalClick)

  // appends an "active" class to .popup and .popup-content when the "Open" button is clicked
  $('.add-animal-click').on('click', function () {
    $('.popup-overlay, .popup-content').addClass('active')
  })
  $('.change-password-click').on('click', function () {
    $('.popup-overlay, .popup-content').addClass('active')
  })
  // removes the "active" class to .popup and .popup-content when the "Close" button is clicked
  // works for close button, change password button, and sign out button
  $('.close, .create-animal-button, .sign-out-click').on('click', function () {
    $('.popup-overlay, .popup-content').removeClass('active')
  })
})
