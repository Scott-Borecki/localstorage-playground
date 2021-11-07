/* Use this area for pseudo - coding:

*/

// Query selectors
var contactNameInput = document.getElementById('name');
var contactEmailInput = document.getElementById('email');

var addContactButton = document.getElementById('register-btn');


// Event listeners
addContactButton.addEventListener('click', addContact);

// Functions
function addContact() {
  event.preventDefault();

  var newName = contactNameInput.value;
  var newEmail = contactEmailInput.value;
  var contactDetails = { "name": newName, "email": newEmail };
  var contactDetailsString = JSON.stringify(contactDetails);

  localStorage.setItem('contactDetails', contactDetailsString);
}
