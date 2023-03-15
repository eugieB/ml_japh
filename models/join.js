const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // validation
  if (name === '') {
    alert('Please enter your name');
    return;
  }
  if (email === '') {
    alert('Please enter your email');
    return;
  }
  if (password === '') {
    alert('Please enter your password');
    return;
  }

  // submit form
  alert(`Thank you for joining us, ${name}!`);
  form.reset();
});
