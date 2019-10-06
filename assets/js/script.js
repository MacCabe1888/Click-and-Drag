const slider = document.querySelector(".items");
let isDown = false;
let startX, scrollLeft;

function activate(e) {
  isDown = true;
  this.classList.add("active");
  startX = e.pageX - this.offsetLeft;
  scrollLeft = this.scrollLeft;
}

function drag(e) {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - this.offsetLeft;
  const Δx = x - startX;
  this.scrollLeft = scrollLeft - Δx;
}

function deactivate() {
  isDown = false;
  this.classList.remove("active");
}

slider.addEventListener("mousedown", activate);
slider.addEventListener("mousemove", drag);
slider.addEventListener("mouseup", deactivate);
slider.addEventListener("mouseleave", deactivate);
