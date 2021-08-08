const store = require('./store')

const api = require('./api')
// directs to sign in form
const onSignUpSuccess = function (response) {
  // resets form fields
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
  // reset form fields
  $('#sign-up').trigger('reset')
  // display failure message
  $('#message').show()
  $('#message').text('Sign up failed')
}
// directs to create zoo page
const onSignInSuccess = function (response) {
  // reset form fields
  $('#sign-in').trigger('reset')
  // saved information from response
  store.id = response.user._id
  store.token = response.user.token
  store.userEmail = response.user.email
  // sign in success message
  $('#message').show()
  $('#message').text(`Welcome ${response.user.email}. Sign in successful.`)
  // show current user as email address
  $('#user-email').show()
  $('#user-email').text(`${response.user.email}`)
  // shows
  $('.sign-out-click').show()
  $('.change-password-click').show()
  $('.show-animals-click').show()
  $('.add-animal-click').show()

  // hides
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('.cancel-click').hide()
  $('#change-password-form').hide()
  // messages
}

const onSignInFailure = function () {
  // reset form fields
  $('#sign-in').trigger('reset')
  // sign in failure message
  $('#message').show()
  $('#message').text('Sign in failed.')
}
const onSignOutSuccess = function () {
  // shows
  $('.sign-up-click').show()
  $('.sign-in-click').show()
  // hides
  $('.sign-out-click').hide()
  $('.change-password-click').hide()
  $('.delete-one-click').hide()
  $('.show-animals-click').hide()
  $('.add-animal-click').hide()
  $('#add-update-message').hide()
  $('#add-animal').hide()
  $('#animal-list').hide()
  // sign out message shown
  $('#message').show()
  $('#message').text('Sign out successful.')
}

const onSignOutFailure = function () {
  // show sign out failure message
  $('#message').show()
  $('#message').text('Signed out failed')
}
const onChangePasswordSuccess = function (response) {
  // rest form fields
  $('#change-password').trigger('reset')
  // shows
  $('.change-password-click').show()
  $('.show-animals-click').show()
  $('.add-animal-click').show()
  // hides
  $('.cancel-change-click').hide()
  $('#change-password').hide()
  // show password change success message
  $('#message').show()
  $('#message').text(store.userEmail + ' password successfully changed.')
}
const onChangePasswordFailure = function () {
  // reset form fields
  $('#change-password').trigger('reset')
  // show password change failure message
  $('#message').show()
  $('#message').text('Password change failed, try again.')
}
const onAddAnimalSuccess = function (response) {
  // reset form fields
  $('#add-animal').trigger('reset')
  // add animal success message shown
  $('#add-update-message').show()
  $('#add-update-message').text('You added a new animal.')
  // resets animal list with new animal at end of list
  api.showAnimals()
    .then(onShowAnimalsSuccess)
    // .then(onShowAnimalsFailure)
}
const onAddAnimalFailure = function () {
  // reset form fields
  $('#add-animal').trigger('reset')
  // shows add animal failure message
  $('#message').show()
  $('#message').text('Could not add animal.')
}
const onShowAnimalsSuccess = function (response) {
  // show list of animals message
  $('#message').show()
  $('#message').text('Here is your current list of animals.')
  // saves animal info for access from other functions
  store.animal = response.animal
  // variable to store animal list information
  store.animalInfoHtml = ''
  // runs through the response and converts each element to readable html
  // also provides buttons for delete animal
  // and form to update certain animal characteristics
  store.animal.forEach(animal => {
    store.animalInfoHtml +=
    `<div id="0" class="col-4 box">
    <h4>${animal.name} the ${animal.type}</h4>
    <p>Age: ${animal.age}</p>
    <p>Size: ${animal.size}</p>
    <p>Food Type: ${animal.foodType}</p>
    <h6>Delete</h6>
    <button class='delete-animal' data-id=${animal._id}>Delete</button>
    <h6>Update</h6>
    <form class='update-animal' data-id=${animal._id}>
      <input type='text' name='animal[age]' placeholder='Age'>
      <input type='text' name='animal[size]' placeholder='Size'>
      <button type = 'submit'>Update Animal</button>
      </div>
    </form>
    `
  })
  // displays the information stored in animalInfoHtml to client
  $('#animal-list').html(store.animalInfoHtml)
}
const onShowAnimalsFailure = function () {
  // shows show animal list failure message
  $('#message').show()
  $('#message').text('Error getting animal list')
}
const onDeleteAnimalSuccess = function () {
  // delete animal message shown
  $('#message').show()
  $('#add-update-message').text('You have removed the animal.')
  // resets animal list without deleted animal
  api.showAnimals()
    .then(onShowAnimalsSuccess)
    // .then(onShowAnimalsFailure)
}
const onDeleteAnimalFailure = function () {
  // shows delete animal failure message
  $('#message').show()
  $('#message').text('Delete Failed')
}
const onUpdateAnimalSuccess = function (response) {
  // reset form fields
  $('#update-animal').trigger('reset')
  // show animal update success message
  $('#add-update-message').show()
  $('#add-update-message').text('The animal was updated')
  // calls for animal list with updated animals new characteristics
  api.showAnimals()
    .then(onShowAnimalsSuccess)
  // .then(onShowAnimalsFailure)
}

const onUpdateAnimalFailure = function () {
  // show animal update failure message
  $('#message').show()
  $('#message').text('Could not update animal.')
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onAddAnimalSuccess,
  onAddAnimalFailure,
  onShowAnimalsSuccess,
  onShowAnimalsFailure,
  onDeleteAnimalSuccess,
  onDeleteAnimalFailure,
  onUpdateAnimalSuccess,
  onUpdateAnimalFailure
}
