// MENU FIX
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}

// POPUP
function openStudent(el) {
  document.getElementById("studentPopup").style.display = "flex";

  document.getElementById("popupName").innerText = el.dataset.name;
  document.getElementById("popupDream").innerText = el.dataset.dream;
  document.getElementById("popupStory").innerText = el.dataset.story;
  document.getElementById("popupImg").src = el.dataset.img;
}

function closePopup() {
  document.getElementById("studentPopup").style.display = "none";
}

// SCROLL ANIMATION
const elements = document.querySelectorAll(".animate");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;

  elements.forEach(el => {
    if (el.getBoundingClientRect().top < trigger) {
      el.classList.add("show");
    }
  });
});
