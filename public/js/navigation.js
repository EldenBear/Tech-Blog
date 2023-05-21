const loginFormHandler = async (event) => {
    event.preventDefault();
    document.location.replace('/login');
  };
  
  document
    .getElementById('login-nav')
    .addEventListener('click', loginFormHandler);
 
    const goToHomePage = async (event) => {
      event.preventDefault();
      document.location.replace('/');
    };
    
    document
      .getElementById('home-nav')
      .addEventListener('click', goToHomePage);
    