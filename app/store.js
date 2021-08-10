// const { changePassword } = require('./api')

const store = {
  // function to write forms to client screen
  writeForm: function (formHTML) {
    $('#modal-form').html(formHTML)
  },
  // forms for above function
  addAnimalForm: `<form id="add-animal" class="form">
    <h2>Add Animal</h2>
    <input name="animal[name]" type="name" placeholder="Name">
    <input name="animal[type]" type="type" placeholder="Type">
    <input name="animal[age]" type="age" placeholder="Age">
    <input name="animal[size]" type="size" placeholder="Size">
    <input name="animal[foodType]" type="foodType" placeholder="Food">
    <input id="create-animal-button" type="submit" value="Create Animal">
  </form>`,
  changePasswordForm: `<form id="change-password" class="form">
    <h2>Change Password</h2>
    <label>Current Password</label>
    <input name="passwords[old]" type="password">
    <label>New Password</label>
    <input name="passwords[new]" type="password">
    <input id="change-password-submit" type="submit" value="Change Password">
    </form>`
}

module.exports = store
