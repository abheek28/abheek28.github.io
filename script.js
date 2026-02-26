// Show sections
document.querySelectorAll(".nav-links span").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".section").forEach(sec => {
      sec.classList.remove("active");
    });

    const section = document.getElementById(btn.dataset.section);
    if (section) {
      section.classList.add("active");
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Expand descriptions
document.querySelectorAll(".title").forEach(item => {
  item.addEventListener("click", () => {
    item.parentElement.classList.toggle("active");
  });
});

// Theme toggle
const toggle = document.getElementById("theme-toggle");
const tooltip = document.querySelector(".tooltip");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    toggle.textContent = "☀️";
    tooltip.textContent = "Switch to Dark Mode";
  } else {
    toggle.textContent = "🌙";
    tooltip.textContent = "Switch to Light Mode";
  }
});
