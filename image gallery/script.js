 const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    let currentIndex = 0;

    const images = Array.from(galleryItems).map(item => item.querySelector('img').src);

    galleryItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        currentIndex = index;
        openLightbox(images[index]);
      });
    });

    function openLightbox(src) {
      lightboxImg.src = src;
      lightbox.classList.add('active');
    }

    function closeLightbox() {
      lightbox.classList.remove('active');
    }

    function changeImage(step) {
      currentIndex = (currentIndex + step + images.length) % images.length;
      lightboxImg.src = images[currentIndex];
    }

    function filterImages(category) {
      galleryItems.forEach(item => {
        const match = item.getAttribute('data-category') === category || category === 'all';
        item.style.display = match ? 'block' : 'none';
      });
    }
