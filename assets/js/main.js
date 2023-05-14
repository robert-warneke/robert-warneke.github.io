const toggleMode = document.getElementById('mode-toggle');
const body = document.body;
const hamburgerButton = document.getElementById("hamburger");
const hamburger = document.querySelector("#hamburger");
const menuContainer = document.querySelector(".menu-container");


// check if mode exists in localStorage
const currentMode = localStorage.getItem('mode');
if (currentMode === 'dark') {
  body.classList.add('dark-mode-active');
}

toggleMode.addEventListener('click', () => {
  body.classList.toggle('dark-mode-active');
  
  // store current mode in localStorage
  if (body.classList.contains('dark-mode-active')) {
    localStorage.setItem('mode', 'dark');
  } else {
    localStorage.setItem('mode', 'light');
  }
});

// menu toggle //
hamburgerButton.addEventListener("click", () => {
  hamburger.classList.toggle("menu-active");
  menuContainer.classList.toggle("show");
});

menuContainer.addEventListener("transitionend", () => {
  if (!menuContainer.classList.contains("show")) {
    hamburger.classList.remove("menu-active");
  }
});
