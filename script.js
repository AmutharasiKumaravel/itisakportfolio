const words = ["Software Engineer", "UI/UX Designer", "Senior Executive"];
const typedText = document.getElementById("typed-text");
const cursor = document.querySelector(".cursor");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingDelay = 150;
const erasingDelay = 75;
const wordPause = 1500;

function type() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    typedText.textContent = currentWord.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(type, erasingDelay);
    }
  } else {
    typedText.textContent = currentWord.substring(0, charIndex++);
    if (charIndex > currentWord.length) {
      isDeleting = true;
      setTimeout(type, wordPause);
    } else {
      setTimeout(type, typingDelay);
    }
  }
}

// Cursor blinking effect (optional but nice)
setInterval(() => {
  cursor.classList.toggle("active");
}, 500);

// Start typing on DOM load
document.addEventListener("DOMContentLoaded", () => {
  if (words.length) {
    setTimeout(type, typingDelay);
  }
});

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.85 && rect.bottom > 0;
}

const scrollTopBtn = document.getElementById('scrollTopBtn');

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const homeSection = document.querySelector("#home");
    const homeHeight = homeSection.offsetHeight;

    if (window.scrollY > homeHeight - 100) {
      header.classList.remove("transparent");
      header.classList.add("solid");
    } else {
      header.classList.remove("solid");
      header.classList.add("transparent");
    }
  });

const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Simulate form send delay
  setTimeout(() => {
    successMessage.classList.remove('hidden');
    successMessage.classList.add('show');
    form.reset();

    setTimeout(() => {
      successMessage.classList.remove('show');
      successMessage.classList.add('hidden');
    }, 3000);
  }, 1000);
});



