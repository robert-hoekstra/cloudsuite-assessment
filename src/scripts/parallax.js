// Parallax effect
// Adapted from @ilonacodes article ->  https://link.medium.com/7fFiON6Q1X

// Change parallaxSpeed to higher or lower integer.
let parallaxSpeed = 10;
window.addEventListener("scroll", throttle(calculateOffset, parallaxSpeed));

// Define throttle speed of parallax by calculating current time against returned offset as Delay
function throttle(setTime, setDelay) {
  let time = Date.now();
  return function () {
    if (time + setDelay - Date.now() < 0) {
      setTime();
      time = Date.now();
    }
  };
}

// Calculate the scrolled position of the document and use it to calculate coords to invoke css traslateY property
function calculateOffset() {
  let scrolled = window.pageYOffset;
  let parallax = document.querySelector(".parallax");
  let coords = scrolled * 0.4 + "px";
  parallax.style.transform = "translateY(" + coords + ")";
}
