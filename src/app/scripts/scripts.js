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
