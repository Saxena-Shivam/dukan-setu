document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Get Started modal functionality
  const modal = document.getElementById("get-started-modal");
  const btn = document.getElementById("get-started-btn");
  const span = document.getElementsByClassName("close")[0];
  const form = document.getElementById("get-started-form");

  btn.onclick = () => (modal.style.display = "block");
  span.onclick = () => (modal.style.display = "none");
  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  form.onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (name && email && phone) {
      alert(`Thank you, ${name}! We'll contact you soon.`);
      modal.style.display = "none";
      form.reset();
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Stats counter animation
  const stats = document.querySelectorAll(".stat-number");
  const statsSection = document.querySelector("#stats");
  let animated = false;

  const animateStats = () => {
    stats.forEach((stat) => {
      const target = Number.parseInt(stat.getAttribute("data-target"));
      const duration = 2000; // Animation duration in milliseconds
      const step = target / (duration / 16); // 60 FPS

      let current = 0;
      const timer = setInterval(() => {
        current += step;
        stat.textContent = Math.round(current);
        if (current >= target) {
          clearInterval(timer);
          stat.textContent = target;
        }
      }, 16);
    });
  };

  window.addEventListener("scroll", () => {
    if (
      !animated &&
      window.scrollY + window.innerHeight >= statsSection.offsetTop
    ) {
      animateStats();
      animated = true;
    }
  });

  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  mobileMenuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
});
