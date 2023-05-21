const createNewAccount = async (event) => {
  event.preventDefault();

  const userName = document.querySelector('#user-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (userName && password) {
    const response = await fetch('/api/user/createNewAccount', {
      method: 'POST',
      body: JSON.stringify({ userName, password }),
      headers: { 'Content-Type': 'application/json' },
    }).catch((err) => {
      console.log(err);
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

  document
  .getElementById('sign-up-btn')
  .addEventListener('click' , createNewAccount);