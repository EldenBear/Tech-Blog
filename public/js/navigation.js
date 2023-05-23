 /*Takes user to login screen*/
const goToLogin = async (event) => {
  event.preventDefault();
  document.location.replace("/login");
};

const loginButton = document.getElementById("login-nav");
if (loginButton) {
  loginButton.addEventListener("click", goToLogin);
}
 /*Takes user to home page*/
const goToHomePage = async (event) => {
  event.preventDefault();
  document.location.replace("/");
};

document.getElementById("home-nav").addEventListener("click", goToHomePage);
 /*Takes user to dashboard*/
const goToDashboard = async (event) => {
  event.preventDefault();
  document.location.replace("/dashboard");
};

document
  .getElementById("dashboard-nav")
  .addEventListener("click", goToDashboard);
