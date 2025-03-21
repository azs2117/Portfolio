document.addEventListener("DOMContentLoaded", () => {
  fetch("components/navbar.html")
    .then(response => response.text())
    .then(data => {
      const navbar = document.getElementById("navbar-container");
      if (navbar) {
        navbar.innerHTML = data;
        window.scrollTo(0, 0);
      } else {
        console.error("navbar-container not found in the DOM.");
      }
    })
    .catch(error => console.error("Error loading the navbar:", error));

  // Scroll to top again on window load, just to be safe
  window.addEventListener("load", () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  });
});
