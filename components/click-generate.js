
document.addEventListener('DOMContentLoaded', function() {
  const images = [
    'assets/Keepsakes/yosemite-postcard.png',
    'assets/Keepsakes/sf-postcard.png',
    'assets/Creative/IMG_5055.JPG',
    'assets/Creative/IMG_2151.JPG',
    'assets/Keepsakes/spain-postcard.png',
    'assets/Keepsakes/paris-postcard.png',
    'assets/Keepsakes/napoli-postcard.png',
    'assets/Creative/IMG_5066.JPG',
    'assets/Creative/IMG_5509.JPG'
  ];

  document.addEventListener('click', function(event) {
    // Create new image element
    const img = document.createElement('img');
    img.src = images[Math.floor(Math.random() * images.length)];
    img.className = 'click-image';
    
    // Position the image at click location
    const rect = document.body.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    img.style.left = (x - 100) + 'px'; // Center the image on click point
    img.style.top = (y - 100) + 'px';
    
    // Add to document
    document.body.appendChild(img);
    
    // Optional: Remove images after some time to prevent too many accumulating
    setTimeout(() => {
      if (img.parentNode) {
        img.parentNode.removeChild(img);
      }
    }, 5000); // Remove after 5 seconds
  });
});
