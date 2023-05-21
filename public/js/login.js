const loginFormHandler = async (event) => {
  event.preventDefault();

  const userName = document.querySelector('#user-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (userName && password) {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ userName, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

const createNewAccount = async (event) => {
  event.preventDefault();
  document.location.replace('/signup');
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

  document
  .getElementById('sign-up-btn')
  .addEventListener('click' , createNewAccount);