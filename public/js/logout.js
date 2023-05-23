 /*Logs user out when they click the logout button*/
const logout = async () => {
  const response = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  }).catch((err) => console.log(err));

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to log out");
  }
};

document.getElementById("logout-nav").addEventListener("click", logout);
