import setAttributes from "./helper/setAttributes";
const Menu = () => {
  const heading = document.createElement("h1");
  heading.textContent = "Menu!";

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.";

  const menuContent = document.createElement("div");
  setAttributes(menuContent, { id: "menu-content", class: "content" });
  menuContent.appendChild(heading);
  menuContent.appendChild(paragraph);

  return menuContent;
};

export default Menu;
