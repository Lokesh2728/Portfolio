// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Back to Top Button
const backToTopBtn = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("active");
  } else {
    backToTopBtn.classList.remove("active");
  }
});

// Pebble Hover Animation (optional - light effect on hover)
document.querySelectorAll(".skill-item").forEach(pebble => {
  pebble.addEventListener("mouseenter", () => {
    pebble.style.boxShadow = "0 6px 15px rgba(108, 99, 255, 0.5)";
  });

  pebble.addEventListener("mouseleave", () => {
    pebble.style.boxShadow = "0 4px 10px rgba(108, 99, 255, 0.3)";
  });
});


// Time Line animations
 
 var typed = new Typed('#element', {
      strings: [' Python Full Stack Developer', ' Data Analyst'],
      typeSpeed: 50,
      smartBackspace: true,
      backSpeed: 50,
      loop: true,
    });

    const items = document.querySelectorAll(".timeline-item");

      const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // Optional: remove once shown
      }
    });
  }, {
    threshold: 0.2
  });

  items.forEach(item => {
    observer.observe(item);
  });


   document.addEventListener("DOMContentLoaded", () => {
    const timelineSection = document.querySelector("#timeline");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          timelineSection.classList.add("animate-line");
        }
      });
    }, {
      threshold: 0.3
    });

    observer.observe(timelineSection);
  });


  // Email-send-recive

   function sendEmail() {
            Email.send({
                Host: "smtp.gmail.com",
                Username: "username",
                Password: "password",
                To: 'recipient@example.com',
                From: "sender@example.com",
                Subject: "Test Email",
                Body: "This is a test email sent using SMTP.js"
            })
            .then(function (message) {
                alert("Mail sent successfully") // Alert message on successful email delivery
            });
        }

