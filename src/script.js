// selecctors
const menu = document.querySelector(".hamburger");
const navlinks = document.querySelector(".navlinks");
const navlink = document.querySelectorAll(".navlinks a");

// event listeners
menu.addEventListener("click", () => {
  const isOpened = menu.getAttribute("aria-expanded");
  if (isOpened === "false") {
    menu.setAttribute("aria-expanded", "true");
    navlinks.style.top = "0";
  } else {
    menu.setAttribute("aria-expanded", "false");
    navlinks.style.top = "-100%";
  }
});

navlink.forEach((item) => {
  item.addEventListener("click", () => {
    menu.setAttribute("aria-expanded", "false");
    navlinks.style.top = "-100%";
  });
});

// functions
