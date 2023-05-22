const goToLogin = async (event) => {
  event.preventDefault();
  document.location.replace("/login");
};

const loginButton = document.getElementById("login-nav");
if (loginButton) {
  loginButton.addEventListener("click", goToLogin);
}

const goToHomePage = async (event) => {
  event.preventDefault();
  document.location.replace("/");
};

document.getElementById("home-nav").addEventListener("click", goToHomePage);

const goToDashboard = async (event) => {
  event.preventDefault();
  document.location.replace("/dashboard");
};

document
  .getElementById("dashboard-nav")
  .addEventListener("click", goToDashboard);
