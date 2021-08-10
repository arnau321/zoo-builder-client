const store = require('./store')

const api = require('./api')
// function to create list of animals from server response
const createAnimalList = function (response) {
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
      <button class='delete-animal' data-id=${animal._id}>Remove Animal</button>
      <h4>${animal.name} the ${animal.type}</h4>
        <p>Age: ${animal.age}</p>
        <p>Size: ${animal.size}</p>
        <p>Food Type: ${animal.foodType}</p>
     <h5>Update</h5>
      <form class='update-animal' data-id=${animal._id}>
        <input type='text' name='animal[age]' placeholder='New Age', required>
        <input type='text' name='animal[size]' placeholder='New Size', required>
        <button type = 'submit'>Update Animal</button>
      </form>
    </div>
    `
  })
  // displays the information stored in animalInfoHtml to client
  $('#animal-list').html(store.animalInfoHtml)
}


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
  $('#message').empty()
  // $('#sign-in-message').show()
  $('#sign-in-message').text(`Welcome ${response.user.email}. Sign in successful.`)
  setTimeout(
    () => {
      $('#sign-in-message').empty()
    },
    3 * 1000
  )

  $('#add-update-message').show()
  $('#add-update-message').text('')
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
  $('.cancel-add-animal-click').hide()
  $('.cancel-change-click').hide()
  $('#change-password').hide()
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
  $('#add-update-message').empty()
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
  // hide cancel add animal button
  $('.cancel-add-animal-click').hide()
  // hide create animal form
  $('#add-animal').hide()
  // show add animal button
  $('.add-animal-click').show()
  // add animal success message shown
  $('#add-update-message').text('You added a new animal.')
  // resets animal list with new animal at end of list
  api.showAnimals()
    .then(createAnimalList)
    // .then(onShowAnimalsFailure)
}
const onAddAnimalFailure = function () {
  // reset form fields
  $('#add-animal').trigger('reset')
  // shows add animal failure message
  $('#add-update-message').text('Could not add animal.')
}
const onShowAnimalsSuccess = function (response) {
  // show list of animals message
  $('#message').show()
  $('#message').text('Here is your current list of animals.')
  $('#add-update-message').empty()
  createAnimalList(response)
}
const onShowAnimalsFailure = function () {
  // shows show animal list failure message
  $('#message').show()
  $('#message').text('Error getting animal list')
}
const onDeleteAnimalSuccess = function () {
  // delete animal message shown
  $('#add-update-message').text('You have removed the animal.')
  // resets animal list without deleted animal
  api.showAnimals()
    .then(createAnimalList)
}
const onDeleteAnimalFailure = function () {
  // shows delete animal failure message
  $('#add-update-animal').text('Delete Failed')
}
const onUpdateAnimalSuccess = function (response) {
  // reset form fields
  $('#update-animal').trigger('reset')
  // show animal update success message
  $('#add-update-message').text('The animal was updated')
  // calls for animal list with updated animals new characteristics
  api.showAnimals()
    .then(createAnimalList)
}

const onUpdateAnimalFailure = function () {
  // show animal update failure message
  $('#add-update-message').text('Could not update animal.')
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
