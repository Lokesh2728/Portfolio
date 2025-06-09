// animation who  i am 
var typed = new Typed('#element', {
      strings: [' Web Developer',' Python Developer', ' Data Analyst','database administrator ',' Software Engineer'],
      typeSpeed: 50,
      smartBackspace: true,
      backSpeed: 50,
      loop: true,
    });

/*var greeting = new Typed("#greet", {
    strings: ["Hello", "नमस्ते","Hola","নমস্কার","Bonjour","નમસ્તે", "Ciao"]
,

    typeSpeed: 20,
    backSpeed: 25,
    backDelay: 1200,
    loop: true,
    showCursor: false,
  });*/






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

const section = document.getElementById("timeline-section");
const glow = document.getElementById("lineGlow");
const line = document.querySelector(".timeline-line");

window.addEventListener("scroll", () => {
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionBottom = sectionTop + sectionHeight;

  const viewportCenter = window.scrollY + window.innerHeight / 2;

  if (viewportCenter >= sectionTop && viewportCenter <= sectionBottom) {
    const progress = (viewportCenter - sectionTop) / sectionHeight;
    const heightPercent = Math.min(100, Math.max(0, progress * 100));
    glow.style.height = `${heightPercent}%`;

    // Add glow-start when glow has started
    if (heightPercent > 0) {
      line.classList.add("glow-start");
    } else {
      line.classList.remove("glow-start");
    }

    // Add glow-end when glow reaches end
    if (heightPercent >= 99.5) {
      line.classList.add("glow-end");
    } else {
      line.classList.remove("glow-end");
    }

  } else if (viewportCenter < sectionTop) {
    glow.style.height = "0%";
    line.classList.remove("glow-start", "glow-end");
  } else if (viewportCenter > sectionBottom) {
    glow.style.height = "100%";
    line.classList.add("glow-start", "glow-end");
  }
});

// Trigger scroll logic on page load
window.dispatchEvent(new Event("scroll"));


// skill section glow on mobile view

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('glow');
        } else {
          entry.target.classList.remove('glow');
        }
      });
    },
    {
      threshold: 0.8
    }
  );

  // Select and observe all skill-category blocks
  document.querySelectorAll('.skill-category').forEach(el => {
    observer.observe(el);
  });


  // Email-send-recive

 function sendmail() {
  event.preventDefault(); // Prevent form from reloading page

  let Params = {
    name: document.getElementById("name").value,
    mail: document.getElementById("e-mail").value,
    message: document.getElementById("message").value,
  };

  emailjs.send('service_y50s5vp', 'template_5s394rj', Params)
    .then(
      alert("Email has been sent!"))
    .catch(function(error) {
      console.error("Email sending failed: ", error);
      alert("Something went wrong. Please try again.");
    });
     document.querySelector(".contact-form").reset();
}
