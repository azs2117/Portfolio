const pile = document.getElementById('imagePile');

pile.addEventListener('click', () => {
  const imgs = pile.querySelectorAll('.pile-img');
  const topImg = imgs[imgs.length - 1];

  // Animate out
  topImg.classList.add('animate-out');

  // After animation, move to back
  setTimeout(() => {
    topImg.classList.remove('animate-out');
    pile.insertBefore(topImg, imgs[0]); // Move to bottom
  }, 400); // Match the animation duration
});
