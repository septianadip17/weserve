const swiper = new Swiper(".swiper", {
  loop: true,

  centerInsufficientSlides: true,
  slidesPerView: 4,
  spaceBetween: 40,
});

const el = document.querySelector("header.main-header");
const observer = new IntersectionObserver(
  ([e]) => {
    e.target.classList.toggle("scrolled", e.intersectionRatio < 1);
  },
  {
    threshold: [1],
  }
)
observer.observe(el);