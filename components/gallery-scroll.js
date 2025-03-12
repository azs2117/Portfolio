document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".asset-gallery");

    window.addEventListener("scroll", () => {
        let scrollPosition = window.scrollY;
        gallery.scrollLeft = scrollPosition * 0.1; // Adjust scroll speed multiplier
    });
});
