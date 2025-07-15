const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#toc a");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    }
  });
}, {
  threshold: 0.6 // triggers when 60% of the section is visible
});

sections.forEach((section) => observer.observe(section));
