document.addEventListener("DOMContentLoaded", () => {
  const carouselImages = document.querySelector(".carousel-images");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;

  // Move to the previous image
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselImages.children.length - 1;
    updateCarousel();
  });

  // Move to the next image
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex < carouselImages.children.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
  });

  // Update the carousel position
  function updateCarousel() {
    const offset = -currentIndex * 100; // Calculate the offset for the current image
    carouselImages.style.transform = `translateX(${offset}%)`;
  }

  // Navbar toggle for mobile
  const navToggle = document.getElementById("nav-toggle");
  const navList = document.querySelector("#navbar ul");
  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      navList.classList.toggle("open");
    });
  }
});
