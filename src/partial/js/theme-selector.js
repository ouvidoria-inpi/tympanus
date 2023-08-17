const themeSelector = document.querySelector("#theme-selector");

const link = Array.from(document.querySelectorAll("link")).filter((link) => {
  return link.href.includes("/themes/");
})[0];

themeSelector.addEventListener("change", (event) => {
  const linkParts = link.href.split("/");
  console.log(linkParts);
  linkParts[linkParts.length - 1] = `${event.target.value}.css`;
  const newLink = linkParts.toString().replaceAll(",", "/");
  link.href = newLink;
});
