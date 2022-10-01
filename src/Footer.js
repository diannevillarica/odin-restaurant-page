import setAttributes from "./helper/setAttributes";

const Footer = () => {
  const footer = document.createElement("footer");
  footer.textContent = "footer";

  setAttributes(footer, { id: "footer" });

  return footer;
};

export default Footer;
