// JavaScript code here

const form = document.getElementById('signup-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (password!== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  console.log(`Username: ${username}`);
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
});