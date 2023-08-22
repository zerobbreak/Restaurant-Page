import './style.css';
import Home from "./Home";
import Menu from "./Menu";
import Contact from "./Contact";

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("restaurant-name");
  restaurantName.textContent = "Welcome to Flavors Delight Restaurant";

  header.appendChild(restaurantName);
  header.appendChild(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement("nav");

  const navItems = [
    { text: "Home", action: Home },
    { text: "Menu", action: Menu },
    { text: "Contact", action: Contact }
  ];

  navItems.forEach(item => {
    const button = document.createElement("button");
    button.classList.add("button-nav");
    button.textContent = item.text;

    button.addEventListener("click", () => {
      if (!button.classList.contains("active")) {
        setActiveButton(button);
        item.action();
      }
    });

    nav.appendChild(button);
  });

  return nav;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".button-nav");

  buttons.forEach(btn => {
    if (btn !== button) {
      btn.classList.remove("active");
    }
  });

  button.classList.add("active");
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}

function initializeWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMain());

  setActiveButton(document.querySelector(".button-nav"));
  Home();
}

initializeWebsite();
