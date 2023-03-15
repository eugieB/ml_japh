// Get the registration form
const form = document.querySelector('form');

// Add an event listener to the form
form.addEventListener('submit', (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the input fields
  const username = document.querySelector('#username');
  const password = document.querySelector('#password');
  const confirm_password = document.querySelector('#confirm_password');
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const phone = document.querySelector('#phone');
  const address = document.querySelector('#address');

  // Validate the inputs
  if (username.value.trim() === '') {
    alert('Please enter a username.');
    username.focus();
    return false;
  }

  if (password.value.trim() === '') {
    alert('Please enter a password.');
    password.focus();
    return false;
  }

  if (confirm_password.value.trim() === '') {
    alert('Please confirm your password.');
    confirm_password.focus();
    return false;
  }

  if (password.value.trim() !== confirm_password.value.trim()) {
    alert('Passwords do not match. Please try again.');
    password.focus();
    return false;
  }

  if (name.value.trim() === '') {
    alert('Please enter your full name.');
    name.focus();
    return false;
  }

  if (email.value.trim() === '') {
    alert('Please enter an email address.');
    email.focus();
    return false;
  }

  if (!validateEmail(email.value.trim())) {
    alert('Please enter a valid email address.');
    email.focus();
    return false;
  }

  if (phone.value.trim() === '') {
    alert('Please enter a phone number.');
    phone.focus();
    return false;
  }

  if (address.value.trim() === '') {
    alert('Please enter your address.');
    address.focus();
    return false;
  }

  // If all inputs are valid, submit the form
  form.submit();
});

// Function to validate email format
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
