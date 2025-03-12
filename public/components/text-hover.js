document.addEventListener("DOMContentLoaded", function () {
    const hoverTexts = document.querySelectorAll(".hover-text");
    const hoverImage = document.getElementById("hoverImage");

    // Update image position relative to the mouse
    document.addEventListener("mousemove", function (event) {
        if (hoverImage.style.display === "block") {
            hoverImage.style.left = `${event.pageX + 15}px`; // Offset to avoid overlap
            hoverImage.style.top = `${event.pageY + 15}px`;
        }
    });

    hoverTexts.forEach(text => {
        // Show image on hover
        text.addEventListener("mouseover", function () {
            const imageSrc = this.getAttribute("data-image");
            hoverImage.src = imageSrc;
            hoverImage.style.display = "block";
            hoverImage.style.position = "absolute";
        });

        // Hide image when not hovering
        text.addEventListener("mouseout", function () {
            hoverImage.style.display = "none";
        });

        // Redirect on click
        text.addEventListener("click", function () {
            const redirectUrl = this.getAttribute("data-url");
            window.location.href = redirectUrl;
        });
    });
});
