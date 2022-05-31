// code to rotate dropdown icon on mouse enter
let rotateClass = document.querySelector(".fa-angle-down");
let rotateContainer = document.querySelector(".rotate-container");

console.log(dropdownContainer, dropdownMenu);
rotateContainer.addEventListener("mouseenter", (e) => {
  rotateClass.classList.toggle("fa-rotate-180");
});
