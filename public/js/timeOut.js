/*Timeout for being idle*/
const inactivityTime = () => {
    let time;
    window.addEventListener('load', resetTimer, true);
    let events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
      events.forEach(function (name) {
      document.addEventListener(name, resetTimer, true);
});
    const timeOut = async() => {
      const response = await fetch("/api/user/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }).catch((err) => console.log(err));
    
      if (response.ok) {
        document.location.replace("/login");
      } else {
        alert("Failed to log out");
      }
    }
    function resetTimer() {
      clearTimeout(time);
      time = setTimeout(timeOut, 600000)
    }
  };
  inactivityTime();