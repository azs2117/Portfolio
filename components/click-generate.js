
document.addEventListener('DOMContentLoaded', function() {
  const imagePaths = [
    'assets/Keepsakes/yosemite-postcard.png',
      'assets/Creative/IMG_1946.JPG',
    'assets/Keepsakes/sf-postcard.png',
      'assets/Apps/ARound_mobile.png',
    'assets/Creative/IMG_2151.JPG',
    'assets/Keepsakes/spain-postcard.png',
      'assets/Creative/thesis_thumbnail.png',
      'assets/Apps/legenda_mobile.png',
    'assets/Keepsakes/napoli-postcard.png',
      'assets/Apps/legenda_tile.png',
    'assets/Creative/IMG_5066.JPG',
      'assets/Apps/ARound_tile.png',
      'assets/Creative/IMG_5066.JPG',
      'assets/Bonafide/SMI_tile.png',
      'assets/Keepsakes/paris-postcard.png',
    'assets/Creative/IMG_5509.JPG'
  ];

  // Preload images for faster display
  const preloadedImages = [];
  imagePaths.forEach(path => {
    const img = new Image();
    img.src = path;
    preloadedImages.push(img);
  });

  // Throttle click events to prevent performance issues
  let lastClickTime = 0;
  const throttleDelay = 100; // milliseconds

  document.addEventListener('click', function(event) {
    const now = Date.now();
    if (now - lastClickTime < throttleDelay) return;
    lastClickTime = now;

    // Create new image element
    const img = document.createElement('img');
    img.src = imagePaths[Math.floor(Math.random() * imagePaths.length)];
    img.className = 'click-image';
    
    // Position the image at click location
    const x = event.clientX;
    const y = event.clientY;
    
    img.style.left = (x - 100) + 'px';
    img.style.top = (y - 100) + 'px';
    
    // Add to document
    document.body.appendChild(img);
  });
});
