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

function scrollHeader() {
  let scrollpos = window.scrollY;

  window.addEventListener("scroll", function () {
    scrollpos = window.scrollY;

    console.log(scrollpos);
    if (scrollpos >= 700) {
      document.querySelector("#header-container").style.backgroundColor = "#8a2c2a";
    } else {
      document.querySelector("#header-container").style.backgroundColor = "transparent";
    }
  });
}
scrollHeader();
