document.querySelectorAll(".nav-links span[data-section]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".content-section").forEach(sec => {
      sec.style.display = "none";
    });
    document.getElementById(btn.dataset.section).style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.querySelectorAll(".item-title").forEach(title => {
  title.addEventListener("click", () => {
    title.parentElement.classList.toggle("active");
  });
});

document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
