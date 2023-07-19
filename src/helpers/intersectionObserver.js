const block = document.querySelectorAll(".block");
let loadedCount = 0;

function lazyLoad(element) {
  element.style.display = "block";
}

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const element = entry.target;
      lazyLoad(element);
      observer.unobserve(element);
      loadedCount++;

      if (loadedCount >= 3) {
        observer.disconnect();
      }
    }
  });
}

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver(handleIntersection, options);

// Assuming you have 15 elements to be loaded
for (let i = 1; i <= 15; i++) {
  const element = document.createElement("div");
  element.textContent = "Element " + i;
  element.style.display = "none";
  block.appendChild(element);
  observer.observe(element);
}
