// Get the login form
const form = document.querySelector('form');

// Add an event listener to the form
form.addEventListener('submit', (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the username and password inputs
  const username = document.querySelector('#username');
  const password = document.querySelector('#password');

  // Validate the inputs
  if (username.value === '' || password.value === '') {
    alert('Please enter a username and password');
    return;
  }

  // Send a request to the server to authenticate the user
  const url = '/login';
  const body = JSON.stringify({ username: username.value, password: password.value });
  const headers = { 'Content-Type': 'application/json' };

  fetch(url, { method: 'POST', body, headers })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // If authentication was successful, redirect to the dashboard
        window.location.href = '/dashboard';
      } else {
        // If authentication failed, display an error message
        alert('Invalid username or password');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});
