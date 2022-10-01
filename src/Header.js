import setAttributes from "./helper/setAttributes";

const Header = () => {
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const homeTab = document.createElement("button");
  const menuTab = document.createElement("button");
  const contactTab = document.createElement("button");

  homeTab.textContent = "Home";
  menuTab.textContent = "Menu";
  contactTab.textContent = "Contact";
  setAttributes(header, { id: "header" });
  setAttributes(nav, { id: "nav" });
  setAttributes(homeTab, { id: "home-link", class: "link" });
  setAttributes(menuTab, { id: "menu-link", class: "link" });
  setAttributes(contactTab, { id: "contact-link", class: "link" });

  nav.appendChild(homeTab);
  nav.appendChild(menuTab);
  nav.appendChild(contactTab);

  header.appendChild(nav);

  return header;
};

export default Header;
