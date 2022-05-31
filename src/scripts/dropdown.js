// Code to help with margin problem on hover when going from parent node to child node.

let dropdownContainer = document.querySelector(".dropdown-container");
let dropdownMenu = document.querySelector(".dropdown-menu");

console.log(dropdownContainer, dropdownMenu);
dropdownContainer.addEventListener("click", (e) => {
  dropdownMenu.classList.toggle("visible");
  console.log("mousein");
});
