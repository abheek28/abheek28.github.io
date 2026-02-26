document.querySelectorAll(".title").forEach(item => {
  item.addEventListener("click", () => {
    item.parentElement.classList.toggle("active");
  });
});

document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("light");
});
