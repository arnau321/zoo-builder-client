const store = require('./store')
const config = require('./config')
// sign up connect to server
const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}
// sign in connect to server
const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}
// connect to server sign out
const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: { Authorization: 'Bearer ' + store.token }
  })
}
// change password connect to server
const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: { Authorization: 'Bearer ' + store.token },
    data: data
  })
}
// add one animal to list on server
const addAnimal = function (data) {
  return $.ajax({
    url: config.apiUrl + '/animals',
    method: 'POST',
    headers: { Authorization: 'Bearer ' + store.token },
    data: data
  })
}
// show list of animals on server
const showAnimals = function () {
  return $.ajax({
    url: config.apiUrl + '/animals',
    method: 'GET',
    headers: { Authorization: 'Bearer ' + store.token }
  })
}
// delete one animal from server
const deleteAnimal = function (id) {
  return $.ajax({
    url: config.apiUrl + '/animals/' + id,
    method: 'DELETE',
    headers: { Authorization: 'Bearer ' + store.token }
  })
}
// update animal size or age on server
const updateAnimal = function (id, data) {
  return $.ajax({
    url: config.apiUrl + '/animals/' + id,
    method: 'PATCH',
    headers: { Authorization: 'Bearer ' + store.token },
    data: data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  addAnimal,
  showAnimals,
  deleteAnimal,
  updateAnimal
}
