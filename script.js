// Smooth scroll + active nav link highlight
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = [...navLinks].map(link => document.querySelector(link.getAttribute("href")));
  
  // Toggle mobile nav
  const mobileToggle = document.querySelector(".mobile-menu-toggle");
  const navLinksContainer = document.querySelector(".nav-links");
  mobileToggle.addEventListener("click", () => {
    navLinksContainer.classList.toggle("show");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
      if (navLinksContainer.classList.contains("show")) {
        navLinksContainer.classList.remove("show");
      }
    });
  });

  // Highlight nav link when scrolling
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    sections.forEach((sec, idx) => {
      if (sec.offsetTop - 100 <= scrollY && sec.offsetTop + sec.offsetHeight > scrollY) {
        navLinks.forEach(a => a.classList.remove("active"));
        navLinks[idx].classList.add("active");
      }
    });

    // Back to top button
    const btn = document.getElementById("back-to-top");
    if (scrollY > 300) btn.style.display = "block";
    else btn.style.display = "none";
  });

  // Toggle project details
  document.querySelectorAll(".project-item .toggle-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const detail = btn.nextElementSibling;
      detail.style.display = detail.style.display === "block" ? "none" : "block";
    });
  });

  // Back to top scroll
  document.getElementById("back-to-top").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
