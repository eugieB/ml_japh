const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitButton = document.querySelector('button[type="submit"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Please fill out all fields.');
  } else {
    alert(`Thank you for your message, ${name}! We will get back to you soon.`);
    form.reset();
  }
});
