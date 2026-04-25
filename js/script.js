// MENU
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}

// SLIDER
let index = 0;

function showSlide(i) {
  const slides = document.getElementById("slides");
  const total = slides.children.length;

  if (i >= total) index = 0;
  else if (i < 0) index = total - 1;
  else index = i;

  slides.style.transform = "translateX(-" + (index * 100) + "%)";
}

function nextSlide() {
  showSlide(index + 1);
}

function prevSlide() {
  showSlide(index - 1);
}

setInterval(nextSlide, 4000);
