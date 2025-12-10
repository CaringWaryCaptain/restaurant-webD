// helper — validate email format
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

document.getElementById('togglePassword').addEventListener('click', () => {
  const pwd = document.getElementById('password');
  const type = pwd.getAttribute('type') === 'password' ? 'text' : 'password';
  pwd.setAttribute('type', type);
  document.getElementById('togglePassword').textContent =
    type === 'password' ? '👁️' : '🙈';
});

document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');

  emailError.textContent = '';
  passwordError.textContent = '';

  let valid = true;

  const email = emailInput.value.trim();
  const pwd = passwordInput.value;

  if (!email) {
    emailError.textContent = 'Email is required';
    valid = false;
  } else if (!validateEmail(email)) {
    emailError.textContent = 'Please enter a valid email';
    valid = false;
  }

  if (!pwd) {
    passwordError.textContent = 'Password is required';
    valid = false;
  } else if (pwd.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters';
    valid = false;
  }

  if (!valid) {
    return;
  }

  // If valid — simulate successful login
  window.location.href = '../index.html';  // change path as needed
});
