const store = require('./store')
const events = require('./events')

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
  $('.delete-one-click').show()
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
  $('.delete-one-click').hide()
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
  $('.create-zoo-click').show()
  $('.delete-one-click').show()
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
const onAddAnimalSuccess = function (response) {
  $('#add-animal').trigger('reset')
  console.log('in onAddAnimalSuccess')
  console.log(response.animal)
}
const onAddAnimalFailure = function () {
  console.log('in onAddAnimalFailure')
}
const onShowAnimalsSuccess = function (response) {
  // page modifications on successful call
  console.log('in onIndexOfAnimalSuccess')
  const animal = response.animal
  // console.log('response.animal: ', animal)
  let animalInfoHtml = ''
  animal.forEach(animal => {
    console.log(animal)
    // delete and update html
    animalInfoHtml +=
    `<h4>${animal.name} the ${animal.type}</h4>
    <p>ID: ${animal._id}</p>
    <p>Age: ${animal.age}</p>
    <p>Size: ${animal.size}</p>
    <p>Food Type: ${animal.foodType}</p>
    <h6>Delete</h6>
    <button class='delete-animal' data-id=${animal._id}>Delete</button>
    <h6>Update</h6>
    <form class='update-book' data-id=${animal._id}>
      <input type='text' name='animal[age]' placeholder='Age' required>
      <input type='text' name='animal[size]' placeholder='Size' required>
      <button type = 'submit'>Update Animal</button>
    </form>
    `
  })

  $('#animal-list').html(animalInfoHtml)
}
const onShowAnimalsFailure = function () {
  $('#message').text('Error getting animal list')
}
const onDeleteAnimalSuccess = function () {
  $('#message').text('Animal Deleted.  Press index button.')
}
const onDeleteAnimalFailure = function () {
  $('#message').text('Delete Failed')
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
  onDeleteAnimalFailure
}
