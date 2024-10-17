export function showMenu() {
  const show = document.querySelector(".show-menu-icon");
  show?.classList.remove("block");
  show?.classList.add("hidden");

  const hide = document.querySelector(".hide-menu-icon");
  hide?.classList.remove("hidden");
  hide?.classList.add("block");

  const menu = document.getElementById("menu");
  menu?.classList.remove("hidden");
  menu?.classList.add("block");

  const body = document.body;
  body.classList.remove("overflow-y-auto");
  body.classList.add("overflow-hidden");
}

export function hideMenu() {
  const show = document.querySelector(".show-menu-icon");
  show?.classList.remove("hidden");
  show?.classList.add("block");

  const hide = document.querySelector(".hide-menu-icon");
  hide?.classList.remove("block");
  hide?.classList.add("hidden");

  const menu = document.getElementById("menu");
  menu?.classList.remove("block");
  menu?.classList.add("hidden");

  const body = document.body;
  body.classList.remove("overflow-hidden");
  body.classList.add("overflow-y-auto");
}

export function hideFooterInfo() {
  const footerInfo = document.getElementById("footer-info");
  footerInfo.parentElement?.classList.remove("md:h-largeScreen");
  footerInfo?.classList.remove("block");
  footerInfo?.classList.add("hidden");
}

export function showFooterInfo() {
  const footerInfo = document.getElementById("footer-info");
  footerInfo.parentElement?.classList.add("md:h-largeScreen");
  footerInfo?.classList.remove("hidden");
  footerInfo?.classList.add("block");
}

export function setActiveNavButton(index) {
  const navButtons = document.querySelectorAll(".nav-button");
  navButtons.forEach((button) => {
    button.classList.remove("active");
    button.classList.add("text-accent-3");
  });
  navButtons[index].classList.add("active");

  const menuButtons = document.querySelectorAll(".menu-button");
  menuButtons.forEach((button) => {
    button.classList.remove("active");
    button.classList.add("text-accent-3");
  });
  menuButtons[index].classList.add("active");

  localStorage.setItem("activeNavIndex", index);
}

export function highlightLastActiveButtons() {
  const lastActiveIndex = localStorage.getItem("activeNavIndex");
  if (lastActiveIndex !== null) {
    setActiveNavButton(parseInt(lastActiveIndex, 10));
  } else {
    setActiveNavButton(0);
  }
}
