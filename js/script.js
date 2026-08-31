document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".site-navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const collapse = document.getElementById("mainNav");
  const year = document.getElementById("year");
  const contactForm = document.getElementById("contactForm");
  const toastEl = document.getElementById("formToast");

  if (year) year.textContent = new Date().getFullYear();

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992 && collapse.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(collapse).hide();
      }
    });
  });

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const toast = bootstrap.Toast.getOrCreateInstance(toastEl);
      toast.show();
      contactForm.reset();
    });
  }
});
