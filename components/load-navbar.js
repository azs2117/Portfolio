fetch("components/navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar-container").innerHTML = data;
        window.scrollTo(0, 0); // Ensure page is scrolled to top after navbar loads
    })
    .catch(error => console.error("Error loading the navbar:", error));

window.addEventListener("load", () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 10); // Small delay ensures it runs after rendering
});

