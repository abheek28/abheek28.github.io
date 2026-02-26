document.addEventListener("DOMContentLoaded", function () {

  const toggle = document.querySelector(".theme-toggle");

  if (toggle) {
    toggle.addEventListener("click", function () {
      document.body.classList.toggle("dark");
    });
  }

});
