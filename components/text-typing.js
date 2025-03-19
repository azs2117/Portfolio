document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("animated-text");
    const titles = ["Product Manager", "UX Designer", "Researcher", "Web Designer"];
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100; // Speed for typing
    let deletingSpeed = 50; // Speed for deleting
    let pauseAtEnd = 2000; // Pause when full word is typed
    let pauseBeforeNext = 500; // Pause before typing next title


    function typeEffect() {
        const currentTitle = titles[titleIndex];

        if (isDeleting) {
            textElement.textContent = currentTitle.substring(0, charIndex--);
        } else {
            textElement.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentTitle.length) {
            setTimeout(() => {
                isDeleting = true;
                typeEffect();
            }, pauseAtEnd); // Pause when fully typed
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            setTimeout(typeEffect, pauseBeforeNext); // Pause before typing next title
        } else {
            setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
        }
    }

    typeEffect(); // Start animation
});
