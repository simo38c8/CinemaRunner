let mobileMenubutton = document.querySelector("#mobile-menu-button");
let mobileMenuClosebutton = document.querySelector("#close-menu-button");

mobileMenubutton.addEventListener("click", openMobileMenu);
mobileMenuClosebutton.addEventListener("click", closeMobileMenu);

function openMobileMenu() {
  document.querySelector("#mobile-menu").style.display = "grid";
}

function closeMobileMenu() {
  document.querySelector("#mobile-menu").style.display = "none";
}
