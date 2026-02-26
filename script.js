// NAVIGATION CLICK
const navItems = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll(".content-section");

navItems.forEach(item => {
  item.addEventListener("click", () => {
    const target = item.dataset.section;

    sections.forEach(section => {
      section.style.display = section.id === target ? "block" : "none";
    });

    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  });
});

// EXPAND DESCRIPTION
const clickables = document.querySelectorAll(".clickable");

clickables.forEach(title => {
  title.addEventListener("click", () => {
    const desc = title.nextElementSibling;
    desc.classList.toggle("active");
  });
});
