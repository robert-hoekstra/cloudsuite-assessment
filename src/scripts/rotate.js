// Code to help with margin problem on hover when going from parent node to child node.

let rotateClass =  document.querySelector('.fa-angle-down');
let rotateContainer = document.querySelector('.rotate-container');


console.log(dropdownContainer, dropdownMenu)
rotateContainer.addEventListener('mouseenter', (e) => {
  rotateClass.classList.toggle('fa-rotate-180'); });
