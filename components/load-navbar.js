document.addEventListener("DOMContentLoaded", () => {
  // Check if we're on index.html
  const isIndexPage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';
  const navbarFile = isIndexPage ? "components/navbar-index.html" : "components/navbar.html";
  
  fetch(navbarFile)
    .then(response => response.text())
    .then(data => {
      const navbar = document.getElementById("navbar-container");
      if (navbar) {
        navbar.innerHTML = data;
        window.scrollTo(0, 0);

        // ✅ DOM elements are now loaded — set up toggle logic
        const toggleBtn = document.getElementById("toggle-menu");
        const dropdownMenu = document.getElementById("dropdown-menu");

        if (toggleBtn && dropdownMenu) {
          toggleBtn.addEventListener("click", () => {
            dropdownMenu.classList.toggle("active");
            toggleBtn.textContent = dropdownMenu.classList.contains("active") ? "Portfolio" : "Portfolio";
          });
        }

      } else {
        console.error("navbar-container not found in the DOM.");
      }
    })
    .catch(error => console.error("Error loading the navbar:", error));

  // Optional: scroll to top after load
  window.addEventListener("load", () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  });
});
