const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('navMobile');

if (hamburger && navMobile) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMobile.classList.toggle('active');
  });

  navMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMobile.classList.remove('active');
    });
  });

  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMobile.contains(e.target)) {
      hamburger.classList.remove('active');
      navMobile.classList.remove('active');
    }
  });
}

gsap.registerPlugin(SplitText);
gsap.ticker.lagSmoothing(0);
gsap.registerPlugin(ScrollTrigger);

let proyectos = document.querySelectorAll(".projectsSection");
proyectos.forEach((project) => {
  const infoText = project.querySelectorAll(".info-text");
  const projectHeight = project.offsetHeight;
  const tl = gsap.timeline({ paused: true });

  tl.fromTo(
    infoText,
    { y: -projectHeight / 3, opacity: 0, duration: 1 },
    { y: projectHeight / 3, opacity: 1 }
  );

  project.addEventListener("mouseenter", () => {
    gsap.delayedCall(0.3, () => tl.play());
  });

  project.addEventListener("mouseleave", () => {
    gsap.delayedCall(0.3, () => tl.reverse());
  });
});

const serviceCards = document.querySelectorAll('.serviceCard');
serviceCards.forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: index * 0.1
  });
});

const contactSection = document.querySelector('.contactSection');
if (contactSection) {
  gsap.from(contactSection, {
    scrollTrigger: {
      trigger: contactSection,
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 50,
    duration: 1
  });
}

const contactTitle = document.querySelector('.contactTitle');
const contactForm = document.querySelector('.contactForm');
const socialLinks = document.querySelectorAll('.socialLink');

if (contactTitle) {
  gsap.from(contactTitle, {
    scrollTrigger: { trigger: contactTitle, start: 'top 80%', toggleActions: 'play none none none' },
    opacity: 0, x: -50, duration: 0.8
  });
}

if (contactForm) {
  gsap.from(contactForm, {
    scrollTrigger: { trigger: contactForm, start: 'top 80%', toggleActions: 'play none none none' },
    opacity: 0, y: 30, duration: 0.8, delay: 0.2
  });
}

socialLinks.forEach((link, index) => {
  gsap.from(link, {
    scrollTrigger: { trigger: link, start: 'top 80%', toggleActions: 'play none none none' },
    opacity: 0, scale: 0.5, duration: 0.6, delay: index * 0.1
  });
});

const contactForm2 = document.querySelector('.contactForm form');

if (contactForm2) {
  contactForm2.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputs = this.querySelectorAll('.formInput');
    let isValid = true;

    inputs.forEach(input => {
      if (input.value.trim() === '') {
        isValid = false;
        input.style.borderColor = '#E74C3C';
      } else {
        input.style.borderColor = '#525252';
      }
    });

    if (!isValid) {
      gsap.to(contactForm2, { duration: 0.3, x: -10, yoyo: true, repeat: 2 });
      return;
    }

    const submitBtn = this.querySelector('.submitBtn');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;

    emailjs.send(
      'service_1pjaqdf',
      'template_2y9h4of',
      {
        name: this.querySelector('input[type="text"]').value,
        email: this.querySelector('input[type="email"]').value,
        message: this.querySelector('textarea').value
      }
    )
    .then(() => {
      submitBtn.textContent = '✓ ¡Mensaje enviado!';
      submitBtn.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';
      gsap.to(submitBtn, { duration: 0.5, scale: 1.05, yoyo: true, repeat: 1 });
      setTimeout(() => {
        contactForm2.reset();
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
        submitBtn.disabled = false;
      }, 2500);
    })
    .catch(() => {
      submitBtn.textContent = 'Error 😕';
      submitBtn.disabled = false;
    });
  });
}

const track = document.querySelector('.carousel-track');
if (track) {
  const speed = 2;
  let position = 0;

  window.addEventListener('load', () => {
    const imgs = Array.from(track.children);
    imgs.forEach(img => track.appendChild(img.cloneNode(true)));

    let trackWidth = 0;
    imgs.forEach(img => {
      const style = getComputedStyle(img);
      const margin = parseFloat(style.marginRight);
      trackWidth += img.offsetWidth + margin;
    });

    function animate() {
      position -= speed;
      if (position <= -trackWidth) position = 0;
      track.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    }

    animate();
  });
}