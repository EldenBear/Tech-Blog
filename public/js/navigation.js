const loginFormHandler = async (event) => {
    event.preventDefault();
    document.location.replace('/login');
  };
  
  document
    .getElementById('login-nav')
    .addEventListener('click', loginFormHandler);
  