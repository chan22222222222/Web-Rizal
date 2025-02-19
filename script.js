// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with fade/zoom classes
  const faders = document.querySelectorAll(
    ".fade-in-up, .fade-in-down, .fade-in-left, .fade-in-right, .zoom-img"
  );

  const appearOptions = { threshold: 0.1 };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});
