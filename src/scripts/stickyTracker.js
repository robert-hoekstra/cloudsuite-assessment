// Helper function to observe if sticky element has a 'stuck' state. If so toggle 'is-pinned' class

const el = document.querySelector(".stickyTracker")
const observer = new IntersectionObserver( 
  ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
  { threshold: [1] }
);

observer.observe(el);