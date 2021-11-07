/* Use this area for pseudo - coding:

*/

// Query selectors
var contactNameInput = document.getElementById('name');
var contactEmailInput = document.getElementById('email');

var addContactButton = document.getElementById('register-btn');
var displayContactButton = document.getElementById('display-btn');

var displayArea = document.querySelector('.display-area');

// Event listeners
addContactButton.addEventListener('click', addContact);
displayContactButton.addEventListener('click', displayContact);

// Functions
function addContact() {
  event.preventDefault();

  var newName = contactNameInput.value;
  var newEmail = contactEmailInput.value;
  var contactDetails = { "name": newName, "email": newEmail };
  var contactDetailsString = JSON.stringify(contactDetails);

  localStorage.setItem('contactDetails', contactDetailsString);
}

function displayContact() {
  event.preventDefault();

  var contactDetails = localStorage.getItem('contactDetails');
  var contactDetailsParsed = JSON.parse(contactDetails);

  displayArea.innerHTML = `
    <section class="contact-details">
      <p id="contact-name">Name: ${contactDetailsParsed.name}</p>
      <p id="contact-email">Email: ${contactDetailsParsed.email}</p>
    </section>
  `
}
