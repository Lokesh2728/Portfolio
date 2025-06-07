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

// Creatinf star lighting
 const canvas = document.getElementById('effects'); 
const ctx = canvas.getContext('2d');

// Set canvas size to match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Array to store particle positions
const particles = [];

// Function to initialize particles
function initParticles() {
  particles.length = 0;
  for (let i = 0; i < 200; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      baseSize: Math.random() * 1.5 + 0.5,
      size: 0,
      speedX: (Math.random() - 0.5) * 2, // very slow drift
      speedY: (Math.random() - 0.5) * 2,
      phase: Math.random() * Math.PI * 2,
    });
  }
}

function drawParticles() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (const star of particles) {
    // Soft breathing effect
    const time = Date.now() * 0.001 + star.phase;
    const scale = 0.9 + Math.sin(time) * 0.1;

    // Draw glowing star
    ctx.beginPath();
    ctx.shadowColor = 'white';
    ctx.shadowBlur = 8;
    ctx.fillStyle = `rgba(255, 255, 255, 0.6)`;
    ctx.arc(star.x, star.y, star.baseSize * scale, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Update position for drifting
    star.x += star.speedX;
    star.y += star.speedY;

    // Reappear on opposite edge if out of bounds
    if (star.x < 0) star.x = canvas.width;
    if (star.x > canvas.width) star.x = 0;
    if (star.y < 0) star.y = canvas.height;
    if (star.y > canvas.height) star.y = 0;
  }

  requestAnimationFrame(drawParticles);
}

initParticles();
drawParticles();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});