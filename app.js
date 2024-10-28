const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  effect: "flip",
  grabCursor: true,

  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const images = document.querySelectorAll("#photos .overlay");

images.forEach((image, index) => {
  image.addEventListener("click", () => {
    swiper.slideTo(index);
    updateImageOpacity(index);
  });
});

function updateImageOpacity(activeIndex) {
  images.forEach((image, index) => {
    image.style.opacity = index === activeIndex ? "1" : "0.3";
  });
}
