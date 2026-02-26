// DARK MODE TOGGLE
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// ACCORDION ANIMATION
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const item = header.parentElement;

    item.classList.toggle("active");

    accordionHeaders.forEach(otherHeader => {
      if (otherHeader !== header) {
        otherHeader.parentElement.classList.remove("active");
      }
    });
  });
});
