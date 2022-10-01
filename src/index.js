import _ from "lodash";
import Header from "./Header";
import Home from "./Home";
import Menu from "./Menu";
import Contact from "./Contact";
import Footer from "./Footer";

import setAttributes from "./helper/setAttributes";

function Main() {
  const main = document.createElement("main");
  setAttributes(main, { id: "main" });
  const header = Header(); // navigation
  const home = Home(); // home content
  const menu = Menu(); // menu content
  const contact = Contact(); // contact content

  const homeTab = nav.childNodes[0];
  const menuTab = nav.childNodes[1];
  const contactTab = nav.childNodes[2];

  // console.log(homeTab);

  main.appendChild(home);
  let current = main.firstChild; // current tab

  homeTab.addEventListener("click", () => {
    current = main.firstChild;
    main.replaceChild(home, current);
  });

  menuTab.addEventListener("click", () => {
    current = main.firstChild;
    main.replaceChild(menu, current);
  });

  contactTab.addEventListener("click", () => {
    current = main.firstChild;
    main.replaceChild(contact, current);
  });

  return main;
}

document.querySelector("div").append(Header());
document.querySelector("div").append(Main());
document.querySelector("div").append(Footer());
