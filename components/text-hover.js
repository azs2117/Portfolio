document.addEventListener("DOMContentLoaded", function () {
    const hoverTexts = document.querySelectorAll(".hover-text");
    const hoverImage = document.getElementById("hoverImage");

    document.addEventListener("mousemove", function (event) {
        if (hoverImage.style.display === "block") {
            const imageWidth = hoverImage.offsetWidth;
            const imageHeight = hoverImage.offsetHeight;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            let posX = event.pageX + 15; // Default position (right of cursor)
            let posY = event.pageY + 15; // Default position (below cursor)

            // Adjust if the image extends past the right edge
            if (posX + imageWidth > windowWidth) {
                posX = event.pageX - imageWidth - 15; // Move to the left
            }

            // Adjust if the image extends past the bottom edge
            if (posY + imageHeight > windowHeight) {
                posY = event.pageY - imageHeight - 15; // Move above cursor
            }

            // Apply calculated position
            hoverImage.style.left = `${posX}px`;
            hoverImage.style.top = `${posY}px`;
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