function openImage(pic) {
  document.getElementById("imageBox").style.display = "flex";
  document.getElementById("fullImage").src = pic.src;
}

function closeImage() {
  document.getElementById("imageBox").style.display = "none";
}
function openImage(pic) {
  document.getElementById("imageBox").style.display = "flex";
  document.getElementById("fullImage").src = pic.src;
}

function closeImage() {
  document.getElementById("imageBox").style.display = "none";
}
let index = 0;

function showSlide(i) {
  const slides = document.getElementById("slides");
  const total = slides.children.length;

  if (i >= total) index = 0;
  else if (i < 0) index = total - 1;
  else index = i;

  slides.style.transform = "translateX(" + (-index * 100) + "%)";
}

function nextSlide() {
  showSlide(index + 1);
}

function prevSlide() {
  showSlide(index - 1);
}

/* AUTO SLIDE */
setInterval(() => {
  nextSlide();
}, 4000);show");
    }
const elements = document.querySelectorAll(".animate");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.classList.add("show");
    }
  });
});

let currentIndex = 0;
let images = document.querySelectorAll(".grid img");

function openImage(pic) {
  document.getElementById("imageBox").style.display = "flex";
  document.getElementById("fullImage").src = pic.src;
  currentIndex = Array.from(images).indexOf(pic);
}

function closeImage() {
  document.getElementById("imageBox").style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("fullImage").src = images[currentIndex].src;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("fullImage").src = images[currentIndex].src;
}
